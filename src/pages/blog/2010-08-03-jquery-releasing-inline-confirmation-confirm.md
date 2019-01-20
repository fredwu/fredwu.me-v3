---
layout: post
title: "[jQuery] Releasing Inline Confirmation, Confirm Actions Done Right"
date: '2010-08-03T15:41:00+10:00'
tags:
- jQuery
- JavaScript
- confirmation
- confirm
- inline
- UI
redirect_from:
- /post/896650960/jquery-releasing-inline-confirmation-confirm
- /post/896650960/
- /post/896650960
---
In a web app, it is very common to have actions that destroy (delete/remove) data. These actions, if you don’t already know, should always map to POST methods. On top of that, because these actions are destructive, the UI should always ask the user for confirmation.

But how do we actually implement the confirmation dialogue though? The vanilla JavaScript confirm box would be the easiest but at the same time the ugliest - this thing stalls most web browsers until the user acts on it.

An inline popup/modal box? Perhaps, but it is still obtrusive, in the sense that the popup/model boxes are usually in the way of other tasks.

Meet [**Inline Confirmation**](http://github.com/fredwu/jquery-inline-confirmation) - a jQuery plugin for creating easy, less obtrusive confirmation dialogues!

Feel free to give it a spin. I will add more documentation and a demo when and if I have time. ;)

