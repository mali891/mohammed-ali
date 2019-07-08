import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { styles } from './Container.styles'

const Container = ({ children, className, ...other }) => {
  const dynamicClassNames = classNames([className], {
    'c-container': true
  })

  return (
    <div css={styles} className={dynamicClassNames} {...other}>
      {children}
    </div>
  )
}

Container.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
}

export default Container
