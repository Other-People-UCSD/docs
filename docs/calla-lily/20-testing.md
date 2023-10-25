---
title: Testing
sidebar_position: 20
contributor: Kevin Jang
---

Testing is done in two areas: Playwright for E2E website tests that end users would see and Storybook unit tests to isolate component functionality across different themes. Both of these frameworks have their advantages and allows us to increase coverage over different purposes of the code. 

## Playwright (E2E)

Playwright is set up to emulate several different device types with varying viewports. This makes it simple to test for different user experiences as most notably the header changes in response to mobile device width. 

In addition, Playwright comes with snapshot testing to determine changes that occur to pages. This is beneficial when updating dependencies because some updates may break existing functionality and cause parts of the website to not render properly. The snapshots would catch those changes immediately and provide a diff to allow our developers to resolve those issues. However, the snapshot tests are inconsistent as the viewport dimensions may deviate from the saved snapshots or parts of the DOM do not load in time before the snapshot is taken, causing a slight difference in how it is displayed. This slight difference is not an issue for end users but causes us to set a snapshot diff ratio threshold to account for this. 

It is important to not write lots of tests because tests can be redundantly covered by other tests. For snapshots that test the parser's ability to render published work properly, the basic operations of displaying hybrid HTML-Markdown are covered by the tests run over customized works and niche styling works. Skipping basic tests like this preserves space usage on the repository and makes viewing snapshots a cleaner as there aren't hundreds of screenshots to look at.