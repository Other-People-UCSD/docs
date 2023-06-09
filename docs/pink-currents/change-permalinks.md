# Changing Permalinks

* Status: Completed
* Author: Kevin Jang
* Deciders: Montanna, Nicole, Geraldine (editorial and design directors)
* Date: June 1, 2021

## Context and Problem Statement

Permalinks (URLs) are an important component of a website from giving the application a hierarchy to follow to improving SEO and user experience. Modifying these links have a great impact on end users, especially when there are many posts (real application: removing the date from over 220 posts of Alchemy the Journal). It is important to address optimal URLs early on for better UX both externally (general audience) and internally (management).

## Decision Drivers

### **UX Experience**
Writers and artists should be confident that their work is guaranteed to exist at the permalinks they know/saved.
* Relevance: Are certain details, such as the file extension and date, really necessary to our audience? 

## Considered Options

1. Change the permalink to `domain/:categories/:title`
2. Leave permalinks as the Jekyll default `(domain/:categories/:year/:month/:day/:title:output_ext)`  
3. Use a different format `domain/:categories(incl author name)/:title`

## Pros and Cons of the Options

### 1. Change the Permalink to the First Option

`(domain/:categories/:title)`
`https://otherpeoplesd.com/1/together-youandme-est.2010`

* Remove date: We publish *biannually*, so there is no need to have a date to describe when we actually uploaded the post to the website. The date on the file should only be used internally to cycle through next and previous posts.
* Remove file extension: The file extension is irrelevant to a literary magazine. Removing the extension masks our implementation of the website
* **Changing permalinks will affect all 41 post links, so accessing those old links will redirect to the 404 page!**

### 2. Leave Permalinks As the Jekyll Default

`(domain/:categories/:year/:month/:day/:title:output_ext)`  
Example: `https://otherpeoplesd.com/1/2020/07/31/a-love-letter-to-the-ucsd-protected-wifi.html`

* Current UX with accessing links will not be affected.
* Contains irrelevant components as described in Option 1.

### 3. Use a Different Format than Proposed

`(domain/:categories(incl author name)/:title)`  
`https://otherpeoplesd.com/1/vilar/skin`

* Distinguishes same-title posts from each other by the author's last name in the link.
* Inherits the masking of date and file extension as described in Option 1.
* **Changing permalinks will affect all 41 post links, so accessing those old links will redirect to the 404 page!**
* Internally searching for this particular file might be confusing because there is no date to easily reference. The categories are inside the file's front matter so the management experience is worse than that of the end user.
 
## Unresolved Issues
* 404 Page Not Found page: A changed permalink will redirect to the 404 page. Users should immediately be given an explanation of changed permalinks and a way to query for their work (suggested: through the website's search menu).
* Post title: how should same-title posts be resolved? How long should titles be (see example in Option 2)?