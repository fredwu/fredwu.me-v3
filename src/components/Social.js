import React from 'react'
import styled from 'styled-components'

import email from '../img/social-email.svg'
import github from '../img/social-github.svg'
import instagram from '../img/social-instagram.svg'
import linkedin from '../img/social-linkedin.svg'
import photos from '../img/social-photos.svg'
import rss from '../img/social-rss.svg'
import twitter from '../img/social-twitter.svg'
import youtube from '../img/social-youtube.svg'

const dimension = 30

const Social = styled.ul`
  li {
    display: inline-block;
    width: ${dimension}px;
    height: ${dimension}px;
    margin: 0 5px;
  }

  a.contact-item {
    display: block;
    width: ${dimension}px;
    height: ${dimension}px;
    background-repeat: no-repeat;
    background-size: contain;
    opacity: 0.6;
    text-indent: -9999px;

    &:hover {
      opacity: 1;
    }
  }

  a.contact-email {
    background-image: url(${email});
  }
  a.contact-github {
    background-image: url(${github});
  }
  a.contact-instagram {
    background-image: url(${instagram});
  }
  a.contact-linkedin {
    background-image: url(${linkedin});
  }
  a.contact-photos {
    background-image: url(${photos});
  }
  a.contact-rss {
    background-image: url(${rss});
  }
  a.contact-twitter {
    background-image: url(${twitter});
  }
  a.contact-youtube {
    background-image: url(${youtube});
  }
`

export default class SocialComponent extends React.Component {
  render() {
    return (
      <Social className="contact-bar">
        <li>
          <a
            title="My Twitter"
            className="contact-item contact-twitter"
            href="https://twitter.com/fredwu"
          >
            Twitter
          </a>
        </li>
        <li>
          <a
            title="My GitHub"
            className="contact-item contact-github"
            href="https://github.com/fredwu"
          >
            GitHub
          </a>
        </li>
        <li>
          <a
            title="My YouTube"
            className="contact-item contact-youtube"
            href="https://www.youtube.com/channel/UCYzkbDiuqtiNkQvQBzStVqQ"
          >
            YouTube
          </a>
        </li>
        <li>
          <a
            title="My Instagram"
            className="contact-item contact-instagram"
            href="https://instagram.com/fredwu"
          >
            Instagram
          </a>
        </li>
        <li>
          <a
            title="My LinkedIn"
            className="contact-item contact-linkedin"
            href="https://linkedin.com/in/wufred"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a
            title="My Email"
            className="contact-item contact-email"
            href="&#x6d;&#97;&#x69;&#108;&#x74;&#111;&#58;&#x69;&#102;&#114;&#101;&#100;&#x77;&#117;&#x40;&#x67;&#x6d;&#x61;&#105;&#x6c;&#x2e;&#99;&#x6f;&#109;"
          >
            Email
          </a>
        </li>
        <li>
          <a
            title="My RSS"
            className="contact-item contact-rss"
            href="/rss.xml"
          >
            RSS
          </a>
        </li>
      </Social>
    )
  }
}
