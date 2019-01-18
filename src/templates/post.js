import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'
import { DiscussionEmbed } from 'disqus-react'

import Layout from '../components/Layout'
import Section from '../components/Section'
import DateAndTags from '../components/DateAndTags'
import Content, { HTMLContent } from '../components/Content'

const PostInner = styled.div`
  table {
    border-spacing: 0;
    margin-bottom: 1.5rem;

    th {
      text-align: left;
      background: #fafafa;
    }

    td, th {
      border: 1px solid #eee;
      border-width: 0 0 1px;
      padding: 0.5em 0.75em;
      vertical-align: top;
    }

    thead td,
    thead th {
      border-width: 0 0 2px;
    }

    tfoot td,
    tfoot th {
      border-width: 2px 0 0;
    }

    tbody tr:last-child td,
    tbody tr:last-child th {
      border-bottom-width: 0;
    }
  }

  a.back {
    font-weight: bold;
  }
`

export const PostTemplate = ({
  id,
  content,
  contentComponent,
  tags,
  date,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content
  const disqusShortname = 'ifred'
  const disqusConfig = {
    identifier: id,
    title: title,
  }

  return (
    <>
      {helmet || ''}
      <PostInner className="container">
        <Section className="section content">
          <h1 className="title is-size-3">
            {title}
          </h1>

          <DateAndTags
            id={id}
            title={title}
            date={date}
            tags={tags}
          />
          <hr />

          <PostContent content={content} />
          <hr />

          <Link className="back" to="/blog">&lt; Back to Blog</Link>
          <hr />

          <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
        </Section>
      </PostInner>
    </>
  )
}

PostTemplate.propTypes = {
  id: PropTypes.string,
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
}

const Post = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <PostTemplate
        id={post.id}
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet
            titleTemplate="%s | Blog"
          >
            <title>{`${post.frontmatter.title}`}</title>
            <meta name="description" content={`${post.frontmatter.description}`} />
          </Helmet>
        }
        date={post.frontmatter.date}
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
      />
    </Layout>
  )
}

Post.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default Post

export const pageQuery = graphql`
  query PostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
      }
    }
  }
`
