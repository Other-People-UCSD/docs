# Removal of JQuery Functions

* Status: Completed
* Author: Kevin Jang
* Deciders: Kevin Jang
* Date: March 20, 2023

## Context and Problem Statement

Much of the scripted code for this publishing website is reused on almost every page, rendering functions such as style changes and navigation as working. However, is the added overhead or dependencies necessary? Can performance be optimized even more?

## Decision Drivers

- Updating: The script that imports JQuery is used by specific versions, so some older versions may contain security vulnerabilities that are fixed in newer versions. 
- Security: Less dependencies means that there are less areas for vulnerabilities beyond our control.

## Solution

There are only four sections where JQuery has been used in the repository. In addition, there are only a few JQuery library functions used which does not justify keeping this entire library reference. Instead, vanilla Javascript attributes and functions can still do the same with less overhead connecting to the external server that the JQuery script is run from.

## 1. Changing the theme from light to dark for the homepage.
_Code author: Eunsoo_

To convert this to vanilla Javascript, set a scroll event listener onto the window and then get the client's window attributes for offsets. Then use the built-in setAttribute method to assign the css to each element specified by query selectors.

In addition, the blocks inside the conditional statement can be reused for theme-changing, so it is best to create a new function where the theme styles change. Refer to `assets/js/bgTheme.js`

```
$(window).scroll(function () {
    var wScroll = $(this).scrollTop();
    if (wScroll >= $('.w2b').offset().top - ($(window).height() / 3.5)) {
        $("body").css("background-color", "var(--light-text-color)");
        $("body").css("color", "var(var(--background-color))");
        $(".logoOutline").css("stroke", "var(var(--background-color))"); 
        $("#logo").css("fill", "var(var(--background-color))");
        $("header").css("background-color", "var(--light-text-color)");
        $("header").css("color", "var(var(--background-color))");
        $(".posts").css("border-color", "var(var(--background-color))");
    } else {
        $("body").css("background-color", "var(var(--background-color))");
        $("body").css("color", "var(--light-text-color)");
        $(".logoOutline").css("stroke", "var(--light-text-color)");
        $("#logo").css("fill", "var(--light-text-color)");
        $("header").css("background-color", "var(var(--background-color))");
        $("header").css("color", "var(--light-text-color)");
        $(".posts").css("border-color", "var(--light-text-color)");
    }
});
```

## 2. Inline legacy JQuery scripts inside the `_includes/header.html` file.
_Code authors: Eunsoo, Kevin_

Again, add the scroll event listener and find offsets of the DOM elements based on the window. Put this inline script into its own Javascript file called `assets/js/header.js`

```
<script>
    // Hide Header on on scroll down
    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var navbarHeight = $('header').outerHeight();

    $(window).scroll(function (event) {
        didScroll = true;
    });

    setInterval(function () {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);

    function hasScrolled() {
        var st = $(this).scrollTop();

        // Make sure they scroll more than delta
        if (Math.abs(lastScrollTop - st) <= delta)
            return;

        // If they scrolled down and are past the navbar, add class .nav-up.
        // This is necessary so you never see what is "behind" the navbar.
        if (st > lastScrollTop && st > navbarHeight) {
            // Scroll Down
            $('header')
                .removeClass('nav-down')
                .addClass('nav-up');
        } else {
            // Scroll Up
            if (st + $(window).height() < $(document).height()) {
                $('header')
                    .removeClass('nav-up')
                    .addClass('nav-down');
            }
        }

        lastScrollTop = st;
    }
</script>

<script>
    function openNav() {
        document
            .getElementById("myNav")
            .style
            // .display = 'block';
            .height = "100%";
        document.getElementById('navContent').classList.remove('hidden');
    }

    function closeNav() {
        document
            .getElementById("myNav")
            .style
            // .display = 'none';
            .height = "0%";
        document.getElementById('navContent').classList.add('hidden');
    }
</script>
```

## 3. Legacy Mobile Nav Search Placeholder JQuery as written by Eunsoo.
_Code author: Eunsoo_

This is also put into the `assets/js/header.js` because the mobile navigation is always included in the header via `_includes/headerMain.html`.

```
<script>
    $('#search-input')
        .focus(function () {
            $(this).attr('placeholder', '')
        })
        .blur(function () {
            $(this).attr('placeholder', 'Search')
        })
</script>

<script>
    $('#search-input').keyup(function (event) {
        if (event.which === 13) {
            $(this).blur();
        }
    });
</script>
``` 


### 4. javaScrollStudy.html
There was also another file in the _includes folder called `javaScrollStudy.html`. This was never touched when Kevin took over the website and a quick grep over the codebase revealed that this file was never being used anywhere. As it appears to make the screen scroll down for a little bit, it may have been used to debug the dark theme change on the homepage. However, as it has no use in the present project, it can be safely removed. 
```
<script>
    window.smoothScroll = function (target) {
        var scrollContainer = target;
        do { //find scroll container
            scrollContainer = scrollContainer.parentNode;
            if (!scrollContainer)
                return;
            scrollContainer.scrollTop += 1;
        } while (scrollContainer.scrollTop == 0);

        var targetY = 0;
        do { //find the top of target relatively to the container
            if (target == scrollContainer)
                break;
            targetY += target.offsetTop;
        } while (target = target.offsetParent);

        scroll = function (c, a, b, i) {
            i++;
            if (i > 10)
                return;
            c.scrollTop = a + (b - a) / 10 * i;
            setTimeout(function () {
                scroll(c, a, b, i);
            }, 20);
        }
        // start scrolling
        scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
    }
</script>
```