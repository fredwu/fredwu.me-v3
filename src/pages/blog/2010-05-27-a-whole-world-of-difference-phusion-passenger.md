---
layout: post
title: 'A Whole World of Difference: Phusion Passenger Apache to Nginx, Ruby Enterprise
  Edition 1.8.6 to 1.8.7'
date: '2010-05-27T18:35:00+10:00'
tags:
- Phusion Passenger
- Passenger
- ruby
- rails
- Apache
- Nginx
- performance
- New Relic
redirect_from:
- /post/637072473/a-whole-world-of-difference-phusion-passenger
- /post/637072473/
- /post/637072473
---
Yesterday we have launched the new design of [Creattica](http://creattica.com/). It runs well during the testing and staging phase, unfortunately the server quickly became overloaded and unresponsive after the relaunch was [made public](http://psd.tutsplus.com/articles/contests/win-1000-by-submitting-work-to-creattica/).

The site was running fine with its old design, but because the new design has many added features such as search filters, followers and more, system resources were very quickly drained.

After some optimisation of the database (which itself has increased the site performance by up to 300%+), queries as well as upgrading [Ruby Enterprise Edition](http://www.rubyenterpriseedition.com/) from 1.8.6 to 1.8.7 and switching from using Apache + [Passenger](http://www.modrails.com/) to Nginx + Passenger, the site runs so much smoother.

Don’t believe me? Take a look at these screenshots below.

![](/img/posts/old/tumblr_l32l0mXqZJ1qalr27.png)

![](/img/posts/old/tumblr_l32l0znIlE1qalr27.png)

Switching from REE 1.8.7 to Ruby 1.9.1 did not yield any significant result though.

