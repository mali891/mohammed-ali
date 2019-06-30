import React from "react"
import { graphql, Link } from "gatsby"

import { Header, Container } from "../components"
import { URLS } from "../constants"

const Blog = ({ data }) => {
  const { edges } = data.allMarkdownRemark

  return (
    <div className="u-anim--fade-in">
      <Header title="Blog" />

      <main className="c-main">
        <Container className="o-main">
          {edges.map(edge => {
            const { path, title } = edge.node.frontmatter

            return (
              <Link key={path} to={path}>
                <h3>{title}</h3>
              </Link>
            )
          })}

          <br />
          <Link to={URLS.TAGS}>Tags</Link>
        </Container>
      </main>
    </div>
  )
}

// prettier-ignore
export const query = graphql`
  query BlogPageQuery {
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

export default Blog
