import React, { Fragment } from "react"
import { graphql, Link } from "gatsby"

import { Header, Container, ContentGroup } from "../components/"

const blogTemplate = ({
  data: { markdownRemark },
  data,
  pageContext: { next, prev },
}) => {
  const { frontmatter, html } = markdownRemark

  const renderNextPrev = nextPrev => {
    if (nextPrev) {
      const { path, title } = nextPrev.frontmatter
      return (
        <p>
          <Link to={path}>{title}</Link>
        </p>
      )
    }
  }

  return (
    <div className="u-anim--fade-in">
      <Header title={frontmatter.title} />
      <main className="c-main">
        <Container>
          <ContentGroup>
            <div dangerouslySetInnerHTML={{ __html: html }} />
            <br />
          </ContentGroup>

          <ContentGroup>
            {renderNextPrev(prev)}
            <br />
            {renderNextPrev(next)}
          </ContentGroup>
        </Container>
      </main>
    </div>
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
