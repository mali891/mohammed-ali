import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import { Header, Card, ContentGroup, Link, CardContainer } from '../components'
import { URLS, DOCUMENT_TITLES } from '../constants'
import { formatDate } from '../functions'
import { useDocumentTitle } from '../hooks'

const Blog = ({ data }) => {
  useDocumentTitle(DOCUMENT_TITLES.BLOG)
  const { edges } = data.allMarkdownRemark

  const renderBlogPosts = () =>
    edges.map(edge => {
      const { path, title, date, length } = edge.node.frontmatter

      return (
        <Card title={title} path={path} key={path.split('/')[2]} link>
          <span>{formatDate(date)}</span>
          <span>{length} read</span>
        </Card>
      )
    })

  return (
    <div className="u-anim--fade-in">
      <Header title="Blog" />
      <main className="c-main">
        <ContentGroup>
          <CardContainer>{renderBlogPosts()}</CardContainer>
        </ContentGroup>

        <br />
        <Link to={URLS.TAGS}>Tags</Link>
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
            length
          }
        }
      }
    }
  }
`

Blog.propTypes = {
  data: PropTypes.object.isRequired
}

export default Blog
