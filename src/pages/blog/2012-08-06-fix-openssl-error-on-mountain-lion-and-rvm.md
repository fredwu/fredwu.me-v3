---
layout: post
title: Fix OpenSSL Error on Mountain Lion (and RVM)
date: '2012-08-06T23:25:00+10:00'
tags:
- openssl
- ruby
- rvm
- Mountain Lion
- fix
- cert
- ssl cert
- ssl
redirect_from:
- /post/28834446907/fix-openssl-error-on-mountain-lion-and-rvm
---
Don’t you just hate it when you have a fresh intall of Mountain Lion, RVM and some rubies - then all of a sudden you hit this `OpenSSL::SSL::SSLError` error message:

> SSL\_connect returned=1 errno=0 state=SSLv3 read server certificate B: certificate verify failed

The fix is quite simple actually, all you need to do is to download a CA root certificate:

```shell
curl http://curl.haxx.se/ca/cacert.pem -o ~/.rvm/usr/ssl/cert.pem
```

And that’s it! Enjoy!

