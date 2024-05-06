---
sidebar_label: Data Science Using the Post API
sidebar_position: 80
---
# Data Science Using the Post API

## Overview

The Other People Team is able to utilize the post API to perform data science research over published literature. Several relevant topics to this research is web mining, recommendation systems, and identifying patterns in a writer's language. It is important to note that this should be a read-only form of analyisis because although we have the rights of the published works, we still respect the writers who have worked hard to tell these stories. Therefore, using the post API for any form of generative AI models is prohibited. 

## Post API

The API currently has four endpoints to access post data.
- /api/post-metadata.json
- /api/post-data.json
- /api/pages.json
- /spi/site-urls.json

The `post-metadata.json` endpoint accesses the frontmatter of all the posts. This metadata is specified in the post schema page. This endpoint can be utilized to filter out certain posts by date, tags, etc. such that querying for post data is faster than getting data from all posts using the post-data.json endpoint.

The `post-data.json` endpoint is a collection of all post data including metadata and the text within the page. This introduces additional keys such as wordCount and `noHTML` which returns the raw text of the page without any HTML tags or indications of styling applied to the text. Markdown styles are also omitted because the data parser converted the text into HTML before the text was stripped again into raw text.

The `pages.json` endpoint is a collection of valid landing pages as specified in the `/lib/posts.js` `getLandingPages` method. This can be used to crawl for the submissions page to see if submissions are open, and if so, collect the links to submit works.

The `site-urls.json` endpoint is used for crawling over the website. This is used for the Lighthouse audits.
  
## Data Science in Python

Python is commonly taught at UCSD for performing data science or recommendation systems, so this documentation will use Python syntax.

### 1. Connecting to the API

Connecting to the API endpoints is a simple fetch for the Next.js serverless function endpoints. There will be a loading time to get the data because these endpoints are compiled by the server instead of being statically generated.

```python
import requests
import json
res = requests.get('https://www.otherpeoplesd.com/api/[endpoint]')
```

### 2. Parse the Data Into JSON

Each endpoint exposed by the developer should already be formatted into JSON. The following line will retrieve the raw text from the endpoint and decode it using the JSON library.

```python
data = json.loads(res.text)
```

### 3. Viewing the Data

The JSON data is usually in JSON object format which is stored in a key: value pair for each of its items. To view all keys as a set, use the `data.keys()` function. This is very useful to know what objects exist as you cannot iterate over the JSON object data using array indices. What this will usually return from the top-level data in the endpoint is the slug of the post. If you prefer to read the data using an array, you have to reassign the keys to numbers.

```python
postKeys = data.keys()
print(postKeys)
> ['/2023/nesting-dolls-and-snakeskin', '/2023/hole', '/2023/out-of-use', ... , '/1/skin-vilar']
```

## Projects to Explore

- [The Literary Arts Recommendation System](/docs/recommendation-system)