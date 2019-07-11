import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import { Header, Link } from '../components'

const AllTagsTemplate = ({ data, pageContext }) => (
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

AllTagsTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired
}

export default AllTagsTemplate
