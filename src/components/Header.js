import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import Social from "./Social";

import hero from "../img/hero.png";
import background from "../img/background.png";
import find from "../img/find.png";

const height = 260;
const padding = 20;

const Header = styled.div`
  header {
    background: url(${background}) top -${padding}px center no-repeat;

    .column {
      padding-bottom: 0;
    }
  }

  #logo {
    float: left;
    position: relative;
    min-width: 150px;
    min-height: ${height - padding}px;

    a {
      position: absolute;
      bottom: 0;
    }

    h1 {
      font-size: 5rem !important;
    }

    li {
      font-weight: normal;
      color: #666;
    }
  }

  #hero {
    height: ${height}px;
    background: url(${hero}) bottom right no-repeat;
  }

  .contact-bar {
    position: absolute;
    left: 0;
    right: 0;
    bottom: ${padding}px;
    text-align: center;
  }

  @media (prefers-color-scheme: dark) {
    #logo {
      h1,
      li {
        color: #eee;
      }
    }
  }
`;

const HeaderStrip = styled.div`
  height: 10px;
  background-color: #ffa000;
`;

const NavBar = styled.div`
  background: #eee;
  margin-bottom: 0;

  #search a {
    display: block;
    text-indent: -9999px;
    width: 50px;
    background: url(${find}) center center no-repeat;
    background-size: 50px;
    opacity: 0.5;

    &:hover {
      opacity: 1;
    }
  }

  .navbar {
    &.is-transparent {
      background-color: transparent;
    }

    span.navbar-item {
      color: #ccc;
    }
  }

  .navbar-item {
    &.active {
      font-weight: bold;
    }
  }

  @media (prefers-color-scheme: dark) {
    background: #333;

    .navbar {
      a.navbar-item {
        color: #ccc;

        &:hover {
          color: #ffa000;
        }
      }

      span.navbar-item {
        color: #666;
      }
    }
  }
`;

export default class HeaderComponent extends React.Component {
  render() {
    return (
      <>
        <Header className="container">
          <header className="columns is-marginless">
            <div className="column">
              <div id="logo">
                <Link to="/" title="Logo">
                  <h1 className="title is-marginless">fw</h1>
                  <ul className="title is-size-5">
                    <li>engineering</li>
                    <li>design</li>
                    <li>photography</li>
                    <li>leadership</li>
                  </ul>
                </Link>
              </div>

              <div className="is-hidden-mobile">
                <Social />
              </div>

              <div id="hero" />
            </div>
          </header>
        </Header>
        <HeaderStrip />
        <NavBar>
          <div className="container">
            <nav
              className="navbar is-transparent"
              role="navigation"
              aria-label="main-navigation"
            >
              <div className="navbar-start">
                <Link className="navbar-item" activeClassName="active" to="/">
                  Home
                </Link>
                <span className="navbar-item is-hidden-mobile">|</span>
                <Link
                  className="navbar-item"
                  activeClassName="active"
                  to="/blogs"
                >
                  Blog
                </Link>
                <span className="navbar-item is-hidden-mobile">|</span>
                <Link
                  className="navbar-item"
                  activeClassName="active"
                  to="/manager-readme"
                >
                  Manager Readme
                </Link>
                <span className="navbar-item is-hidden-mobile">|</span>
                <Link
                  className="navbar-item"
                  activeClassName="active"
                  to="/talks"
                >
                  Talks
                </Link>
                <span className="navbar-item is-hidden-mobile">|</span>
                <Link
                  className="navbar-item"
                  activeClassName="active"
                  to="/photos"
                >
                  Photography
                </Link>
                <span className="navbar-item is-hidden-mobile">|</span>
                <Link
                  className="navbar-item"
                  activeClassName="active"
                  to="/cv.pdf"
                >
                  My CV (PDF)
                </Link>
                <div className="is-hidden-tablet">
                  <span className="navbar-item is-hidden-mobile">|</span>
                  <a
                    className="navbar-item"
                    href="https://www.google.com/search?q=site%3Afredwu.me"
                  >
                    Search
                  </a>
                </div>
              </div>
              <div id="search" className="navbar-end is-hidden-mobile">
                <a
                  className="navbar-item"
                  href="https://www.google.com/search?q=site%3Afredwu.me"
                >
                  Search
                </a>
              </div>
            </nav>
          </div>
        </NavBar>
      </>
    );
  }
}
