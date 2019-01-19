---
layout: post
title: 'Protip: Unsync the "Index" Folder of Sublime Text 3 from Dropbox'
date: '2013-10-12T15:26:30+11:00'
tags:
- sublime text
- dropbox
- sync
redirect_from:
- /post/63794595864/protip-unsync-the-index-folder-of-sublime-text
---
If you’re like me who uses both Sublime Text 3 and Dropbox, chances are you have your Sublime Text 3 folder synced in Dropbox.

I use my laptop as my primary workstation so most of the time it’s docked and charged. Occasionally when I do use it on battery power however I notice the extremely poor battery life - typically only 2-3 hours.

Eventually I realised the power consumption was caused by Sublime Text 3 generating a temp file in its "Index" folder every second or so, and that triggers Dropbox to do the syncing - causing it to take 40-50% of CPU constantly.

So, here’s a simple fix. Click on the Dropbox icon, then click on the gear icon and select "Preferences…", select the "Advanced" tab, and select "Change Settings…" for Selective Sync to bring up the column-based file dialog, now simply find and untick the "Index" folder and you’re all set. :)

![](/img/posts/old/tumblr_inline_mujg5idzne1qalr27.png)

