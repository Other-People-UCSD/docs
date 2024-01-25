---
sidebar_label: OPM History
sidebar_position: 2
---

# The History of the OPM Dev Team

## About OPM
The following is taken from our official website's about page:
> Other People Literary Magazine at UC San Diego is the first student-run literary magazine and club.  

> We publish biannually in the Fall and Spring and accept works of fiction, poetry, creative nonfiction, art, and photography. We wish to present the dynamic range of artistic capability inherent in UCSD students, to create an inclusive platform to share creative works, and to encourage literary and artistic exploration among all students. We seek to embrace our core principle of showcasing “O(the)r People,” or celebrating at once our diversity, our individual uniqueness, our shared experiences, and our collective journey through this world. Our hope is that Other People Magazine will become a permanent organization at the University of California, San Diego, and will remain an enduring outlet for student creativity.

## The Digital Branch's Story 
Other People Magazine started out as a digital magazine for several reasons. The main point being that the organization was established months before the COVID-19 pandemic. That made it inevitable that Other People Magazine would have its own website to display literature and the arts, but what kind of website would it be?

The Other People Magazine founding team could have chosen any popular content management system with friendly editing UIs for editors to work on. However, the recruited website developers wanted a challenge. In the spirit of what it means to develop a website for a creative space in an academically focused university, we built our website from our own lines of code. 


### Gen 1 (2019-2021)

- Eunsoo Lee / Website Developer (2019-2020)
  - Pink-Currents v1.0.0-v2.1.99
- Elysia Mac / UI Designer (2020-2021)
- Jack Yang / Web Designer (2019-2020)
  - Initial Pink-Currents Design

The initial idea for Other People Magazine's website was a brutalist-minimalist theme that would contain large animations and popups that caught the user's attention. [This sketchboard of the UI](/pdf/opm-website-gen-1.pdf) captures the concept that the first generation was going for. It was an ambitious project that took months to complete because Eunsoo Kim was the sole developer as well as acting the design director during her time at Other People. The first efforts to build the website can be seen in the historical [dandelion_kisses](https://github.com/otherpeopleucsd/dandelion_kisses) and [honey_daisy](https://github.com/otherpeopleucsd/honey_daisy) repositories. The former was a clean Jekyll build while the latter included the Forestry.io integration, a headless CMS that allowed editors to create posts such as prose and art to publish. 

Eventually honey_daisy would be replaced with [Pink-Currents](https://github.com/Other-People-UCSD/Pink-Currents), a cleaner website interface that used animations to keep with the minimalist design the team was going for. Pink-Currents did not have most of the UI designs that existed in the initial sketchboard. Instead, its service as a non-intrusive interface without any popups or big animations kept to the idea of minimalism while allowing users to have a simple reading experience for the published pieces. After Eunsoo's website development with Pink-Currents, the editor-in-chief, Montanna Harling, was responsible for a period of publishing commits through the Forestry.io CMS from September 19, 2020 to May 4, 2021.

:::info

Gen 1 of the digital branch is responsible for publishing content writing posts from April 2020 to May 2021 as well as Collection No. 1. The website at the time did not include Collection No. 2 despite it being released in February 2021.

:::

### Gen 2 (2021-2023)
- Kevin Jang / Website Developer (2021-Current)
  - Calla-Lily v4.0.0-Current
  - Pink-Currents v3.0.0-3.3.3 
  - Documentation Website
  - UX Designer (2021-2022) 
- Isabella Villante / UX Designer (2022-2023)

Everyone in Gen 1 ceased website development by around October 2020 due to graduating from UCSD. As a result, Kevin Jang did not have anyone to show them how Pink-Currents worked in June 2021. He had to read through all of the source code by himself and made many refactoring changes to remove unimplemented styles or components. Refatoring allowed him to discover how important it is to optimize codebases as the size of the GitHub repostiry was cut in half within weeks of joining the team. Improvements to accessibility were made so that users could open the menu navigation with their keyboard because it previously required a mouse to open. 

As a computer science major who has experienced what it is like to contribute to programming projects with other developers, Kevin put the practices he learned into managing Other People's website. His passion for literature and programming resulted in extensive documentation over important decisions that were made in Architectural Design Records (ADR)s that can be found in this documentation website. Throughout the two years with Other People, Kevin made significant performance optimizations to the website by understanding how media was served to the client and making sure that media was properly sized. In addition, Other People saw stories become more than just words on a page as posts were styled with HTML and CSS in the way authors envisioned their pieces to look. Other People Magazine started to see a gradual increase in innovative stories with "[missed connections (1 new post)](https://www.otherpeoplesd.com/2023/missed-connections)" and "[You Have Created An Imaginary Friend](https://www.otherpeoplesd.com/6/you-have-created-an-imaginary-friend)" taking months to create modular programs for so that future works of those types could be easily displayed without making entirely new programs.  

There were also major changes to Other People's development. With Forestry.io's discontinuation in April 2023, Pink-Currents needed a new way to let editors publish pages in the event that Kevin did not continue to maintain the website. There were no recruits with web programming experience to manage the website and many modern headless content management systems were most compatible with React website for feature support, so Kevin rebuilt Pink-Currents as Calla-Lily. Calla-Lily is a React website built on the Next.js framework with TinaCMS (Forestry.io's descendant). Many of the functions that Jekyll abstracted in Pink-Currents had to be custom-built by hand such as parts of the data layer and middleware. The [Calla-Lily release note](/docs/calla-lily/calla-lily-release) goes into great detail of what occurred during this one month process.

:::note

This documentation website was also created by Kevin Jang to ensure that future members of the digital team can continue to make Other People Magazine one of the most innovative and performant digital websites. College students will also be able to see Other People Magazine's development team as an opportunity to grow as website developers in the creative field! Therefore, all documentation in the Pink-Currents repository, Calla-Lily repository, and in the Other People Google Drive will be consolidated in this website to understand what's changed, why those changes happened, how those changes were made, and what's next for Other People's digital future! 

:::

:::info

Gen 2 of the digital branch is responsible for publishing all content writing posts up to June 2023 and Collection No. 2 to No. 6.

:::

### Gen 3 (2023-Present)
- Katie Lew / UI Designer (2023-Current)
- Steven Tran / UI/UX Designer (2023-Current)

This team is currently redesigning the existing website's UI to improve the brutalist aesthetic while enhancing the UX of navigating the publication. They have built a design system to normalize the UI states of components throughout the product.