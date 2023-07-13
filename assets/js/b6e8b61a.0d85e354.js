"use strict";(self.webpackChunkopm_documentation=self.webpackChunkopm_documentation||[]).push([[7718],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),s=p(n),g=a,m=s["".concat(c,".").concat(g)]||s[g]||u[g]||l;return n?r.createElement(m,i(i({ref:t},d),{},{components:n})):r.createElement(m,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=g;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[s]="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},2722:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const l={title:"Getting Started",sidebar_position:1,contributor:"Kevin Jang"},i=void 0,o={unversionedId:"calla-lily/getting-started",id:"calla-lily/getting-started",title:"Getting Started",description:"Prerequisite Knowledge",source:"@site/docs/calla-lily/getting-started.md",sourceDirName:"calla-lily",slug:"/calla-lily/getting-started",permalink:"/docs/calla-lily/getting-started",draft:!1,editUrl:"https://github.com/Other-People-UCSD/docs/tree/main/docs/calla-lily/getting-started.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Getting Started",sidebar_position:1,contributor:"Kevin Jang"},sidebar:"docsSidebar",previous:{title:"Calla-Lily",permalink:"/docs/category/calla-lily"},next:{title:"Architecture",permalink:"/docs/calla-lily/architecture"}},c={},p=[{value:"Prerequisite Knowledge",id:"prerequisite-knowledge",level:2},{value:"Installation",id:"installation",level:2},{value:"Build",id:"build",level:2},{value:"Linting",id:"linting",level:2},{value:"Local Development",id:"local-development",level:2},{value:"Updating Dependencies",id:"updating-dependencies",level:3}],d={toc:p},s="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"prerequisite-knowledge"},"Prerequisite Knowledge"),(0,a.kt)("p",null,"Developing Calla-Lily assumes you know HTML/CSS/vanilla JS. If you do not have sufficient knowledge. Please refer to the training documents in the private organization folders."),(0,a.kt)("p",null,"Please understand React, Next.js, and TinaCMS. Ideally go through the React tutorial, then the Next.js tutorial by making a starter blog as well as connecting it with TinaCMS."),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ yarn\n")),(0,a.kt)("h2",{id:"build"},"Build"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ yarn build\n")),(0,a.kt)("p",null,"This command generates the static website content into the ",(0,a.kt)("inlineCode",{parentName:"p"},".next/out")," directory."),(0,a.kt)("h2",{id:"linting"},"Linting"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ yarn audit\n")),(0,a.kt)("p",null,"This command checks to make sure the Next program runs properly as well as checking that TinaCMS renders everything. "),(0,a.kt)("h2",{id:"local-development"},"Local Development"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ yarn dev\n")),(0,a.kt)("p",null,"Develops the website on a local server for both Next.js and TinaCMS. "),(0,a.kt)("h3",{id:"updating-dependencies"},"Updating Dependencies"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ yarn upgrade-interactive --latest\n")),(0,a.kt)("p",null,"Update the dependencies in the lockfile ",(0,a.kt)("inlineCode",{parentName:"p"},"yarn.lock")," and save the changes to ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json"),"."))}u.isMDXComponent=!0}}]);