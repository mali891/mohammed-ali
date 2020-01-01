import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { styles } from './HeadingBlock.styles'
import { TSHIRT_SIZES } from '../../styles/settings'

const headingTypes = ['h1', 'h2', 'h3', 'h4', 'h5', 'span']

const HeadingBlock = ({ align, children, className, type, size, noMargin, ...other }) => {
  const HeadingTag = type
  const dynamicClassNames = classNames([className], {
    'c-heading': true,
    'c-heading--xs': size === 'xs',
    'c-heading--sm': size === 'sm',
    'c-heading--md': size === 'md',
    'c-heading--lg': size === 'lg',
    'c-heading--xl': size === 'xl',
    'c-heading--no-margin': noMargin,
    'c-heading--align-center': align === 'center'
  })

  return (
    <HeadingTag css={styles} className={dynamicClassNames} {...other}>
      {children}
    </HeadingTag>
  )
}

HeadingBlock.propTypes = {
  align: PropTypes.oneOf(['left', 'center', 'right']),
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  className: PropTypes.string,
  noMargin: PropTypes.bool,
  size: PropTypes.oneOf(Object.values(TSHIRT_SIZES)).isRequired,
  type: PropTypes.oneOf(headingTypes).isRequired
}

export default HeadingBlock
