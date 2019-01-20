---
layout: post
title: Zend Framework - From Extreme Simplicity to Enterprise!
date: '2012-03-25T23:09:00+11:00'
tags:
- php
- zend
- zend framework
- extreme simplicity
- simplicity
- framework
- java
redirect_from:
- /post/19888742513/zend-framework-from-extreme-simplicity-to
- /post/19888742513/
- /post/19888742513
---
Today [an interesting blog post on Zend Framework](http://www.alexhudson.com/2012/03/24/a-fond-farewell-to-zend-framework/) has made to the Hacker News front page. I have to agree with the author - Zend Framework is an over-engineered piece of software.

A few years ago I was working full time as a PHP developer. Naturally, I had experimented with lots of frameworks, including [CakePHP](http://cakephp.org/), [CodeIgniter](http://codeigniter.com/), [Kohana](http://kohanaframework.org/), [Yii](http://www.yiiframework.com/), [Symfony](http://www.symfony-project.org/) and obviously, [Zend Framework](http://framework.zend.com/).

Over the years, I had developed many projects primarily using CodeIgniter and later on, Kohana. There was one project that was larger in scale compared to an average PHP project (whatever that means), so I decided to use Zend Framework to take advantage of its component-based structure.

The result? **It was dreadful.**


At that time there wasn’t any built-in or quick n’ easy way of bootstrapping a Zend Framework project, so we had to cook up our own. The documentation was absolutely horrible despite its completeness viewed from a distance - to find anything useful, Google is more likely to provide you with the answer, even from the results on the documentation site. And of course, the framework felt so heavy and long-winded. **It, felt, Java.**

In terms of the code structure, Zend Framework is almost the complete opposite of CakePHP - no offense to the CakePHP developers and users, but if you take a look at each framework’s source code, you’ll know what I mean.

Having layers and layers of structures might appeal to certain users (Enterprise baby!), but does anyone still remember back in the day, how Zend was announcing/marketing the Zend Framework?

**Extreme simplicity!**

That’s right, Zend Framework was marketed as an extremely simple to use web framework. In fact, we can still [read Andi Gutsmans’ post on this topic](http://andigutmans.blogspot.com.au/2005/10/zend-framework-post-is-too-long-so.html). Let me quote the relevant part (emphasis mine):

> As some know, our ultimate goal for the framework is what we call " **Extreme Simplicity** ". Some might have heard me use that term in some of the talks regarding PHP, and I’d like to bring this concept over to the framework. **I believe this is what the PHP spirit is all about** and the idea behind it is that it’s possible to create very simple & easy-to-use languages&frameworks which still remain powerful and flexible.

Can anyone, including the Zend Framework developers, honestly say that Zend Framework is an extremely easy to use framework?

I guess at the end of the day, in order to market PHP and Zend Framework as ‘enterprise-ready’ with [trainings](http://www.zend.com/services/training/course-catalog/zend-framework) and [certifications](http://www.zend.com/services/certification/framework/), something has to give.

