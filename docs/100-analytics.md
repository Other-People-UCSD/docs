---
sidebar_label: Web Analytics
sidebar_position: 100
---
# Web Analytics

The Calla-Lily website now recently uses Google Analytics to gain insight on how users interact with the magazine's contents. The goal of analytics is to increase user engagement and the user experience, so sharing this data to the social media team will allow us to figure out better strategies to grow interest in our magazine.

## Setup

The integration for this is located in the top-level `pages/_app.js` file which is at the heart of rendering the pages to the website. The reason for this is that the analytics script shall load right after the bare skeleton of the page is created to track how long it takes for the page to load for a user and if a user creates a bounce by exiting the page before it even finishes loading. The strategy type for the script is `afterInteractive` as suggested by the Next.js framework such that the script will load in after critical parts of the website are attached so that gathering analytics doesn't block the important interactions for the user's experience. 

## Google Analytics

Google Analytics was chosen over the built-in Vercel Analytics because it is more verbose for the budget available. The free plan for VA only tracks page views which makes it lacking in what the information can be used for. On the other hand, GA shows how long a user has stayed on a page and also scroll events so that we can see if people are reading the stories and art we publish. The configuration used for GA does not and should not need to track demographics as we do not use advertisements on our website. It is best to keep the information we collect as anonymous as possible, but collecting city information as default is still enabled to see how people outside of the San Diego region engage with the website as well. Getting more interest outside of the San Diego community would reflect upon Other People's success as a more recognized magazine outside of its identity as a student organization at the University of California, San Diego, and may show our relationship to other media publications at the other UC campuses as well.

Google Analytics will not run over development or deployments using the `vercel.app` url to prevent developer bias on the analytics reports. A developer usually spends more time than a user on the pages, so this information should not be tracked or put in a separate reporting group.

:::note
If you see a spike of users every Sunday/Monday that is our scheduled Lighthouse runner. This value should be the average amount of users plus the number of pages in the website. The location of these "users" come from random cities because that is where the runner's server is located. However, if there is more than one spike every week, someone is running a crawler on the main website. 

To remove this spike, we may need to set a custom HTTP header to disable GA for these runners. Or modify the workflow and API to change the site URL response to the vercel version.
:::

## Custom Functions

*There are currently no custom analytics functions*. Web analytics can be extended further by defining custom events using JavaScript functions within the website code. Refer to the Google Analytics documentation for further information on how to do this.