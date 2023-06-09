---
title: Typewriter Workflow
date: 2023-03-31T07:00:00.000Z
contributor: Kevin Jang
---
["missed connections (1 new post)"](https://www.otherpeoplesd.com/2023/missed-connections)

["missed connections" source code](https://www.otherpeoplesd.com/js/missed-connections.js)

## Abstract
The typewriting program allows text to be written character-by-character or word-by-word to the webpage while setting delays on when the animations occur. This was built for Angel Sta. Maria's poem "missed connections (1 new post)" because the poem was designed to be animated in this way. 

## Context Statement

At the time, there were some JavaScript programs that did typewriting, but they relied on dependencies such as JQuery or ReactJS. The poem "missed connections" was originally published on the Jekyll-based Pink-Currents website which did not have dependencies on either of these libraries or frameworks. JQuery was also recently removed from Pink-Currents as it wasn't used much and many of the functions could just as easily be written in vanilla JavaScript. Therefore, we decided to build our own lightweight typewriting program that could be configured for multiple stories.

## Algorithm

JavaScript execute asynchronously, meaning that processes will run when they are activated at runtime without waiting for other functions to finish. This is a problem when working on an animation that might animate multiple parts with delays between each animation. To solve this issue, Promises are used to wait on animations in the order they are meant to be executed. This prevents later functions from firing as they must wait for the promise to receive a callback resolution. 

For the animations, promised, asynchronous functions using `setInterval` and `setTimeout` functions. `setInterval` lets one or more characters be appended to the DOM element at a constant "typing" rate that the reader sees. `setTimeout` is used to add a delay after an animation which will affect when the next animation function receives the callback to being execution, making the reader experience a pause for artistic effect. 

## Possible Extensions

Most typewriting programs have basic features such as selecting specific text to animate as well as typing and delay rates similar to ours. It could be possible to add a pause/play button as the story plays out, yet this would need to alter the current way that lines are animated because they fire synchronously as one timeout function. Maybe organizing the characters to display in a queue instead of an interval would solve this issue as the queue would control execution instead of repetitively-firing interval. 

Kevin is currently working on a React-based typewriting program that should allow people without developer experience the ability to animate their own stories with as much freedom that Other People's program allows for. 