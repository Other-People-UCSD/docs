---
title: Rebuild Release Notes
sidebar_position: 3
date: 2023-05-18T07:00:00.000Z
contributor: Kevin Jang
---

**Date: Apr 21, 2023 - May 18, 2023**

:::info

These release notes are public so anyone who is curious to know how we make experimental stories and artistic designs happen behind the scenes knows just how much work is put into making Other People Magazine the most innovative and customizable website! I love what this organization publishes and I hope that this website can be maintained by future undergraduate programmers at UCSD to learn all about web development in media publishing!

:::

## Abstract

The Pink-Currents version of the Other People website is built using HTML/CSS/vanilla JS. The static site generating framework is Jekyll in Ruby and deployed on GitHub Pages. Non-developers can publish posts using Forestry.io, a headless CMS.

Forestry.io was discontinued from service on April 21, 2023, meaning that the Pink-Currents website could no longer support this team of non-developers to publish the stories from our content writers specifically.

The website needed a new headless CMS to maintain publishability if there was no website developer to publish the posts. However, modern CMSes had higher technical specifications in that connecting to their user-friendly UI for non-developer editing required the site to be built in ReactJS.

Calla-Lily is the version of the Other People website that is built fully in ReactJS using the most popular React framework for static site generation of its time, NextJS.

### Choosing The Reactjs Static Site Generator

Working on a plain ReactJS website without a framework would require more configurations and learning to connect the site to a headless CMS, so it was better to rebase the website using a web framework that CMSes had existing guides for. There were two choices that I focused on because of their user support, features, and learning curve: NextJS and Gatsby.

While Gatsby is a good choice for smaller sites that do not undergo many edits on their pages like Pink-Currents, it was an older framework that did not see much market growth in the past few years. Even though Gatsby was acquired by Netlify recently, I was uncertain about where its future would be several years from now.

NextJS is a little younger than Gatsby and it has almost double the popularity. NextJS is made for more dynamic sites that see a lot of changes or high traffic.

As it was the first time I was coding in NextJS, I followed their learning guide and rebuilt the website off of that. For future developers, please run through the ReactJS tutorial then the NextJS tutorial to learn how to code in both of these formats.

## Rebuild Process (v4.0.0)

* The templated components such as header, footer, and genre pages were converted from their corresponding HTML/Liquid components into JSX elements with SASS modules.
* Favicons were generated from a third party site that checked favicons across more device cases, so there is a wider support.
* The Font Awesome icons used for the social media icons were replaced with Material UI icons so the external dependency was moved into an internal one.
* Posts utilized the dynamic routing feature of NextJS. Dynamic routing allowed for posts to be made and the router templated the content of the post and generated URLs for them on static page generation.
  * Only the first posts from collection 1 and the corresponding media were uploaded to the site for development purposes.
  * There was an unresolved issue with putting posts into folders under the post folder where the NextJS would not pass the build stage on GitHub or Vercel’s CLI but worked locally. This could be a path or URI issue.
  * It was an issue that many tries to fix could not resolve, so I went ahead and moved onto the CMS to make sure that part of the website worked for our editors.
* The dynamic routing posts have slightly different frontmatter:
  * Title\*
  * Date\*
  * Contributors\*
  * Collection No.
  * Tags\*
  * Thumbnail\*
  * Featured bool is removed because it can be an existence check on the collection
* The search program had to be implemented from scratch because the previous search was a Jekyll plugin. After reading through the docs, I understood that the search plugin pulled information from the frontmatter of each post.
  * I set up an API which collected all the frontmatter from the posts and returned it as a JSON object with the slug as the key. Using ReactJS’s stateful properties, the search bar performed live case-insensitive queries for the following information:
    * Title
    * Contributors
    * Tags
    * Date
  * Now the search program did not rely on an outside dependency and future developers can read our source code to see how the algorithm works!

### Choosing the CMS

There were three headless CMS that I was considering: Strapi, Sanity, and TinaCMS. Originally I tried to use TinaCMS on Pink-Currents, but it failed because it lacked the configuration details as explained in the ADR.

