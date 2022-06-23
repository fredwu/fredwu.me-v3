import React from 'react'
import { StaticQuery, Link, graphql } from 'gatsby'

import Section from './Section'

class LatestPosts extends React.Component {
  render() {
    const { edges: posts } = this.props.allMarkdownRemark

    return (
      <Section className="section">
        <h2 className="title is-size-4">Latest Blog Posts</h2>

        {posts.map(({ node: post }) => (
          <div className="content" key={post.id}>
            <p>
              <Link className="has-text-primary" to={post.fields.slug}>
                {post.frontmatter.title}
              </Link>
              &nbsp;
              <small className="note">{post.frontmatter.date}</small>
            </p>
            <p className="excerpt">{post.excerpt}</p>
          </div>
        ))}
      </Section>
    )
  }
}

const query = graphql`
  query LatestPostsQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 5
      filter: { frontmatter: { layout: { eq: "post" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 140)
          id
          fields {
            slug
          }
          frontmatter {
            title
            layout
            date(formatString: "MMM DD, YYYY")
          }
        }
      }
    }
  }
`

const LatestPostsComponent = () => (
  <StaticQuery query={query} render={(data) => <LatestPosts {...data} />} />
)

export default LatestPostsComponent
