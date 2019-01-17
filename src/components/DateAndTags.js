import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import { Link } from 'gatsby'
import styled from 'styled-components'

const DateTagList = styled.div`
  font-size: 1rem;

  ul {
    font-size: 1rem !important;
    list-style: none !important;
    margin: 0 !important;
    display: inline !important;

    li {
      display: inline;

      &:not(:last-child):after {
        content: ", ";
      }
    }
  }
`

const DateAndTags = ({ date, tags }) => (
  <DateTagList>
    <small className="note">{date}</small>

    {tags && tags.length ? (
      <>
        <span className="divider">|</span>
        <ul className="taglist">
          {tags.map(tag => (
            <li key={tag + `tag`}>
              <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
            </li>
          ))}
        </ul>
      </>
    ) : null}
  </DateTagList>
)

DateAndTags.propTypes = {
  date: PropTypes.string,
  tags: PropTypes.array,
}

export default DateAndTags
