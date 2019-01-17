import React from 'react'
import Helmet from 'react-helmet'
import { kebabCase } from 'lodash'
import { Link, graphql } from 'gatsby'

import Layout from '../../components/Layout'
import Section from '../../components/Section'

export default class TagsPage extends React.Component {
  render() {
    const { group } = this.props.data.allMarkdownRemark

    return (
      <Layout>
        <Helmet titleTemplate="%s | Tags" />
        <div className="container">
          <Section className="container content">
            <h1 className="is-size-3">Tags</h1>
            <ul className="taglist">
              {group.map(tag => (
                <li key={tag.fieldValue}>
                  <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                    {tag.fieldValue} ({tag.totalCount})
                  </Link>
                </li>
              ))}
            </ul>
          </Section>
        </div>
      </Layout>
    )
  }
}

export const tagPageQuery = graphql`
  query TagsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 1000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
