---
title: Post Schema & Data
sidebar_position: 4
contributor: Kevin Jang
---

## Post Frontmatter

Posts store metadata about their information through frontmatter written at the top of the file. The current frontmatter has the following frontmatter with asterisks indicating the field is required:

* Layout (default Post)\*\*
  * The layout template to use. 
  * Not modifiable by editors.
  * Works created in Collection 6 or later and after 2023 may not have this field. It is completely optional due to how the layout is handled in `[...slug].js`.
* Title\*
  * The title of the story to be displayed in the `<h1>` tag.
* Date\*
  * The date the post was published. Used in post sorting and SEO sitemap crawling.
* Contributor(s)\*
  * The authors of the prose or artwork on the page.
* Tags\*
  * Genres, highly general semantic details about what the post represents.
* Collection
  * The collection number of a post if applicable.
* Thumbnail
  * The thumbnail to display on the post preview cards.
* manualWC\*\*
  * This is an optional field to give custom-coded posts a word count that cannot be automatically generated. 
  * Not modifiable by editors. 
  * **Not specified in TinaCMS** 

as well as special frontmatter options that are defined further in special functions

* Theme
  * If a work is meant to be viewed in light mode or dark mode, force the theme to it.
* Content Warning
  * Warns the reader with an overlay mentioning the sensitive triggers. 

### Usage in Next.js

The information stored in the frontmatter key-value pairs is used in various areas of the website. Almost all of the fields are used in the main post generator page `[...slug].js` where the information fills in the values of JSX elements for rendering on the client side. Some of the fields can be used as conditional variables as well, so it is essential to know how these fields interact with the page. 

#### SEO

Date represents the time the post was published, and as such, it should be used in SEO to represent when the page was last updated. This serves to announce to web crawlers that the website updates often and consequently causes the crawler to index the website more frequently as compared to other websites.

### The TinaCMS Schema

TinaCMS is a headless CMS, meaning that it can connect to any frontend app and communicate through an API. The TinaCMS schema represents how the Tina API references files on the filesystem and interacts with it through specified fields. You can read more about how the schema works through the official TinaCMS documentation. In Calla-Lily, the schema for posts is defined for the above frontmatter as well as a `body` field to point to the content of the post below the frontmatter. 

## Homepage, Team, Schema

The homepage schema data is stored in a JSON file instead of a markdown file of the homepage. This is because the homepage has a limited range of elements that should be modifiable by editors and the rest should not be modified to maintain functionality. It would not be a good idea to let the autogenerated genre cards be vulnerable to edits when the algorithm behind it is not exposed to the editor. Therefore, keeping the "frontmatter" in a separate file makes it more maintainable by both editors and developers. These separate files are kept in the `data` directory to indicate that they are editable by editors and can be used in more than one file in the website. This is explained further in the `forms.json` section.

:::note

Pink-Currents used to use YAML syntax in frontmatter for the homepage or team page for this data. The choice to use JSON was used because Next.js could not read the data from a separate YAML file and put into a JS file through the default webpack configuration. To prevent unncessary complexity, we changed the syntax of the data to JSON because it did not require any changes to the configuration to access.

:::
## `forms.json` Data

The fields in the `forms.json` file include areas for submission form URLs, team application URLs, and the footer navigation. These items are used separately in the submission and team pages, so why are they in a single file? To reduce how many files the developer has to click through, we combined similar field data into a centralized file. This allows us to essentially "template" using the data in this central file instead of having several fields with the same data that must all be changed individually. By making those fields point to the data in this centralized file, the edits will be seen in those areas all at once. This makes maintaining the data simpler as verifying that the component works in one part should result in the component working in the other parts of the website. 

:::warning

The downside to keeping a centralized file like this is that TinaCMS's live preview function (explained in Tina docs and the next page) will not have a specific file to preview all of the components. It could be worthwile to define a development-only page to test that all of the field components work or just making a note of where each component occurs so that the data can be checked with ease.

:::