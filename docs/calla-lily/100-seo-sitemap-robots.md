---
title: SEO, Sitemap.xml, Robots.txt
sidebar_position: 100
contributor: Kevin Jang
---

These three concepts were implemented in the [Release Notes](./calla-lily-release#seo-v454).

## SEO

We use the [next-seo](https://github.com/garmeeh/next-seo) dependency to add SEO tags onto the website. It provides many more customization options than the previous Jekyll SEO plugin used on Pink-Currents. 

The `_app.js` file contains the default SEO attributes that are used on all pages. Then `[...slug].js` contains SEO attributes that may overwrite the default attributes or add more things such as preview information for social cards. 

## Sitemap.xml

`pages/sitemap.xml.js` queries the API endpoints to find the urls of the site to insert into the sitemap. The sitemap is then generated through a template example found on the [Next.js documentation](https://nextjs.org/learn/seo/crawling-and-indexing/xml-sitemaps) on how to create a sitemap using `getServerSideProps`. Our sitemap includes the date a work was published to let search engine crawlers know how often we publish and to check in more often as compared to a competing website that does not add webpages often.

## Robots.txt

The `public/robots.txt` file directs crawlers on the kinds of webpages and files it can crawl on. Our implementation prevents crawlers from indexing images accessed through the public assets as well as the TinaCMS editor page. The plaintext file also tells crawlers where the sitemap is located.