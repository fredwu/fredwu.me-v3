---
layout: post
title: 'API Taster: Visually Test Rails Application API'
date: '2012-07-02T14:59:00+10:00'
tags:
  - api taster
  - api
  - rails
  - postman
  - gem
redirect_from:
  - /post/26327796958/api-taster-visually-test-rails-application-api
  - /post/26327796958/
  - /post/26327796958
---

Like a lot of places, at [Locomote](http://locomote.com.au) we are building a platform that is API-based. As much as I like having comprehensive test suites, I often feel the need to manually test API endpoints to see exactly what the responses are.

Tools such as [Postman](https://chrome.google.com/webstore/detail/fdmmgilgnpjigdojojpjoooidkmcomcm) solves part of the issue: they allow us to quickly test API endpoints without messing with [cURL](http://curl.haxx.se/).

But as a lazy developer, I want more. ;)

I want something that:

- automatically generates API endpoints from Rails routes definition
- defines input params as easy as defining routes
- has input params that can be shared with test factories

And so [API Taster](https://github.com/fredwu/api_taster) was born. Please check it out to see how you can use it.

![](/img/posts/old/8Dnto.png)
