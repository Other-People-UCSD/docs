"use strict";(self.webpackChunkopm_documentation=self.webpackChunkopm_documentation||[]).push([[5954],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(r),f=o,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||i;return r?n.createElement(m,a(a({ref:t},u),{},{components:r})):n.createElement(m,a({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},6711:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const i={},a="Organizing Posts and Uploads",l={unversionedId:"pink-currents/adr/file-organization",id:"pink-currents/adr/file-organization",title:"Organizing Posts and Uploads",description:"* Status: Completed",source:"@site/docs/pink-currents/adr/file-organization.md",sourceDirName:"pink-currents/adr",slug:"/pink-currents/adr/file-organization",permalink:"/docs/pink-currents/adr/file-organization",draft:!1,editUrl:"https://github.com/Other-People-UCSD/docs/tree/main/docs/pink-currents/adr/file-organization.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Copyright Protections",permalink:"/docs/pink-currents/adr/copyright-protections"},next:{title:"Adding Jekyll SEO Plugins",permalink:"/docs/pink-currents/adr/jekyll-seo-plugins"}},s={},c=[{value:"Context and Problem Statement",id:"context-and-problem-statement",level:2},{value:"Decision Drivers",id:"decision-drivers",level:2},{value:"Solution",id:"solution",level:2},{value:"Unresolved Issues",id:"unresolved-issues",level:2}],u={toc:c},d="wrapper";function p(e){let{components:t,...r}=e;return(0,o.kt)(d,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"organizing-posts-and-uploads"},"Organizing Posts and Uploads"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Status: Completed"),(0,o.kt)("li",{parentName:"ul"},"Author: Kevin Jang"),(0,o.kt)("li",{parentName:"ul"},"Deciders: Kevin Jang"),(0,o.kt)("li",{parentName:"ul"},"Date: February 9, 2023")),(0,o.kt)("h2",{id:"context-and-problem-statement"},"Context and Problem Statement"),(0,o.kt)("p",null,"There are around 130 posts inside _posts top level directory, making it difficult to access adjacent folders because they all exist in one dropdown seection. It would be better to keep posts organized while also retaining the architecture structure of the permalinks. "),(0,o.kt)("h2",{id:"decision-drivers"},"Decision Drivers"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"UX: Developers struggle to find the adequate files to work on when there are too many files in one direrctory.")),(0,o.kt)("h2",{id:"solution"},"Solution"),(0,o.kt)("p",null,"Separate posts and media files by their respective Collection number. For posts that are not part of a collection, put them in year-based folders of when they got published. Illustrations that were made for older posts will be put into the year that the post got published despite being created in another year. The idea for this is that a future design may utilize the category front matter and file year to automatically create better paths to files instead of having to manually change each URL when performing file changes like this commit's changes."),(0,o.kt)("h2",{id:"unresolved-issues"},"Unresolved Issues"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The forestry.io configuration needs to be checked so that non-developers can access the new folders as well as uploading media to the correct place, otherwise a website developer is still needed to maintain codebase organization.")))}p.isMDXComponent=!0}}]);