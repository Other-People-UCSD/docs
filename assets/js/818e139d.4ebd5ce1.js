"use strict";(self.webpackChunkopm_documentation=self.webpackChunkopm_documentation||[]).push([[8481],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},h="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),h=u(a),p=o,m=h["".concat(l,".").concat(p)]||h[p]||c[p]||i;return a?n.createElement(m,r(r({ref:t},d),{},{components:a})):n.createElement(m,r({ref:t},d))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[h]="string"==typeof e?e:o,r[1]=s;for(var u=2;u<i;u++)r[u]=a[u];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},5397:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>I,contentTitle:()=>x,default:()=>L,frontMatter:()=>S,metadata:()=>N,toc:()=>O});var n=a(7462),o=a(7294),i=a(3905),r=a(6010),s=a(2466),l=a(6550),u=a(1980),d=a(7392),h=a(12);function c(e){return function(e){return o.Children.map(e,(e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:o}}=e;return{value:t,label:a,attributes:n,default:o}}))}function p(e){const{values:t,children:a}=e;return(0,o.useMemo)((()=>{const e=t??c(a);return function(e){const t=(0,d.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:a}=e;const n=(0,l.k6)(),i=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,u._X)(i),(0,o.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(n.location.search);t.set(i,e),n.replace({...n.location,search:t.toString()})}),[i,n])]}function b(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,i=p(e),[r,s]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:i}))),[l,u]=f({queryString:a,groupId:n}),[d,c]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,i]=(0,h.Nk)(a);return[n,(0,o.useCallback)((e=>{a&&i.set(e)}),[a,i])]}({groupId:n}),b=(()=>{const e=l??d;return m({value:e,tabValues:i})?e:null})();(0,o.useLayoutEffect)((()=>{b&&s(b)}),[b]);return{selectedValue:r,selectValue:(0,o.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),c(e)}),[u,c,i]),tabValues:i}}var g=a(2389);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function w(e){let{className:t,block:a,selectedValue:i,selectValue:l,tabValues:u}=e;const d=[],{blockElementScrollPositionUntilNextRender:h}=(0,s.o5)(),c=e=>{const t=e.currentTarget,a=d.indexOf(t),n=u[a].value;n!==i&&(h(t),l(n))},p=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const a=d.indexOf(e.currentTarget)+1;t=d[a]??d[0];break}case"ArrowLeft":{const a=d.indexOf(e.currentTarget)-1;t=d[a]??d[d.length-1];break}}t?.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:s}=e;return o.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>d.push(e),onKeyDown:p,onClick:c},s,{className:(0,r.Z)("tabs__item",y.tabItem,s?.className,{"tabs__item--active":i===t})}),a??t)})))}function k(e){let{lazy:t,children:a,selectedValue:n}=e;const i=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===n));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function v(e){const t=b(e);return o.createElement("div",{className:(0,r.Z)("tabs-container",y.tabList)},o.createElement(w,(0,n.Z)({},e,t)),o.createElement(k,(0,n.Z)({},e,t)))}function T(e){const t=(0,g.Z)();return o.createElement(v,(0,n.Z)({key:String(t)},e))}const C={tabItem:"tabItem_Ymn6"};function M(e){let{children:t,hidden:a,className:n}=e;return o.createElement("div",{role:"tabpanel",className:(0,r.Z)(C.tabItem,n),hidden:a},t)}const P={red:"red_RauI",blue:"blue_f0Pe",green:"green_p0u0"},S={title:"Editor/Web Producer Manual",sidebar_position:4,contributor:"Kevin Jang"},x=void 0,N={unversionedId:"editor-manual/index",id:"editor-manual/index",title:"Editor/Web Producer Manual",description:"Prerequisite Knowledge",source:"@site/docs/editor-manual/index.mdx",sourceDirName:"editor-manual",slug:"/editor-manual/",permalink:"/docs/editor-manual/",draft:!1,editUrl:"https://github.com/Other-People-UCSD/docs/tree/main/docs/editor-manual/index.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Editor/Web Producer Manual",sidebar_position:4,contributor:"Kevin Jang"},sidebar:"docsSidebar",previous:{title:"Uploading Media to the Website",permalink:"/docs/uploading-media"},next:{title:"Calla-Lily",permalink:"/docs/category/calla-lily"}},I={},O=[{value:"Prerequisite Knowledge",id:"prerequisite-knowledge",level:2},{value:"About the Role",id:"about-the-role",level:2},{value:"TinaCMS",id:"tinacms",level:2},{value:"Collections",id:"collections",level:3},{value:"Site (Media Manager)",id:"site-media-manager",level:3},{value:"Cloud",id:"cloud",level:3},{value:"Publishing Posts",id:"publishing-posts",level:2},{value:"Creating a Post: Metadata",id:"creating-a-post-metadata",level:3},{value:"Creating a Post: Editing the Content",id:"creating-a-post-editing-the-content",level:3},{value:"Poetry",id:"poetry",level:4},{value:"Prose",id:"prose",level:4},{value:"Arts/Media",id:"artsmedia",level:4},{value:"Afterword",id:"afterword",level:3},{value:"Submissions Page and Applications",id:"submissions-page-and-applications",level:2},{value:"Team Page",id:"team-page",level:2}],E={toc:O},j="wrapper";function L(e){let{components:t,...o}=e;return(0,i.kt)(j,(0,n.Z)({},E,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"prerequisite-knowledge"},"Prerequisite Knowledge"),(0,i.kt)("p",null,"This document assumes that you know Markdown, HTML, CSS, and have sufficient technical literacy."),(0,i.kt)("h2",{id:"about-the-role"},"About the Role"),(0,i.kt)("p",null,"As Website Producer for Other People Magazine, you are tasked with publishing prose and art as well as updating information such as submissions status, applications, the team page, and other information. You do not necessarily need to code in HTML/CSS but it is recommended that you do to adhere to the wishes of authors that make stories with designs that aren't possible in Markdown."),(0,i.kt)("h2",{id:"tinacms"},"TinaCMS"),(0,i.kt)("p",null,'TinaCMS comes with a straightforward live editing feature that allows you to edit posts side-by-side. This is a feature that the discontinued Forestry.io CMS from pre-v3.3.3 Pink-Currents did not have. If you have used modern CMSes like WordPress or Wix, this may feel very familiar to you. Being able to optionally code works allows us to create experimental stories like "Missed Connections (1 new post)" and "You Have Created an Imaginary Friend" as standalone pieces on our own website and can be transferred reliably to other website frameworks that WordPress may not be able to support easily.'),(0,i.kt)("p",null,"To start, visit the ",(0,i.kt)("a",{parentName:"p",href:"https://www.otherpeoplesd.com/production"},"production page"),". Log in to Tina.io through the OPM credentials. "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Screenshot of the Homepage",src:a(5367).Z,width:"1920",height:"971"})),(0,i.kt)("p",null,"On the left is the TinaCMS interface and you\u2019ll notice that there are fields that have the same information as components on the homepage of the website! As a website producer, your task is already laid out in the interface information. If you want to edit the homepage cover image, you replace the Featured Image with another image, if you want to change the number of posts displayed on the homepage, there are fields to do that as well! You can even resize the interface to test how the page will look on a desktop screen and even smaller widths for mobile devices. "),(0,i.kt)("p",null,"At the top-left of the TinaCMS interface is a hamburger slider that will open the Global Navigation pane. You will see a list of Collections, Site, and the Cloud."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Screenshot of the Sidebar",src:a(6412).Z,width:"1920",height:"926"})),(0,i.kt)("h3",{id:"collections"},"Collections"),(0,i.kt)("p",null,"Collections are where the editable parts of the website are found! The documentation folder is mainly for developers but there might be information useful for troubleshooting stuff there."),(0,i.kt)("p",null,"Some of the sections edit single pages such as Homepage, others may not have a specific page they edit, and Posts contains a list of folders. The collection interfaces contain semantic fields and some may include descriptions of how and where they are used. For example, the Forms collection contains fields to input application forms. Reading the description would let you know that inserting a link to that field will make the application on the about page and links page appear!"),(0,i.kt)("h3",{id:"site-media-manager"},"Site (Media Manager)"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Screenshot of the media in the collection number four folder.",src:a(4541).Z,width:"1920",height:"926"})),(0,i.kt)("p",null,"This is where media files are uploaded and accessible from. Please upload compressed images as described in ",(0,i.kt)("a",{parentName:"p",href:"./uploading-media"},"File Naming and File Size Management")," because we have space limitations on the website and large media files is the main contributor to space. "),(0,i.kt)("p",null,"The media folders only display 20 images per page, so there is a small Back/Next button at the bottom to view the other images!"),(0,i.kt)("h3",{id:"cloud"},"Cloud"),(0,i.kt)("p",null,"These are developer settings for the CMS. On the free plan, only two users can be added to the project. Due to this, you will be producing through the Other People email account while the current website developer/maintainer should be reserved for the other user."),(0,i.kt)("p",null,"The Project Config will take you to the configuration page. As a website producer, you should not modify any of the configuration information because it can make the CMS inoperable to you. "),(0,i.kt)("h2",{id:"publishing-posts"},"Publishing Posts"),(0,i.kt)("p",null,"Publishing posts should appear straightforward to do if you have used another CMS before. When clicking on the Posts collection, there will be a set of folders available to you. These folders could be a small number such as 1, 2, 3 or a year such as 2019, 2020, 2021. The small numbers represent the collection/issue number and this is where accepted submissions from people outside Other People Magazine should go. The yearly folders are where our content writing team gets their works published if they did not get their work published in a magazine issue."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"View of the posts inside the 2023 folder.",src:a(2960).Z,width:"1895",height:"658"})),(0,i.kt)("p",null,"The view should be sorted by ",(0,i.kt)("inlineCode",{parentName:"p"},"date")," by default. This is useful to see the posts that were most recently published. The only other useful sort option is ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," because the interface only displays the shown columns and you cannot add additional columns to it."),(0,i.kt)("p",null,"Now you are ready to create a post, fill out the content, and publish it!"),(0,i.kt)("admonition",{type:"warning"},(0,i.kt)("p",{parentName:"admonition"},'You should not publish posts at the top-level (not inside a numbered or year folder) because this will make organization in the future difficult as the magazine grows in size. Currently TinaCMS does not have a "Create New Folder" option so you do have to ask a developer to make the folder for you.')),(0,i.kt)("h3",{id:"creating-a-post-metadata"},"Creating a Post: Metadata"),(0,i.kt)("p",null,"When you first create a post by clicking on the ",(0,i.kt)("inlineCode",{parentName:"p"},"Create New")," button, you will only see a form. This view is much different than if you had clicked on an already published post because you must save the initial file so that it can be read by the internal system to give you the preview feature. This will have a list of fields with descriptions to help guide you on what should go into the field. You can also look at other posts for reference if you are confused about anything. ",(0,i.kt)("strong",{parentName:"p"},"Any field marked with an asterisk is required"),". "),(0,i.kt)("p",null,"You will usually only have to fill out the fields up to the ",(0,i.kt)("inlineCode",{parentName:"p"},"Body (content)")," as the fields below the content are custom components that give more control over how the post is displayed. If this is your first time using the custom components, please do not select or fill out until reading the next section. If you made any mistakes, the reset button will clear all fields. You can also exit the create page to discard all changes."),(0,i.kt)("p",null,"For now, it is okay to only fill out the required fields and to leave the body blank or a complete copy-paste of the work you are going to publish. This will be fixed up in the next section when you can utilize the live preview feature."),(0,i.kt)("p",null,"Click Save to finish creating the post and proceed to the next step. "),(0,i.kt)("h3",{id:"creating-a-post-editing-the-content"},"Creating a Post: Editing the Content"),(0,i.kt)("p",null,"After saving the initial post, you will have to wait at least 1-3 minutes for the website to finish compiling and redeploying. Just refresh the page after a few minutes passed and you should see the post show up in the CMS again! This time the form will move to the left sidebar and the webpage will show what the published page will look like. This is the live editing feature of TinaCMS which makes this CMS similar to the other modern CMSes like WordPress or wix. It is time to edit the content and reformat it to be like the final draft."),(0,i.kt)("h4",{id:"poetry"},"Poetry"),(0,i.kt)("p",null,"If you paste lines of poetry from the final draft, it may appear like this."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Image of poetry lines being in a single paragraph with no line breaks.",src:a(4413).Z,width:"1899",height:"887"})),(0,i.kt)("p",null,'While the content appears to be in line breaks, it does not show the line breaks on the final page. The reason for this is that the content field is showin in a "visual editor" format and this is a common pitfall of many modern CMSes because certain things like line breaks will not show up properly in this format. To resolve this, you must first click on the three dots in the content field and select the ',(0,i.kt)("inlineCode",{parentName:"p"},"Raw")," option to view the field in raw text format."),(0,i.kt)("p",null,"Now you have three options to put in a line break in the raw text format."),(0,i.kt)("div",{style:{backgroundColor:"var(--ifm-color-code-block)",borderRadius:"20px",padding:8}},(0,i.kt)(T,{mdxType:"Tabs"},(0,i.kt)(M,{value:"br",label:"HTML: <br /> \u2b50",attributes:{className:P.green},default:!0,mdxType:"TabItem"},(0,i.kt)("p",null,"Use ",(0,i.kt)("code",null,"<br />")," at the end of a line"),(0,i.kt)("p",null,(0,i.kt)("strong",null,"Pro:")," All users will see the page in HTML, so supporting the post using HTML elements is ideal as the entire page can be exported without changing much information on it. This is very important when managing hundreds of posts as this will keep maintenance low."),(0,i.kt)("p",null,(0,i.kt)("strong",null,"Con:")," It must be typed exactly like this with a space between the ",(0,i.kt)("code",null,"r /")," because this will take care of device compatibility on legacy browsers and pass the linting check. Using only ",(0,i.kt)("code",null,"<br>")," will fail because the website is built in React and all tags must have an enclosing tag or leading slash ",(0,i.kt)("code",null,"/")," to keep the code secure from escaped data.")),(0,i.kt)(M,{value:"backslash",label:"MD: Backslash",attributes:{className:P.blue},mdxType:"TabItem"},(0,i.kt)("p",null,"Use a backslash ",(0,i.kt)("code",null,"\\")," at the end of a line"),(0,i.kt)("p",null,(0,i.kt)("strong",null,"Con:")," If changes to the parser are made, the backslash may be recognized as an escape character and break the page in the future.")),(0,i.kt)(M,{value:"doubleSpace",label:"MD: Double Space",attributes:{className:P.red},mdxType:"TabItem"},(0,i.kt)("p",null,"Use double spaces at the end of a line"),(0,i.kt)("p",null,(0,i.kt)("strong",null,"Con:")," Visually, you cannot spaces on the editor so this makes it hard on everyone to debug. The parser may also break if it trims whitespace from the end of lines.")))),(0,i.kt)("p",null,"Poetry can consist of line breaks and stanzas and formatting is used differently for both. The line breaks take care of the case of lines within a stanza, but to separate stanzas you just enter a real line break in between the raw text."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-mdx"},"and don\u2019t believe the glassy-eyed assemblage of faces<br />\nwho ramble nonsense like<br /> <em>oh, she was such an angel...</em><br /> \n<em>oh, she died too young at twenty-one...</em>\n\nI hate clich\xe9 decorum, <br />\nbut nowhere near as much as I hate that <br />\nin twenty-one years I couldn\u2019t escape from mediocrity\n")),(0,i.kt)("h4",{id:"prose"},"Prose"),(0,i.kt)("p",null,'Prose can be styled in the "visual editor" format by itself and use the markdown syntax. But we still recommend using HTML for the compatibility and portability as explained in the HTML vs Markdown line break comparison. You will rarely use ',(0,i.kt)("inlineCode",{parentName:"p"},"<br />")," tags for prose because most of it is paragraphs and you won't encounter many writers doing line breaks with no space in between those lines."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"<","br /",">"," = no space between lines",(0,i.kt)("br",null),"\nLine break (enter key) = paragraphs, stanzas, or spacing in between lines")),(0,i.kt)("h4",{id:"artsmedia"},"Arts/Media"),(0,i.kt)("p",null,"Images can be written in Markdown (",(0,i.kt)("inlineCode",{parentName:"p"},"![]()"),") or HTML (",(0,i.kt)("inlineCode",{parentName:"p"},"<img />"),"), but it is still recommended to use HTML to utilize styling. Markdown images will be left aligned and cannot be centered on the page. They can also be sized to the width of the post space which may make it hard to view portrait illustrations. Limiting the size and also deciding on the image layout are things that HTML is able to control."),(0,i.kt)("p",null,"The classes commonly used to set a width constraint are specified in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Other-People-UCSD/Calla-Lily/blob/main/styles/customPosts.scss"},"customPosts.css")," as ",(0,i.kt)("inlineCode",{parentName:"p"},"w250, w450, w650"),"."),(0,i.kt)("p",null,"Left-aligned image (good for poetry or if the first lines of text mainly occupies the left side of the page)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<img src="/images/folder#/title.extension"\n    alt="enter description of image"\n    class="w650" />\n')),(0,i.kt)("p",null,"Centered image (good for a first starting paragraph or a first centered line in the story)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<div class="center">\n<img src="/images/2023/the-post-mortem-helen-huang.jpg"\n    alt="Watercolor. Seven mangoes on a table with a small figure curled up in the center of one of them."\n    class="w650" />\n</div>\n')),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"There is a forward slash in the img element to comply with the React syntax just like in ","<","br /",">",".")),(0,i.kt)("h3",{id:"afterword"},"Afterword"),(0,i.kt)("p",null,"You may notice that some pages have unique styles such as ",(0,i.kt)("a",{parentName:"p",href:"https://www.otherpeoplesd.com/4/retreat"},"Retreat"),", ",(0,i.kt)("a",{parentName:"p",href:"https://www.otherpeoplesd.com/5/cognates"},"Cognates"),", and ",(0,i.kt)("a",{parentName:"p",href:"https://www.otherpeoplesd.com/2023/poets-sleep-in-graves"},"poets sleep in graves")," using only HTML and CSS class names. As a web producer, you are not expected to make new posts pop out as this if you do not have enough proficiency to style HTML in such a way, but I am sure that you will learn a lot in this role and might elevate yourself to modifying the ",(0,i.kt)("inlineCode",{parentName:"p"},"customPosts.css")," file to make this happen!"),(0,i.kt)("h2",{id:"submissions-page-and-applications"},"Submissions Page and Applications"),(0,i.kt)("p",null,"In the TinaCMS sidebar go to the Forms collection. Modifying the submissions page is different from the other sections here because there is no live preview for edits. Instead you just see a form with a bunch of labeled fields with their purpose. "),(0,i.kt)("p",null,"For submissions there are three fields to edit. The ",(0,i.kt)("inlineCode",{parentName:"p"},"Submission Form")," fields take in a URL for the form and the third field is a text editor to display text if submissions are closed. Under the hood, the webpage will say if submissions are open if there is something in the Submission Form field, otherwise it will say closed and display the text in the third field. This simplifies the page so you don't have to modify a whole text box when the submission guidelines rarely change and can be rewritten within the submission form itself."),(0,i.kt)("admonition",{type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"Application forms also take in a URL but they are not connected to any page so this is a problem to fix. ")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"./calla-lily/schema#formsjson-data"},"Read this section to understand why the data is saved this way.")),(0,i.kt)("h2",{id:"team-page"},"Team Page"),(0,i.kt)("p",null,"In the TinaCMS sidebar go to the Team Members collection. The live preview editor will show a fields categorized as teams with people's name in cards. This should be very self-explanatory where you add a card into the team category by clicking on the plus button and then you can enter in a new member's name and their exact role. You can use the slider on the left side of each card to organize the names. To edit alumni with starting and ending years, you can always ask when someone joined the team!"),(0,i.kt)("p",null,"You may notice that the names aren't in alphabetical. They are actually ordered by role importance > seniority > alphabetical where seniority applies to date joined. For example if a group of people were recruited then you sort them alphabetically by first name. If people were accepted on a rolling basis they are sorted by time joined."))}L.isMDXComponent=!0},4413:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/tina-create-poetry-506e75bb052f49051af4cb9d5075e0e9.png"},5367:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/tina-homepage-7d511a753128e38e8b8ae9716fb78657.jpg"},4541:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/tina-media-manager-7da13d148d89ca8f49f1cb4da470c5bf.jpg"},2960:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/tina-posts-2023-dc1d1d8aa04093ae7a58b5d00c3b65dd.png"},6412:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/tina-sidebar-2ee3ab5515d12c06bc9aa74f22f8f33e.jpg"}}]);