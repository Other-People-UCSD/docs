# Organizing Posts and Uploads

* Status: Completed
* Author: Kevin Jang
* Deciders: Kevin Jang
* Date: February 9, 2023

## Context and Problem Statement

There are around 130 posts inside _posts top level directory, making it difficult to access adjacent folders because they all exist in one dropdown seection. It would be better to keep posts organized while also retaining the architecture structure of the permalinks. 

## Decision Drivers

* UX: Developers struggle to find the adequate files to work on when there are too many files in one direrctory.

## Solution

Separate posts and media files by their respective Collection number. For posts that are not part of a collection, put them in year-based folders of when they got published. Illustrations that were made for older posts will be put into the year that the post got published despite being created in another year. The idea for this is that a future design may utilize the category front matter and file year to automatically create better paths to files instead of having to manually change each URL when performing file changes like this commit's changes.

## Unresolved Issues
* The forestry.io configuration needs to be checked so that non-developers can access the new folders as well as uploading media to the correct place, otherwise a website developer is still needed to maintain codebase organization.