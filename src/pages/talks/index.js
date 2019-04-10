import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../../components/Layout'
import Section from '../../components/Section'

export default class extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet titleTemplate="%s | Talks" />
        <div className="container">
          <Section className="section content">
            <h3 className="title is-size-4">
              Leadership Master Class: Adaptable Human - Taking the Company and Your Career to the Next Level
            </h3>
            <p>
              <a href="https://www.youtube.com/watch?v=txm4l1DAWQY">Recording</a>
              <span className="divider">|</span>
              <a href="https://docs.google.com/presentation/d/1dLiasgNzrGHzArFAmo_1Z0xY7L3CgFCB19-Il3HGD2o/edit?usp=sharing">Slides</a>
              <span className="divider">|</span>
              <small className="note">Apr 2019, Xplor</small>
            </p>
            <p>
              In this Leadership Master Class session, I'll be talking about the adaptability
              of an organisation and an individual, and how things could affect an organisation
              as well as one's career.
            </p>
            <p>
              I'll cover concepts that are fundamental but easy to overlook, as well as
              interesting concepts that I personally observed/invented over my decade-long
              career.
            </p>
            <hr />

            <h3 className="title is-size-4">
              Git Gud - Beyond Simply Commit &amp; Push
            </h3>
            <p>
              <a href="https://www.youtube.com/watch?v=IX5MGCpb2Z8">Recording</a>
              <span className="divider">|</span>
              <a href="https://docs.google.com/presentation/d/1VJfh8x1pzb0Taz8FYPEyaMNv8mpi-KCbtcai_TzOxL0/edit?usp=sharing">Slides</a>
              <span className="divider">|</span>
              <small className="note">Jan 2019, Xplor</small>
            </p>
            <p>
              In this session I will take you through some of the git functionalities beyond
              the simple "commit", "push" and "pull". It is important for every developer to
              know his/her tools well, and git is a very important tool we use on a daily basis.
              Surprisingly, 9 out of 10 interview candidates I'd come across could not explain
              the difference between "git merge" and "git rebase".
            </p>
            <hr />

            <h3 className="title is-size-4">
              Writing Maintainable Code - Leave a Place Better Than You Found It
            </h3>
            <p>
              <a href="https://docs.google.com/presentation/d/1SOCkrnqAKfJfJUv5ujrl-41US7tuOAWmo27GJe4IYn4/edit?usp=sharing">Slides</a>
              <span className="divider">|</span>
              <small className="note">Dec 2018, Xplor</small>
            </p>
            <p>
              As we're nearing the end of 2018, some of us have started brainstorming and kicking
              off work for Q1 2019. As the teams grow and products grow, it is crucial for us to
              write maintainable code to support the ever-growing business needs.
            </p>
            <p>
              Six years ago I did a conference talk on&nbsp;
              <a href="https://www.youtube.com/watch?v=DeBsmdDmB9A">a similar topic</a>: I would
              love to talk about maintainable code again - writing maintainable code is a very
              hard thing to do especially in a fast-moving environment like Xplor. That said,
              I'd like everyone to start having the mentality of building maintainable code by
              default, and making conscious trade-offs when necessary.
            </p>
            <hr />

            <h3 className="title is-size-4">
              Elixir Things - Snippets from Real Elixir Libraries
            </h3>
            <p>
              <a href="https://www.youtube.com/watch?v=713IUhs02dE">Recording</a>
              <span className="divider">|</span>
              <a href="https://docs.google.com/presentation/d/1Q5nD2LvODPloa7A7uM3PJ2dzLrKSCWU_MBuhcZ5Xea8/edit?usp=sharing">Slides</a>
              <span className="divider">|</span>
              <small className="note">Nov 2018, Xplor</small>
            </p>
            <p>
              For all the devs, and anyone who is interested in and have had some exposure to
              programming. The theme of the talk is to introduce and discuss many of Elixir’s
              cool concepts, some not seen in any other languages.
            </p>
            <hr />

            <h3 className="title is-size-4">
              My Story on Open Source - Seek Fulfillment, Build Reputation, Boost Career
            </h3>
            <p>
              <a href="https://docs.google.com/presentation/d/1YYWSoHBVyjqKH3646wvxHbczLco0RpAm0Xm0rWtEgCo/edit?usp=sharing">Slides</a>
              <span className="divider">|</span>
              <small className="note">Aug 2018, Xplor</small>
            </p>
            <p>
              I'm excited to bring you another Lunch &amp; Learn session. This time the topic is
               about my story on open source - it is mostly tech oriented, but if you are
               interested in or curious about open source software and its community, you're
               more than welcome to join us.
            </p>
            <p>
              Some of the things I will cover include:
              <ul>
                <li>open source projects I've contributed to</li>
                <li>where to start if you're interested in contributing to an open source project (spoiler: it's NOT just about coding!)</li>
                <li>how to use open source contributions to lift your work and boost your career, and vice versa</li>
                <li>the opportunities and benefits you get from contributing to the open source community</li>
              </ul>
            </p>
            <p>
              The goals of this topic are:
              <ul>
                <li>to introduce you to the wonderful world of open source, if you are not already familiar with it</li>
                <li>to give you ideas on what to build and contribute</li>
                <li>to hopefully inspire you to do (more) open source work</li>
                <li>to hopefully help you become a better developer</li>
              </ul>
            </p>
            <hr />

            <h3 className="title is-size-4">
              Machine Learning - Powering the Coming Age of Artificial Intelligence
            </h3>
            <p>
              <a href="https://www.youtube.com/watch?v=Hr1qncVhmlA">Recording</a>
              <span className="divider">|</span>
              <a href="https://docs.google.com/presentation/d/1MT7vqTH9niOFRfacmbceBGnqlitVuZbaeqMfRVFa9xw/edit?usp=sharing">Slides</a>
              <span className="divider">|</span>
              <small className="note">May 2018, Xplor</small>
            </p>
            <p>
              A talk with my colleague Lauren, together we will cover:
              <ul>
                <li>introduction to Machine Learning, what it really is, and some fascinating real world use cases</li>
                <li>deep dive into some of the ML approaches such as Object Detection, Natural Language Processing and Naive Bayes Classifiers</li>
                <li>cool live demo of Naive Bayes classification using THE world's BEST Naive Bayes library</li>
                <li>how Machine Learning might be used and applied at Xplor in the future</li>
              </ul>
            </p>
            <hr />

            <h3 className="title is-size-4">
              Get Ahead by Open Source
            </h3>
            <p>
              <a href="https://docs.google.com/presentation/d/1UsOrUmJV1iGmNn_HV57UmvVS4b7qwiP9vDhBIAY1EhU/edit?usp=sharing">Slides</a>
              <span className="divider">|</span>
              <small className="note">Jan 2016, REA Group</small>
            </p>
            <p>
              A talk on how to use open source to improve yourself as a developer.
            </p>
            <hr />

            <h3 className="title is-size-4">
              Chinese: Podcast Interview on My Open Source Work
            </h3>
            <p>
              <a href="http://teahour.fm/2013/04/22/interview-with-fred-wu-about-opensource.html">Recording</a>
              <span className="divider">|</span>
              <small className="note">Apr 2013, Teahour.fm</small>
            </p>
            <p>
              在本期访谈中，Fred Wu 从他在大学时代以自由职业者的身份开始接触项目，到技术话题包括
              Ruby，Rails，PHP 框架等，以及 Fred 如何参与开源实践，包括 Angle Nest 的故事，如何去给
              Rails 贡献代码的，Slim 项目给我们带来的启发等等精彩内容。
            </p>
            <hr />

            <h3 className="title is-size-4">
              Become a Better Developer You Can
            </h3>
            <p>
              <a href="https://www.youtube.com/watch?v=DeBsmdDmB9A">Recording</a>
              <span className="divider">|</span>
              <a href="https://speakerdeck.com/fredwu/2012-become-a-better-developer-you-can">Slides</a>
              <span className="divider">|</span>
              <a href="https://speakerdeck.com/fredwu/2012-uncut-become-a-better-developer-you-can">Slides (Uncut)</a>
              <span className="divider">|</span>
              <small className="note">Nov 2012, RubyConf China</small>
            </p>
            <p>
              A talk on how to become a better developer by focusing on a few key areas.
            </p>
          </Section>
        </div>
      </Layout>
    )
  }
}
