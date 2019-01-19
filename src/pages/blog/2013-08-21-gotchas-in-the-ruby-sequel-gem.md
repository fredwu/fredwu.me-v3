---
layout: post
title: Gotchas in the Ruby Sequel Gem
date: '2013-08-21T22:39:00+10:00'
tags:
- ruby
- Sequel
- ActiveRecord
- gotcha
- protip
redirect_from:
- /post/58910814911/gotchas-in-the-ruby-sequel-gem
---
I haven’t really used [Sequel](http://sequel.rubyforge.org/) much therefore I am definitely a newbie. However, after days and nights of frustration, endless debugging and some search-fu during the development of [Datamappify](https://github.com/fredwu/datamappify), I have finally arrived at the conclusion that Sequel is a capable library, as long as you are aware of the gotchas.

### Gotcha 1: Always use “`select`”/“`select_all`”, or your data records will mysteriously have wrong IDs!

In ActiveRecord, joining an associated model couldn’t be simpler:

```ruby
Post.joins(:author)
```

In Sequel, despite having a similar API for models to declare associations and their corresponding primary and foreign keys, you cannot do a `join` without specifying the keys:


_Not good:_

```ruby
Post.join(:authors)
# or
Post.join(Author)
```

_Better:_

```ruby
Post.join(:authors, :id => :author_id)
```

You would think the version above works - it doesn’t. Even worse, the above example **will give you incorrect data** - the IDs of the Post records will now contain the IDs from their corresponding Author records! This is because upon a `join`, Sequel merges attributes from both models into a single hash.

_The correct version:_

```ruby
Post.join(:authors, :id => :author_id).select(:posts __id, :posts__ title, :posts__body)
# or
Post.join(:authors, :id => :author_id).select_all(:posts)
```

![](/img/posts/old/tumblr_inline_mrvsa2sBB81qz4rgp.png)

### Gotcha 2: Always call “`all`” at the end of the chain, or the chain will present data in a different format.

In ActiveRecord, all of the below examples return an `ActiveRecord::Relation` collection:

```ruby
Post.where(:title => 'Hello world')
Post.joins(:author)
Post.includes(:author)
```

And indeed, calling `first` on any of them returns an object of class `Post` (assuming the result collection is not empty).

```ruby
Post.where(:title => 'Hello world').first.class #=> Post
Post.joins(:author).first.class #=> Post
Post.includes(:author).first.class #=> Post
```

In Sequel, the below examples all return a `Sequel::DataSet` collection:

```ruby
Post.where(:title => 'Hello world')
Post.eager(:author)
Post.eager_graph(:author)
```

But let’s see what we get from calling `first.class` on them:

```ruby
Post.where(:title => 'Hello world').first.class #=> Post
Post.eager(:author).first.class #=> Post
Post.eager_graph(:author).first.class #=> Hash
```

Huh? Last one is a `Hash`? It turns out, if you call `all` at the end of chains to convert them to `Array`s, then the returned collections are consistent:

```ruby
Post.where(:title => 'Hello world').all.first.class #=> Post
Post.eager(:author).all.first.class #=> Post
Post.eager_graph(:author).all.first.class #=> Post
```

![](/img/posts/old/tumblr_inline_mrvsa2sBB81qz4rgp.png)

