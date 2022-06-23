import React from 'react'

import Section from './Section'

export default class Projects extends React.Component {
  render() {
    return (
      <Section className="section">
        <h2 className="title is-size-4">Open Source Projects</h2>

        <div className="content">
          <p>
            <a
              className="has-text-primary"
              href="https://github.com/fredwu/crawler"
            >
              Crawler
            </a>
            &nbsp;
            <small className="note">Elixir</small>
          </p>
          <p className="excerpt">A high performance web crawler in Elixir.</p>

          <p>
            <a
              className="has-text-primary"
              href="https://github.com/CoinbitsInc/ex_double_entry"
            >
              ExDoubleEntry
            </a>
            &nbsp;
            <small className="note">Elixir</small>
          </p>
          <p className="excerpt">An Elixir double-entry library.</p>

          <p>
            <a
              className="has-text-primary"
              href="https://github.com/fredwu/opq"
            >
              OPQ
            </a>
            &nbsp;
            <small className="note">Elixir</small>
          </p>
          <p className="excerpt">
            A simple, in-memory queue with worker pooling and rate limiting in
            Elixir.
          </p>

          <p>
            <a
              className="has-text-primary"
              href="https://github.com/fredwu/simple_bayes"
            >
              Simple Bayes
            </a>
            &nbsp;
            <small className="note">Elixir</small>
          </p>
          <p className="excerpt">
            A Naive Bayes machine learning implementation in Elixir.
          </p>

          <p>
            <a
              className="has-text-primary"
              href="https://github.com/fredwu/stemmer"
            >
              Stemmer
            </a>
            &nbsp;
            <small className="note">Elixir</small>
          </p>
          <p className="excerpt">
            An English (Porter2) stemming implementation in Elixir.
          </p>

          <p>
            <a
              className="has-text-primary"
              href="https://github.com/fredwu/datamappify"
            >
              Datamappify
            </a>
            &nbsp;
            <small className="note">Ruby</small>
          </p>
          <p className="excerpt">
            Compose, decouple and manage domain logic and data persistence
            separately.
          </p>

          <p>
            <a
              className="has-text-primary"
              href="https://github.com/fredwu/api_taster"
            >
              API Taster
            </a>
            &nbsp;
            <small className="note">Ruby</small>
          </p>
          <p className="excerpt">
            A quick and easy way to visually test your Rails application's API.
          </p>

          <p>
            <a
              className="has-text-primary"
              href="https://github.com/fredwu/skinny-coffee-machine"
            >
              Skinny Coffee Machine
            </a>
            &nbsp;
            <small className="note">JavaScript</small>
          </p>
          <p className="excerpt">
            A simple JavaScript state machine with observers, for browsers and
            Node.js.
          </p>

          <p>
            <a
              className="has-text-primary"
              href="https://github.com/fredwu/jquery-endless-scroll"
            >
              Endless Scroll
            </a>
            &nbsp;
            <small className="note">JavaScript</small>
          </p>
          <p className="excerpt">Endless/infinite scrolling/pagination.</p>

          <p>
            <a className="has-text-primary" href="https://github.com/fredwu/">
              And many more...
            </a>
          </p>
        </div>
      </Section>
    )
  }
}
