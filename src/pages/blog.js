import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import { Header, Card, ContentGroup, CardContainer } from '../components'
import { DOCUMENT_TITLES } from '../constants'
import { formatDate, splitArray } from '../functions'
import { useDocumentTitle } from '../hooks'

const Blog = ({ data }) => {
  useDocumentTitle(DOCUMENT_TITLES.BLOG)
  const { edges } = data.allMarkdownRemark

  const renderBlogPosts = () => (
    <ContentGroup>
      {splitArray(edges, 4).map((blogPostRow, i) => (
        <CardContainer marginBottom key={`blogPostRow-${i}`}>
          {blogPostRow.map(blogPost => {
            const { path, title, date, length } = blogPost.node.frontmatter

            return (
              <Card title={title} path={path} key={path.split('/')[2]} link>
                <span>{formatDate(date)}</span>
                <span>{length} read</span>
              </Card>
            )
          })}
        </CardContainer>
      ))}
    </ContentGroup>
  )

  return (
    <div className="u-anim--fade-in">
      <Header title="Blog" />
      <main className="c-main">
        {renderBlogPosts()}

        {/* <br />
        <Link to={URLS.TAGS}>Tags</Link> */}
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
