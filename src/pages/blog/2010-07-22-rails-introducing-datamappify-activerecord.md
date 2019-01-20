---
layout: post
title: "[Rails] Introducing Datamappify - ActiveRecord Without DB Migrations"
date: '2010-07-22T22:30:50+10:00'
tags:
- ActiveRecord
- DataMapper
- Datamappify
- ruby
- rails
- migration
- schema.rb
- schema
redirect_from:
- /post/844973463/rails-introducing-datamappify-activerecord
- /post/844973463/
- /post/844973463
---
## Introduction

ActiveRecord is without doubt the _de facto_ ORM library for Rails and many Ruby web frameworks. Many developers however, do not like database migrations and prefer to use DSL for data mapping. Datamappify is created with the sole purpose of getting rid of the DB migration headaches.

## Why Not DB Migrations?

Well, depending on your specific project, DB migrations might create more trouble than it’s worth. Besides, your code is already version controlled, so why create a separate version control for your DB schema?

## Why Not Use DataMapper, Sequel, etc?

As stated in the introduction, ActiveRecord is the most popular ORM in the rails community, it is actively developed and battle-tested. If your only grief with ActiveRecord is the DB migrations, why not just eliminate it be happy? ;)

**[Go check out the code](http://github.com/fredwu/datamappify)!**

