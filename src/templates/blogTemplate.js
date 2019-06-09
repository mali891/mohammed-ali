import React, { Fragment } from "react"
import { graphql, Link } from "gatsby"

const blogTemplate = ({
  data: { markdownRemark },
  data,
  pageContext: { next, prev },
}) => {
  const { frontmatter, html } = markdownRemark

  console.warn(data)

  const renderNextPrev = nextPrev => {
    if (nextPrev) {
      const { path, title } = nextPrev.frontmatter
      return <Link to={path}>{title}</Link>
    }
  }

  return (
    <Fragment>
      <Link to="/">Home</Link>
      <br />
      <h1>{frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <br />
      {renderNextPrev(prev)}
      <br />
      {renderNextPrev(next)}
    </Fragment>
  )
}

export const query = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
      }
    }
  }
`

export default blogTemplate
