---
layout: post
title: "[Rails] Use HAML templates with Devise"
date: '2010-03-14T01:40:00+11:00'
tags:
- Rails
- HAML
- Devise
- ERb
redirect_from:
- /post/445463159/rails-use-haml-templates-with-devise
---
If you are a Rails developers, chances are you have heard of, or are using either [Devise](http://github.com/plataformatec/devise) or [HAML](http://haml-lang.com/) in your projects.

And if you’re like me who uses both, then surely you’d wish these two worked together, i.e. generate devise views in HAML.

Today is your lucky day! I’ve just [committed some changes](http://github.com/fredwu/devise/commit/94513303d345c63b267fc666ffe03b71261e2199) that enable you to do so! The changes are already merged back to the primary repository.

In order to generate HAML views instead of ERb views, simply do:

```shell
rails g devise_views -t=haml
```

You can use the master branch of Devise, i.e. in your `Gemfile`:

```ruby
gem "devise", :git => "git://github.com/plataformatec/devise.git"
```

You will also need [the edge version of HAML](http://haml-lang.com/download.html), as the stable versions do not parse ruby code correctly.

