---
title: Data Layer
sidebar_position: 5
contributor: Kevin Jang
---
This page assumes you have read through the [Schema](./schema) document. 

Posts are usually written in a hybrid of plain Markdown and HTML. This is necessary to support prose that contains styles different from the conventional formatting. It is beneficial to keep posts in the blog section as markdown or MDX files instead of writing the custom ones as standalone JS pages for organization as well as centralizing data in one area that is queried by the data layer. In addition, the posts can maintain a set of frontmatter that allows editors to modify and sort the pages more easily.

## Data in Next.js 

### Reading Data

To display the markdown posts, they must be rendered through static site generation. Posts must be read from the file subsystem. A helper function in `lib/posts.js` will identify all markdown files in the target directory and all of its subdirectories.  

### Parsing 

Next.js does not automatically parse the markdown files by default, so it is necessary to implement a markdown parser. A useful feature of Next over Jekyll is how extendible analyzing the data is because we have to implement this ourselves. Calla-Lily uses Grey Matter to extract the frontmatter from the markdown files, then parses the content beneath the frontmatter using Remark for plain markdown and unsanitized Rehype to maintain the HTML tags. In addition, we analyze the content for attributes such as word count and it is possible to extend this further for things such as number of paragraphs, sentences, etc. This is a feature that would be slightly challenging to do within TinaCMS while maintaining the performance that it grants editors because Next runs all of the data analysis at build time instead of runtime.

Anything related to data transformation or analysis is done in the `lib` directory.

:::tip

Analyzing the text in this implementation can even be used for word trends and AI purposes! Think recommendating stories based on the content of the current story!

:::

:::warning

While the content is parsed in valid HTML in the contentHTML prop, it is not used to display the content of stories to the pages. Refer to [issue #27](https://github.com/Other-People-UCSD/Calla-Lily/issues/27) resolved through the TinaCMS parsing strategy.

:::

## Data in TinaCMS

TinaCMS queries the raw post data independently of the Next.js data transformations and analyses. It is possible to do the data parsing and analysis in the TinaCMS pipeline, but we keep it separate because of how Calla-Lily was built due to switching to a different headless CMS. When TinaCMS becomes not compatible with our website direction, not maintained anymore, or discontinued, it will be necessary to mount a new headless CMS to allow editors to publish to the website. 

### Reading Data: GraphQL

Data that is referenced through the schema will automatically generate GraphQL queries with fields that point to the frontmatter keys and the content of the file. For many files such as the posts, the query will collect a page of fifty edges instead of all at once. To maintain this page-cache format, we iterate through the GraphQL query results and if there is another page, it gets queried for its results. [This issue was resolved in PR #17](https://github.com/Other-People-UCSD/Calla-Lily/issues/16). 

GraphQL queries can be locally tested through the API at the url `http://localhost:3000/production/index.html#/graphql`. TinaCMS automatically generates queries for the schema connections within the `tina/__generated__/queries.gql` file during development and production stages. Using the generated queries here can be a great debugging tool when trying to access data that comes from the posts. In addition, there is room to use the GraphQL API for more advanced use cases like data science and analysis.

### Parsing

We attempted to use the TinaMarkdown component to parse the markdown-HTML files, but TinaCMS v1.4 did not properly parse HTML tags. TinaMarkdown resulted in the HTML being seen as plaintext and rendered to the screen. This would have caused issues with almost all posts because images and styles would not be displayed. 

Instead, we use our own parsing component inspired by the TinaMarkdown component to perform the parsing we want. Because the component is rendering JSX instead of HTML, we cannot use Remark/Rehype to parse the data or it may display the HTML as plaintext as well. To solve this, we implement the html-react-parser plugin and use it to parse HTML blocks as well as inline HTML. Sometimes the content of a post that usually written in HTML might be called `invalid_markdown` and this will also be parsed by the plugin. [This issue was resolved in PR #26](https://github.com/Other-People-UCSD/Calla-Lily/issues/27).

### Live Editing

The main advantage of using the TinaCMS pipeline for most of the data is the live editing feature. The content is displayed next to the editable fields which makes it an excellent UI for editors to see how the story would look when it gets published. The focus on maintaining a fast runtime performance here is why the other data relations such as adjacent posts or word count are handled in Next.js because those are attributes that should not change often and aren't necessary for editors to change.