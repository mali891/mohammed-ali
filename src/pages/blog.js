import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import { Header, Card, ContentGroup, Link } from '../components'
import { URLS } from '../constants'
import { formatDate } from '../functions'

const Blog = ({ data }) => {
  const { edges } = data.allMarkdownRemark

  const renderBlogPosts = () =>
    edges.map(edge => {
      const { path, title, date, length } = edge.node.frontmatter

      return (
        <Link style={{ margin: '0 1%', width: '40rem', maxWidth: '20%' }} to={path} noHover key={path.split('/')[2]}>
          <Card title={title} link>
            <span>{formatDate(date)}</span>
            <span>{length} read</span>
          </Card>
        </Link>
      )
    })

  return (
    <div className="u-anim--fade-in">
      <Header title="Blog" />

      <main className="c-main">
        <ContentGroup>
          <div data-info="temporary-blog-tile-container" style={{ display: 'flex', justifyContent: 'center' }}>
            {renderBlogPosts()}
          </div>
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
