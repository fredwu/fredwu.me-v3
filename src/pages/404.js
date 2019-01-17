import React from 'react'

import Layout from '../components/Layout'
import Section from '../components/Section'

const NotFoundPage = () => (
  <Layout>
    <div className="container">
      <Section className="container content">
        <h1>Not Found</h1>
        <p>The page you are looking for doesn't exist...</p>
      </Section>
    </div>
  </Layout>
)

export default NotFoundPage
