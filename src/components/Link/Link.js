import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Link as GatsbyLink } from 'gatsby'

import { styles } from './Link.styles'

const linkTypes = ['gatsby', 'anchor', 'button']

const Link = React.memo(({ children, className, newTab, noHover, to, type, onClick, ...other }) => {
  const dynamicClassNames = classNames([className], {
    'c-link': true,
    'u-clr--secondary': true,
    'c-link--no-hover': noHover
  })

  return (
    <Fragment>
      {type === 'gatsby' && (
        <GatsbyLink
          css={styles}
          className={dynamicClassNames}
          activeClassName="c-link--active"
          to={to}
          onClick={onClick}
          {...other}
        >
          {children}
        </GatsbyLink>
      )}

      {type === 'anchor' && (
        <a
          css={styles}
          className={dynamicClassNames}
          href={to}
          target={newTab ? '_blank' : null}
          rel={newTab ? 'noopener noreferrer' : null}
          onClick={onClick}
          {...other}
        >
          {children}
        </a>
      )}

      {type === 'button' && (
        <button css={styles} className={dynamicClassNames} onClick={onClick} {...other}>
          {children}
        </button>
      )}
    </Fragment>
  )
})

Link.defaultProps = {
  newTab: false,
  noHover: false,
  type: 'gatsby'
}

Link.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  className: PropTypes.string,
  newTab: PropTypes.bool,
  noHover: PropTypes.bool,
  onClick: PropTypes.func,
  to: PropTypes.string,
  type: PropTypes.oneOf(linkTypes)
}

export default Link