Strapi was the most popular headless CMS on GitHub at the time, but the issue was that Strapi required a database setup. If I went with this option, the website would not be able to be hosted on GitHub. We would have to pay to self-host on a virtual private server and have to configure the entire server as well. It would introduce so much complexity and difficulty to transfer ownership of the website to in the future that it was not a viable option.

Sanity was the second most popular headless CMS. While Sanity ran fine and had a clean UI for editors to publish posts on, the issue was once again data storage. Sanity does not require a database, but it does store all of the posts and media on their 10 GB free cloud storage. This would be problematic because it would be harder for editors to query for what files were abstracted by the dataset and it prevented the web developer from keeping control over their data.

TinaCMS was revisited because Forestry.io worked for Pink-Currents, and that meant Calla-Lily should still be able to have the same support and editing quality that Forestry.io provided but in ReactJS instead. Since TinaCMS is a descendant of Forestry.io’s team and version 1.0.0 was released three months ago, it should be a CMS with long-lasting support for several years. A benefit was also that TinaCMS is open-source on the frontend, so developers would be able to maintain it and enhance TinaCMS with more features or plugins to fit developer needs in the future. TinaCMS gave the web developer control over how data is managed, so we still keep access to our posts and media files. In addition, it is customizable enough that we can overcome the challenges we faced using TinaCMS on Pink-Currents.

### Configurations for TinaCMS (v4.0.1 - v.4.0.4.2)

* Used a working copy of the TinaCMS-ReactJS starter code to figure out how to connect the CMS data to the content of a page in getStaticProps and getStaticPages through the use of the useTina hook
* Even when the codebase is written in React, TinaCMS still parses the markdown content in markdown only and outputting the HTML in MD as plain text. This is the same problem as when TinaCMS was attempted with Pink-Currents.
  * Files were changed from Markdown files to Markdown with JSX (MDX) to support the options passed into TinaMarkdown for HTML. However, this causes linting errors because in JSX every tag such as `<img> <br> <hr>`, etc. must have an enclosing slash such as `<img />`. This strict syntax rule is still supported by regular HTML, so moving these files to another implementation of HTML/CSS/JS would not cause problems in the future.
  * Read v4.5.5.1 changes for parsing methodology.
* There are some landing pages that should have editing capabilities for the web producer such as the homepage, team page, submissions page, and UC magazine page. Just to make sure that the important parts of the website are complete, the UC magazine page will be fixed at a future stage of the website.
  * The landing page frontmatter was removed because the landing pages are written in javascript only and thus they cannot be accessed by the CMS
  * Instead the frontmatter was moved into JSON files because the CMS can access JSON files as well as YAML files. Trying to directly import YAML data into to the JS page failed due to the webpack configuration and I did not want to add another plugin or dependency. Directly importing JSON files worked and allowed me to successfully test that the frontmatter could be moved into another file.
* To make the JSON data connected to TinaCMS, it required two things. The first was to build the schema using the keys from the JSON keys so that GraphQL would be able to query the data. Then to add TinaCMS’s live preview visual editor capability I used the CMS’s API query to pull data from the file and then the useTina hook to synchronize changes. This effectively removed the use of a direct import to the data file because the data would instead be pulled through the API.

### Permalinks (v4.1.0)

Pink-Currents uses a global permalink configuration of /\:categories/\:title where categories is the frontmatter field “category” only found on the posts that are part of a collection. Therefore, the non-collection content writing works stored under 2000-year folders use the link /\:title instead.

NextJS uses a different routing scheme from Jekyll in that the path of the file in the filesystem is used to create the permalink. When trying to keep the 2000-year folders, the path for the page would instead be /20../\:slug instead of /\:slug. While it would not be that harmful to change the permalinks like this, we have around 50 works that are of this format.

A solution I came up with was to create two page paths for the 2000-year posts. In getStaticPaths, NextJS would create the /20../\:slug path and also the /\:slug path by removing the year from the catch all route. This causes the post to exist redundantly on two pages. However, redirect routing and telling web crawlers that the permalink should route to the /\:slug page would allow SEO to function normally to these permalinks that we have used in Pink-Currents.

