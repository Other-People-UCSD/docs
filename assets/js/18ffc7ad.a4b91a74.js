"use strict";(self.webpackChunkopm_documentation=self.webpackChunkopm_documentation||[]).push([[9065],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(r),f=a,m=u["".concat(p,".").concat(f)]||u[f]||d[f]||o;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},4326:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_label:"Zine Viewer"},i="PDF to Embeddable Double-Spread Magazine Viewer",l={unversionedId:"projects/zine-viewer",id:"projects/zine-viewer",title:"PDF to Embeddable Double-Spread Magazine Viewer",description:"https://flipbook-git-main-other-people.vercel.app/",source:"@site/docs/projects/zine-viewer.md",sourceDirName:"projects",slug:"/projects/zine-viewer",permalink:"/docs/projects/zine-viewer",draft:!1,editUrl:"https://github.com/Other-People-UCSD/docs/tree/main/docs/projects/zine-viewer.md",tags:[],version:"current",frontMatter:{sidebar_label:"Zine Viewer"},sidebar:"docsSidebar",previous:{title:"Typewriter Workflow",permalink:"/docs/projects/typewriter-workflow"},next:{title:"Data Science Using the Post API",permalink:"/docs/data-science"}},p={},s=[{value:"Current Features",id:"current-features",level:2},{value:"Unsupported Features",id:"unsupported-features",level:2}],c={toc:s},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"pdf-to-embeddable-double-spread-magazine-viewer"},"PDF to Embeddable Double-Spread Magazine Viewer"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://flipbook-git-main-other-people.vercel.app/"},"https://flipbook-git-main-other-people.vercel.app/")),(0,a.kt)("p",null,"The zine viewer utilizes the ",(0,a.kt)("inlineCode",{parentName:"p"},"react-pdf")," package that uses Mozilla's ",(0,a.kt)("inlineCode",{parentName:"p"},"pdf.js")," vanilla JS software to render pdfs to the page. This project provides a React-based UI to view pdfs in a digital magazine format. "),(0,a.kt)("h2",{id:"current-features"},"Current Features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Changing page",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Can be improved to only render once the slider is released"))),(0,a.kt)("li",{parentName:"ul"},"Rough, rerendering zooming"),(0,a.kt)("li",{parentName:"ul"},"Moveable viewer such that specific parts of a zoomed page can be read clearly "),(0,a.kt)("li",{parentName:"ul"},"Embeddable on other domains with full functionality as long as allow=fullscreen is enabled")),(0,a.kt)("h2",{id:"unsupported-features"},"Unsupported Features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Viewing pages as single pages instead of a spread"),(0,a.kt)("li",{parentName:"ul"},"Changing the viewing option to other pdf files")))}d.isMDXComponent=!0}}]);