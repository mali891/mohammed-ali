import React from 'react'
import PropTypes from 'prop-types'

import { COLOURS } from '../../styles/settings'

const Moon = ({ className }) => (
  <svg
    className={`u-anim--fade-in icon--moon ${className ? className : ''}`}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 487.42 513.3"
  >
    <path
      data-name="moon"
      d="M282.89.8a240.56 240.56 0 0158.41 157.42c0 133.44-108.17 241.61-241.61 241.61a240.59 240.59 0 01-98.53-21A258.81 258.81 0 00228 512.8c143 0 259-115.93 259-258.94C486.92 129.7 399.5 26 282.89.8zM228 494a240.28 240.28 0 01-179.16-80.29 260.85 260.85 0 0050.85 5c143.61 0 260.45-116.84 260.45-260.45A260.36 260.36 0 00329.9 36.52c82.45 38.93 138.17 123.38 138.17 217.34C468.07 386.25 360.36 494 228 494z"
      fill={COLOURS.GRADIENT_ONE.SECOND}
      stroke={COLOURS.GRADIENT_ONE.SECOND}
      strokeWidth="3px"
      strokeMiterlimit="10"
    />
  </svg>
)

Moon.propTypes = {
  className: PropTypes.string
}

export default Moon
