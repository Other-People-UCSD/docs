---
title: Testing
sidebar_position: 20
contributor: Kevin Jang
---

Testing is done in two areas: Playwright for E2E website tests that end users would see and Storybook unit tests to isolate component functionality across different themes. Both of these frameworks have their advantages and allows us to increase coverage over different purposes of the code. 

## Playwright (E2E)

Playwright is set up to emulate several different device types with varying viewports. This makes it simple to test for different user experiences as most notably the header changes in response to mobile device width. 

Current test coverage is complete over the native API as well as simple navigation between pages in the website. There are also tests for testing common published work attributes such as metadata and even checking if copyright protections are enabled. Tests cover three popular device types and mobile views to ensure that the website is working properly for most users.

It is important to not write lots of tests because tests can be redundantly covered by other tests. For snapshots that test the parser's ability to render published work properly, the basic operations of displaying hybrid HTML-Markdown are covered by the tests run over customized works and niche styling works. Skipping basic tests like this preserves space usage on the repository and makes viewing snapshots a cleaner as there aren't hundreds of screenshots to look at.

Testing also covers the functionality of new features such as the search component to ensure that the various edge cases work as expected.

### Snapshot Testing (Removed)

Snapshot tests were removed because of the inconsistencies they had when using the workflow runner as many tests kept timing out for stale network requests. It is better to use unit tests to ensure core functions work as expected. 

Playwright comes with snapshot testing to determine changes that occur to pages. This is beneficial when updating dependencies because some updates may break existing functionality and cause parts of the website to not render properly. The snapshots would catch those changes immediately and provide a diff to allow our developers to resolve those issues. However, the snapshot tests are inconsistent as the viewport dimensions may deviate from the saved snapshots or parts of the DOM do not load in time before the snapshot is taken, causing a slight difference in how it is displayed. This slight difference is not an issue for end users but causes us to set a snapshot diff ratio threshold to account for this. 
