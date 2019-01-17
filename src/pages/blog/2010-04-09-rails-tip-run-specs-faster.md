---
layout: post
title: "[Rails Tip] Run Specs Faster!"
date: '2010-04-09T14:03:00+10:00'
tags:
- rails
- rspec
- ruby
- test
- tips
- spec
redirect_from:
- /post/507351482/rails-tip-run-specs-faster
---
If you are using `rake spec` to run the specs. Try using `spec spec` instead! It avoids doing some preliminary tasks and therefore is quicker to execute.

You can verify the difference using Unix’s `time` command, i.e. `time spec spec` and `time rake spec`.

