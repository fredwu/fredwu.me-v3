import React from 'react'
import { Helmet } from 'react-helmet'
import { StaticQuery, graphql } from "gatsby"

import Header from '../components/Header'
import Footer from '../components/Footer'

import './all.scss'

const TemplateWrapper = ({ children }) => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
          site {
            siteMetadata {
              title,
              description,
            }
          }
        }
    `}
    render={data => (
      <>
        <Helmet>
          <html lang="en" />
          <title>{data.site.siteMetadata.title}</title>
          <meta name="description" content={data.site.siteMetadata.description} />

          <meta property="og:title" content={data.site.siteMetadata.title} />
          <meta property="og:url" content="/" />
        </Helmet>

        <Header />

        {children}

        <Footer />
      </>
    )}
  />
)

export default TemplateWrapper
