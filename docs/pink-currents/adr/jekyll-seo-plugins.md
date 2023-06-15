# Adding Jekyll SEO Plugins

* Status: Proposed
* Author: Kevin Jang
* Deciders: Montanna, Nicole, Geraldine (editorial and design directors)
* Date: June 2, 2021

## Context and Problem Statement

Search Engine Optimization (SEO) is important for any website that wants to gather attention on the internet. For a literary magazine, getting the Other People name beyond the university allows our published UCSD authors to gain more exposure (or at least a trace of their achievements) for their future careers. Instead of manually writing SEO headers for every single post, Jekyll provides officially recognized plugins that automatically do the SEO for us!

## Decision Drivers

* **SEO**: Higher ranking on search engines. Currently, searching "other people" on Google returns our website on the seventh page.

## Considered Options

> There are three official plugins which are useful on almost any Jekyll site:  
> jekyll-sitemap - Creates a sitemap file to help search engines index content  
> jekyll-feed - Creates an RSS feed for your posts  
> jekyll-seo-tag - Adds meta tags to help with SEO  
> Source: https://jekyllrb.com/docs/step-by-step/10-deployment/#plugins

1. Use the `jekyll-seo-tag` plugin.
2. Use the `jekyll-sitemap` plugin.
3. Use the `jekyll-feed` plugin.
4. No change

## Pros and Cons of the Options

### 1. Use the SEO Tag Plugin
https://github.com/jekyll/jekyll-seo-tag

* These meta tags generate a preview when a link is pasted in most communication channels. Without these meta tags, all that is generated is a link.
* SEO Tags are identified by Google's search engine crawlers/bots to provide a ranking assessment of the website. Proper SEO results in a higher ranking.

### 2. Use the Sitemap Plugin
https://github.com/jekyll/jekyll-sitemap

* Generates an XML sitemap which is generally used by SEO crawlers/bots to assess search engine ranking.
* Sitemaps can be used to identify the last time a post or page was modified.
* Lists all valid links of the website for a consolidated reference (review in conjunction with permalinks ADR).

### 3. Use the Feed Plugin
https://github.com/jekyll/jekyll-feed

* No significant effect on SEO.
* Creates an RSS-like feed of all the posts on the website.
* RSS (Site Summary, Really Simple Syndication) is something consumers can use to create a news feed of their favorite websites. Think of it as following a social media account and you get to see their posts show up on your "For You" page.
* RSS used to be larger years ago and now about 7-10% of internet users still use RSS feeds.
  * https://www.vice.com/en/article/a3mm4z/the-rise-and-demise-of-rss
  * https://www.digitaltrends.com/computing/what-is-an-rss-feed/


## Unresolved Issues
* Add a description like the Other People mission statement as the meta description for use on the SEO Tag plugin.