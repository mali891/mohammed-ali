import React from 'react'
import PropTypes from 'prop-types'

import { formatDate } from '../../functions'
import { styles } from './BlogIntro.style'

const BlogIntro = ({ children, className, date, length, excerpt, ...other }) => {
  return (
    <section css={styles} className="c-blog-intro" {...other}>
      <div className="c-blog-intro__metadata">
        <span className="c-blog-intro__metadata__content">Published on {formatDate(date)}</span>{' '}
        <span className="c-blog-intro__metadata__content">{length} read</span>
      </div>

      <div className="c-blog-intro__excerpt">
        <p>
          <em>{excerpt}</em>
        </p>
      </div>
    </section>
  )
}

BlogIntro.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  className: PropTypes.string,
  date: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  length: PropTypes.string.isRequired
}

export default BlogIntro
