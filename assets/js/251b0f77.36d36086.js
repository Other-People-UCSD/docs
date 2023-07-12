"use strict";(self.webpackChunkopm_documentation=self.webpackChunkopm_documentation||[]).push([[3606],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>c});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),m=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=m(e.components);return i.createElement(s.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=m(n),d=a,c=u["".concat(s,".").concat(d)]||u[d]||h[d]||r;return n?i.createElement(c,o(o({ref:t},p),{},{components:n})):i.createElement(c,o({ref:t},p))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var m=2;m<r;m++)o[m]=n[m];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1632:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>m});var i=n(7462),a=(n(7294),n(3905));const r={sidebar_label:"Image Compression",sidebar_position:2},o="Image Compression: Thumbnails",l={unversionedId:"pink-currents/thumbnails/index",id:"pink-currents/thumbnails/index",title:"Image Compression: Thumbnails",description:"This section must be used in Pink-Currents to reduce network load on the homepage and genre pages. Calla-Lily uses image optimization from Next.js which significantly reduces network bandwidth but this thumbnail method is still better than the automatic image optimization. See the Calla-Lily release notes for more information.",source:"@site/docs/pink-currents/thumbnails/index.md",sourceDirName:"pink-currents/thumbnails",slug:"/pink-currents/thumbnails/",permalink:"/docs/pink-currents/thumbnails/",draft:!1,editUrl:"https://github.com/Other-People-UCSD/docs/tree/main/docs/pink-currents/thumbnails/index.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Image Compression",sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Removal of JQuery Functions",permalink:"/docs/pink-currents/adr/removal-of-jquery"},next:{title:"Projects",permalink:"/docs/category/projects"}},s={},m=[{value:"The Thumbnail Script",id:"the-thumbnail-script",level:2},{value:"Pipeline for Thumbnails",id:"pipeline-for-thumbnails",level:3}],p={toc:m},u="wrapper";function h(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,i.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"image-compression-thumbnails"},"Image Compression: Thumbnails"),(0,a.kt)("admonition",{type:"important"},(0,a.kt)("p",{parentName:"admonition"},"This section must be used in Pink-Currents to reduce network load on the homepage and genre pages. Calla-Lily uses image optimization from Next.js which significantly reduces network bandwidth but this thumbnail method is still better than the automatic image optimization. See the ",(0,a.kt)("a",{parentName:"p",href:"../calla-lily/calla-lily-release#thumbnails-v4531"},"Calla-Lily release notes")," for more information.")),(0,a.kt)("p",null,"There are two formats that make it more efficient for end-users: AVIF and webp. While AVIF has stronger compression, it isn\u2019t supported in many browsers. Instead we will use webp where the compression size difference is negligible at how small our 80px thumbnails are."),(0,a.kt)("h2",{id:"the-thumbnail-script"},"The Thumbnail Script"),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"Read the entire section + Pipeline before creating thumbnails. This can dangerously affect media files if not done properly!")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Always perform the image resizing on a new branch to work on a copy of the files.")),(0,a.kt)("p",null,"Find all of the regular images in /public/images/","[folder]"," that are not JPG, JPEG, PNG"),(0,a.kt)("p",null,"Pink-Currents/$"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'find ./origtemp -maxdepth 1 \\( ! -iname "*.jpg" -and ! -iname "*.png" -and ! -iname "*.jpeg" \\)\n')),(0,a.kt)("p",null,"Use this command first to scan the folder for the files that will not have a thumbnail. Then move all of those files out to a different temporary folder. Do this because you do not want to make a webp for each frame. It is an inconvenience when you accidentally do it on a GIF and even worse if you do it on a video\u2026 Please double-check by eyeballing the folder for only non-movie types, and then proceed!"),(0,a.kt)("p",null,"Next you will change directory to the folder. "),(0,a.kt)("p",null,"Pink-Currents/origtemp/$"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'find ./ -maxdepth 1 -type f  \\( ! -iname "*.gif" -a ! -iname "*.pdf" \\) | xargs mogrify -thumbnail 80x -path ../thumbs -format webp "{}"\n')),(0,a.kt)("h3",{id:"pipeline-for-thumbnails"},"Pipeline for Thumbnails"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Make a temporary folder for the images (e.g. ",(0,a.kt)("inlineCode",{parentName:"li"},"origtemp"),")."),(0,a.kt)("li",{parentName:"ol"},"Make a temporary thumbnail folder (e.g. ",(0,a.kt)("inlineCode",{parentName:"li"},"thumbtemp"),").")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"/\n\u251c\u2500\u2500 uploads     # Folder for media and images, organized into folders\n\u251c\u2500\u2500 assets      # Styling the website\n|   \u2514\u2500\u2500 thumbs  # Folder for webp images used in home and genre previews of posts\n\u251c\u2500\u2500 origtemp\n\u251c\u2500\u2500 thumbtemp\n...\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Upload all new images used for thumbnails to ",(0,a.kt)("inlineCode",{parentName:"li"},"origtemp"),"."),(0,a.kt)("li",{parentName:"ol"},"Make sure there are no videos/multi-frame files in here. Otherwise a thumbnail will be generated for every frame in it."),(0,a.kt)("li",{parentName:"ol"},"Change into the origtemp directory.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"cd ./origtemp \n")),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},"Run the thumbnail script with dest folder ",(0,a.kt)("inlineCode",{parentName:"li"},"thumbtemp"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'find . -maxdepth 1 -type f | xargs mogrify -thumbnail x80 -path ../thumbtemp -format webp "{}"\n')),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"This will convert ALL files in ",(0,a.kt)("inlineCode",{parentName:"p"},"origtemp"),".")),(0,a.kt)("ol",{start:6},(0,a.kt)("li",{parentName:"ol"},"Check that there are an equal number of files and their names are correct."),(0,a.kt)("li",{parentName:"ol"},"Move the new thumbnails from ",(0,a.kt)("inlineCode",{parentName:"li"},"thumbtemp")," into ./assets/thumbs."),(0,a.kt)("li",{parentName:"ol"},"Move the images from ",(0,a.kt)("inlineCode",{parentName:"li"},"origtemp")," back into the main image folder ",(0,a.kt)("inlineCode",{parentName:"li"},"uploads")," if they aren't already in there."),(0,a.kt)("li",{parentName:"ol"},'In the front-matter for each post, put the thumbnail url as "',"[title]",'.webp" into the ',(0,a.kt)("inlineCode",{parentName:"li"},"thumb")," field. The path is generated in the layout page in case someone moves the folder to a different destination.")),(0,a.kt)("p",null,"The significance of this thumbnail script can be seen in the following two Google Lighthouse audits."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Google Lighthouse Audit: Full-Sized Images"))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Screenshot of the Lighthouse report on full-sized images",src:n(8561).Z,width:"616",height:"593"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Google Lighthouse Audit: Thumbnail Images"))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Screenshot of the Lighthouse report on thumbnail images",src:n(5141).Z,width:"757",height:"547"})),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"At the time the audit was taken, the homepage featured image was not compressed. That contributed to several MB of data. What is important to see is that the time to load media on the page is now 84% faster as a result of the thumbnail images.")))}h.isMDXComponent=!0},8561:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/full-sized-audit-226bbe878b334254677b28aec6b5f080.jpg"},5141:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/thumbnail-audit-1ef994d343c7a02c80dc9668ac0ca4d7.jpg"}}]);