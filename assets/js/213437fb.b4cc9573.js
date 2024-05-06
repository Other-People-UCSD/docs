"use strict";(self.webpackChunkopm_documentation=self.webpackChunkopm_documentation||[]).push([[7721],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},h=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,h=i(e,["components","mdxType","originalType","parentName"]),c=u(n),m=r,d=c["".concat(l,".").concat(m)]||c[m]||p[m]||s;return n?a.createElement(d,o(o({ref:t},h),{},{components:n})):a.createElement(d,o({ref:t},h))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:r,o[1]=i;for(var u=2;u<s;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6305:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const s={title:"Lighthouse Workflow (GH Actions)",sidebar_position:101,contributor:"Kevin Jang"},o=void 0,i={unversionedId:"calla-lily/lighthouse",id:"calla-lily/lighthouse",title:"Lighthouse Workflow (GH Actions)",description:"We use Google Lighthouse to test performance, accessibility, and SEO metrics on the Other People website. It is tedious to manually run lighthouse reports thrugh DevOps, so instead we have created a Google Lighthouse workflow that automatically runs lighthouse reports over all public pages and returns the results as GitHub Action artifacts. Sometimes the audit reports will output a low performance score through this audit due to the action runner's default hardware configuration.",source:"@site/docs/calla-lily/101-lighthouse.md",sourceDirName:"calla-lily",slug:"/calla-lily/lighthouse",permalink:"/docs/calla-lily/lighthouse",draft:!1,editUrl:"https://github.com/Other-People-UCSD/docs/tree/main/docs/calla-lily/101-lighthouse.md",tags:[],version:"current",sidebarPosition:101,frontMatter:{title:"Lighthouse Workflow (GH Actions)",sidebar_position:101,contributor:"Kevin Jang"},sidebar:"docsSidebar",previous:{title:"SEO, Sitemap.xml, Robots.txt",permalink:"/docs/calla-lily/seo-sitemap-robots"},next:{title:"Pink-Currents",permalink:"/docs/category/pink-currents"}},l={},u=[{value:"When Is the Action Run?",id:"when-is-the-action-run",level:3},{value:"What Are the Inputs?",id:"what-are-the-inputs",level:3},{value:"How to Run Lighthouse in Batches?",id:"how-to-run-lighthouse-in-batches",level:3},{value:"Reformatting the Summary",id:"reformatting-the-summary",level:3}],h={toc:u},c="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"We use Google Lighthouse to test performance, accessibility, and SEO metrics on the Other People website. It is tedious to manually run lighthouse reports thrugh DevOps, so instead we have created a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Other-People-UCSD/Calla-Lily/blob/main/.github/workflows/lighthouse.yml"},"Google Lighthouse workflow")," that automatically runs lighthouse reports over all public pages and returns the results as GitHub Action artifacts. Sometimes the audit reports will output a low performance score through this audit due to the action runner's default hardware configuration. "),(0,r.kt)("h3",{id:"when-is-the-action-run"},"When Is the Action Run?"),(0,r.kt)("p",null,"The workflow is run on pull requests to the main branch. This can be changed to ",(0,r.kt)("inlineCode",{parentName:"p"},"on: [push]")," if you need to test changes to the workflow. However, running the workflow over all pages on the website takes at least thirty minutes as each page takes around 20 seconds to produce one lighthouse report."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"on:\n  pull_request:\n    branches:\n      - main\n      - lighthouse\n")),(0,r.kt)("h3",{id:"what-are-the-inputs"},"What Are the Inputs?"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"- name: Generate URLs\n  id: urls\n  uses: actions/github-script@v6\n  with:\n    github-token: ${{ secrets.GITHUB_TOKEN }}\n    script: |\n    const res = await fetch(`https://www.otherpeoplesd.com/api/site-urls.json`, {\n      headers: {\n      'Content-Type': 'application/json'\n      }\n    });\n    const data = await res.json();\n    const urlListString = data.urls.join('\\n')\n    core.setOutput('urls', urlListString)\n")),(0,r.kt)("h3",{id:"how-to-run-lighthouse-in-batches"},"How to Run Lighthouse in Batches?"),(0,r.kt)("p",null,"This step uses the official Github Action for letting the runner perform JavaScript instead of bash. The array of public URLs are fetched through the API endpoint as specified in the ",(0,r.kt)("a",{parentName:"p",href:"docs/calla-lily/api"}," documentation"),". Then the array is converted into a string where each URL is separated by newlines. This is saved as an output variable accessible as ",(0,r.kt)("inlineCode",{parentName:"p"},"${{ steps.urls.outputs.urls }}"),". "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"- name: Audit URLs using Lighthouse\n  uses: treosh/lighthouse-ci-action@v10\n  id: lighthouse_audit\n  with:\n    urls: ${{ steps.urls.outputs.urls }}\n    uploadArtifacts: true # save results as an action artifacts\n    temporaryPublicStorage: true # upload lighthouse report to the temporary storage\n")),(0,r.kt)("p",null,"The reason why the urls are saved in this format is because the next step takes in a string as input with newlines separating the URLs."),(0,r.kt)("p",null,"If specific URLs need to be tested, the Lighthouse CI Action can take in specific urls like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"with:\n  urls: |\n    https://www.otherpeoplesd.com \n    https://www.otherpeoplesd.com/about\n")),(0,r.kt)("h3",{id:"reformatting-the-summary"},"Reformatting the Summary"),(0,r.kt)("p",null,"This script will get the manifest output from the Lighthouse CI Action. The manifest is just a short summary of what the page metrics are and we can reformat it to extract only these metrics while ignoring the other information (",(0,r.kt)("a",{parentName:"p",href:"https://github.com/GoogleChrome/lighthouse-ci/blob/main/docs/configuration.md#outputdir"},"see official Lighthouse CI docs"),")."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"- name: Get Summary From Lighthouse Manifest\n  id: manifest_summary\n  uses: actions/github-script@v6\n  with:\n    github-token: ${{ secrets.GITHUB_TOKEN }}\n    script: |\n      const manifest = ${{ steps.lighthouse_audit.outputs.manifest }}\n      const summaries = manifest.map((item) => {\n        return {url: item.url, summary: item.summary}\n      });\n      const escapedJSON = JSON.stringify(summaries).replace(/\"/g, '\\\\\"')\n      core.setOutput('manifest', escapedJSON);\n")),(0,r.kt)("p",null,'Notice that the JSON object is converted into a string and every double-quote (") is prefixed with a backslash (\\"). This is important for the next command.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},'- run: echo "${{ steps.manifest_summary.outputs.manifest }}" > manifest.json\n')),(0,r.kt)("p",null,"This will write the manifest summary into the ",(0,r.kt)("inlineCode",{parentName:"p"},"manifest.json")," file. However, the variable must be surrounded by double quotes so that it is treated as a string and not a command to run. Because it is wrapped with double quotes, all the double quotes inside the summary had to be escaped with the backslashes. Finally, we save the ",(0,r.kt)("inlineCode",{parentName:"p"},"manifest.json")," as an artifact."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"- name: Upload Manifest Summary Artifact\n  uses: actions/upload-artifact@v3\n  with:\n    name: lighthouse-manifest\n    path: manifest.json\n")),(0,r.kt)("p",null,"A JSON to CSV can prettify the summary outputs and then we can analyze the results to see which pages need more optimizations such as compressing the images for a smaller network performance or fixing accessibility issues."))}p.isMDXComponent=!0}}]);