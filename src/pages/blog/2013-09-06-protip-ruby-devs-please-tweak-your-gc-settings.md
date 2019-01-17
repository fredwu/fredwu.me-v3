---
layout: post
title: 'Protip: Ruby Devs, Please Tweak Your GC Settings for Tests!'
date: '2013-09-06T21:13:37+10:00'
tags:
- ruby
- garbage collection
- protip
- tests
redirect_from:
- /post/60441991350/protip-ruby-devs-please-tweak-your-gc-settings
---
It was made apparent to me that many ruby devs either aren’t aware or couldn’t be bothered to tweak their ruby garbage collector settings.

Well, if you are using MRI, please start tweaking your GC settings. Here’s what I use (on my 15" Macbook Pro Retina):

```shell
export RUBY_GC_MALLOC_LIMIT=90000000
export RUBY_FREE_MIN=200000
```

Not only can you tweak it for your local dev machine, you can also tweak Jenkins, [Travis CI](http://travis-ci.com/), [Wercker](http://wercker.com/) and other CI solutions, making instant speed gain for your test suite!

Here’s what we get:

```shell
            Before After
Local:      8m22s 5m52s
Travis CI:  10m10s 6m0s
Wercker:    8m45s 6m24s
```

YMMV depending on your system and available RAM.

