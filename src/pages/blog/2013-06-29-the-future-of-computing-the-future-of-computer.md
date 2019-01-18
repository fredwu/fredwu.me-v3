---
layout: post
title: The Future of Computing, The Future of Computer Programmers - An Interview
  with Yukihiro "Matz" Matsumoto
date: '2013-06-29T22:04:00+10:00'
tags:
- Yukihiro Matsumoto
- Matz
- interview
- ruby
- Turing Book
- Engineer Type
- cloud computing
- book
- The Future of Computing
redirect_from:
- /post/54175219257/the-future-of-computing-the-future-of-computer
---
A while ago I [translated an interview with Matz](/blog/2012-11-25-an-interview-with-yukihiro-matz-matsumoto/) done by a Chinese book publisher. The interview and the translation were well received, so this time I am translating another interview with Matz, done by Ito, the editor-in-chief from Japanese website [Engineer Type](http://engineer.typemag.jp/article/matz). Since I don’t read Japanese, the translation is based on [Turing Book’s Chinese translation](http://www.ituring.com.cn/article/45484).

The Chinese translator has done a great job translating the interview, but there are still many words and sentences lack sufficient context and therefore are difficult to grasp. I have put in many hours translating the text as well as doing researches to ensure the final article is readable. I hope you will enjoy it! :)

![](/img/posts/old/tumblr_inline_mp4x3eZbVc1qz4rgp.jpg)


