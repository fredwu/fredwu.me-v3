---
layout: post
title: 'SimpleCov: Test Coverage for Changed Files Only'
date: '2012-11-13T18:34:00+11:00'
tags:
- ruby
- SimpleCov
- git
- diff
redirect_from:
- /post/35625566267/simplecov-test-coverage-for-changed-files-only
---
The other day a colleague asked whether or not it’s possible to have [SimpleCov](https://github.com/colszowka/simplecov) return a group that only contains uncommitted changes.

The answer is **yes**! After some digging around, we found the following way:

    # in spec_helper.rb
    SimpleCov.start 'rails' do
      add_group 'Changed' do |source_file|
        `git ls-files --exclude-standard --others \
          && git diff --name-only \
          && git diff --name-only --cached`.split("\n").detect do |filename|
          source_file.filename.ends_with?(filename)
        end
      end
    end

Basically use `git ls-files --exclude-standard --others` for untracked files, `git diff --name-only` for unstaged files and `git diff --name-only --cached` for staged files.

