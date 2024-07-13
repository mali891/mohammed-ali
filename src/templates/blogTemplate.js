import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import { Header, Container, ContentGroup, NextPrevLinks, BlogIntro, BlogContents } from '../components/'

const BlogTemplate = ({ data: { markdownRemark }, pageContext, pageContext: { next, prev } }) => {
  const { frontmatter, html } = markdownRemark

  return (
    <div className="u-anim--fade-in">
      <Header title={frontmatter.title} />
      <main className="c-main">
        <Container>
          <ContentGroup>
            <BlogIntro date={frontmatter.date} length={frontmatter.length} excerpt={frontmatter.excerpt} />
          </ContentGroup>

          <BlogContents />

          <ContentGroup>
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </ContentGroup>

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
        date
        excerpt
        length
        title
      }
    }
  }
`

BlogTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired
}

export default BlogTemplate
