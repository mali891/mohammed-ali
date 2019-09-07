import React from 'react'
import PropTypes from 'prop-types'

import { ContentGroup, Link } from '../'
import { Arrow } from '../../icons'
import { styles } from './NextPrevLinks.styles'

const NextPrevLinks = ({ next, prev }) => {
  return (
    <ContentGroup css={styles} className="c-next-prev-links">
      {prev && (
        <p className={`c-next-prev-links__prev ${!next ? 'c-next-prev-links--only' : ''}`}>
          <Arrow className="c-next-prev-links__arrow c-next-prev-links__arrow--prev" />
          Previous post
          <br />
          <Link to={prev.frontmatter.path}>{prev.frontmatter.title}</Link>
        </p>
      )}
      {next && (
        <p className={`c-next-prev-links__next ${!prev ? 'c-next-prev-links--only' : ''}`}>
          Next post
          <Arrow className="c-next-prev-links__arrow c-next-prev-links__arrow--next" />
          <br />
          <Link to={next.frontmatter.path}>{next.frontmatter.title}</Link>
        </p>
      )}
    </ContentGroup>
  )
}

NextPrevLinks.propTypes = {
  next: PropTypes.object,
  prev: PropTypes.object
}

export default NextPrevLinks
