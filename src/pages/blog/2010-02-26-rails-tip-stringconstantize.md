---
layout: post
title: '[Rails Tip] "String".constantize'
date: '2010-02-26T17:33:00+11:00'
tags:
- ruby
- rails
- tips
- constantize
- eval
redirect_from:
- /post/412810181/rails-tip-stringconstantize
- /post/412810181/
- /post/412810181
---
So we want to dynamically instantiate an object (i.e. convert a string to a class constant).

Instead of doing this:

```ruby
@dynamic_var = "User"
eval(@dynamic_var)
```

You can do this:

```ruby
@dynamic_var = "User"
@dynamic_var.constantize
```

See more about the `constantize` method in [Rails’s API](http://apidock.com/rails/ActiveSupport/CoreExtensions/String/Inflections/constantize).

