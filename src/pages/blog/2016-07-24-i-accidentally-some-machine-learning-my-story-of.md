---
layout: post
title: I Accidentally Some Machine Learning - My Story of A Month of Learning Elixir
date: '2016-07-24T04:33:29+10:00'
tags:
- elixir
- phoenix
- ruby
- rails
- machine learning
- naive bayes
- stemming
- simple_bayes
- stemmer
redirect_from:
- /post/147855522498/i-accidentally-some-machine-learning-my-story-of
---
About a month ago I was in-between jobs - I had two weeks to rest up, recharge and get ready for my new job. So I thought,&nbsp;I should use those two weeks to learn something new.

Years ago I briefly looked into [Elixir](http://elixir-lang.org/) when it was first released to the wild, at the time I wasn’t interested in picking it up due to its syntax similarity to Ruby, despite their vastly different underlying semantics. I love Ruby, and it’s been my weapon of choice for the past 6-7 years, so when it came time for me to learn something _new_, I naturally wanted to learn something a bit more different than Ruby, syntax-wise.

Fast-forward a few years, I am more mature and open-minded, and are now in a position to welcome Elixir and to embrace the Ruby-like syntax as well as the functional programming mindset with open arms.


## Learning Elixir

Given the strong influence of Ruby in Elixir, I can’t help but get nostalgic about learning it by reading another great book by Dave Thomas: [Programming Elixir](https://pragprog.com/book/elixir12/programming-elixir-1-2).

Dave Thomas’ original [Programming Ruby](https://pragprog.com/book/ruby/programming-ruby) was instrumental in the success of the Ruby programming language and its communities in the west, and it certainly has helped me to greatly widen my exposure to not only the wonderful world of Ruby but object-oriented programming in general as a PHP developer.

Learning Elixir has been really fun, not only does it share the same developer-friendliness championed by Ruby, it also does so with remarkable strength in concurrency thanks to BEAM (Erlang’s VM).

Many people are drawn to Elixir due to its Ruby influence, its functional and immutability nature, and its [Actor-based concurrency model](https://en.wikipedia.org/wiki/Actor_model). I would however like to call out one of my favourite features of Elixir that sometimes gets overlooked, and that is how you could write unit tests using [`ExUnit.DocTest`](http://elixir-lang.org/docs/stable/ex_unit/ExUnit.DocTest.html).

### Elixir Makes Writing Unit Tests Effortless

Python programmers have been writing doctests for years, but Ruby due to not having an equivalent standard library, has never had writing doctests taken off in its community. I’m glad Elixir has.

Take a look at the code snippet below:

```elixir
defmodule Stemmer.Step0 do
  @doc """
  ## Examples

      iex> Stemmer.Step0.trim_apostrophes("'ok")
      "ok"

      iex> Stemmer.Step0.trim_apostrophes("o'k")
      "o'k"

      iex> Stemmer.Step0.trim_apostrophes("'o'k'")
      "o'k"
  """
  def trim_apostrophes(word) do
    word
    |> String.replace_prefix("'", "")
    |> String.replace_suffix("'", "")
  end
end
```

The three test cases given will actually be tested by ExUnit, provided you ask it to do so as below:

```elixir
defmodule Stemmer.Step0Test do
  use ExUnit.Case, async: true

  doctest Stemmer.Step0
end
```

You may think having doctests is not a big deal, what I can say is that I am really enjoying the fact that **unit tests can be written with minimal friction and high visibility** (as they sit with the implementation, rather than within a big test suite with a sea of files). Besides, not all of us practice TDD religiously or 100% of the time, and when I don’t or can’t do TDD, having doctests ensures I don’t forget adding test cases. :)

### Toy Robot in Elixir

The best way to learn something new is to practice it as you learn it. Instead of diving straight into a complicated system, or to write a `hello world` program, I thought I would dig out a code test and re-implement it in Elixir.

The code test is the rather infamous [Toy Robot](https://github.com/search?q=toy+robot) test. As an interviewer, I must have reviewed a few hundreds of these tests, most of which in Ruby. I know what a good OO solution looks like, so naturally I was looking forward to “rethink” the problem and have a crack at it using Elixir.

Here is the result: [https://github.com/fredwu/toy-robot-elixir](https://github.com/fredwu/toy-robot-elixir)

As a learner, I wanted to practice as many language features as possible, so included in the Toy Robot test code I tried:

- Different data structures such as Struct and List
- Pattern matching
- Data piping (`|>`)
- `Agent` for managing states
- Macros for validation rules

I kept the test code small and nimble on purpose to illustrate the readability of a highly expressive language. I may not have exercised all the language features (such as supervisors and protocols), but at that point I felt I could start the Elixir journey with a big smile on my face already.

## Learning Phoenix

I have to admit, a big part of the reason that got me started on learning Elixir is to build a side project. Initially I wanted to simply use Ruby and Rails because I can be very productive using them, but in the end I decided on learning Elixir and [Phoenix](http://www.phoenixframework.org/), because **most side projects fail, and when they do, how much learning can you extract out of those experiences?** My answer to this question, is to learn a new language, a new framework and most importantly a new programming paradigm to drastically increase the amount of learning I could gain.

But please, before you jump on Phoenix, learn Elixir properly first! Over the years I’ve seen far too many cases of people jumping on Rails without understanding the language features of Ruby…

To learn Phoenix, the [Programming Phoenix](https://pragprog.com/book/phoenix/programming-phoenix) book is pretty much the bible on this subject aside from the official guide, and it is written by Chris McCord, the author of Phoenix, Bruce Tate, and Jose Valim, the author of Elixir.

As an experienced Rails developer, it only took me a day or two to go through the book (I largely skimmed the chapters on `Channels` as I don’t intend to build a real-time app).

Now, as a Ruby developer, the biggest pain point when working on Rails or other sizeable Ruby MVC projects for me, is ActiveRecord. I got so frustrated to the status quo I even [attempted to fix it](https://github.com/fredwu/datamappify).

Fortunately, in Elixir and Phoenix we have [Ecto](https://github.com/elixir-ecto/ecto). One of my favourite features of Ecto is the concept of [Changeset](https://hexdocs.pm/ecto/Ecto.Changeset.html).

Take a look at the code snippet below:

```elixir
defmodule MySecretApp.User do
  use MySecretApp.Web, :model

  schema "users" do
    field :username, :string
    field :email, :string
    field :password, :string, virtual: true
    field :encrypted_password, :string

    has_one :profile, MySecretApp.Profile

    timestamps()
  end

  def changeset(struct, params \\ %{}) do
    struct
    |> cast(params, [:username, :email])
    |> validate_required([:username, :email])
    |> validate_length(:username, min: 3, max: 20)
    |> validate_format(:username, ~r/\A[a-zA-Z0-9_]+\z/, message: "alphanumeric and underscores only")
    |> validate_format(:email, ~r/@/)
    |> unique_constraint(:username)
    |> unique_constraint(:email)
  end

  def creation_changeset(struct, params \\ %{}) do
    struct
    |> changeset(params)
    |> password_changeset(params)
  end


  defp password_changeset(struct, params) do
    struct
    |> cast(params, [:password])
    |> validate_required([:password])
    |> validate_length(:password, min: 8, max: 200)
    |> encrypt_password
  end

  defp encrypt_password(changeset) do
    case changeset do
      %Ecto.Changeset{valid?: true, changes: %{password: password}} ->
        put_change(changeset, :encrypted_password, Comeonin.Bcrypt.hashpwsalt(password))
      _ ->
        changeset
    end
  end
end
```

The `changset/2` function can be used when a user needs to be updated, whereas the `creation_changeset/2` is to be used only when a user is first created. Sure, you can achieve similar result in Rails by using custom validators, but the fact that this practice is enforced by the library and the framework, is encouraging.

One other thing that I’ve seen in larger Rails apps, is the leaky abstraction of view-level logic, they typically sit in controllers, helpers (which are globally available) or worse, models. Phoenix in this case follows what [Hanami](http://hanamirb.org/), [Trailblazer](http://trailblazer.to/) and many other frameworks do: it introduces a “view model” layer.

Something along the lines of:

```elixir
defmodule MySecretApp.UserView do
  use MySecretApp.Web, :view

  def full_name do
    "#{title} #{first_name} #{last_name}"
  end
end
```

In a nutshell, Phoenix is just like Rails, but less magical (in a good way) and faster. :) Like the Elixir eco-system, most libraries and concepts feel like their ruby/rails counterparts, but more refined.

There are a few popular [Hex](https://hex.pm/) packages if you’re familiar with their ruby counterparts:

|| Elixir | Ruby |
-|-|-|
Code analysis | [credo](https://hex.pm/packages/credo) | [rubocop](https://rubygems.org/gems/rubocop)
Testing | [espec](https://hex.pm/packages/espec) | [rspec](https://rubygems.org/gems/rspec)
Browser testing | [wallaby](https://hex.pm/packages/wallaby) | [capybara](https://rubygems.org/gems/capybara)
Test coverage | [excoveralls](https://hex.pm/packages/excoveralls) | [simplecov](https://rubygems.org/gems/simplecov)
Test factory | [ex_machina](https://hex.pm/packages/ex_machina) | [factory_girl](https://rubygems.org/gems/factory_girl)
Authentication | [guardian](https://hex.pm/packages/guardian) | [devise](https://rubygems.org/gems/devise)

And the list goes on and on… Be sure to check out [Awesome Elixir](https://github.com/h4cc/awesome-elixir/) for more community curated Elixir libraries.

## Learning Machine Learning

As I started building the foundation of my side project, you know, the usual user management and session management, etc, etc, by chance I came across mentions of [Bayesian inference](https://en.wikipedia.org/wiki/Bayesian_inference).

One thing led to another, very soon I started looking into varies different machine learning algorithms such as [Naive Bayes](https://en.wikipedia.org/wiki/Naive_Bayes_classifier) and [Random Forest](https://en.wikipedia.org/wiki/Random_forest). These are all subjects I had never come across or even heard of before, as I have no strong mathematics, statistics or computer science background. I was however, intrigued and inspired nonetheless, and wanted to employ some machine learning in my side project.

And the best way to understand and learn about machine learning algorithms? You guessed, is to write one! After some research, I came to the conclusion that Naive Bayes is one of the simplest to implement, is great for text classification which is useful for my side project, and has good accuracy given its simplicity and fast speed.

### Introducing [Simple Bayes](https://github.com/fredwu/simple_bayes)

So, after a few train rides to and from work, on my newly purchased Macbook (yes, the one with only a single USB-C port), I built a Naive Bayes library: [Simple Bayes](https://github.com/fredwu/simple_bayes).

As of writing, this is the only Naive Bayes library in Elixir that supports the following features:

- Naive Bayes algorithm with different models
  - Multinomial
  - Binarized (boolean) multinomial
  - Bernoulli
- No external dependencies
- Ignores stop words
- [Additive smoothing](https://en.wikipedia.org/wiki/Additive_smoothing)
- [TF-IDF](https://en.wikipedia.org/wiki/Tf-idf)
- Optional keywords weighting
- Optional word stemming via [Stemmer](https://github.com/fredwu/stemmer)

Let’s see it in action shall we? :)

```elixir
SimpleBayes.init
|> SimpleBayes.train(:ruby, "I enjoyed using Rails and ActiveRecord for the most part.")
|> SimpleBayes.train(:ruby, "The Ruby community is awesome.")
|> SimpleBayes.train(:ruby, "There is a new framework called Hanami that's promising.")
|> SimpleBayes.train(:ruby, "Please learn Ruby before you learn Rails.")
|> SimpleBayes.train(:ruby, "We use Rails at work.")
|> SimpleBayes.train(:elixir, "It has Phoenix which is a Rails-like framework.")
|> SimpleBayes.train(:elixir, "Its author is a Rails core member, Jose Valim.")
|> SimpleBayes.train(:elixir, "Phoenix and Rails are on many levels, comparable.")
|> SimpleBayes.train(:elixir, "Phoenix has great performance.")
|> SimpleBayes.train(:elixir, "I love Elixir.")
|> SimpleBayes.train(:php, "I haven't written any PHP in years.")
|> SimpleBayes.train(:php, "The PHP framework Laravel is inspired by Rails.")
|> SimpleBayes.classify("I wrote some Rails code at work today.")
# => [
# ruby: 0.20761437345986136,
# elixir: 0.08101868169313056,
# php: 0.019047884912605735
# ]
```

As you can see, provided with reasonable training data, Naive Bayes can work extremely well.

### Introducing [Stemmer](https://github.com/fredwu/stemmer)

Something I discovered as I was building Simple Bayes, is something called [stemming](https://en.wikipedia.org/wiki/Stemming). Let’s see another example:

```elixir
SimpleBayes.init(stem: false)
|> SimpleBayes.train(:apple, "buying apple")
|> SimpleBayes.train(:banana, "buy banana")
|> SimpleBayes.classify("buy apple")
# => [
# banana: 0.057143654737817205,
# apple: 0.057143654737817205
# ]
```

Oops, the probabilities of the sentence “buy apple” of being `apple` and `banana` are the same, that’s not good, as we know “buying” and “buy” should mean the same thing. This is where stemming comes in handy. Let’s enable stemming and run the example again:

```elixir
SimpleBayes.init(stem: true)
|> SimpleBayes.train(:apple, "buying apple")
|> SimpleBayes.train(:banana, "buy banana")
|> SimpleBayes.classify("buy apple")
# => [
# apple: 0.18096114003107086,
# banana: 0.1505149978319906
# ]
```

Stemming in this case correctly identified “buy” and “buying” as the same thing (they both have the stemmed root of “buy”).

How did I include stemming in Simple Bayes you wonder? Let me introduce you to [Stemmer](https://github.com/fredwu/stemmer) - as of writing this is the only Porter2 stemmer available in Elixir. :)

Elixir and BEAM may not be known for their raw performance, but compared to a similar Porter2 stemmer implemented in pure ruby, my Elixir version runs about five times faster (under `5`s to stem 29000+ words, compared to `25`s with the ruby version).

## The Learning Continues…

I’ve only been writing Elixir for a month, and there are still heaps to learn and to practice. So far though, I have to say my experience with both Elixir and Phoenix has been fantastic - I get the same satisfying and pumped feeling I got when I was learning Ruby and Rails years ago.

If you haven’t checked out Elixir, I strongly encourage you to do so, after all, the world seems to be moving in the concurrency direction at an increasingly rapid speed, including [Ruby 3x3](http://engineering.appfolio.com/appfolio-engineering/2015/11/18/ruby-3x3). :)

