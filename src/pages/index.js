import React from 'react'
import styled from 'styled-components'

import Layout from '../components/Layout'
import Quote from '../components/Quote'
import { Link } from 'gatsby';

const HomeContainer = styled.div`
  .column {
    padding-top: 0;
  }
`

export default class extends React.Component {
  render() {
    return (
      <Layout>
        <HomeContainer className="container">
          <div className="column content">
            <br />
            <Quote>
              Hi, I’m Fred Wu.<br /><br />
              Located in Melbourne, Australia, I am a software developer and leader with
              a strong focus on code craftsmanship, business value and user experience.
            </Quote>

            <p>
              Grew up in Shanghai, China, I quickly became interested in computers and the
              Internet at the age of 13. I started off by creating simple websites using
              basic HTML I learnt from reading computer magazines back in 1997. Later on I
              worked in online publishing, marketing and web hosting while studying in high
              school.
            </p>
            <p>
              After being a "webmaster" for a few years, I began my career in web development
              and design. I graduated with Bachelor of Information Technology and Systems
              from <a href="https://www.monash.edu/">Monash University</a> in 2008.
            </p>
            <p>
              I am currently the Head of Engineering at <a href="https://ourxplor.com/">Xplor</a> -
              we are relentlessly making education great. Before Xplor, I worked at companies
              such as <a href="https://envato.com/">Envato</a>
              , <a href="https://sitepoint.com/">SitePoint</a>
              , <a href="https://www.locomote.com/">Locomote</a> and <a href="https://realestate.com.au/">REA Group</a>.
            </p>
            <p>
              I am a passionate open source developer who has made contributions
              to <a href="https://github.com/fredwu/">dozens of open source projects</a>,
              including <a href="https://contributors.rubyonrails.org/contributors/fred-wu/commits">Ruby on Rails</a>.
            </p>
            <p>
              My <Link to="/manager-readme">leadership style</Link> is people focused. I truely believe in building a champion
              team, and to have the team to work collaboratively to achieve great outcome. I
              see myself as a server as opposed to a manager, of a team. I take unconditional,
              genuine care of the team to build rapport and trust.
            </p>
          </div>
        </HomeContainer>
      </Layout>
    )
  }
}
