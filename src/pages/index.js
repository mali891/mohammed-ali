import React, { Fragment } from "react"
import { graphql, Link } from "gatsby"

import { Header, Container, ContentGroup } from "../components"

const Homepage = ({ data }) => {
  const { edges } = data.allMarkdownRemark

  const renderBlogPosts = () =>
    edges.map(edge => {
      const { path, title } = edge.node.frontmatter

      return (
        <Link key={path} to={path}>
          <h3>{title}</h3>
        </Link>
      )
    })

  return (
    <Fragment>
      <Header />
      <Container className="o-main">
        <ContentGroup>
          <p>
            I’m from sunny Huddersfield, and I’ve worked on React applications
            for companies like Yorkshire Water and Intercept IP. I’ve worked on
            various front-end projects for companies like Gazprom, Capita, and
            The Institute of Customer Service.
          </p>
          <br />
          <p>
            I get a kick out of working on complex web applications, and
            crafting beautiful, pixel-perfect UIs.
          </p>
        </ContentGroup>
        <ContentGroup>
          <h2 className="c-heading--three">Tools</h2>
          <p>
            HTML5, CSS3, SCSS, BEM, JavaScript (ES5 - 8), React, Redux, Jest,
            Enzyme, GraphQL, Gastby, Agile.
          </p>
        </ContentGroup>
        <ContentGroup>
          <h2 className="c-heading--three">Currently learning</h2>
          <p>NodeJS, TypeScript</p>
        </ContentGroup>
        <ContentGroup>
          <h2 className="c-heading--three">Nerd talk</h2>
          <p>NodeJS, TypeScript</p>
        </ContentGroup>
        <ContentGroup>
          <h2 className="c-heading--three">Contact me</h2>
          <p>NodeJS, TypeScript</p>
        </ContentGroup>
      </Container>
      <br />
      <Link to="/blog">Blog</Link>
    </Fragment>
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
          }
        }
      }
    }
  }
`

export default Homepage
