"use strict";(self.webpackChunkopm_documentation=self.webpackChunkopm_documentation||[]).push([[8036],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(a),h=o,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||i;return a?n.createElement(m,r(r({ref:t},p),{},{components:a})):n.createElement(m,r({ref:t},p))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,r[1]=s;for(var c=2;c<i;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},6858:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=a(7462),o=(a(7294),a(3905));const i={sidebar_label:"Data Science Using the Post API",sidebar_position:99},r="Data Science Using the Post API",s={unversionedId:"data-science",id:"data-science",title:"Data Science Using the Post API",description:"Overview",source:"@site/docs/09-data-science.md",sourceDirName:".",slug:"/data-science",permalink:"/docs/data-science",draft:!1,editUrl:"https://github.com/Other-People-UCSD/docs/tree/main/docs/09-data-science.md",tags:[],version:"current",sidebarPosition:99,frontMatter:{sidebar_label:"Data Science Using the Post API",sidebar_position:99},sidebar:"docsSidebar",previous:{title:"Zine Viewer",permalink:"/docs/projects/zine-viewer"},next:{title:"Web Analytics",permalink:"/docs/analytics"}},l={},c=[{value:"Overview",id:"overview",level:2},{value:"Post API",id:"post-api",level:2},{value:"Data Science in Python",id:"data-science-in-python",level:2},{value:"1. Connecting to the API",id:"1-connecting-to-the-api",level:3},{value:"2. Parse the Data Into JSON",id:"2-parse-the-data-into-json",level:3},{value:"3. Viewing the Data",id:"3-viewing-the-data",level:3},{value:"Projects to Explore",id:"projects-to-explore",level:2}],p={toc:c},d="wrapper";function u(e){let{components:t,...a}=e;return(0,o.kt)(d,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"data-science-using-the-post-api"},"Data Science Using the Post API"),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"The Other People Team is able to utilize the post API to perform data science research over published literature. Several relevant topics to this research is web mining, recommendation systems, and identifying patterns in a writer's language. It is important to note that this should be a read-only form of analyisis because although we have the rights of the published works, we still respect the writers who have worked hard to tell these stories. Therefore, using the post API for any form of generative AI models is prohibited. "),(0,o.kt)("h2",{id:"post-api"},"Post API"),(0,o.kt)("p",null,"The API currently has two endpoints to access post data."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"/api/post-metadata"),(0,o.kt)("li",{parentName:"ul"},"/api/post-data.json")),(0,o.kt)("p",null,"The metadata endpoint accesses the frontmatter of all the posts. This metadata is specified in the post schema page. This endpoint can be utilized to filter out certain posts by date, tags, etc. such that querying for post data is faster than getting data from all posts using the post-data.json endpoint."),(0,o.kt)("p",null,"The post-data.json endpoint is a collection of all post data including metadata and the text within the page. This introduces additional keys such as wordCount and ",(0,o.kt)("inlineCode",{parentName:"p"},"noHTML")," which returns the raw text of the page without any HTML tags or indications of styling applied to the text. Markdown styles are also omitted because the data parser converted the text into HTML before the text was stripped again into raw text."),(0,o.kt)("h2",{id:"data-science-in-python"},"Data Science in Python"),(0,o.kt)("p",null,"Python is commonly taught at UCSD for performing data science or recommendation systems, so this documentation will use Python syntax."),(0,o.kt)("h3",{id:"1-connecting-to-the-api"},"1. Connecting to the API"),(0,o.kt)("p",null,"Connecting to the API endpoints is a simple fetch for the Next.js serverless function endpoints. There will be a loading time to get the data because these endpoints are compiled by the server instead of being statically generated."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"import requests\nimport json\nres = requests.get('https://www.otherpeoplesd.com/api/[endpoint url])\n")),(0,o.kt)("h3",{id:"2-parse-the-data-into-json"},"2. Parse the Data Into JSON"),(0,o.kt)("p",null,"Each endpoint exposed by the developer should already be formatted into JSON. The following line will retrieve the raw text from the endpoint and decode it using the JSON library."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"data = json.loads(res.text)\n")),(0,o.kt)("h3",{id:"3-viewing-the-data"},"3. Viewing the Data"),(0,o.kt)("p",null,"The JSON data is usually in JSON object format which is stored in a key: value pair for each of its items. To view all keys as a set, use the ",(0,o.kt)("inlineCode",{parentName:"p"},"data.keys()")," function. This is very useful to know what objects exist as you cannot iterate over the JSON object data using array indices. What this will usually return from the top-level data in the endpoint is the slug of the post. If you prefer to read the data using an array, you have to reassign the keys to numbers."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"postKeys = data.keys()\nprint(postKeys)\n> ['/2023/nesting-dolls-and-snakeskin', '/2023/hole', '/2023/out-of-use', ... , '/1/skin-vilar']\n")),(0,o.kt)("h2",{id:"projects-to-explore"},"Projects to Explore"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"There are currently no completed data science projects, only an API set up to extract the data to be analyzed.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Post Recommendation Algorithm",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Bag of Words model for each post"),(0,o.kt)("li",{parentName:"ul"},"Identify semantics from small phrases"),(0,o.kt)("li",{parentName:"ul"},"Filter through a similarity algorithm"),(0,o.kt)("li",{parentName:"ul"},"Saving output and integrating it into website")))))}u.isMDXComponent=!0}}]);