---
layout: post
title: Deploy PHP Websites Using Capistrano (and Git)
date: '2010-06-21T14:45:00+10:00'
tags:
- php
- capistrano
- deploy
- deployment
- ruby
- git
- github
redirect_from:
- /post/720733257/deploy-php-websites-using-capistrano-and-git
---
The [Rails](http://rubyonrails.org/) deployment flow is really smooth thanks to the powerful (and easy to use) [Capistrano](http://www.capify.org/).

Capistrano not only works with Rails and other Ruby code bases, but also code bases in any programming languages, such as [PHP](http://php.net/)!

Here is an overview of what I did to get one of our PHP production sites up and running with Capistrano.

If you don’t already have [Ruby](http://www.ruby-lang.org/en/) and [Rubygems](http://rubygems.org/) installed, install them!

After you got `ruby` and `rubygems`, install Capistrano and its related gems -

```shell
gem install capistrano-ext railsless-deploy
```

Now, navigate to your application’s directory and run `capify .`, this will generate some necessary files for Capistrano to recognise your app.


Open up the generated `Capfile` file and replace the content of the file with:

```ruby
require 'rubygems'
require 'railsless-deploy'
load 'config/deploy'
```

Okay, now we need to set up the actual deployment recipe in the `config/deploy.rb` file. But before doing so, we need to set up our deployment server with proper user and deployment permission.

We chose to set up a new user called `deploy` specifically for deployment purpose, for example -

```shell
useradd deploy
```

Then of course, we need the SSH keys for this deployment user, so switch to this user (`su deploy`) and -

```shell
ssh-keygen
```

We use [GitHub](http://github.com/), so simply copy the content of the public key (`~/.ssh/id_rsa.pub`) and add it to the deploy keys section of the Github repository.

Don’t forget to also add GitHub to the `.ssh/known_hosts` file, you can do this by manually cloning your repository on the deployment server.

Great! Now let’s do the last step - create the actual deployment recipe!

Open up `config/deploy.rb` file and you will see some default deployment tasks. Everyone has different needs, so I’m going to paste our `deploy.rb` file (masked with added comments) for your reference.

```ruby
set :user, "deploy"
set :application, "YOUR_APPLICATION_NAME"
set :domain, "YOUR_APPLICATION_DOMAIN_NAME"
set :repository, "THE_ADDRESS_OF_THE_APPLICATION_REPOSITORY"
set :deploy_to, "/var/www/#{domain}"
set :shared_path, "#{deploy_to}/shared"
set :use_sudo, false

set :scm, :git
set :branch, 'master'
set :deploy_via, :remote_cache

role :web, "ADDRESS_OF_YOUR_WEB_SERVER"
role :app, "ADDRESS_OF_YOUR_APP_SERVER" # this can be the same as the web server
role :db, "ADDRESS_OF_YOUR_DB_SERVER", :primary => true # this can be the same as the web server

namespace :deploy do
  task :start do ; end
  task :stop do ; end
  task :restart, :roles => :app, :except => { :no_release => true } do
  run "#{try_sudo} /etc/init.d/lsws reload" # we use LiteSpeed Web Server
  end
end

# The task below serves the purpose of creating symlinks for asset files.
# Large asset files like user uploaded contents and images should not be checked into the repository anyway, so you should move them to a shared location.

task :create_symlinks, :roles => :web do
  run "ln -s #{shared_path}/uploads #{current_release}/uploads"
  run "ln -s #{shared_path}/zb #{current_release}/zb"
end

# Let's run the task immediately after the deployment is finalised.

after "deploy:finalize_update", :create_symlinks
```

That’s it! Now you should be able to deploy your application by -

```shell
cap deploy:setup
cap deploy
```

