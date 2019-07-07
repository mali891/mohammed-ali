import React from "react"
import { graphql, Link } from "gatsby"

import { Header, Card, ContentGroup } from "../components"
import { URLS } from "../constants"
import { formatDate } from "../functions"

const Blog = ({ data }) => {
  const { edges } = data.allMarkdownRemark

  const renderBlogPosts = () =>
    edges.map(edge => {
      const { path, title, date, length } = edge.node.frontmatter

      return (
        <Link
          className="c-link c-link--no-hover"
          style={{ margin: "0 1%", width: "40rem", maxWidth: "20%" }}
          to={path}
          key={path.split("/")[2]}
        >
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
          <div
            data-info="temporary-blog-tile-container"
            style={{ display: "flex", justifyContent: "center" }}
          >
            {renderBlogPosts()}
          </div>
        </ContentGroup>

        <br />
        <Link className="c-link" to={URLS.TAGS}>
          Tags
        </Link>
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

export default Blog
