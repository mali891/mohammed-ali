import React from 'react'
import PropTypes from 'prop-types'

import { COLOURS } from '../../styles/settings'

const Sun = ({ className }) => (
  <svg
    className={`u-anim--fade-in ${className ? className : ''}`}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 60 60"
  >
    <circle
      strokeLinecap="round"
      strokeLinejoin="round"
      stroke={COLOURS.GRADIENT_ONE.SECOND}
      strokeWidth="3px"
      fill="none"
      cx="30"
      cy="30"
      r="10"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      stroke={COLOURS.GRADIENT_ONE.SECOND}
      strokeWidth="3px"
      fill="none"
      d="M31 1v10.09M31 48.91V59M9.49 9.49l7.14 7.14M43.37 43.37l7.14 7.14M1 31h10.09M48.91 31H59M9.49 50.51l7.14-7.14M43.37 16.63l7.14-7.14"
    />
  </svg>
)

Sun.propTypes = {
  className: PropTypes.string
}

export default Sun
