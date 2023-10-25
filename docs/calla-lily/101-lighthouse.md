---
title: Lighthouse Workflow (GH Actions)
sidebar_position: 101
contributor: Kevin Jang
---

We use Google Lighthouse to test performance, accessibility, and SEO metrics on the Other People website. It is tedious to manually run lighthouse reports thrugh DevOps, so instead we have created a [Google Lighthouse workflow](https://github.com/Other-People-UCSD/Calla-Lily/blob/main/.github/workflows/lighthouse.yml) that automatically runs lighthouse reports over all public pages and returns the results as GitHub Action artifacts.

### When Is the Action Run?

The workflow is run on pull requests to the main branch. This can be changed to `on: [push]` if you need to test changes to the workflow. However, running the workflow over all pages on the website takes at least thirty minutes as each page takes around 20 seconds to produce one lighthouse report.

```yml
on:
  pull_request:
    branches:
      - main
      - lighthouse
```

### What Are the Inputs?

```yml
- name: Generate URLs
  id: urls
  uses: actions/github-script@v6
  with:
    github-token: ${{ secrets.GITHUB_TOKEN }}
    script: |
    const res = await fetch(`https://www.otherpeoplesd.com/api/site-urls.json`, {
      headers: {
      'Content-Type': 'application/json'
      }
    });
    const data = await res.json();
    const urlListString = data.urls.join('\n')
    core.setOutput('urls', urlListString)
```

### How to Run Lighthouse in Batches?

This step uses the official Github Action for letting the runner perform JavaScript instead of bash. The array of public URLs are fetched through the API endpoint as specified in the [ documentation](docs/calla-lily/api). Then the array is converted into a string where each URL is separated by newlines. This is saved as an output variable accessible as `${{ steps.urls.outputs.urls }}`. 

```yml
- name: Audit URLs using Lighthouse
  uses: treosh/lighthouse-ci-action@v10
  id: lighthouse_audit
  with:
    urls: ${{ steps.urls.outputs.urls }}
    uploadArtifacts: true # save results as an action artifacts
    temporaryPublicStorage: true # upload lighthouse report to the temporary storage
```
The reason why the urls are saved in this format is because the next step takes in a string as input with newlines separating the URLs.

If specific URLs need to be tested, the Lighthouse CI Action can take in specific urls like this:
```yml
with:
  urls: |
    https://www.otherpeoplesd.com 
    https://www.otherpeoplesd.com/about
```

### Reformatting the Summary

This script will get the manifest output from the Lighthouse CI Action. The manifest is just a short summary of what the page metrics are and we can reformat it to extract only these metrics while ignoring the other information ([see official Lighthouse CI docs](https://github.com/GoogleChrome/lighthouse-ci/blob/main/docs/configuration.md#outputdir)).

```yml
- name: Get Summary From Lighthouse Manifest
  id: manifest_summary
  uses: actions/github-script@v6
  with:
    github-token: ${{ secrets.GITHUB_TOKEN }}
    script: |
      const manifest = ${{ steps.lighthouse_audit.outputs.manifest }}
      const summaries = manifest.map((item) => {
        return {url: item.url, summary: item.summary}
      });
      const escapedJSON = JSON.stringify(summaries).replace(/"/g, '\\"')
      core.setOutput('manifest', escapedJSON);
```

Notice that the JSON object is converted into a string and every double-quote (") is prefixed with a backslash (\"). This is important for the next command.

```yml
- run: echo "${{ steps.manifest_summary.outputs.manifest }}" > manifest.json
```

This will write the manifest summary into the `manifest.json` file. However, the variable must be surrounded by double quotes so that it is treated as a string and not a command to run. Because it is wrapped with double quotes, all the double quotes inside the summary had to be escaped with the backslashes. Finally, we save the `manifest.json` as an artifact.

```yml
- name: Upload Manifest Summary Artifact
  uses: actions/upload-artifact@v3
  with:
    name: lighthouse-manifest
    path: manifest.json
```

A JSON to CSV can prettify the summary outputs and then we can analyze the results to see which pages need more optimizations such as compressing the images for a smaller network performance or fixing accessibility issues.