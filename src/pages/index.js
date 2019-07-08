import React from 'react'
import { graphql } from 'gatsby'

import { Container, ContentGroup, HeadingBlock, Card, Header, Link } from '../components'
import { formatDate } from '../functions'

const Homepage = ({ data }) => {
  const { edges } = data.allMarkdownRemark

  const renderBlogPosts = () =>
    edges.slice(0, 4).map(edge => {
      const { path, title, date, length } = edge.node.frontmatter

      return (
        <Link style={{ margin: '0 1%', width: '40rem', maxWidth: '20%' }} to={path} noHover key={path.split('/')[2]}>
          <Card title={title} link>
            <span>{formatDate(date)}</span>
            <span>{length} read</span>
          </Card>
        </Link>
      )
    })

  return (
    <div className="u-anim--fade-in">
      <Header />

      <main className="c-main">
        <Container className="o-main">
          <ContentGroup>
            <p>
              I’m from sunny Huddersfield, and I've helped companies like Yorkshire Water and Intercept IP build React
              applications. I’ve worked on various other front-end projects for companies like Gazprom, Capita, and The
              Institute of Customer Service.
            </p>
            <br />
            <p>I get a kick out of working on complex web applications, and crafting beautiful, pixel-perfect UIs.</p>
          </ContentGroup>

          <ContentGroup>
            <HeadingBlock type="h2" size="md">
              Technologies
            </HeadingBlock>

            <p>
              HTML5, CSS3, SCSS, BEM, JavaScript (ES5 - 8), React, Redux, Webpack, Grunt, Gulp, Jest, Enzyme, GraphQL,
              Gatsby, Git, Agile.
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

          <div data-info="temporary-blog-tile-container" style={{ display: 'flex', justifyContent: 'center' }}>
            {renderBlogPosts()}
          </div>
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

export default Homepage
