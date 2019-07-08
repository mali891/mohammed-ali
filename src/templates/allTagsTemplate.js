import React, { Fragment } from 'react'

import { Header, Link } from '../components'

const AllTagsTemplate = ({ data, pageContext }) => {
  console.warn(pageContext)

  return (
    <Fragment>
      <Header />
      <p>Tags bro</p>
      <ul>
        {pageContext.tags.map(tag => (
          <li key={tag}>
            <Link to={`/tags/${tag}`}>{tag}</Link>
          </li>
        ))}
      </ul>
    </Fragment>
  )
}

// prettier-ignore
export const query = graphql`
  query AllTagsTemplateQuery {
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

export default AllTagsTemplate
