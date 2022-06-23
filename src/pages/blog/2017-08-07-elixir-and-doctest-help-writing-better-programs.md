---
layout: post
title: Elixir and Doctest - Help Writing Better Programs, One Function At A Time
date: '2017-08-07T20:00:20+10:00'
tags:
  - elixir
  - doctest
redirect_from:
  - /post/163901408538/elixir-and-doctest-help-writing-better-programs
  - /post/163901408538/
  - /post/163901408538
---

## Preface

If memory serves right, it’s been several years since I first dabbled in Elixir, but it was about a year ago I really started putting some serious effort into learning Elixir, and as a result I made two libraries in the machine learning space: [Simple Bayes](https://github.com/fredwu/simple_bayes), a Naive Bayes text classifier implementation, and [Stemmer](https://github.com/fredwu/stemmer), an English (Porter2) stemming implementation.

Unfortunately after I’ve released those two libraries, I hadn’t had much opportunities to work with Elixir. My day jobs have been mostly Ruby, JavaScript, PHP and a dash of Golang. And so, after being silent for a year, I’ve decided to pick up something I had started a year ago - [a web Crawler](https://github.com/fredwu/crawler). If you are new to Elixir, feel free to follow this project as I am actively developing it.

## Learnings

The preface is to give a bit of background of when and how I started learning Elixir, now, let me talk about one of my favourite features of Elixir, and how it helps me write better code not just in Elixir, but in virtually any other language.

Introducing the topic of today, a really simple feature, and in fact it has been part of Python for years - the [doctest](https://en.wikipedia.org/wiki/Doctest).

## Doctest

In short, a doctest is pieces of code examples that run as part of the test suite, and show up as part of the documentation. For example:

```elixir
defmodule Greeting do
  @doc """
  ## Examples

      iex> hello("world")
      "hello world"

      iex> hello("dear")
      "hello dear"
  """
  def hello(input) do
    "hello #{input}"
  end
end
```

And then all you need is in your corresponding test file, to enable doctest:

```elixir
defmodule GreetingTest do
  use ExUnit.Case

  doctest Greeting
end
```

Even though I knew about Python’s doctest for years, I’d never realised how impactful it can be given its simplistic nature, probably due to the fact that I’ve never used Python for anything serious.

Until Elixir.

There are three things I find the most impactful as I write more doctests: clarity, scope, and design.

## Clarity

As a ruby programmer, I appreciate greatly the beauty of not just the main code base, but also its test suite. Hence I’ve always preferred to use RSpec in larger code bases. However, as the application gets more complex, and as the number of test files grows, the cognitive overhead of reading and processing all the files and lines becomes higher and higher.

Doctest solves this perfectly - no longer do we have to crawl through the right file and the right line for a particular test case, all the test cases are neatly presented right in front of you as you read the function itself.

You might think this as trivial, but just like many organisations spend time and effort to optimise for effective communication by studying [proxemics](https://en.wikipedia.org/wiki/Proxemics), proxemics between different components of a software code base also plays a role in improving the code clarity, and ultimately the code quality.

## Scope

Doctest is purposely simple, and is designed for unit tests. There have been many times when I found myself realising my function was too dependant on external states, or are doing too many things because it was hard to write simple doctests. In a way, the constraints of doctests have forced me to rethink the scope of my function, and that would often lead to an overall better designed system.

## Design

As much as I’d like to think about the [SOLID](<https://en.wikipedia.org/wiki/SOLID_(object-oriented_design)>) principles all the time, it is often too easy to dig deep wholes in the midst of building things.

Every now and then I find myself extracting a piece of logic to a private function and calling it a day. In Elixir, only public functions can have doctests - again, this constraint pushes you to think about the importance and the role of a particular function, perhaps it is better to be moved to another module as a public function therefore can have its own doctests. Here is [an example](https://github.com/fredwu/crawler/commit/7ac06b40a6c75b5e01311e70710185011f82471f) when I did some refactorings on Crawler.

## Closing

I wanted to write this article for a while now - as I truly love and appreciate Elixir’s asthetics and features. Many developers might find functional programming as a barrier, but I can assure you that with Elixir’s tooling and ecosystem, and of course doctest (_wink_), building software feels like a breeze.

Last time when I was this happy building software was when I first discovered ruby. If you haven’t given Elixir a try yet, I encourage you to do so sooner rather than later, it will not only give you a functional programming perspective, but will also help you write better code in other languages.
