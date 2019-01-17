---
layout: post
title: "[Rails Tip] Model Attributes Not Updating? `reset_column_information` To the
  Rescue!"
date: '2010-05-25T20:58:00+10:00'
tags:
- ruby
- rails
- tips
- ActiveRecord
- migration
redirect_from:
- /post/630987126/rails-tip-model-attributes-not-updating
---
So you were wondering why some of your model attributes weren’t updating properly? Well, it is perhaps because the db schema has changed but the changed schema has not been passed onto ActiveRecord, as is often the case in DB migration.

Taken from the ActiveRecord documentation:

_Resets all the cached information about columns, which will cause them to be reloaded on the next request._

_The most common usage pattern for this method is probably in a migration, when just after creating a table you want to populate it with some default values, eg:_

```ruby
class CreateJobLevels < ActiveRecord::Migration
  def self.up
    create_table :job_levels do |t|
      t.integer :id
      t.string :name

      t.timestamps
    end

    JobLevel.reset_column_information
    %w{assistant executive manager director}.each do |type|
      JobLevel.create(:name => type)
    end
  end

  def self.down
    drop_table :job_levels
  end
end
```