Despite keeping permalinks in Calla-Lily the same as Pink-Currents, this solution has a performance tradeoff at build-time. When getting the post data in getStaticProps, the parameter that is passed to the /\:slug page that the user visits does not contain the 2000-year information. This is an issue when trying to query for the page data because there is no file in the filesystem that exists at \_posts/\:slug because it would exist at \_posts/20../\:slug. Therefore, a for loop that iterates over the existing years of 2020 to the current year must be used to try file paths until that file can be found.

In addition, the NextJS Link components on the homepage, genre pages, search, and prev/next post routes will show the clickable link as /20../\:slug instead of just /\:slug. The Link components do not mask the redirect routing and so users who share these posts will paste URLs that contain the year.

v4.5.4.1: Permalinks are now back to the /20../slug format

### Publishing and GraphQL Queries (v4.1.0 - v4.5.1.0)

The posts were uploaded to the repository in incremental collection commits. This is reflected in the version tagging where the second number represents the number of collections published under the current website manager. This is why the version quickly jumps from v4.1.0 to v4.5.1. The posts were not uploaded with the correct paths to images nor thumbnails and formatting was not checked. These edits will be resolved at a later version once the rest of the website was completed.

There was an issue during the Vercel build process where only fifty of the dynamic posts would be created and the rest returned 404. I was able to figure out how to run GraphQL from the developer mode by visiting localhost:3000/production/index.html#/graphql and then ran postsConnection because this is where the posts got queried for their data. It turned out that only 50 edges or posts were returned, meaning that TinaCMS’s default GraphQL configuration only selected 50 dynamic links at a time instead of all of them at once.

To solve this issue, I wanted to do a pagination of the GraphQL using the given information about the page that was returned from the query. I thought that pagination was better on the processor’s memory cache because it was only retrieving 50 posts at once instead of retrieving all 130 posts that would keep increasing over time. By using the cursor position and checking to see if there were more pages in the GraphQL query, I was able to fix the issue and built all of the dynamic paths to the posts.

### Thumbnails (v4.5.3.1)

The Next/Image component is useful for page performance as the images that would be rendered on the homepage and genre pages would preload and automatically resize to save on network bandwidth. This functions just like the Pink-Currents manual resizing of the thumbnail images using imagemagick or ffmpeg but Next/Image allows us to use only the original copy of the image. After auditing the webpage, the rendered images had a slightly larger size than making the thumbnails, but it was the non-developer friendly way of reducing the network bandwidth. Another benefit to this is that future website developers would not have to manually run through this thumbnail step for every image that gets uploaded, so they have one less responsibility to maintain.

### Search (v.4.5.3.1)

Up until this point, the Search component algorithm was programmed for a constant dataset of post information. This would be an issue for CMS producers that would not be able to update this dataset unless they went onto GitHub to update the dataset file. However, dynamic posts already fetched all of the post data within getStaticProps in order to get the previous and next post to route to, so it was possible to utilize the dataset that got statically fetched during page generation.

Upon inspection of pageProps in \_app.js, this dataset was found as a prop there only for dynamic pages. Each landing page was modified to contain a getStaticProps which called  and returned getSortedPosts to get all of the post data. This would be passed up the execution tree to the App component to pageProps.

To get allPostsData into the Search component, the naive method would be to pass this prop down every component from App, Layout, Header, and Search to SearchResults. The alternative method to declutter this process would be to use React’s useContext hook which saves the selected props in the App component. Then in the Search component, calling the useAppContext hook would retrieve allPostsData from the deep parent props to be used in the search algorithm.

### SEO (v4.5.4)

There are three main components of SEO that were part of Pink-Currents as plugins but not automatically configurable plugins in NextJS: robots.txt, sitemap.xml, and meta tags.

The easiest was a robots.txt file which had to be placed in the public folder as specified in the NextJS documentation. I disabled web crawlers from indexing the CMS path because it should not be exposed to search results, as well as the media store in the images directory to prevent images from showing up in search results where someone could plagiarize them.

