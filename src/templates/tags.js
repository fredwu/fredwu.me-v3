import React from 'react'
import { Helmet } from 'react-helmet'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Section from '../components/Section'

export default class TagRoute extends React.Component {
  render() {
    const { data, pageContext } = this.props
    const { edges: posts, totalCount } = data.allMarkdownRemark
    const { tag } = pageContext
    const tagHeader = `Found ${totalCount} Post${
      totalCount === 1 ? '' : 's'
    } Tagged with "${tag}"`

    return (
      <Layout>
        <Helmet titleTemplate={`%s | ${tag}`} />
        <div className="container">
          <Section className="container content">
            <h3 className="is-size-4">{tagHeader}</h3>
            <ul className="taglist">{posts.map(post => (
              <li key={post.node.fields.slug}>
                <Link to={post.node.fields.slug}>
                  {post.node.frontmatter.title}
                </Link>&nbsp;
                <small className="note">{post.node.frontmatter.date}</small>
              </li>
            ))}</ul>
            <p>
              <Link to="/tags/">Browse all tags</Link>
            </p>
          </Section>
        </div>
      </Layout>
    )
  }
}

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MMM DD, YYYY")
          }
        }
      }
    }
  }
`
