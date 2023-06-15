"use strict";(self.webpackChunkopm_documentation=self.webpackChunkopm_documentation||[]).push([[368],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=d(n),m=a,h=p["".concat(s,".").concat(m)]||p[m]||c[m]||o;return n?r.createElement(h,l(l({ref:t},u),{},{components:n})):r.createElement(h,l({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var d=2;d<o;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9215:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var r=n(7462),a=(n(7294),n(3905));const o={},l="Alt Text Field on Front Matter",i={unversionedId:"pink-currents/adr/alt-text-forestry",id:"pink-currents/adr/alt-text-forestry",title:"Alt Text Field on Front Matter",description:"* Status: Completed",source:"@site/docs/pink-currents/adr/alt-text-forestry.md",sourceDirName:"pink-currents/adr",slug:"/pink-currents/adr/alt-text-forestry",permalink:"/docs/pink-currents/adr/alt-text-forestry",draft:!1,editUrl:"https://github.com/Other-People-UCSD/docs/tree/main/docs/pink-currents/adr/alt-text-forestry.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Architectural Decision Records",permalink:"/docs/category/architectural-decision-records"},next:{title:"Changing Permalinks",permalink:"/docs/pink-currents/adr/change-permalinks"}},s={},d=[{value:"Context and Problem Statement",id:"context-and-problem-statement",level:2},{value:"Decision Drivers",id:"decision-drivers",level:2},{value:"Considered Options",id:"considered-options",level:2},{value:"Pros and Cons of the Options",id:"pros-and-cons-of-the-options",level:2},{value:"Add an &quot;alt&quot; Field to the Jekyll/Forestry Front Matter",id:"add-an-alt-field-to-the-jekyllforestry-front-matter",level:3},{value:"Manually Write <code>alt text</code> Into the Code",id:"manually-write-alt-text-into-the-code",level:3},{value:"Unresolved Issues",id:"unresolved-issues",level:2}],u={toc:d},p="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"alt-text-field-on-front-matter"},"Alt Text Field on Front Matter"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Status: Completed"),(0,a.kt)("li",{parentName:"ul"},"Author: Kevin Jang"),(0,a.kt)("li",{parentName:"ul"},"Deciders: Montanna, Nicole"),(0,a.kt)("li",{parentName:"ul"},"Date: June 3, 2021")),(0,a.kt)("h2",{id:"context-and-problem-statement"},"Context and Problem Statement"),(0,a.kt)("p",null,"Slow internet can cause things on a website to not load, so users will not see art and photography loaded on the website. To help users gain a sense of what we display, a description in the form of ",(0,a.kt)("inlineCode",{parentName:"p"},"alt")," text should be provided on every image."),(0,a.kt)("h2",{id:"decision-drivers"},"Decision Drivers"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"UX: users who are unable to load an image will not see any description of the image. They won't know what the image looks like and wouldn't spend time on that page/post."),(0,a.kt)("li",{parentName:"ul"},"HTML Validation: No alt text on images throws an error. For well-formed HTML, there should always be alt text on every image.")),(0,a.kt)("h2",{id:"considered-options"},"Considered Options"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},'Add an "alt" field to the front matter.'),(0,a.kt)("li",{parentName:"ol"},"Continue manually inserting alt text everywhere.")),(0,a.kt)("h2",{id:"pros-and-cons-of-the-options"},"Pros and Cons of the Options"),(0,a.kt)("h3",{id:"add-an-alt-field-to-the-jekyllforestry-front-matter"},'Add an "alt" Field to the Jekyll/Forestry Front Matter'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"---\nthumb: '/uploads/Laura Esbensen_Other People Submission - Laura Esbensen.JPG'\nalt: 'Medium: Acrylic on wood'\n---\n![page.alt](page.thumb)\n")),(0,a.kt)("p",null,"This will turn into ",(0,a.kt)("inlineCode",{parentName:"p"},'<img src="/uploads/Laura Esbensen_Other People Submission - Laura Esbensen.JPG" alt="Medium: Acrylic on wood">'),". Note that the alt text is located inside the Markdown square brackets."),(0,a.kt)("p",null,"Side note: image names should be changed to remove the spaces because that returns an error in HTML validation (See the 2.1.99 HTML validation report)."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Provides a visible field for non-developers to provide a description of the image"),(0,a.kt)("li",{parentName:"ul"},"Since Forestry allows front matter fields to be left empty, posts without images will not be affected"),(0,a.kt)("li",{parentName:"ul"},"This approach will work on the home and genre pages because the front matter field can be referenced as seen in the example.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"---\ntitle: Fronteras\ncontributor: Nicole Lopez\nthumb: '/uploads/IMG_5773.JPG'\nalt: ['Medium: Photography', 'second alt text']\n---\n![page.alt[0]](/uploads/IMG_5773.JPG)\n![page.alt[1]](/uploads/IMG_5775 (1).JPG)\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If there are multiple images, then this is a design choice by the developer to resolve. ")),(0,a.kt)("h3",{id:"manually-write-alt-text-into-the-code"},"Manually Write ",(0,a.kt)("inlineCode",{parentName:"h3"},"alt text")," Into the Code"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"---\nthumb: '/uploads/Laura Esbensen_Other People Submission - Laura Esbensen.JPG'\n---\n![Medium: Acrylic on wood](page.thumb)\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If there are multiple images, this works fine."),(0,a.kt)("li",{parentName:"ul"},"May or may not work on Forestry"),(0,a.kt)("li",{parentName:"ul"},"Cannot reference the alt text for the home and genre pages because there is no way to extract that alt text. This is a severe limitation of manually writing alt text.")),(0,a.kt)("h2",{id:"unresolved-issues"},"Unresolved Issues"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Front matter and alt text for multiple images in a post. This is a design choice that needs to be further tested with holding an array of images in the thumb field with a complementary array of alt text in the alt field.")),(0,a.kt)("p",null,"Resolved by using HTML for additional images. The front matter image will be a thumbnail that is displayed in the list of posts and is automatically given an alt text description."))}c.isMDXComponent=!0}}]);