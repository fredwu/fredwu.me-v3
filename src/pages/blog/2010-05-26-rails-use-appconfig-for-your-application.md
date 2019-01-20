---
layout: post
title: "[Rails] Use App_Config For Your Application Specific Configuration"
date: '2010-05-26T09:50:46+10:00'
tags:
- ruby
- rails
- app_config
- configuration
- YAML
redirect_from:
- /post/632640092/rails-use-appconfig-for-your-application
- /post/632640092/
- /post/632640092
---
A simple [Google search](http://www.google.com/search?q=rails+app_config) will reveal that there are a number of different App\_Config plugins for Rails. After comparing them side by side, I have decided to use [the one by Christopher J. Bottaro](http://github.com/cjbottaro/app_config).

It features:

- simple YAML config files
- config files support ERB
- config files support inheritance
- access config information via convenient object member notation

I just fixed a bug last night (which was pulled in to the main repository) where it could throw errors when used as a Rails plugin (i.e. via `rails plugin install`).

Make sure you go [read the instructions](http://github.com/cjbottaro/app_config) on how to use this handy plugin.

