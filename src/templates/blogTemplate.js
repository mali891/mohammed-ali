import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import { Header, Container, ContentGroup, CodeBlock, NextPrevLinks } from '../components/'

const blogTemplate = ({ data: { markdownRemark }, pageContext: { next, prev } }) => {
  const { frontmatter, html } = markdownRemark

  return (
    <div className="u-anim--fade-in">
      <Header title={frontmatter.title} />
      <div className="c-header-scroll" style={{ display: 'block', width: '100%', height: '1px' }}></div>
      <main className="c-main">
        <Container>
          <ContentGroup>
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </ContentGroup>

          <CodeBlock>
            {`const mapAllTheThings = () => (
    things.map(thing => console.warn(\`hello I am \${thing}\`));
)`}
          </CodeBlock>

          <NextPrevLinks next={next} prev={prev} />
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
