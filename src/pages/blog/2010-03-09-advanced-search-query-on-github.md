---
layout: post
title: Advanced Search Query on GitHub
date: '2010-03-09T19:54:00+11:00'
tags:
- API
- GitHub
- query
- search
- tips
redirect_from:
- /post/436521412/advanced-search-query-on-github
- /post/436521412/
- /post/436521412
---
Did you know, you can perform advanced search queries on [GitHub](http://github.com/)?

For example:

```
ruby AND (textmate OR tmbundle)
```

The above query will search everything containing `ruby`, as well as either `textmate` or `tmbundle`.

Unfortunately at this stage the [GitHub API](http://develop.github.com/) does not support it. I’ve opened a [ticket](http://support.github.com/discussions/feature-requests/740-api-query-language-support-for-and-and-or) here.

