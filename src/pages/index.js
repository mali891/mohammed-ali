import React, { Fragment } from "react"
import { graphql, Link } from "gatsby"

import {
  Header,
  Container,
  ContentGroup,
  HeadingBlock,
  BlogTile,
  Form,
} from "../components"

const Homepage = ({ data }) => {
  const { edges } = data.allMarkdownRemark

  const renderBlogPosts = () =>
    edges.map(edge => {
      const { path, title, date, length } = edge.node.frontmatter

      return (
        <BlogTile
          key={path}
          title={title}
          date={date}
          length={length}
          path={path}
        />
      )
    })

  return (
    <Fragment>
      <Header />
      <Container className="o-main">
        <ContentGroup>
          <p>
            I’m from sunny Huddersfield, and I've helped companies like
            Yorkshire Water and Intercept IP build React applications. I’ve
            worked on various other front-end projects for companies like
            Gazprom, Capita, and The Institute of Customer Service.
          </p>
          <br />
          <p>
            I get a kick out of working on complex web applications, and
            crafting beautiful, pixel-perfect UIs.
          </p>
        </ContentGroup>

        <ContentGroup>
          <HeadingBlock type="h2" size="md">
            Technologies
          </HeadingBlock>

          <p>
            HTML5, CSS3, SCSS, BEM, JavaScript (ES5 - 8), React, Redux, Jest,
            Enzyme, GraphQL, Gatsby, Agile.
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

        <div
          data-info="temporary-blog-tile-container"
          style={{ display: "flex", justifyContent: "center" }}
        >
          {renderBlogPosts()}
        </div>
      </ContentGroup>

      <Container>
        <ContentGroup>
          <HeadingBlock type="h2" size="md">
            Let's talk
          </HeadingBlock>

          <Form />
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
            length
          }
        }
      }
    }
  }
`

export default Homepage