NextJS had documentation on how to render a sitemap page, so I followed their implementation and added the lastmod tag on the posts to improve how often web crawlers would visit our website to find new pages. Posts are automatically fetched at runtime by referencing the API for posts. For the landing pages, I also implemented an API that fetched only their slugs to be used in the sitemap since the other data kept in the landing pages shouldn’t be used anywhere else for now.

Meta tags were implemented using a plugin called next-seo. The use of this plugin differs from the Jekyll one in that meta information had to be manually given values from the pages instead of being automatically fetched from the plugin. I improved the rendering of link previews for the new website by attaching an OpenGraph image of the thumbnail image if a post has one. In addition, the excerpt or description for a post would contain the contributors to the work as well as the first 150 characters of the non-HTML parsed text. This metadata can be seen by copying and pasting the link on different apps such as social media or Discord.

### Final Edits (v4.5.5)

All 143 pages of the website had to be proofread to make sure they matched what was displayed on Pink-Currents. The parser the MDX pages had to be fixed because the current custom parser used to convert the file to HTML would not reliably parse inline HTML tags within a markdown paragraph. To fix this, I had to modify TinaCMS’s open source implementation of TinaMarkdown which parsed Markdown properly but not HTML. I imported the utility HTML React parser to convert any found HTML or inline HTML elements into React JSX elements properly, allowing our website to parse both Markdown and HTML.

The word count algorithm was slightly modified to get a more accurate reading of how many words are on a page.

Experimental posts had to be reattached to Next’s way of compiling files and connections, so JavaScript functions were transferred from the MDX files to the main dynamic post JS file. The useEffect hook proved useful in attaching these functions to the targeted stories. Other than that, there were no significant alterations to making the existing stories function properly!

The useEffect hook also aided in attaching the copyright protection over posts, as well as changing posts to dark theme if they were meant to be displayed that way. This rendering is allowed to fire more than once at the start of the page render because it was found that using an empty dependency list to fire this useEffect block only once may not allow copyright protections to take effect all the time.

To allow a non-developer editor to publish posts to the website, the dark theme was added to the CMS schema as a radio group selection for light or dark theme. In addition, the content warning was added as a string field where typing the content warning description will show the content warning overlay. These two fields use the useEffect hook, so they will also work in the live preview editor.

The announcement bar returned to the website as a useEffect hook to check if local storage contained the announcement variable, then set the state of the announcement to hide it if the user closed it. The announcement flickering was also fixed by making the announcement hidden by default and only appearing on the first useEffect render with a condition that checks the local storage!

## Deployment (May 18, 2023)

It was found that the GitHub Pages workflow would still not complete the build process even after reaching the final stable build before public release. The site would build, but could not be exported as a static site because sitemap.xml was rendered on the server-side because it took data from the API endpoints. In addition, images using the Next/Image component would not be optimized if served as a static site. Since Vercel reliably worked for the entire time of pre-release development, I made the decision to switch to deploying the website on Vercel. The Google domain records were updated to remove GitHub’s record and use Vercel’s instead. Doing this caused the main URL to change from the apex otherpeoplesd.com to www.otherpeoplesd.com, but there should be no noticeable difference to end-users.

Pink-Currents is still deployed as a website at the GitHub Pages domain of other-people-ucsd.github.io/Pink-Currents/, although not everything works properly because the domain otherpeoplesd.com was hardcoded in some areas such as CSS urls.

Running a Google Lighthouse audit over the two websites’ homepages returned interesting results. While I accurately expected Calla-Lily to have around the same accessibility and best practices ratings, I was surprised that Calla-Lily was much faster in terms of performance. Thanks to Next.js’s image optimization, the network payload was 4837 KB with the cover image taking up 170 KB after being optimized. Most of the payload came from an optimized GIF, which is not a recommended practice to have for how much data it still contains. I plan on removing this GIF from the thumbnail and replacing it with a single image from the GIF instead.

In comparison, Pink-Currents’s network payload was 9152 KB where 8480 KB came from the cover image alone. Theoretically taking away the cover image would result in a total payload of 672 KB, which is a few hundred KB smaller than Next’s image optimization but the web developer must take an extra step to make thumbnails out of the images. For now, we shall let Next’s image optimization do the work so that the future website developer doesn’t have to worry about this in the future!
