"use strict";(self.webpackChunkopm_documentation=self.webpackChunkopm_documentation||[]).push([[269],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(h,a(a({ref:t},p),{},{components:n})):r.createElement(h,a({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5126:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const i={},a="Copyright Protections",s={unversionedId:"pink-currents/copyright-protections",id:"pink-currents/copyright-protections",title:"Copyright Protections",description:"* Status: Approved",source:"@site/docs/pink-currents/copyright-protections.md",sourceDirName:"pink-currents",slug:"/pink-currents/copyright-protections",permalink:"/docs/pink-currents/copyright-protections",draft:!1,editUrl:"https://github.com/Other-People-UCSD/docs/tree/main/docs/pink-currents/copyright-protections.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Changing Permalinks",permalink:"/docs/pink-currents/change-permalinks"},next:{title:"Organizing Posts and Uploads",permalink:"/docs/pink-currents/file-organization"}},l={},c=[{value:"Context and Problem Statement",id:"context-and-problem-statement",level:2},{value:"Decision Drivers",id:"decision-drivers",level:2},{value:"Considered Options",id:"considered-options",level:2},{value:"Decision Outcome",id:"decision-outcome",level:2},{value:"Positive Consequences",id:"positive-consequences",level:3},{value:"Negative Consequences",id:"negative-consequences",level:3},{value:"Known Workarounds",id:"known-workarounds",level:2},{value:"Further Improvements",id:"further-improvements",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"copyright-protections"},"Copyright Protections"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Status: Approved"),(0,o.kt)("li",{parentName:"ul"},"Author: Kevin Jang"),(0,o.kt)("li",{parentName:"ul"},"Deciders: Directors"),(0,o.kt)("li",{parentName:"ul"},"Date: February 3, 2023")),(0,o.kt)("h2",{id:"context-and-problem-statement"},"Context and Problem Statement"),(0,o.kt)("p",null,"In the past, we have found some of our works stolen or traced without our permission. A notable incident is the cover for Collection No. 3 Self-Identity where it was traced to the exact lines and sold commercially on Redbubble. The artist for the piece was unaware of this and caused the admin board to consider copyright protection over what we publish digitally. "),(0,o.kt)("p",null,"It is understood that we cannot fully prevent a user from copying an image or text because of several workarounds. However, we should prevent most forms of copying that most visitors will try. "),(0,o.kt)("h2",{id:"decision-drivers"},"Decision Drivers"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Security: Will protections make a significant impact on preventing users from copying published work?"),(0,o.kt)("li",{parentName:"ul"},"Accessibility: Will screen readers continue to read the content of published works with added copy-protections?")),(0,o.kt)("h2",{id:"considered-options"},"Considered Options"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Copying by clipboard"),(0,o.kt)("li",{parentName:"ol"},"Copying by dragging"),(0,o.kt)("li",{parentName:"ol"},"Copying by context menu")),(0,o.kt)("h2",{id:"decision-outcome"},"Decision Outcome"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Implementation of these options using double-redundancy encoded in JavaScript. "),(0,o.kt)("li",{parentName:"ul"},"Added a feature to allow users to copy a single section by using a specific keyword in the work. (Resolves negative consequence #1)")),(0,o.kt)("h3",{id:"positive-consequences"},"Positive Consequences"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Users cannot copy text to the clipboard.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"If the start of the selection falls inside the event listener, the text cannot be copied even if the user is able to open the context menu."))),(0,o.kt)("li",{parentName:"ul"},"Users cannot save images nor open them in a new tab.")),(0,o.kt)("h3",{id:"negative-consequences"},"Negative Consequences"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"For specific digital works where users are encouraged to interact with the page, the denial of copying in an editable field may confuse them because they weren't intentionally trying to steal work."),(0,o.kt)("li",{parentName:"ul"},"Assistive tools that add options to the context menu will not be accessible because opening the context menu will be denied.")),(0,o.kt)("h2",{id:"known-workarounds"},"Known Workarounds"),(0,o.kt)("p",null,"[REDACTED ON PUBLIC ADR]"),(0,o.kt)("h2",{id:"further-improvements"},"Further Improvements"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Check with UC San Diego's office for copyright if the website is protected under their copyright. If not, the ideal option is to register for copyright ourselves when we have the budget for it.")))}d.isMDXComponent=!0}}]);