---
layout: post
title: "[Rails] Run Queued Tasks Using 'delayed_job', Now With Intervals!"
date: '2010-03-25T22:53:00+11:00'
tags:
- rails
- ruby
- delayed_job
- background jobs
- queue
- async
- tasks
- interval
redirect_from:
- /post/472366667/rails-run-queued-tasks-using-delayedjob-now
- /post/472366667/
- /post/472366667
---
If you don’t already know, ’[delayed_job](http://github.com/collectiveidea/delayed_job)’ is a database based asynchronously priority queue system extracted from [Shopify](http://www.shopify.com/).

I was seeking for a lightweight, easy to use solution for queueing tasks, ‘delayed\_job’ fits the bill _almost_ perfectly. ;)

One thing we needed to do for a Rails 2 project at [Envato](http://envato.com/), was to queue the tasks and to run them one after another, at a set interval. 'delayed\_job’ unfortunately doesn’t come with this feature.

So, instead of searching for more complicated solutions or reinventing the wheels, I[made a couple of commits to my fork](http://github.com/fredwu/delayed_job) to add this functionality as well as to fix some rails 3 compatibility issues.

Now you can simply add the following line to your `config/initializers/delayed_job_config.rb` file to have the tasks run at 1 minute interval.

```ruby
Delayed::Worker.run_interval = 60
```

A pull request has been issued, hopefully it’ll come as a standard feature soon. :)

