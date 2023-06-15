---
title: Getting Started
sidebar_position: 0
contributor: Kevin Jang
---

## Prerequisite Knowledge

Developing Calla-Lily assumes you know HTML/CSS/vanilla JS. If you do not have sufficient knowledge. Please refer to the training documents in the private organization folders.

Please understand React, Next.js, and TinaCMS. Ideally go through the React tutorial, then the Next.js tutorial by making a starter blog as well as connecting it with TinaCMS.

## Installation

```
$ yarn
```
## Build

```
$ yarn build
```

This command generates the static website content into the `.next/out` directory.

## Linting

```
$ yarn audit
```

This command checks to make sure the Next program runs properly as well as checking that TinaCMS renders everything. 

## Local Development

```
$ yarn dev
```

Develops the website on a local server for both Next.js and TinaCMS. 

### Updating Dependencies

```
$ yarn upgrade-interactive --latest
```

Update the dependencies in the lockfile `yarn.lock` and save the changes to `package.json`.
