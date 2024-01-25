---
sidebar_label: Zine Viewer
---
# PDF to Embeddable Double-Spread Magazine Viewer

[https://flipbook-git-main-other-people.vercel.app/](https://flipbook-git-main-other-people.vercel.app/)

The zine viewer utilizes the `react-pdf` package that uses Mozilla's `pdf.js` vanilla JS software to render pdfs to the page. This project provides a React-based UI to view pdfs in a digital magazine format. 

## Current Features 

- Changing page
  - Can be improved to only render once the slider is released
- Rough rerenders for zooming
- Moveable viewer such that specific parts of a zoomed page can be read clearly 
- Embeddable on other domains with full functionality as long as allow=fullscreen is enabled
- Viewing pages as single pages instead of a spread

## Unsupported Features 

- Smooth zooming
- Changing the viewing option to other pdf files
  - Can be approached by defining different routes for different zines