---
layout: post
title: CSS Sprites or Data URI Sprites?
date: '2010-03-03T15:42:00+11:00'
tags:
  - CSS
  - sprites
  - Data URI
  - MHTML
  - duris.ru
  - Smush.it
redirect_from:
  - /post/423506403/css-sprites-or-data-uri-sprites
  - /post/423506403/
  - /post/423506403
---

When making the new design of this blog, I inevitably come to the dilemma of whether to use [traditional CSS sprites](http://css-tricks.com/css-sprites/) (i.e. to use background image positions to locate the images) or to use [Data URI sprites](http://en.wikipedia.org/wiki/Data_URI_scheme) (i.e. to use Data URI / [MHTML](http://en.wikipedia.org/wiki/MHTML) to replace the actual image files).

First of all, during the design and development stage, everything was built without any sprites in mind. It is just so much easier to build the template without worrying about background image positions.

After the template is finalised, I then used the sprite tools to generate the sprites.

Data URI, on paper sounds like a very good approach, especially when [duris.ru](http://duris.ru/) takes care of everything, including [the support for IE7](http://www.phpied.com/mhtml-when-you-need-data-uris-in-ie7-and-under/) and optimising the images using [Smush.it](http://developer.yahoo.com/yslow/smushit/).

Unfortunately, the limitation of Data URI and MHTML, namely, the 32KB length limit in IE 8, makes this approach less feasible.

In the end, I generated the CSS sprites using the [CSS Sprite Generator](http://spritegen.website-performance.org/) and manually replaced those CSS attributes.
