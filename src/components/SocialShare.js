import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'
import {
  TwitterShareButton,
  TwitterIcon,
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  RedditShareButton,
  RedditIcon,
  TumblrShareButton,
  TumblrIcon,
  EmailShareButton,
  EmailIcon
} from 'react-share'

const Share = styled.div`
  button {
    display: inline-block;
    margin-right: 10px;

    &:hover {
      filter: contrast(200%);
    }
  }
`

const size = 32

const SocialShareComponent = ({ url, title }) => (
  <Share className="share-bar">
    <TwitterShareButton url={url} title={`${title} by @fredwu`}>
      <TwitterIcon size={size} />
    </TwitterShareButton>
    <FacebookShareButton url={url} quote={title}>
      <FacebookIcon size={size} />
    </FacebookShareButton>
    <LinkedinShareButton url={url} title={title}>
      <LinkedinIcon size={size} />
    </LinkedinShareButton>
    <RedditShareButton url={url} title={title}>
      <RedditIcon size={size} />
    </RedditShareButton>
    <TumblrShareButton url={url} title={title} caption={title}>
      <TumblrIcon size={size} />
    </TumblrShareButton>
    <EmailShareButton url={url} title={title} subject={title}>
      <EmailIcon size={size} />
    </EmailShareButton>
  </Share>
)

export default SocialShareComponent

Share.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
};
