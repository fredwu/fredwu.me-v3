import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase, startCase } from 'lodash'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { CommentCount } from 'disqus-react'

const DateTagList = styled.div`
  font-size: 1rem;

  .disqus-comment-count {
    font-size: 0.9rem;
  }

  ul {
    font-size: 1rem !important;
    list-style: none !important;
    margin: 0 !important;
    display: inline !important;

    li {
      display: inline;

      &:not(:last-child):after {
        color: #ccc;
        content: ', ';
      }
    }
  }
`

const DateAndTags = ({ id, title, date, tags, readingTime }) => {
  const disqusShortname = 'ifred'
  const disqusConfig = {
    identifier: id,
    title: title,
  }

  return (
    <DateTagList>
      <small className="note">{date}</small>
      <span className="divider">|</span>

      <small className="note">{startCase(readingTime)}</small>
      <span className="divider">|</span>

      <CommentCount shortname={disqusShortname} config={disqusConfig}>
        Comments
      </CommentCount>

      {tags && tags.length ? (
        <>
          <span className="divider">|</span>
          <ul className="taglist">
            {tags.map((tag) => (
              <li key={tag + `tag`}>
                <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
              </li>
            ))}
          </ul>
        </>
      ) : null}
    </DateTagList>
  )
}

DateAndTags.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.string,
  readingTime: PropTypes.string,
  tags: PropTypes.array,
}

export default DateAndTags
