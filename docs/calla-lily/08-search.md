---
title: Search and Displaying Recommendations
sidebar_position: 8
contributor: Kevin Jang
---

The search function in Pink-Currents used a dependency on Jekyll that got the data from posts and used that to filter results. Since Calla-Lily cannot use that dependency, we ended up building a custom search function to do this operation.

At a high-level, the program uses the collection or category number, title, contributor(s), and tags as queries to filter on. It generates a list of up to ten works per page that match the search query.

## Improving Search in the Future

Ideally search should be implemented on the server-side using data indexing for fastest performance and simpler maintenance. Because the data is filtered on the private server, the search query could match on the textual content of copyrighted works. There will not be data leakage as this textual content is not exposed to the client in the API response. The API response would only contain the data that would be displayed to the user, such as the title, contributor, and genre.

## Advanced Search (2024)

The new UI/UX implements a search and filter component that does not rely on Next.js passing of data through `getStaticProps`. Instead, it utilizes the native API to fetch the data for the posts once the user opens the search bar. This has its tradeoffs, but improves scalability maintenance and conserves a negligible amount of space because the data is requested on-demand instead of all the time. The search must address network performance which can be done by using a data loaded state.

The filter should scale well for several years until there are over twenty collections or content years of data. Then the UI should be modified to either do a lookup for valid options or use a "show more" button to display additional filter inputs. 

This filter uses conditional logic to achieve its function. Since collections and content years are mutually exclusive groups, their filtered results should be disjunctive. In addition, a user may want to filter by the genre of works. The genre may or may not include works from collections and content years, so this is a conjunctive field. Then the conditional logic becomes `GENRE AND (COLLECTION OR CONTENT_YEAR)`. For the initial state of the filter the logic is `(HAS TAGS AND NOT GENRE) AND NOT COLLECTION AND NOT CONTENT_YEAR` due to how the data is compared.

Results are paginated to ten results with a navigation bar at the bottom to show more matching results. We also use text highlighting on the title and contributors to show how the query matches the result item.

### Data Modeling

```js
metadata = {
    "years": ["2020", "2021", ... , "2024"],
    "collections:" ["1", "2", ... , "6"],
    "/2023/hole": { "slug", "wordCount", "title", "contributors", "date", "tags", "thumbnail" , "excerpt" },
    "/1/fire": Object<Metadata>
}
```

## Feeding Data to Search Component (2023)

The main problems to make the search function work was getting the information needed to filter results from. First, only the `[...slug].js` pages contained the data which meant landing pages could not show search results. In addition, is there an easier way to pass the props from the `pages/app.js` file where all props are kept all the way to the `components/search.js` file?

To solve the first problem, we have to get all of the post data and set it onto every page where search is enabled. This is done through creating a `getStaticProps` function onto each of these pages and they will store the same post information as `[...slug].js` via the `getSortedPostsData` function in `lib/posts.js`. All of these pages will then have the prop `props.allPostsData = getSortedPostsData()`. This solution means that any new page with a search bar will have to reuse the `getStaticProps` function from one of these posts.

The latter problem is an architectural problem which can be solved naively by brute-force passing the prop down the top-level until it reaches the search component as `<App> -> <Document> -> <Layout> -> <Header> -> <MobileNav> -> <Search>`. 

There is a more ingenious approach by utilizing React's `useContext` hook. Context in a React app is the process of making a variable in a parent component available to any of its children no matter how deep it is in the component tree. The benefit of the context is that the variable does not need to explicitly passed through each of these children components. 

To do this, we wrap the children component of `<App>` with the context defined in `components/appContext.js`. This wrapper creates a context only with the variables necessary so as to not cause bandwidth overhead passing in unused variables. Then the `useAppContext` function can be called from any child component such as `<Search>` to receive the variables saved in the context. This is how the collection of sorted post data and recommendation data is passed to the search component.

## Displaying Recommendations ([...slug].js only)

If there are recommendation results for a work, they will be fed through the `getStaticProps` function. The app context as explained in the previous section will save this prop into the state and feed it down to the search component. Then the recommendations are displayed under the search in this priority.

1. If there is nothing typed in the search query and there are recommendations, display the top 10 recommendations.
2. If there is something typed in the search query, display the top 10 search results.
3. If there is nothing typed in the search query and no recommendation results, display the 10 most recent works published.