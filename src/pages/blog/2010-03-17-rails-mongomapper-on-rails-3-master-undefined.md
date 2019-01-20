---
layout: post
title: "[Rails] MongoMapper on Rails 3 Master, Undefined 'to_key' Method"
date: '2010-03-17T19:54:34+11:00'
tags:
- MongoMapper
- MongDB
- rails
- to_key
- patch
redirect_from:
- /post/454107244/rails-mongomapper-on-rails-3-master-undefined
- /post/454107244/
- /post/454107244
---
Rails 3 has recently [renamed `key` method to `to_key`](http://github.com/rails/rails/commit/f81c6bc0404ba2a03eed0ec6c08bbac45661305f), which consequently rendered [MongoMapper](http://github.com/jnunemaker/mongomapper) unusable.

You might see an error that looks like:

```
ActionView::Template::Error (undefined method `to_key' for #<Post:0x000001066e4020>)
```

After some twiddling I’ve [submitted a patch](http://github.com/fredwu/mongomapper/commit/6e5e531312ef98c30e33286a1f80dd000468ed07) to address this issue. Feel free to pull my fork until the fix makes its way into [John Nunemaker’s main repository](http://github.com/jnunemaker/mongomapper).

