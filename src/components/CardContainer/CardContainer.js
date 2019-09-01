import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { styles } from './CardContainer.styles'

const CardContainer = ({ children, marginBottom, className, ...other }) => {
  const dynamicClassNames = classNames([className], {
    'c-card-container': true,
    'c-card-container--margin-bottom': marginBottom
  })

  return (
    <div className={dynamicClassNames} css={styles} {...other}>
      {children}
    </div>
  )
}

CardContainer.defaultProps = {
  marginBottom: false
}

CardContainer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  className: PropTypes.string,
  marginBottom: PropTypes.bool
}

export default CardContainer
