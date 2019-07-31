import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import { Header, Container, ContentGroup, Link, CodeBlock } from '../components/'

const blogTemplate = ({ data: { markdownRemark }, pageContext: { next, prev } }) => {
  useEffect(() => Prism.highlightAll(), [])

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

  // const mapAllTheThings = () => (
  //   things.map(thing => console.warn(\`hello I am \${thing}\`));
  // )

  return (
    <div className="u-anim--fade-in">
      <Header title={frontmatter.title} />
      <main className="c-main">
        <Container>
          <ContentGroup>
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </ContentGroup>
          <ContentGroup>
            <CodeBlock>
              {`const mapAllTheThings = () => (
    things.map(thing => console.warn(\`hello I am \${thing}\`));
)`}
            </CodeBlock>
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

blogTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired
}

export default blogTemplate
