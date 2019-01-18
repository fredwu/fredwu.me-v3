---
layout: post
title: ActiveRecord and DB Migration Ate My Model Attributes!
date: '2013-02-27T11:12:00+11:00'
tags:
- ruby
- rails
- activerecord
- migration
redirect_from:
- /post/44098506856/activerecord-and-db-migration-ate-my-model
---
*Update: You might also want to check out [`reset_column_information`](/blog/2010-05-25-rails-tip-model-attributes-not-updating/).*

So a few days ago we started seeing the following errors on our Jenkins builds (swapped with fictional model and attribute names):

```
NoMethodError:
  undefined method `attack_power=' for #<Ironman:0x00000008525d20>
```

`attack_power` is a new attribute we recently added to the `Ironman` ActiveRecord model.

I was baffled, as the table column is clearly there but ActiveRecord couldn’t see it.


This weird behaviour is confirmed by debugging the model:

```ruby
Ironman
# => Ironman(id: integer, created_at: datetime, updated_at: datetime)

Ironman.column_names
# => ["id", "created_at", "updated_at"]
```

And by debugging the schema:

```ruby
ActiveRecord::Base.connection.structure_dump
# => "CREATE TABLE `ironmans` (\n `id` int(11) NOT NULL AUTO_INCREMENT,\n `created_at` datetime NOT NULL,\n `updated_at` datetime NOT NULL,\n `attack_power` int(11) NOT NULL,\n PRIMARY KEY (`id`)\n) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;\n\n"
```

So apparently somehow ActiveRecord ate our `attack_power` attribute!

After some struggling and head-scratching, finally I’ve discovered that during the migration if we call the `Ironman` class, then any subsequent attribute changes to the class will not be recognised by ActiveRecord.

It turns out, because we run our test suites by invoking rake tasks:

```ruby
Rake::Task['spec:something'].invoke
Rake::Task['spec:something_else'].invoke
```

And we manually reset our database beforehand too within the same `Rakefile`:

```ruby
Rake::Task['db:reset'].invoke
```

ActiveRecord will cache its attributes as soon as a model class (`Ironman`) is called during the migration.

The fix? Simple! Simply use another process to run the database reset:

```ruby
system 'rake db:reset'
```

