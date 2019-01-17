---
layout: post
title: "[Rails Tip] DataMapper M:M Association Bug and Workaround"
date: '2010-04-27T09:35:00+10:00'
tags:
- DataMapper
- bug
- rails
- ruby
- tips
- workaround
- JOIN
- SQL
- N+1
redirect_from:
- /post/551873525/rails-tip-datamapper-mm-association-bug-and
---
It was confirmed that DataMapper [is incorrectly setting table names in SQL JOINs](http://datamapper.lighthouseapp.com/projects/20609/tickets/1249).

So for instance, the following code would generate an SQL error:

```ruby
type.jobs.all(:"country.name".like => "%#{params[:location]}%")
```

There is a workaround, however the workaround requires manual looping of the dataset thus produces N+1 queries.

```ruby
type.jobs.all.reject do |job|
! job.country.name.downcase.include?(params[:location].downcase)
end
```

But at least it works. ;)

