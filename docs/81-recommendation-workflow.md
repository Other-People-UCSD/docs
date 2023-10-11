---
title: Recommendation Workflow (GH Actions)
sidebar_label: Recommendation Workflow
sidebar_position: 82
---

Website producers are not expected to perform any computational actions as they do not need much technical experience for their role. However, the recommendation model should be updated whenever new posts are published to the website. It would be too much technical work to run the python script when there are many things a non-developer would have to install on their device, as well as cloning the repo for the images used in the model's input. Therefore, improving our CI/CD pipeline to support this recommendation script as an automation would be a significant asset to the organization.

[Recommendation workflow](https://github.com/Other-People-UCSD/Calla-Lily/blob/main/.github/workflows/recommender.yml)

[Recommendation Repository](https://github.com/Other-People-UCSD/recommender)

### When Is the Action Run?

The workflow is run whenever a file in the `_posts` directory is modified on any branch or whenever there is a pull request that includes modifications to files in the `_posts` directory. This workflow takes around five minutes to run with the majority of the time spent querying the Other People API as well as reading images.

```yml
on:
  push:
    paths:
      - '_posts/**'
  workflow_dispatch:
```

### What Are the Inputs?

The recommendation model has its own inputs, which are the API endpoints for posts as well as the artwork in the `Calla-Lily/public/images` directory. Therefore, it is necessary to access the `Calla-Lily` repository along with the repository where the recommendation script is located. This can be done by checking out both repostories into the same environment.

```yml
- name: Checkout Calla-Lily repo
  uses: actions/checkout@v4
  with:
    path: Calla-Lily

- name: Checkout Recommendation repo
  uses: actions/checkout@v4
  with:
    repository: Other-People-UCSD/recommender
    path: recommender
```
### Dependencies

Running a python script in the Github Action Environment requires setting up a python environment. In addition to installing python, the recommendation script uses imported modules that do not come with the default environment installation. These dependencies are written in the `requirements.txt` and are installed into the environment using the command `pip install -r recommender/requirements.txt`.

To update the `requirements.txt` file, the optimal way that avoids irrelevant modules on your local device is to activate a python virtual environment and then install the current requirements file, upgrade it, then install any new modules used in the recommendation script. Replace the `requirements.txt` file with the new version afterwards.


```python
# In the recommender repository
# Install virtual environment on your device
python3 -m pip install --user virtualenv

# Create the virtual environment and point its source
python3 -m venv env
source env/bin/activate

# For every module not found,
pip install [moduleName]
# Additionally, you may find uninstalled modules by repeatedly running the script 
# Until it does not have module not found errors

# After all modules are installed
pip freeze > requirements.txt
```

### How is Output Saved?

The recommendation script shall write new recommendation JSON files as output. These files will be located at the root directory of the worker instead of the `recommender` directory. This occurs because the python environment was set up in the root directory and the script was run from the root, making the output feed to this location.

To save this output, we must push the output file to the `Calla-Lily` repository. This is done by copying the output file from the root directory and sending it to its location in the `Calla-Lily/data/` folder. Then to access the git history of the repository, the worker must change into the repository, stage the change, commit, and push.

The results of the recommendations are also saved as a dated artifact to provide a sense of what changed over time as new works get published to the website. 

### How to Handle Errors?

Errors regarding the result of this workflow are usually due to issues within the recommendation system itself.

Unit tests on the python script should be written to ensure that the recommendation continues to work on new published work. This published work may have different formatting styles but the parsers should handle most markdown to HTML. 

### What Happens When Recommendations Do Not Change?

Consider this scenario: a small fix is made to an existing post such as a typo. This update will trigger the recommendation workflow and there is a very high chance that recommendations will stay the same. This will cause an error in the workflow at the step where the recommendation output is pushed to the `Calla-Lily` repository. There is no new output file to be added to git as it is the same as the old recommendations. This causes a false negative error with creating a commit and pushing as there is no new file to version control. Therefore, the workflow "fails" when it really hasn't. It is bad to have this false negative as the workflow should only produce errors if there is something significantly fatal at play.

To resolve this, setting the `continue-on-error` flag to true will allow the step the continue and output the recommendation artifact. This will show that the new recommendations are the same as before while avoiding this false negative error. 