**Ito:** Thank you for doing an interview with us, Matz. I have just finished reading your latest book _[The Future of Computing](http://www.amazon.co.jp/dp/4822234630/)_, could you perhaps talk about the future of programming and software programmers in general?

> **Matz:** Hmmm, this is difficult to answer… but thanks for reading my book!

**Ito:** In the book you’ve shared your thoughts on the past, present and future of different programming languages and software design patterns. Would you like to talk about the current state of the software industry? And is there going to be another paradigm shift in software development?

> **Matz:** As discussed in my book, to predict the future of a high tech industry such as computing is not particularly difficult. I believe in the foreseeable future the computing industry is still going to advance based on [Moore’s law](http://en.wikipedia.org/wiki/Moore%27s_law). Although, it is possible that in the next year or two [quantum computers](https://en.wikipedia.org/wiki/Quantum_computer) become a practical reality, in that case it will change everything! \*chuckles\* On a serious note, according to Moore’s law, the cost of computing will decrease and the performance and capacity of computing will increase - this basic principle is unlikely to change. One thing I did notice in recent years is that due to the advancement in computer hardware, the software industry is subtly changing too.

## Software Development in the Era of Multi-core and Cloud Computing

> **Matz:** It was about twenty years ago (in 1993) I invented the Ruby programming language, yet it still runs surprisingly well on modern computers.
>
> What this means is that in the past twenty years the computing environment which the software runs on did not see any fundamental changes. In recent years, we started seeing computing power being shifted from having higher CPU frequencies to being distributed over more CPU cores. And that means software needs to move in that direction too.

![](/img/posts/old/tumblr_inline_mp4x3p6yvF1qz4rgp.jpg)

Matz: Software has not seen major changes for years.

**Ito:** And this is covered in the last chapter from the book, right?

> **Matz:** Yes. Similarly to multi-core, cloud computing is advancing in the same direction. The future of computing is all about utilise multiple CPUs or computers effectively.

**Ito:** So, how does that change software development?

> **Matz:** In the past ten years or so we have been seeing more and more things happen on the Internet, and the Internet is an amazing application platform for extension and distribution. Compared to software engineers working on [mainframe computers](http://en.wikipedia.org/wiki/Mainframe_computer), web developers are naturally more familiar with the concepts of multi-core and cloud computing.

**Ito:** After interviewing many web and mobile startups, we realised that the number of software engineers working in [PaaS](http://en.wikipedia.org/wiki/Platform_as_a_service) and cloud computing have been increasing rapidly.

> **Matz:** Absolutely. And I do believe that “not needing to purchase and own dedicated hardware” is going to be the mainstream. The idea and thought process of “not owning” is not only important for software development, but also important for business development.

## “Owning” Becoming a Liability, Not Asset

> **Matz:** In the past, “owning” was seen as the source of vitality of a corporation - those who own high performance mainframe computers were able to do business transactions in high volume whereas those who do not were not able to compete.
>
> These days the landscape is changing - those corporations who do not “own” expensive hardware have more competitive edge. Let’s say it takes five years to break even from the expensive investment of servers, during that time those machines are being put in use to realise their full potential and to justify their cost. It may appear to have saved the business cost but it is not, simply because the value of the hardware decreases as each day passes by.
>
> To put simply, we are now entering the era of “owning” being a liability rather than asset. If you had the most advanced hardware, software engineers were able to develop efficiently. On the contrary, if you didn’t, then you might want to get used to the hours-long waiting for the code to compile. \*chuckles\* The rise of cloud computing platforms like [Heroku](http://www.2gocn.com/) is making “owning” a thing of the past.
>
> Also, “not owning” has several advantages on the development as well as the commercial front. For instance, it allows many startups to rise. In the past, in order to start a new business you would need capital for purchasing servers and/or renting servers in a data centre. These days, to get started on a platform like Heroku couldn’t be easier, for example on Heroku you could start with just one dyno for free. This new way of developing software significantly reduces costs and risks.
>
> Years ago I read an essay called [Ramen Profitable](http://www.paulgraham.com/ramenprofitable.html) by [Y Combinator](http://ycombinator.com/)’s founder [Paul Graham](http://en.wikipedia.org/wiki/Paul_Graham_%28computer_programmer%29). “Not owning”’s flexibility and agility contribute a great deal to it. And this trend has now grown beyond just relevant to startups, in fact in the recent years many large corporations have begun adapting this approach too.
>
> In the United States, corporations like Disney and Best Buy are indeed utilising Ruby, Rails and Heroku to rapidly grow their internal infrastructure in a cost-effective fashion. What was once considered competitive edges to venture capitalists, like “rapid development” and “development flexibility” are now also possible for these giant corporations.

**Ito:** What about the giant corporations in Japan?

> **Matz:** I have never worked in a big corporation so I can’t tell where they are heading. People have been optimistic, though as an observer I am concerned.

![](/img/posts/old/tumblr_inline_mp4x3tRPEw1qz4rgp.jpg)

## Real Benefits of Innovation in Cloud Computing Not to Be Overlooked

**Ito:** What makes you concerned about software development?

> **Matz:** The traditional approach of developing software is still the norm. For example, some corporations, even though use Amazon Web Services, still rely on system administrators to handle their infrastructure. It is too common to see a software development team consists of over a dozen people.
>
> This in my opinion defeats the purpose and forfeits the benefits of “not owning” servers. There are simply too many of these case studies whereby only on the surface of cloud computing is explored and understood.
>
> I have to say I am disappointed by some of the so-called “private clouds” owned by large corporations. The advantage of cloud computing is to utilise multiple computers in the cloud, but those private clouds are essentially their internal data centres. Isn’t that the same as owning a bunch of servers?

![](/img/posts/old/tumblr_inline_mp4x3ym1v61qz4rgp.jpg)

Matz: Many companies barely scratch the surface of emerging technologies.

**Ito:** Indeed, it is too often to see the real benefits of emerging technologies overlooked or misunderstood. Anything else that makes you concerned about the future?

> **Matz:** Nowadays the speed of development has always been a priority from big development projects in [B2B](http://en.wikipedia.org/wiki/Business-to-business) to small development projects in many startups. [Yahoo! Japan](http://www.yahoo.co.jp/) even coined a term “爆速化” (explosively high speed) to indicate the importance of development speed in the ever more competitive and engaging markets.
>
> Looking at things this way, those so-called “system integrators” are becoming obsolete. Should they just give up what they do or continue? I don’t know, but I do know that the gap between them and engineers who have the capability and skills to create real value is increasing.

## Career Longevity of Software Engineering

**Ito:** Who are those engineers who have the capability and skills to create real value?

> **Matz:** The ones who would put in effort to create software or systems from a prototype to a final product. And this has nothing to do with whether they work in web or system integration, or whether it’s consumer oriented or corporate oriented.

![](/img/posts/old/tumblr_inline_mp4x42bl5b1qz4rgp.jpg)

Matz: Unbalanced skill combination leads to a gloomy future.

**Ito:** Do you mean the engineers who are capable from design to implementation?

> **Matz:** Yes. Speaking of which, software developers have to know more than just system design - they cannot survive without knowing how to code. Just like in life, you cannot survive without being down to earth. \*chuckles\*
>
> Despite the fact that it is pointless to have someone doing only the system design, and not the development as well, the System Integration industry is still going strong in Japan - and it is in fact an industry with high profit margin.
>
> Even if the system designers came up with questionable specifications, or if the programmers were sloppy so the software was terrible to use, users would still use it despite whining. Flaws are easily glossed over under high profit margins.
>
> But just as discussed before, as development speed increases, profit margins would undoubtedly become smaller. Flaws are therefore harder to gloss over.
>
> In my opinion, if things don’t change, those run-of-the-mill software engineers might not survive in five years. Worse, the junior to mid-level to senior programmer corporate ladder is going to collapse.
>
> Say, you wouldn’t want to start a VHS rental shop when DVDs were on the rise, would you?

## Difference Between Those Who Control Their Destiny to Those Who Don’t

**Ito:** Do you have any advice for those who do not wish to be in a “gloomy future”? What can they do?

> **Matz:** To innovate and to create new things, I suppose.
>
> It’s not all doom and gloom. Even though many ageing technologies have been or are being replaced by the web, jobs will not disappear overnight. I think many software developers will still be employed in those jobs.
>
> Having said that, it is always good to create new things or even invent new programming languages.

**Ito:** What are these “new things”?

> **Matz:** I see three types of new things.
>
> First of all, new services. If you can create a new service, or a service that offers superior user experience - it would be an innovation.
>
> Secondly, new technologies. To come up with technologies better than the existing ones - and this is what I have been doing.

[![](/img/posts/old/tumblr_inline_mp4x45MsHv1qz4rgp.jpg)](https://github.com/mruby/mruby)

[mruby](https://github.com/mruby/mruby) was released earlier this year on Github.

> Or, another way is to invent new algorithms.
>
> The three ways I mentioned have different difficulties, but they share the same goal - to create something that hasn’t existed yet. Those who keep working on these kinds of challenges are the true outstanding software engineers.
>
> The ones who do not challenge themselves to create new things are often falling behind - they learn a hip new language today and try a new web framework tomorrow, but still lack the foresight to invent and to improve.
>
> Of course, it is important to learn and try new things, but if you see them as your ultimate goal then you will lose control of your destiny. I believe that the ones who do not get boggled down in every new trendy thing will ultimately be happier.

![](/img/posts/old/tumblr_inline_mp4x48UgIX1qz4rgp.jpg)

## Software Development is a Punch to Deficiency

**Ito:** Here is a sharp question: be a follower rather than an inventor is always easier and perhaps makes more money too. What makes you keep inventing?

> **Matz:** My standard answer would be “because writing and running new programs make me happy”. But the real reason is because I don’t like deficiency.
>
> There are people who have different opinions and thought processes, I would often come up with questions like “why was it done this way” or “this will be too hard to use”.

![](/img/posts/old/tumblr_inline_mp4x4bIpWG1qz4rgp.jpg)

Matz dislikes deficiency, so he invented the ruby programming language.

**Ito:** True, but all products more or less reflect their producers’ preferences, right?

> **Matz:** Absolutely, and I am not saying that this is bad or anything. I just hate to point fingers at other people’s preferences - if you don’t like something, make your own! This is a basic trait of a good software engineer, and is what makes open source sustainable.
>
> In open source projects, all the source code is publicly available therefore it is very easy to see how a program is designed. As long as you have ideas on how to improve and optimise the design, you are welcome to do so.
>
> Now it is an entirely different story for certain things in the society. \*chuckles\* At least in software development, we can rely on our skills and knowledge to improve and to change. If it’s your own creation, it can be adjusted and adapted to suit the ever changing needs.
>
> This is same for Ruby - I like programming languages and more importantly I like improving programming languages myself, and that’s why I still work on Ruby till this day.

## Software Development, One of the Rare Careers that Could Make a Change on Your Own

![](/img/posts/old/tumblr_inline_mp4x4fRpd91qz4rgp.jpg)

Matz talking about developer happiness, wearing his “[Ruby City MATSUE]([https://www.facebook.com/rubycitymatsue](https://www.facebook.com/rubycitymatsue))” polo shirt.

> **Matz:** I think I have the right personality for developing software. Only the software industry can tolerate my carefreeness - am I too arrogant for saying that? \*chuckles\*
>
> In all honesty, software development is one of the rare careers that could bring positive changes to the society on your own. It’s a wonderful occupation that brings happiness and fulfillment!

**Ito:** Many people would predict their software future based on theories, but Matz you always use “happiness”.

> **Matz:** That’s right. Because only you can control your own destiny. It doesn’t matter if you were told to do things in a way just becasue “Matz said so” - ultimately, I cannot be responsible for your destiny. You should make your own decisions.
>
> I would still say things like “the future might look like this”, but these are just my personal opinions.
>
> And this is the same even for today’s discussion - if someone thinks he does not agree with what Matz has said, he should follow his own decision and the path he chooses.

## Exploring the Future: “You” Are the Only Constant

**Ito:** Having read _The Future of Computing_, I remember you talked about the inception and development of varies programming languages. But we all know that the IT industry is moving in a rapid pace, it is difficult to rely on history to guide us through to the future. If multi-core and cloud computing are only just the beginning of a paradigm shift, why did you write about the things happened in the past?

![](/img/posts/old/tumblr_inline_mp4x4ismcI1qz4rgp.jpg)

Matz: Technologies progress just like a pendulum clock.

> **Matz:** People see things differently - and I believe the IT industry is progressing in a manner similar to the swing motion of a pendulum clock.
>
> As more and more new programming languages, techniques and frameworks pop up, software development related technologies are progressing whilst seeking for balance.
>
> So, how does “the most balanced from the past” become “the most balanced right now”? Think about how pendulum clock swings and in the past how technologies have emerged - you could then predict roughly what would constitute “the most balanced in the future”.
>
> Use “centralised computing vs distributed computing” as an example, in the past there was usually only one centralised mainframe computer, later on to increase the processing capability commodity server farms were utilised, and now we are moving towards cloud computing.
>
> There is no point to look at a particular past event. If you wanted to predict a technology in the future, knowing what has contributed to the balance of a past technology’s rise and fall is going to help.
>
> Human’s ability is one of the factors too, because we have limited capability as a language designer it is useful to look at what others have done to cater for our ability, and therefore improve and evolve the technology.
>
> In the book I briefly talked about [Dart](http://www.dartlang.org/) and [Go](http://golang.org/). As a programming language inventor I find it really fascinating to explore the thought processes behind those language designers. And it has helped me to gain a deeper understanding of human behaviour.

**Ito:** I was going to ask why it is so important to study the past, now I know.

> **Matz:** I mentioned this in the beginning - computing has not seen major changes for years.
>
> Programming languages invented over fifty years ago are still in use today, and Ruby has been around for twenty years now. This proves that computing is progressing slower than what a lot of people believe.
>
> On that note, there are many past cases whereby focuses were put on what was cool and new without understanding why. Compared to those “follower” software developers, the ones who command and understand the principles and theories behind changes and progresses have a much longer career longevity.
>
> If you are a software developer who wants a longer career longevity, please read _The Future of Computing_! \*chuckles\*

**Ito:** Thank you Matz for talking to us today!

