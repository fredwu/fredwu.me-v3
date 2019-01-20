---
layout: post
title: "[Rails] Releasing Action Throttler, A Rails Plugin for Throttling Actions"
date: '2010-06-03T13:21:00+10:00'
tags:
- action
- plugin
- rails
- ruby
- throttle
- throttler
- action_throttler
redirect_from:
- /post/658651700/rails-releasing-action-throttler-a-rails-plugin
- /post/658651700/
- /post/658651700
---
Sometimes we would want to throttle certain application actions. For instance, a user should only be allowed to send x amount of emails to other members of the site in order to reduce the spam risk.

Since this is a quite common task, I thought I might as well make it as a Rails plugin for better code reusability.

I am now releasing [Action Throttler](http://github.com/fredwu/action_throttler), an easy to use Rails plugin to quickly throttle application actions based on configurable duration and limit. [Go check out the code now!](http://github.com/fredwu/action_throttler) :)

There is currently no tests for the plugin but I will be adding rspec specs to it soon.

