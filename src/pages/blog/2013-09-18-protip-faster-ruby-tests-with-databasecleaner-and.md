---
layout: post
title: 'Protip: Faster Ruby Tests with DatabaseCleaner and DatabaseRewinder'
date: '2013-09-18T16:50:00+10:00'
tags:
- tests
- database_cleaner
- database_rewinder
- protip
- ruby
redirect_from:
- /post/61571741083/protip-faster-ruby-tests-with-databasecleaner-and
---
_Please also see [this blog post on tweaking your ruby GC settings](http://fredwu.me/post/60441991350/protip-ruby-devs-please-tweak-your-gc-settings-for)._

I use and love [DatabaseCleaner](https://github.com/bmabey/database_cleaner), although historically I had never paid too much attention on the performance of its varies cleaning strategies - I’d always used `truncation`.

We use Postgres, and after digging around and finding out [the difference between DELETE and TRUNCATE](http://stackoverflow.com/questions/11419536/postgresql-truncation-speed/11423886#11423886), I ended up improving our test suite speed by about 30-40% simply by tweaking the cleaning strategies.

```ruby
RSpec.configure do |config|
  config.before :suite do
    DatabaseCleaner.clean_with :truncation
    DatabaseCleaner.strategy = :transaction
  end

  config.before do
    if example.metadata[:js] || example.metadata[:type] == :feature
      DatabaseCleaner.strategy = :deletion
    else
      DatabaseCleaner.strategy = :transaction
      DatabaseCleaner.start
    end
  end

  config.after do
    DatabaseCleaner.clean
  end
end
```

Essentially, we want to `truncate` the DB only once before the whole suite runs to ensure a clean slate DB, then we only want to use `deletion` on Capybara tests, everything else should just use `transaction` which is the fastest strategy.

Now, as a bonus, I have just discovered @amatsuda’s [DatabaseRewinder](https://github.com/amatsuda/database_rewinder) which is a lightweight alternative that supports only ActiveRecord. It offers comparable performance with a much similar API.

```ruby
RSpec.configure do |config|
  config.before :suite do
    DatabaseRewinder.clean_all
  end

  config.after do
    DatabaseRewinder.clean
  end
end
```

By the way, we also use [parallel\_tests](https://github.com/grosser/parallel_tests) to scale our test suite to multiple processes, even on Travis CI and Wercker.

Hooray to faster tests! :)

