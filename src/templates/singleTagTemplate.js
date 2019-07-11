import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import { Header, Link } from '../components'

const SingleTagTemplate = ({ data, pageContext }) => (
  <Fragment>
    <Header />
    <h2>{pageContext.tag}</h2>
    <ul>
      {pageContext.posts.map(post => (
        <li key={post.frontmatter.title}>
          <Link className="c-link" to={post.frontmatter.path}>
            {post.frontmatter.title}
          </Link>
        </li>
      ))}
    </ul>
  </Fragment>
)

// prettier-ignore
export const query = graphql`
  query SingleTagsTemplateQuery {
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

SingleTagTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired
}

export default SingleTagTemplate
