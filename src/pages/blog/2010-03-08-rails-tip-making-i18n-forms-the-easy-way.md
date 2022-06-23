---
layout: post
title: '[Rails Tip] Making i18n Forms, the Easy Way'
date: '2010-03-08T16:41:00+11:00'
tags:
  - ruby
  - rails
  - tips
  - forms
  - i18n
  - r18n
  - form_helper
  - Formtastic
  - Haml
redirect_from:
  - /post/434076573/rails-tip-making-i18n-forms-the-easy-way
  - /post/434076573/
  - /post/434076573
---

Web applications normally have many forms. Building forms is always a mind-boggling task because it involves repetition and chaos.

A shortcut is to use a form builder / [DSL](http://en.wikipedia.org/wiki/Domain-specific_language), such as [Formtastic](http://github.com/justinfrench/formtastic).

As I am using Rails 3, and the Rails 3 port of Formtastic isn’t complete yet, I thought I’d just use the plain vanilla Rails built-in form helper.

First of all, I am using [Haml](http://haml-lang.com/) instead of ERb. Already, I got the out-of-box clean looking Haml markup.

Some of you might not be aware of the fact that Rails’ built-in form helper already does i18n support.

If you have the following form:

```ruby
-form_for(@post) do |f|
  =f.label :title
  =f.text_field :title
  =f.label :body
  =f.text_area :body
  =f.submit
```

You can simply translate the labels as such in `config/locales/en.yml`.

```yaml
helpers:
  label:
    post:
      title: 'Post Title'
      body: 'Post Content'
```

Better yet, I am using [r18n](http://r18n.rubyforge.org/) instead of i18n, so I can instead translate them in `app/i18n/en.yml`.

```yaml
helpers:
  label:
    post:
      title: Post Title
      body: Post Content
```

Alternatively, instead of placing the translation strings under `helpers.label`, you may place them directly under your models, i.e. `activemodel.attribute`.

If you’re using the [Rails 2.3 stable branch](http://github.com/rails/rails/tree/2-3-stable) from Github, you can also use the built-in i18n support. Although instead of `helpers.label`, you use `views.labels`, as seen in [this commit](http://github.com/rails/rails/commit/bef968d37942bfb2b7a59fca0e4451e096197c0a).
