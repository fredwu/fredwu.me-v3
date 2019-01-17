---
layout: post
title: "`bundle: command not found` or `Could not find RubyGem bundler (>= 0)` During
  Capistrano Deployment? No Problems!"
date: '2010-09-16T15:59:00+10:00'
tags:
- ruby
- rails
- bundle
- bundler
- capistrano
- deploy
- bash
- path
redirect_from:
- /post/1130675143/bundle-command-not-found-or-could-not-find
---
Don’t you just hate it when you get the following errors during a [Capistrano](http://www.capify.org/) deployment?

```shell
bundle: command not found
Could not find RubyGem bundler (&gt;= 0) (Gem::LoadError)
```

In fact, even if you don’t use [bundler](http://gembundler.com/), you might still get errors like this:

```shell
rake: command not found
Could not find RubyGem rake (&gt;= 0) (Gem::LoadError)
```

It turns out this has something to do with the `$PATH` and `$GEM_HOME` variables.


So here’s the quick fix.

Log in to your deployment server, as a root user, add the following line to `/etc/ssh/sshd_config`:

```
PermitUserEnvironment yes
```

Don’t forget to restart `ssh`:

```shell
/etc/init.d/ssh restart
```

Now, log in as the deployment user, and create ’~/.ssh/environment’ with the following content:

```shell
PATH=/usr/local/rvm/gems/ruby-1.9.2-p0/bin:/bin:/usr/local/rvm/rubies/ruby-1.9.2-p0/bin:/usr/local/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin
GEM_HOME=/usr/local/rvm/gems/ruby-1.9.2-p0
```

_\* The above paths are for your reference only, obviously you need to work them out for your server environment. The only thing you need to make sure is that the `GEM_HOME`’s path matches one from the `PATH`._

Now, to verify this all work, you may use `cap shell` to start a new shell session and try out your commands.

