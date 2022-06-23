---
layout: post
title: '[Ruby] Releasing Ssync - An Optimised S3 Sync Tool Using the Power of Unix!'
date: '2010-11-12T19:15:41+11:00'
tags:
  - ruby
  - cli
  - shell
  - script
  - Amazon
  - AWS
  - S3
  - sync
  - linux
  - unix
  - tool
redirect_from:
  - /post/1550844695/ruby-releasing-ssync-an-optimised-s3-sync-tool
  - /post/1550844695/
  - /post/1550844695
---

At [Envato](http://envato.com/) we have a few dozen sites residing on multiple servers. The data on a portion of the servers need to be regularly backed up to [Amazon S3](http://aws.amazon.com/s3/).

The Envato Mad Scientist [Ryan Allen](http://github.com/ryan-allen) has worked on a script called [Sir Sync-A-Lot](http://github.com/ryan-allen/sir-sync-a-lot) which syncs the data to S3. This was done after evaluating a bunch of scripts including [s3sync](http://www.s3sync.net/).

Today I turned Ryan’s original script into [a little Rubygem](http://rubygems.org/gems/ssync) and added a bit more features.

Go [check out the source code](https://github.com/fredwu/ssync)!
