import React from 'react'
import { graphql } from 'gatsby'

import { Header, Container, ContentGroup, Link } from '../components/'

const blogTemplate = ({ data: { markdownRemark }, pageContext: { next, prev } }) => {
  const { frontmatter, html } = markdownRemark

  const renderNextPrev = nextPrev => {
    if (nextPrev) {
      const { path, title } = nextPrev.frontmatter

      return (
        <p>
          {nextPrev === next ? 'Next: ' : 'Previous: '}
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
