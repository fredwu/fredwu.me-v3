import React from 'react'
import styled from 'styled-components'

import LatestPosts from './Footer/LatestPosts'
import Projects from './Footer/Projects'
import Social from '../components/Social'

import background from '../img/background.png'

const Latest = styled.div`
  background-color: #333;
  color: #ccc;
  margin-top: 60px;

  h2 {
    color: #ccc;
  }

  .fw-strip {
    position: relative;
    background: #ffa000;
    height: 10px;
    margin: auto 10px;
    top: -5px;
  }

  .fw {
    position: relative;
    font-size: 2.6rem;
    font-weight: bold;
    color: #fff8e1;
    line-height: 4.2rem;
    text-align: center;
    border-radius: 50%;
    width: 70px;
    height: 70px;
    background: #ffa000;
    margin: auto;
    top: -30px;
    cursor: default;
  }

  .latest-inner {
    padding-top: 20px;
    padding-bottom: 20px;
  }

  @media (prefers-color-scheme: dark) {
    background-color: #111;
  }
`

const FooterStrip = styled.div`
  height: 10px;
  background-color: #999;
`

const FooterInner = styled.footer`
  background: #444 url(${background}) top 50% center repeat;

  .container {
    margin: 60px auto;
  }

  .contact-bar {
    filter: invert(1);
    margin: 0;
    margin-bottom: 10px !important;
  }

  .content p {
    font-size: 0.95rem;
    color: #eee;
    text-align: center;
  }

  .divider {
    display: inline-block;
    margin: auto 10px;
    color: #999;
  }

  a {
    color: #eee;

    &:hover {
      color: #ffa000;
    }
  }

  @media (prefers-color-scheme: dark) {
    background-color: #111;
  }
`

export default class FooterComponent extends React.Component {
  render() {
    return (
      <>
        <Latest className="hero">
          <div className="container">
            <div className="fw-strip">
              <div className="fw">fw</div>
            </div>
            <div className="columns latest-inner">
              <div className="column">
                <LatestPosts />
              </div>
              <div className="column">
                <Projects />
              </div>
            </div>
          </div>
        </Latest>
        <FooterStrip />
        <FooterInner className="hero">
          <div className="container content has-text-centered">
            <Social />
            <p>
              Copyright &copy; Fred Wu
              <span className="divider">|</span>
              <a href="https://github.com/fredwu/fredwu.me-v3">
                Site Source Code
              </a>
            </p>
          </div>
        </FooterInner>
      </>
    )
  }
}
