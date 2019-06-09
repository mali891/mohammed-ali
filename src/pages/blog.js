import React, { Fragment } from "react"
import { graphql, Link } from "gatsby"

import { Header } from "../components"

const Blog = ({ data }) => {
  const { edges } = data.allMarkdownRemark

  return (
    <Fragment>
      <Header />
      {edges.map(edge => {
        const { path, title } = edge.node.frontmatter

        return (
          <Link key={path} to={path}>
            <h3>{title}</h3>
          </Link>
        )
      })}

      <br />
      <Link to="/tags">Tags</Link>
    </Fragment>
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
