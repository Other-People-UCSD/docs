---
title: Getting Started
sidebar_position: 1
contributor: Kevin Jang
---

## Prerequisite Knowledge

Developing Calla-Lily assumes you know HTML/CSS/vanilla JS. If you do not have sufficient knowledge. Please refer to the training documents in the private organization folders.

Please understand React, Next.js, and TinaCMS. Ideally go through the React tutorial, then the Next.js tutorial by making a starter blog as well as connecting it with TinaCMS.

## Installation

```
$ pnpm install
```

## Local Development

```
$ pnpm dev
```

Develops the website on a local server for both Next.js and TinaCMS. 

## Linting

```
$ pnpm audit
```

This command checks to make sure the Next program runs properly as well as checking that TinaCMS renders everything. 

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

Snapshot testing is currently only aligned with snapshots created on Windows devices. 

The E2E command runs in the command line and outputs an HTML report to view the results of all tests. On the other hand, the UI command will open Playwright UI where tests can be run individually or all at once.

### Updating Dependencies

```
$ pnpm up --latest --interactive
```

Update the dependencies in the lockfile `pnpm-lock.yaml` and save the changes to `package.json`.
