# Alt Text Field on Front Matter

* Status: Completed
* Author: Kevin Jang
* Deciders: Montanna, Nicole
* Date: June 3, 2021

## Context and Problem Statement

Slow internet can cause things on a website to not load, so users will not see art and photography loaded on the website. To help users gain a sense of what we display, a description in the form of `alt` text should be provided on every image.

## Decision Drivers

* UX: users who are unable to load an image will not see any description of the image. They won't know what the image looks like and wouldn't spend time on that page/post.
* HTML Validation: No alt text on images throws an error. For well-formed HTML, there should always be alt text on every image.

## Considered Options

1. Add an "alt" field to the front matter.
2. Continue manually inserting alt text everywhere.

## Pros and Cons of the Options

### Add an "alt" Field to the Jekyll/Forestry Front Matter

```
---
thumb: '/uploads/Laura Esbensen_Other People Submission - Laura Esbensen.JPG'
alt: 'Medium: Acrylic on wood'
---
![page.alt](page.thumb)
```
This will turn into `<img src="/uploads/Laura Esbensen_Other People Submission - Laura Esbensen.JPG" alt="Medium: Acrylic on wood">`. Note that the alt text is located inside the Markdown square brackets.

Side note: image names should be changed to remove the spaces because that returns an error in HTML validation (See the 2.1.99 HTML validation report).

* Provides a visible field for non-developers to provide a description of the image
* Since Forestry allows front matter fields to be left empty, posts without images will not be affected
* This approach will work on the home and genre pages because the front matter field can be referenced as seen in the example.

```
---
title: Fronteras
contributor: Nicole Lopez
thumb: '/uploads/IMG_5773.JPG'
alt: ['Medium: Photography', 'second alt text']
---
![page.alt[0]](/uploads/IMG_5773.JPG)
![page.alt[1]](/uploads/IMG_5775 (1).JPG)
```
* If there are multiple images, then this is a design choice by the developer to resolve. 


### Manually Write `alt text` Into the Code
```
---
thumb: '/uploads/Laura Esbensen_Other People Submission - Laura Esbensen.JPG'
---
![Medium: Acrylic on wood](page.thumb)
```
* If there are multiple images, this works fine.
* May or may not work on Forestry
* Cannot reference the alt text for the home and genre pages because there is no way to extract that alt text. This is a severe limitation of manually writing alt text.


## Unresolved Issues
* Front matter and alt text for multiple images in a post. This is a design choice that needs to be further tested with holding an array of images in the thumb field with a complementary array of alt text in the alt field.

Resolved by using HTML for additional images. The front matter image will be a thumbnail that is displayed in the list of posts and is automatically given an alt text description.