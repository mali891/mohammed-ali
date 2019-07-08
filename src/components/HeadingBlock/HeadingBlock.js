import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { styles } from './HeadingBlock.styles'
import { TSHIRT_SIZES } from '../../styles/settings'

const headingTypes = ['h1', 'h2', 'h3', 'h4', 'h5']

const HeadingBlock = ({ children, className, type, size, noMargin, ...other }) => {
	const HeadingTag = type
	const dynamicClassNames = classNames([className], {
		'c-heading': true,
		'c-heading--xs': size === 'xs',
		'c-heading--sm': size === 'sm',
		'c-heading--md': size === 'md',
		'c-heading--lg': size === 'lg',
		'c-heading--xl': size === 'xl',
		'c-heading__no-margin': noMargin
	})

	return (
		<HeadingTag css={styles} className={dynamicClassNames} {...other}>
			{children}
		</HeadingTag>
	)
}

HeadingBlock.propTypes = {
	children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
	noMargin: PropTypes.bool,
	size: PropTypes.oneOf(Object.values(TSHIRT_SIZES)).isRequired,
	type: PropTypes.oneOf(headingTypes).isRequired
}

export default HeadingBlock
