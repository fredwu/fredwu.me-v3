---
layout: post
title: "[jQuery Tip] Traverse/Parse HTML String"
date: '2010-04-28T11:42:00+10:00'
tags:
- jQuery
- tips
- DOM
- traverse
- parse
- HTML
- string
redirect_from:
- /post/554746690/jquery-tip-traverseparse-html-string
---
When you are getting an HTML string from an external source (e.g. from an AJAX get result) and you want to rip out a certain part of the HTML source, you need to make sure that the ‘certain part’ is not at the top level of the HTML source.

For example, we have the following HTML string:

```
Hello
World
```

If we want to get the first `paragraph` element by using:

```js
// data is the HTML source
$("span#first", data);
```

The above code won’t work, because the `p` tags are at the top level. Instead, we can simply wrap the HTML source with a `div` tag and that’ll do it. :)

