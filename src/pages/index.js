import React, { Fragment } from "react"
import { graphql, Link } from "gatsby"

import Header from "../components/Header"

const Homepage = ({ data }) => {
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
