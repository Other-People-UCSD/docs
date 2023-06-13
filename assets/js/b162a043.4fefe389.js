"use strict";(self.webpackChunkopm_documentation=self.webpackChunkopm_documentation||[]).push([[580],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(h,a(a({ref:t},p),{},{components:n})):r.createElement(h,a({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7009:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const i={title:"Typewriter Workflow",date:new Date("2023-03-31T07:00:00.000Z"),contributor:"Kevin Jang"},a=void 0,s={unversionedId:"calla-lily/typewriter-workflow",id:"calla-lily/typewriter-workflow",title:"Typewriter Workflow",description:'"missed connections (1 new post)"',source:"@site/docs/calla-lily/typewriter-workflow.md",sourceDirName:"calla-lily",slug:"/calla-lily/typewriter-workflow",permalink:"/docs/calla-lily/typewriter-workflow",draft:!1,editUrl:"https://github.com/Other-People-UCSD/docs/tree/main/docs/calla-lily/typewriter-workflow.md",tags:[],version:"current",frontMatter:{title:"Typewriter Workflow",date:"2023-03-31T07:00:00.000Z",contributor:"Kevin Jang"},sidebar:"docsSidebar",previous:{title:"Choose Your Own Adventure (CYOA) Workflow",permalink:"/docs/calla-lily/cyoa-workflow"},next:{title:"Pink-Currents",permalink:"/docs/category/pink-currents"}},l={},c=[{value:"Abstract",id:"abstract",level:2},{value:"Context Statement",id:"context-statement",level:2},{value:"Algorithm",id:"algorithm",level:2},{value:"Possible Extensions",id:"possible-extensions",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.otherpeoplesd.com/2023/missed-connections"},'"missed connections (1 new post)"')),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.otherpeoplesd.com/js/missed-connections.js"},'"missed connections" source code')),(0,o.kt)("h2",{id:"abstract"},"Abstract"),(0,o.kt)("p",null,'The typewriting program allows text to be written character-by-character or word-by-word to the webpage while setting delays on when the animations occur. This was built for Angel Sta. Maria\'s poem "missed connections (1 new post)" because the poem was designed to be animated in this way. '),(0,o.kt)("h2",{id:"context-statement"},"Context Statement"),(0,o.kt)("p",null,'At the time, there were some JavaScript programs that did typewriting, but they relied on dependencies such as JQuery or ReactJS. The poem "missed connections" was originally published on the Jekyll-based Pink-Currents website which did not have dependencies on either of these libraries or frameworks. JQuery was also recently removed from Pink-Currents as it wasn\'t used much and many of the functions could just as easily be written in vanilla JavaScript. Therefore, we decided to build our own lightweight typewriting program that could be configured for multiple stories.'),(0,o.kt)("h2",{id:"algorithm"},"Algorithm"),(0,o.kt)("p",null,"JavaScript execute asynchronously, meaning that processes will run when they are activated at runtime without waiting for other functions to finish. This is a problem when working on an animation that might animate multiple parts with delays between each animation. To solve this issue, Promises are used to wait on animations in the order they are meant to be executed. This prevents later functions from firing as they must wait for the promise to receive a callback resolution. "),(0,o.kt)("p",null,"For the animations, promised, asynchronous functions using ",(0,o.kt)("inlineCode",{parentName:"p"},"setInterval")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"setTimeout")," functions. ",(0,o.kt)("inlineCode",{parentName:"p"},"setInterval"),' lets one or more characters be appended to the DOM element at a constant "typing" rate that the reader sees. ',(0,o.kt)("inlineCode",{parentName:"p"},"setTimeout")," is used to add a delay after an animation which will affect when the next animation function receives the callback to being execution, making the reader experience a pause for artistic effect. "),(0,o.kt)("h2",{id:"possible-extensions"},"Possible Extensions"),(0,o.kt)("p",null,"Most typewriting programs have basic features such as selecting specific text to animate as well as typing and delay rates similar to ours. It could be possible to add a pause/play button as the story plays out, yet this would need to alter the current way that lines are animated because they fire synchronously as one timeout function. Maybe organizing the characters to display in a queue instead of an interval would solve this issue as the queue would control execution instead of repetitively-firing interval. "),(0,o.kt)("p",null,"Kevin is currently working on a React-based typewriting program that should allow people without developer experience the ability to animate their own stories with as much freedom that Other People's program allows for."))}d.isMDXComponent=!0}}]);