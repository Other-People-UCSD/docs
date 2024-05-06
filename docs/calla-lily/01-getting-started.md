---
title: Getting Started
sidebar_position: 1
contributor: Kevin Jang
---

## Prerequisite Knowledge

Developing Calla-Lily assumes you know HTML/CSS/vanilla JS. If you do not have sufficient knowledge. Please refer to the training documents in the private organization folders.

Please understand React, Next.js, and TinaCMS. Ideally go through the React tutorial, then the Next.js tutorial by making a starter blog. If you're looking for a challenge, you can attempt to connect it with TinaCMS to learn how headless CMS systems integrate with a framework.

## Installation

```
$ pnpm install
```

Updates your `node_modules` based on the current `pnpm-lock.yaml`. This command should be run every time you switch to not-up-to-date branches.

## Local Development

```
$ pnpm dev
```

Develops the website on a local server for both Next.js and the TinaCMS API. 

## Linting

```
$ pnpm audit
```

This command checks to make sure the Next program runs properly as well as checking that TinaCMS renders everything as expected. 

## Build

```
$ pnpm build
```

This command generates the static website content into the `.next/` directory. Do not commit any built resources as this is handled by Vercel, our deployment CI/CD.

## Testing

```
pnpm test:e2e
pnpm test:ui
```

The E2E command runs in the command line and outputs an HTML report to view the results of all tests. On the other hand, the UI command will open Playwright UI where tests can be run individually or all at once.

### Updating Dependencies

```
$ pnpm up --latest --interactive
```

Update the dependencies in the lockfile `pnpm-lock.yaml` and save the changes to `package.json`. Updating dependencies should be done on a separate branch to check that the site runs as expected because some patches may not be entirely stable.
