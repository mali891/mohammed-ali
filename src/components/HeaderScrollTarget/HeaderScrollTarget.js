import React from 'react'
import PropTypes from 'prop-types'

import { styles } from './HeaderScrollTarget.styles'

const HeaderScrollTarget = ({ scrollRef, ...other }) => {
  return <div className="c-header-scroll" css={styles} ref={scrollRef} {...other}></div>
}

HeaderScrollTarget.propTypes = {
  scrollRef: PropTypes.object.isRequired
}

export default HeaderScrollTarget
