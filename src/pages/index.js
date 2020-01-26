import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import { Container, ContentGroup, HeadingBlock, Card, Header, CardContainer } from '../components'
import { DOCUMENT_TITLES } from '../constants'
import { formatDate } from '../functions'
import { useDocumentTitle } from '../hooks'

const Homepage = ({ data }) => {
  useDocumentTitle(DOCUMENT_TITLES.HOME)
  const { edges } = data.allMarkdownRemark

  const renderBlogPosts = () =>
    edges.slice(0, 4).map(edge => {
      const { path, title, date, length } = edge.node.frontmatter

      return (
        <Card title={title} path={path} key={path.split('/')[2]} aria-label={title} link>
          <span>{formatDate(date)}</span>
          <span>{length} read</span>
        </Card>
      )
    })

  return (
    <div className="u-anim--fade-in">
      <Header />
      <main className="c-main">
        <Container>
          <ContentGroup>
            <p>
              I’m from sunny Huddersfield, and I&apos;ve helped companies like Yorkshire Water and Intercept IP build
              React applications. I’ve worked on various other front-end projects for companies like Gazprom, Capita,
              and The Institute of Customer Service.
            </p>
            <br />
            <p>I get a kick out of working on complex web applications, and crafting beautiful, pixel-perfect UIs.</p>
          </ContentGroup>

          <ContentGroup>
            <HeadingBlock type="h2" size="md">
              Technologies
            </HeadingBlock>

            <p>
              JavaScript (ES5 - 8), React, Redux, HTML5, CSS3, SCSS, BEM, Webpack, Grunt, Gulp, Jest, Enzyme, React
              Testing Library, GraphQL, Gatsby, Git, Agile, accessibility.
            </p>
          </ContentGroup>

          <ContentGroup>
            <HeadingBlock type="h2" size="md">
              Currently learning
            </HeadingBlock>

            <p>NodeJS, TypeScript</p>
          </ContentGroup>
        </Container>

        <ContentGroup>
          <Container>
            <HeadingBlock type="h2" size="md">
              Nerd talk
            </HeadingBlock>
          </Container>

          <CardContainer>{renderBlogPosts()}</CardContainer>
        </ContentGroup>
      </main>
    </div>
  )
}

// prettier-ignore
export const query = graphql`
  query HomepageQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date]}) {
      edges {
        node {
          frontmatter {
            title
            path
            date
            length
          }
        }
      }
    }
  }
`

Homepage.propTypes = {
  data: PropTypes.object.isRequired
}

export default Homepage
