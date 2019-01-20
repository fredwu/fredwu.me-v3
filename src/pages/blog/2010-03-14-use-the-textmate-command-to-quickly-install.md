---
layout: post
title: Use the 'textmate' Command to Quickly Install Bundle Files
date: '2010-03-14T21:46:00+11:00'
tags:
- GitHub
- Textmate
- bundle
- gem
- install
- installer
- search
- ruby
redirect_from:
- /post/447443106/use-the-textmate-command-to-quickly-install
- /post/447443106/
- /post/447443106
---
Initially developed by Yehuda Katz, the [Textmate gem](http://yehudakatz.com/2008/05/19/textmate-gem/) is an extremely handy tool for installing and managing your Textmate bundle files.

The tool works very well, for the most part. But due to the way the GitHub search query was built, the tool failed at finding Textmate bundles that do not honour the ’-tmbundle’ suffix in the name of their repositories.

I was waiting for GitHub to fix their API bug which I [reported here](/blog/2010-03-09-advanced-search-query-on-github/), but today I discovered a workaround that solves this issue.

So, here, I present you with the improved code [on my fork](http://github.com/fredwu/textmate).

Update: The changes are now merged back to Ddollar’s repo, so you may install the Textmate gem by:

```shell
gem install textmate --source git://github.com/ddollar/textmate.git
```

Enjoy! :)

