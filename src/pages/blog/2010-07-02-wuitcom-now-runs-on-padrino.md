---
layout: post
title: Wuit.com Now Runs on Padrino
date: '2010-07-02T07:59:28+10:00'
tags:
  - padrino
  - flourish
  - php
  - ruby
  - capistrano
  - current_release
  - latest_release
redirect_from:
  - /post/759061247/wuitcom-now-runs-on-padrino
  - /post/759061247/
  - /post/759061247
---

A few days ago I discovered [Padrino](http://www.padrinorb.com/), an excellent ruby framework built on top of [Sinatra](http://www.sinatrarb.com/). What can be a better than experimenting with it? Build an actual website with it!

So last night I ported [Wuit.com](http://wuit.com/) from using vanilla PHP + [Flourish](http://flourishlib.com/) to using Padrino + [DataMapper](http://datamapper.org/) + [Haml](http://haml-lang.com/).

The entire porting experience was positive, albeit the website only has two pages.

I did encounter a strange problem with [Capistrano](http://www.capify.org/) though - both `current_release` and `latest_release` were giving me strange results. In the end I had to modify my deployment recipe to overcome this.

For building small to medium sized projects, I think Padrino is an excellent choice, as it offers a more complete foundation than Sinatra, and is not as heavy as Rails.
