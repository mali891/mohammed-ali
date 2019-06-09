import React, { Fragment } from "react"
import { graphql, Link } from "gatsby"

import Header from "../components/Header"

const SingleTagTemplate = ({ data, pageContext }) => {
  console.warn(pageContext)

  return (
    <Fragment>
      <Header />
      <h2>{pageContext.tag}</h2>
      <ul>
        {pageContext.posts.map(post => (
          <li key={post.frontmatter.title}>
            <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
          </li>
        ))}
      </ul>
    </Fragment>
  )
}

// prettier-ignore
export const query = graphql`
  query SingleTagsTemplateQuery {
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

export default SingleTagTemplate
