---
layout: post
title: Brewing Node.js on OS X without Xcode
date: '2012-08-26T00:43:00+10:00'
tags:
- node.js
- osx
- xcode
- command line tools
- osx-gcc-installer
redirect_from:
- /post/30171591426/brewing-nodejs-on-os-x-without-xcode
---
If you are like me who has no need for a full Xcode installation just to get the command line tools, chances are you are using one of these: Apple’s [Command Line Tools](https://developer.apple.com/downloads/) or the [osx-gcc-installer](https://github.com/kennethreitz/osx-gcc-installer).

Recently Node.js has made some changes so that it no longer installs on OS X via [homebrew](http://mxcl.github.com/homebrew/) if you don’t have Xcode installed.

If you run `brew install nodejs`, you will get the following error:

```shell
\> Error: Failed executing: make install (node.rb:28)
```

And if you run `brew install -v nodejs`, you will discover this line:

```shell
\> xcode-select: Error: No Xcode is selected. Use xcode-select -switch , or see the xcode-select manpage (man xcode-select) for further information.
```

The fix? It’s actually quite easy, simply do:

```shell
sudo xcode-select --switch /usr/bin
```

And voila! You can now install Node.js just fine. :)

