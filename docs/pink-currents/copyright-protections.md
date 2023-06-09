# Copyright Protections

* Status: Approved
* Author: Kevin Jang
* Deciders: Directors
* Date: February 3, 2023

## Context and Problem Statement
In the past, we have found some of our works stolen or traced without our permission. A notable incident is the cover for Collection No. 3 Self-Identity where it was traced to the exact lines and sold commercially on Redbubble. The artist for the piece was unaware of this and caused the admin board to consider copyright protection over what we publish digitally. 

It is understood that we cannot fully prevent a user from copying an image or text because of several workarounds. However, we should prevent most forms of copying that most visitors will try. 

## Decision Drivers

* Security: Will protections make a significant impact on preventing users from copying published work?
* Accessibility: Will screen readers continue to read the content of published works with added copy-protections?

## Considered Options

1. Copying by clipboard
2. Copying by dragging
3. Copying by context menu

## Decision Outcome

* Implementation of these options using double-redundancy encoded in JavaScript. 
* Added a feature to allow users to copy a single section by using a specific keyword in the work. (Resolves negative consequence #1)

### Positive Consequences 

* Users cannot copy text to the clipboard.
  * If the start of the selection falls inside the event listener, the text cannot be copied even if the user is able to open the context menu.
* Users cannot save images nor open them in a new tab.

### Negative Consequences

* For specific digital works where users are encouraged to interact with the page, the denial of copying in an editable field may confuse them because they weren't intentionally trying to steal work.
* Assistive tools that add options to the context menu will not be accessible because opening the context menu will be denied.

## Known Workarounds
[REDACTED ON PUBLIC ADR]

## Further Improvements
* Check with UC San Diego's office for copyright if the website is protected under their copyright. If not, the ideal option is to register for copyright ourselves when we have the budget for it.