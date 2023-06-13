"use strict";(self.webpackChunkopm_documentation=self.webpackChunkopm_documentation||[]).push([[477],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(h,o(o({ref:t},c),{},{components:n})):r.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3016:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={},o="Changing Permalinks",l={unversionedId:"pink-currents/change-permalinks",id:"pink-currents/change-permalinks",title:"Changing Permalinks",description:"* Status: Completed",source:"@site/docs/pink-currents/change-permalinks.md",sourceDirName:"pink-currents",slug:"/pink-currents/change-permalinks",permalink:"/docs/pink-currents/change-permalinks",draft:!1,editUrl:"https://github.com/Other-People-UCSD/docs/tree/main/docs/pink-currents/change-permalinks.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Alt Text Field on Front Matter",permalink:"/docs/pink-currents/alt-text-forestry"},next:{title:"Copyright Protections",permalink:"/docs/pink-currents/copyright-protections"}},s={},p=[{value:"Context and Problem Statement",id:"context-and-problem-statement",level:2},{value:"Decision Drivers",id:"decision-drivers",level:2},{value:"<strong>UX Experience</strong>",id:"ux-experience",level:3},{value:"Considered Options",id:"considered-options",level:2},{value:"Pros and Cons of the Options",id:"pros-and-cons-of-the-options",level:2},{value:"1. Change the Permalink to the First Option",id:"1-change-the-permalink-to-the-first-option",level:3},{value:"2. Leave Permalinks As the Jekyll Default",id:"2-leave-permalinks-as-the-jekyll-default",level:3},{value:"3. Use a Different Format than Proposed",id:"3-use-a-different-format-than-proposed",level:3},{value:"Unresolved Issues",id:"unresolved-issues",level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"changing-permalinks"},"Changing Permalinks"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Status: Completed"),(0,a.kt)("li",{parentName:"ul"},"Author: Kevin Jang"),(0,a.kt)("li",{parentName:"ul"},"Deciders: Montanna, Nicole, Geraldine (editorial and design directors)"),(0,a.kt)("li",{parentName:"ul"},"Date: June 1, 2021")),(0,a.kt)("h2",{id:"context-and-problem-statement"},"Context and Problem Statement"),(0,a.kt)("p",null,"Permalinks (URLs) are an important component of a website from giving the application a hierarchy to follow to improving SEO and user experience. Modifying these links have a great impact on end users, especially when there are many posts (real application: removing the date from over 220 posts of Alchemy the Journal). It is important to address optimal URLs early on for better UX both externally (general audience) and internally (management)."),(0,a.kt)("h2",{id:"decision-drivers"},"Decision Drivers"),(0,a.kt)("h3",{id:"ux-experience"},(0,a.kt)("strong",{parentName:"h3"},"UX Experience")),(0,a.kt)("p",null,"Writers and artists should be confident that their work is guaranteed to exist at the permalinks they know/saved."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Relevance: Are certain details, such as the file extension and date, really necessary to our audience? ")),(0,a.kt)("h2",{id:"considered-options"},"Considered Options"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Change the permalink to ",(0,a.kt)("inlineCode",{parentName:"li"},"domain/:categories/:title")),(0,a.kt)("li",{parentName:"ol"},"Leave permalinks as the Jekyll default ",(0,a.kt)("inlineCode",{parentName:"li"},"(domain/:categories/:year/:month/:day/:title:output_ext)"),"  "),(0,a.kt)("li",{parentName:"ol"},"Use a different format ",(0,a.kt)("inlineCode",{parentName:"li"},"domain/:categories(incl author name)/:title"))),(0,a.kt)("h2",{id:"pros-and-cons-of-the-options"},"Pros and Cons of the Options"),(0,a.kt)("h3",{id:"1-change-the-permalink-to-the-first-option"},"1. Change the Permalink to the First Option"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"(domain/:categories/:title)"),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"https://otherpeoplesd.com/1/together-youandme-est.2010")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Remove date: We publish ",(0,a.kt)("em",{parentName:"li"},"biannually"),", so there is no need to have a date to describe when we actually uploaded the post to the website. The date on the file should only be used internally to cycle through next and previous posts."),(0,a.kt)("li",{parentName:"ul"},"Remove file extension: The file extension is irrelevant to a literary magazine. Removing the extension masks our implementation of the website"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Changing permalinks will affect all 41 post links, so accessing those old links will redirect to the 404 page!"))),(0,a.kt)("h3",{id:"2-leave-permalinks-as-the-jekyll-default"},"2. Leave Permalinks As the Jekyll Default"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"(domain/:categories/:year/:month/:day/:title:output_ext)"),(0,a.kt)("br",{parentName:"p"}),"\n","Example: ",(0,a.kt)("inlineCode",{parentName:"p"},"https://otherpeoplesd.com/1/2020/07/31/a-love-letter-to-the-ucsd-protected-wifi.html")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Current UX with accessing links will not be affected."),(0,a.kt)("li",{parentName:"ul"},"Contains irrelevant components as described in Option 1.")),(0,a.kt)("h3",{id:"3-use-a-different-format-than-proposed"},"3. Use a Different Format than Proposed"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"(domain/:categories(incl author name)/:title)"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"https://otherpeoplesd.com/1/vilar/skin")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Distinguishes same-title posts from each other by the author's last name in the link."),(0,a.kt)("li",{parentName:"ul"},"Inherits the masking of date and file extension as described in Option 1."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Changing permalinks will affect all 41 post links, so accessing those old links will redirect to the 404 page!")),(0,a.kt)("li",{parentName:"ul"},"Internally searching for this particular file might be confusing because there is no date to easily reference. The categories are inside the file's front matter so the management experience is worse than that of the end user.")),(0,a.kt)("h2",{id:"unresolved-issues"},"Unresolved Issues"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"404 Page Not Found page: A changed permalink will redirect to the 404 page. Users should immediately be given an explanation of changed permalinks and a way to query for their work (suggested: through the website's search menu)."),(0,a.kt)("li",{parentName:"ul"},"Post title: how should same-title posts be resolved? How long should titles be (see example in Option 2)?")))}u.isMDXComponent=!0}}]);