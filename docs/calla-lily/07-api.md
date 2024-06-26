---
title: API Endpoints
sidebar_position: 7
contributor: Kevin Jang
---

The purpose of creating an API for this website is to create insights over the literature and art* published at Other People. Most API calls are used in the [data science section](../data-science).

:::note
*There are no endpoints for artwork to prevent crawling the api endpoints to get the image and circumvent copying. However, there haven't been any outside attempts by adversarial crawlers to access the API endpoints in the server log. The better option in the future would be to use a Content Delivery Network (CDN) for this purpose and to display the image anywhere.
:::

The API functions are not statically generated and are referred to as serverless functions in the Next.js framework. They use an asynchronous `handler` function to get data from a function inside `lib/posts.js` and then transform the data into a JSON object to the endpoint. To understand what each endpoint outputs, it is best to look at these functions because their return objects have conditions depending on if it is for the static site or for the API.

- Endpoints
  - `api/site-urls.json` returns an array containing all public site urls that are allowed to be indexed by crawlers. Used for quickly getting a list of all urls.
  - `api/pages.json` returns urls for the landing pages. Used in `sitemap.xml` and `api/site-urls`.
  - `api/post-metadata.json` returns an object of `{slug: {...props}}` format. Only contains the metadata or frontmatter.
  - `api/post-data.json` returns an object of `{slug: {...props}}` format. Contains the metadata and noHTML content.
  - `api/post/[...slug]` returns an object of `{...props}` format. Contains metadata, noHTML, and HTML contents.

- Valid HTTP Methods
  - `GET`. The native API is meant to be read-only. For modifying posts, use the TinaCMS API that requires an authenticated user and project token secret.


- Custom Headers
  - `"opm-content": "preview"` limits how much plaintext content is provided to the client. 
  
Custom headers are case-sensitive, so it is suggested to write them in lowercase prefixed with `opm`.