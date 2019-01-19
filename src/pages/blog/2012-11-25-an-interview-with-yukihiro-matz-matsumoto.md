---
layout: post
title: An Interview with Yukihiro "Matz" Matsumoto
date: '2012-11-25T17:45:00+11:00'
tags:
- Yukihiro Matsumoto
- Matz
- interview
- Turing Book
- China
- ruby
- The Future of Computing
- The World of Code
redirect_from:
- /post/36493181321/an-interview-with-yukihiro-matz-matsumoto
---
_Update: Please check out [this new interview with Matz](/blog/2013-06-29-the-future-of-computing-the-future-of-computer/), done by Engineer Type._

A week ago I went to Shanghai, China to attend and to give a talk at [RubyConf China](http://rubyconfchina.org/). The day before the conference’s first day a bunch of us were invited to a VIP dinner where we [met with Matz](http://www.flickr.com/photos/76172385@N07/8212328817/in/set-72157632083056277/lightbox/) and got to play with [a device running MRuby](http://www.flickr.com/photos/76172385@N07/8213422808/in/set-72157632083056277/lightbox/). And I heard that earlier on that day Matz was ‘adopted’ by a book publisher to do an interview.

I have found the interview ([in Chinese](http://www.ituring.com.cn/article/17487)), and found it to be really useful. So I translated it to English. Hope more people will like it. :)

On November 16th, 2012 - a day before [RubyConf China](http://rubyconfchina.org/), a Chinese book publisher [Turing Book](http://www.ituring.com.cn/) has done an interview with Matz on his new book _[The Future of Computing](http://www.amazon.co.jp/dp/4822234630/)_ as well as about a few topics interested to Chinese readers. [The interview](http://www.ituring.com.cn/article/17487) was conducted by _The Future of Computing_’s Chinese translator [Zi Heng Zhou](http://www.ituring.com.cn/users/86141).


**Zhou:** Mr. Matsumoto’s new book _The Future of Computing_ is published earlier this year and the Chinese version is being translated by yours truly, and that is going to be released some time next year in China. Your last book _[The World of Code](http://www.amazon.co.jp/dp/4822234312/)_ has received high praises amongst the readers in China, so what are the differences between the last and the new book?

> **Matz:** _The World of Code_ has 14 topics in total, and each topic covers the basics - they covered more breadth than depth. The new book on the other hand has one set topic - thoughts on the emerging technologies in the future, therefore the ground covered would be narrower and more in depth than the last book. On top of that, the new book discusses several things by timescale, such as the history and the changes since the invention of computing, and computing’s impact on our future lives. Therefore it’s the thoughts of both the past and the future. The computing world is changing rapidly, and this book’s purpose is to discuss the direction of computing heading into the future.

**Zhou:** Speaking of the history of computing, you have touched on a few things about Moore’s law in the book?

> **Matz:** Moore’s law describes the rule of changes over the history of computing hardware. The book discusses not only the changes on computing itself, but also the changes on its surrounding environment.

**Zhou:** On the topic of the evolution of programming languages, Paul Graham said in _[The Hundred-Year Language](http://paulgraham.com/hundred.html)_ that _the main branches of the evolutionary tree pass through the languages that have the smallest, cleanest cores_. In the new book you seem to hold a different opinion, can you tell us why? And what’s your take on the evolution of programming languages?

> **Matz:** Paul loves Lisp, and Lisp perfectly matches the characteristics of the programming languages described in his essay, and so Paul reckons the programming languages in a hundred years from now will look like Lisp. In reality though, Lisp has been around for over 50 years, and to be honest it isn’t one of the mainstream programming languages. In my opinion this may have been because most programmers don’t find Lisp charming enough. In other words, there is a gap between the so-called "smallest, cleanest cores", "beautiful" languages and the expectation of programmers. It would be understandable if Lisp’s charm had not been accepted by everyone in a year or two, but for 50+ years it hasn’t reached the mainstream, could it be because it fundamentally does not match our expectation? There is a huge difference between **human friendly** languages and languages that have **smallest, cleanest cores** , and I am afraid the gap between them might not close even in a hundred years. As for what future programming languages should look like, I think they should have a runtime model similar to that of Lisp **and** be easily understandable by humans. All of a sudden, Ruby looks a lot closer to that, doesn’t it?

**Zhou:** Mr. Matsumoto you are the father of Ruby. We know that during the design of a programming language there might be a lot of different choices to be made, e.g. dynamically typed vs statically typed, prototype based vs class based, etc. When you were designing Ruby, what was the most difficult choice you made?

> **Matz:** Before Ruby I actually have designed another language when I was in university, and that language was statically typed, similar to Eiffel. I liked statically typed languages, but the language I designed during university was more for academic purposes. Several years later, when I wanted to design a language as a tool I could use, I preferred to have it dynamically typed as I think they were more practical. So I designed Ruby. And I think it was the correct decision - it might not have been the most difficult decision, but it certainly was the biggest decision. Now that the decision of being a dynamic language is made, languages such as Smalltalk, Lisp and to an extent Perl have all had influences on Ruby. One of the features of Ruby is "mixins", and mixins were not very common at the time Ruby was created. But because I don’t like multiple inheritance, I always believed that there must be an easier way to achieve similar results, so I designed mixins in Ruby.

**Zhou:** Looking back, is there anything in Ruby you wish you did differently?

> **Matz:** In the beginning my goal was to replace Perl as my tool therefore I have borrowed many ideas from Perl, such as using the dollar sign ($) to indicate special variables. Looking at it now it seems to be a little bit too much and too similar to Perl. There are a few other things but mainly I think it is too similar to Perl. Back then before the ruby idioms were formed, there were many things that were borrowed from Perl - nowadays I think many of them weren’t necessary thanks to the ruby and rails idioms.

**Zhou:** Many believe Ruby’s popularity was because of Ruby on Rails, and you agreed with this in the book. So what do you think made Rails so successful?

> **Matz:** The first and foremost, it benefitted from the rapid growth of the web - almost every software development platform is eyeing on the web field. What was developed using the traditional Client-Server architecture can now be implemented on the web. The number of applications that can be developed for the web has grown, and that’s important. Secondly, Ruby is optimised for easier development and higher development productivity. I think these two reasons combined, is what made Rails so successful.
>
> Also, Ruby has many powerful features such as meta-programming and extendability via monkey patching. Through these features, basic classes can be enhanced, and DHH created Rails using these powerful features of Ruby. For people who have never touched Ruby, for example those Java programmers who like "inflexible" languages, they will be like, "Huh? You can do that?" - and I think that’s also one of the reasons why Rails is so popular.

**Zhou:** It is said that DHH was going to create a web framework using PHP, but eventually moved to Ruby?

> **Matz:** Yes, and I think the reason for that might be the limitation of meta-programming in PHP. After Rails was released there were a bunch of PHP frameworks came out that are inspired by Rails, such as Symfony and CakePHP. PHP however does not have many of the powerful features found in Ruby, and purely from the development perspective I still believe Rails is the more powerful one out of the bunch. By the way, I actually met with DHH before, in Denmark. Back then he hadn’t started learning Ruby yet, perhaps that had a small impact on him too.

**Zhou:** Ruby is being used widely for the web, but one hot topic amongst Chinese readers is the development direction of Ruby outside of the web. Any thoughts?

> **Matz:** True, many web based projects use Ruby, for instance web frameworks like Rails and Sinatra, etc. The world of programming however is far beyond simply web, and I have always wanted Ruby to break out from the web to other areas. In the near future, I would like to see Ruby being used in three fields:
>
> 1.
>
> Scientific computing. In this field, languages like Python, R and Matlab are popular choices. I hope Ruby will soon be one of them. In fact, we are developing a project called SciRuby, and we hope it will help us with the adoption in scientific computing.
>
> 2.
>
> High performance computing. This is somewhat related to scientific computing - to use super computers for doing computational work. Compared to C++, Ruby indeed is very slow, and that’s why people think Ruby isn’t suitable for doing high performance computing. In University of Tokyo a research student is working on an academic research project that compiles Ruby code to C code before compiling the binary code. The process involves techniques such as type inference, and in optimal scenarios the speed could reach up to 90% of typical hand-written C code. So far there is only a paper published, no open source code yet, but I’m hoping next year everything will be revealed.
>
> 3.
>
> Embedded systems. For micro devices such as cell phones, medical equipment and robots, Ruby isn’t really suitable due to its memory use and APIs. Therefore we need something that’s more suitable for these embedded systems where memory consumption has to be low and APIs have to be optimised. And that’s what MRuby is designed for.

**Zhou:** Twitter is mainly built using Rails, but I read a news recently about the traffic surge during the US president election period and Twitter is now migrating to other platforms to help with the scaling. What’s your view on this?

> **Matz:** There are many reasons I believe. First of all, nobody could have predicted Twitter’s huge success - who would’ve thought a service that essentially provides 140 characters of text for blogging to become one of the largest social networks. During their rapid growth they have added a lot of new features, and I think Ruby has contributed to that - it allowed many new features to be thought and implemented in very short amount of time. Twitter could not have anticipated the traffic it is now handling, so it’s fair to say that they have now hit the limit of their architecture designed from way back.
>
> To solve the issue, Twitter needs to design a new architecture from the ground up in order to handle the ever increasing traffic. Although, Ruby can still be used for rewriting the architecture (chuckles). More seriously though, when a platform hits its limit, there are a few ways of solving it such as rewriting the architecture and changing to another language/platform, etc. I believe the most effective way is to rewrite the architecture, and this is exactly what Twitter’s been doing. During the rewriting process the Twitter engineers wanted to take on more challenges so they picked Scala. Because Scala is a compiled language it has great performance, so it is a fine choice for the new architecture.
>
> My opinion is that when your system is still in its growing stage, it is far more important to have the ability to react quickly to changes, and that’s what a highly flexible language such as Ruby offers. Once your system reaches to a point of maturity, stability and success, then to have a new architecture that saves on resources makes sense. Twitter only chose to use Scala for its core components, the web front-end and many of their internal tools are still using Ruby. As a matter of fact, I paid Twitter a visit last month and talked to many of their engineers there - Ruby is still in great use (chuckles).

**Zhou:** Mobile platforms become hotter and hotter in recent years due the increased use of smartphones, tablets and other mobile devices. As far as programming language is concerned, Android uses Java and iOS uses Objective-C. What about scripting languages like Ruby, how do you see them fit in this picture?

> **Matz:** It is no doubt that so far in order to develop for Android you use Java, and for iOS you use Objective-C. But that also creates a huge barrier because you would need to rewrite your application if you wanted to port from one platform to another. Projects like PhoneGap and Titanium try to solve this very issue, via languages such as JavaScript and Lua to offer cross-platform compatibility. For Ruby, there is a project called Rhodes - you can use Ruby to write applications that will run on iOS, Android and Blackberry.
>
> In the old days, mobile devices are much less powerful than PCs, and if applications can’t run in full speed then they are useless. Nowadays though, mobile devices have gotten significantly faster, and the use of cross-platform frameworks becomes far more practical than ever before. I think this way of developing for mobile platforms will become more and more popular. And by the way, we spoke about MRuby before, and using MRuby for iOS and Android is already underway, hopefully more applications will get developed using MRuby in the near future.

**Zhou:** You mentioned MRuby, and the topic of your keynote presentation tomorrow is Ruby 2.0. Could you talk about MRuby and Ruby 2.0’s highlights a little bit?

> **Matz:** As we discussed earlier, MRuby is designed to run on embedded devices, it does not have everything from Ruby. As a result, many devices which traditionally can’t use Ruby, such as vendor machines, controllers and robots can soon utilise MRuby. Perhaps in a few years time, we could see Ruby used in televisions and cars.
>
> Ruby 2.0 indicates two messages. Firstly, by next year it will be 20 years since the development of Ruby started. What better version number can there be to celebrate this special moment! Contrary to what it might seem like, in terms of the changes, from 1.9 to 2.0 is not as big as from 1.8 to 1.9. In fact, our goal for 2.0 is to be fully backward compatible with 1.9. Your 1.9 applications should run just fine on 2.0.
>
> Secondly, Ruby 2.0 does offer a few new features. For instance, use monkey patching to add new or replace features has global effects and it might cause conflicts and bugs. In order to avoid situations like this, Ruby 2.0 limits the scope of monkey patching via Refinements. As bigger teams and bigger projects are adopting Ruby, scoped monkey patching will increasingly show its importance. There are many other features in Ruby 2.0 that are designed to cater for bigger teams and projects.

**Zhou:** As far as I know most of the mainstream programming languages are from America and Europe - though there are Lua from Brazil and Ruby from Japan. You too mentioned this in your book and you said this feels "lonely". So what is the cause of this, and what can we do about it?

> **Matz:** Well, for Lua you can include it in Europe/America too because Brazil is part of South America (chuckles). In the south eastern Asia region though there is only Ruby, and it is lonely. Europe and America still remain the most powerful regions as far as programming languages go. Asia, although has massive population, does not compete in this regard, that indeed feels lonely.
>
> I am not sure about other countries, but at least in Japan there are many people working on programming languages, unfortunately other than Ruby none of them are well known. If more people are interested in programming and designing programming languages, there bound to be one or two that’ll break out, right? There is another hurdle in Japan - language. Most Japanese people only speak Japanese and they cannot speak English well. Funnily enough there are programming languages written entirely in Japanese. ( **Zhou:** In China there also are programming languages written entirely in Chinese.) In China too? I knew it! No matter how interesting these programming languages are, they will never influence anyone beyond the ones in their own country.
>
> On a side note, I once received an email from an American. He said that you are Japanese, but Ruby looks like English because it’s written in English, why isn’t there any Japanese-written languages? I replied saying that there are, you just don’t know them, and even if you did, you wouldn’t be able to use them.
>
> In Japan, more and more people are interested in programming, maybe because both online and in my books I always talk about how fun programming can be. Many people are now taking on the challenge of designing new programming languages. Out of these new languages, even only 0.1% of them ever get any success, I think it’s a win. I don’t know how many people want to take on the same challenge in China, Korea and other countries in Asia, but if people could look beyond _programming languages are created for us, we just passively accept them_, and think _to create a new programming language can also be fun_, then I am sure some of them will succeed.
>
> Talking about open source projects, not many of them are from Japan, China and Korea, and I think this could be an entry point for many. There are many reasons why this is the case though, for example English is hard to learn… ( **Zhou:** And GitHub is also difficult to use?) Haha, is GitHub usable in China? ( **Zhou:** It is, it is…) Oh, that’s not too bad then. But, China’s Great Firewall still has a huge impact, many resources can’t be accessed here, right? ( **Zhou:** That’s right, for instance the Go programming language’s website is blocked.) Ah really? Is it because it’s made by Google? (Chuckles.) In any case, I think there are still many difficulties to face. Also, in Japan many programmers still spend most of the time at work (to put food on the table), it’s very difficult for them to contribute to open source projects. Ten years ago nobody cares about open source in Japan, but nowadays people start to realise the importance of open source, and the number of open source projects is growing. I believe China will soon follow this pattern as well, I am looking forward to it.
>
> In the beginning no one knows what will succeed. When I started with Ruby I could not possibly have predicted its success. So I think for a programming language, timing is really important - and you’ll never know until you tried. I think in China there might also be languages that emerge from the right time that will eventually be a global success.

**Zhou:** In the book when you were talking about Dart, you mentioned that the ecological environment is really important for a programming language. So what do we need to do to ensure a good ecological environment?

> **Matz:** From a user’s perspective, the most important thing is what benefits a programming language can offer. Before Rails came along, many Ruby users including myself, believe Ruby is a user-friendly language, and that’s the reason we like to use it. After Rails was born, more and more people like to use Ruby because _making websites using Rails is really productive_. So I think if you could communicate to your users what the benefits are by using your new programming language, it will help with its adoption and increase the chance of success.

**Zhou:** Thank you very much Matz! Do you have anything else to say to Chinese programmers?

> **Matz:** In the book _The World of Code_ I have mentioned that programming will likely to develop and evolve in the form of open source. New generations of programming languages and software are likely to emerge as open source projects. People are happy to freely use the software developed by others, and to take from that, and work on your own open source projects and make a little impact on the world - then you would become a world class software engineer. The software engineers I met in China are all very hard working and enjoying learning. I hope more of these people will step up and take on the challenge, and become world class programmers who will make a decent impact.

