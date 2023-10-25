"use strict";(self.webpackChunkopm_documentation=self.webpackChunkopm_documentation||[]).push([[3185],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=c(r),h=o,f=d["".concat(l,".").concat(h)]||d[h]||u[h]||s;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,i=new Array(s);i[0]=h;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[d]="string"==typeof e?e:o,i[1]=a;for(var c=2;c<s;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},2914:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const s={title:"Testing",sidebar_position:20,contributor:"Kevin Jang"},i=void 0,a={unversionedId:"calla-lily/testing",id:"calla-lily/testing",title:"Testing",description:"Testing is done in two areas: Playwright for E2E website tests that end users would see and Storybook unit tests to isolate component functionality across different themes. Both of these frameworks have their advantages and allows us to increase coverage over different purposes of the code.",source:"@site/docs/calla-lily/20-testing.md",sourceDirName:"calla-lily",slug:"/calla-lily/testing",permalink:"/docs/calla-lily/testing",draft:!1,editUrl:"https://github.com/Other-People-UCSD/docs/tree/main/docs/calla-lily/20-testing.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{title:"Testing",sidebar_position:20,contributor:"Kevin Jang"},sidebar:"docsSidebar",previous:{title:"Search and Displaying Recommendations",permalink:"/docs/calla-lily/search"},next:{title:"SEO, Sitemap.xml, Robots.txt",permalink:"/docs/calla-lily/seo-sitemap-robots"}},l={},c=[{value:"Playwright (E2E)",id:"playwright-e2e",level:2}],p={toc:c},d="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(d,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Testing is done in two areas: Playwright for E2E website tests that end users would see and Storybook unit tests to isolate component functionality across different themes. Both of these frameworks have their advantages and allows us to increase coverage over different purposes of the code. "),(0,o.kt)("h2",{id:"playwright-e2e"},"Playwright (E2E)"),(0,o.kt)("p",null,"Playwright is set up to emulate several different device types with varying viewports. This makes it simple to test for different user experiences as most notably the header changes in response to mobile device width. "),(0,o.kt)("p",null,"In addition, Playwright comes with snapshot testing to determine changes that occur to pages. This is beneficial when updating dependencies because some updates may break existing functionality and cause parts of the website to not render properly. The snapshots would catch those changes immediately and provide a diff to allow our developers to resolve those issues. However, the snapshot tests are inconsistent as the viewport dimensions may deviate from the saved snapshots or parts of the DOM do not load in time before the snapshot is taken, causing a slight difference in how it is displayed. This slight difference is not an issue for end users but causes us to set a snapshot diff ratio threshold to account for this. "),(0,o.kt)("p",null,"It is important to not write lots of tests because tests can be redundantly covered by other tests. For snapshots that test the parser's ability to render published work properly, the basic operations of displaying hybrid HTML-Markdown are covered by the tests run over customized works and niche styling works. Skipping basic tests like this preserves space usage on the repository and makes viewing snapshots a cleaner as there aren't hundreds of screenshots to look at."))}u.isMDXComponent=!0}}]);