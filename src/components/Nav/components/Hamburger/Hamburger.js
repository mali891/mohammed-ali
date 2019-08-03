import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { styles } from './Hamburger.styles'

const Hamburger = ({ menuExpanded, onClick }) => {
  const dynamicClassNames = classNames([], {
    'c-hamburger': true,
    'c-hamburger--collapse': true,
    'c-hamburger--is-active': menuExpanded
  })

  return (
    <button
      css={styles}
      className={dynamicClassNames}
      type="button"
      aria-label="Menu"
      aria-controls="navigation"
      aria-expanded={menuExpanded}
      onClick={onClick}
    >
      <span className="c-hamburger__box">
        <span className="c-hamburger__inner u-bg--secondary"></span>
      </span>
    </button>
  )
}

Hamburger.propTypes = {
  menuExpanded: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Hamburger
