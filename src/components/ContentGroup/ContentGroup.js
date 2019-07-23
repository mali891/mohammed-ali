import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { styles } from './ContentGroup.style'

const ContentGroup = React.memo(({ children, className, noMargin, ...other }) => {
  const dynamicClassNames = classNames([className], {
    'c-content-group': true,
    'c-content-group--no-margin': noMargin
  })

  return (
    <section css={styles} className={dynamicClassNames} {...other}>
      {children}
    </section>
  )
})

ContentGroup.defaultProps = {
  noMargin: false
}

ContentGroup.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  className: PropTypes.string,
  noMargin: PropTypes.bool
}

export default ContentGroup
