import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../../components/Layout'
import Section from '../../components/Section'
import DateAndTags from '../../components/DateAndTags'

const Pagination = styled.div`
  text-align: center;

  a {
    font-weight: bold;
  }
`

export default class BlogPosts extends React.Component {
  render() {
    const { data, pageContext } = this.props
    const { edges: posts } = data.allMarkdownRemark
    const { previousPagePath, nextPagePath } = pageContext

    return (
      <Layout>
        <Helmet titleTemplate="%s | Blog" />
        <div className="container">
          <Section className="section content">
            {posts
            .map(({ node: post }) => (
              <div
                className="content"
                key={post.id}
              >
                <h2>
                  <Link className="title has-text-primary is-size-4" to={post.fields.slug}>
                    {post.frontmatter.title}
                  </Link>
                </h2>
                <DateAndTags
                  id={post.id}
                  title={post.frontmatter.title}
                  date={post.frontmatter.date}
                  tags={post.frontmatter.tags}
                  readingTime={post.fields.readingTime.text}
                />

                <p className="excerpt">{post.excerpt}</p>
                <hr />
              </div>
            ))}

            <Pagination>
              {nextPagePath ? <Link to={nextPagePath}>&lt; Older Posts</Link> : null}

              {nextPagePath && previousPagePath ? (
                  <span className="divider">|</span>
                ) : null}

              {previousPagePath ? <Link to={previousPagePath}>Newer Posts &gt;</Link> : null}
            </Pagination>
          </Section>
        </div>
      </Layout>
    )
  }
}

BlogPosts.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const blogPostsQuery = graphql`
  query BlogPostsQuery($skip: Int, $limit: Int) {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      skip: $skip
      limit: $limit
      filter: { frontmatter: { layout: { eq: "post" } }}
    ) {
      edges {
        node {
          excerpt(pruneLength: 500)
          id
          fields {
            slug
            readingTime {
              text
            }
          }
          frontmatter {
            title
            layout
            date(formatString: "MMM DD, YYYY")
            tags
          }
        }
      }
    }
  }
`
