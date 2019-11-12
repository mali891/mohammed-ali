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

  // TO-DO
  // Bug: fix the below renderBlogPosts function (not rendering on component re-render)

  // const renderBlogPosts = () => (
  //   <ContentGroup>
  //     {splitArray(edges, 4).map((blogPostRow, i) => (
  //       <CardContainer marginBottom key={`blogPostRow-${i}`}>
  //         {blogPostRow.map(blogPost => {
  //           const { path, title, date, length } = blogPost.node.frontmatter

  //           return (
  //             <Card title={title} path={path} key={path.split('/')[2]} link>
  //               <span>{formatDate(date)}</span>
  //               <span>{length} read</span>
  //             </Card>
  //           )
  //         })}
  //       </CardContainer>
  //     ))}
  //   </ContentGroup>
  // )

  const renderBlogPosts = (index1, index2) => (
    <CardContainer marginBottom>
      {edges.slice(index1, index2).map(edge => {
        const { path, title, date, length } = edge.node.frontmatter

        return (
          <Card title={title} path={path} key={path.split('/')[2]} link>
            <span>{formatDate(date)}</span>
            <span>{length} read</span>
          </Card>
        )
      })}
    </CardContainer>
  )

  return (
    <div className="u-anim--fade-in">
      <Header title="Blog" />
      <main className="c-main">
        <ContentGroup>
          {renderBlogPosts(0, 4)}
          {renderBlogPosts(4, 8)}
        </ContentGroup>

        {/* <Link to={URLS.TAGS}>Tags</Link> */}
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
