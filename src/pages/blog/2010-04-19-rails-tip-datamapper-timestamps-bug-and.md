---
layout: post
title: '[Rails Tip] DataMapper Timestamps Bug and Workaround'
date: '2010-04-19T18:22:00+10:00'
tags:
  - DataMapper
  - bug
  - dm-timestamps
  - timestamps
  - tips
  - workaround
  - rails
  - ruby
redirect_from:
  - /post/532810569/rails-tip-datamapper-timestamps-bug-and
  - /post/532810569/
  - /post/532810569
---

It has been [confirmed](http://datamapper.lighthouseapp.com/projects/20609/tickets/1245-inconsistent-timestamps-behaviour-when-hard-setting-the-aton-values) by [DataMapper](http://datamapper.org/)’s core developer [Martin Gamsjaeger (snusnu)](http://github.com/snusnu) that it is a bug.

In short, `created_[at|on]` can be manually overridden, but `updated_[at|on]` cannot.

The workaround is simple, do it in two steps, for example:

```ruby
job = Job.create(
  title: "Web Developer",
  created_at: Time.now - 2
)
job.update!(updated_at: Time.now - 1)
```

Please check the [bug ticket](http://datamapper.lighthouseapp.com/projects/20609/tickets/1245-inconsistent-timestamps-behaviour-when-hard-setting-the-aton-values) to see when it’s getting fixed.
