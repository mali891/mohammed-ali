import React from 'react'
import PropTypes from 'prop-types'

const Logo5 = ({ className, instanceNo }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400">
    <defs>
      <linearGradient
        id={`linear-gradient-${instanceNo.toString()}`}
        x1="53.83"
        y1="187.54"
        x2="246.17"
        y2="187.54"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#8fd3f4" />
        <stop offset=".11" stopColor="#7dd8e8" />
        <stop offset=".13" stopColor="#7ad9e6" stopOpacity=".97" />
        <stop offset=".26" stopColor="#6cdddd" stopOpacity=".8" />
        <stop offset=".33" stopColor="#5de1d3" stopOpacity=".86" />
        <stop offset=".46" stopColor="#46e8c4" stopOpacity=".96" />
        <stop offset=".53" stopColor="#3deabe" />
        <stop offset=".55" stopColor="#3ceabe" />
        <stop offset=".83" stopColor="#37ecba" />
      </linearGradient>
    </defs>
    <g>
      <g>
        <path
          d="M205 193.66l-10-17.32-40-69.28c-2.75-4.77-7.25-4.77-10 0l-40 69.28-10 17.32-40 69.28c-2.75 4.77-.5 8.66 5 8.66h180c5.5 0 7.75-3.89 5-8.66zm-125 66c-5.5 0-7.75-3.9-5-8.66l30-52 10-17.32 30-52c2.75-4.77 7.25-4.77 10 0l30 52L195 199l30 52c2.75 4.76.5 8.66-5 8.66H80z"
          fill={`url(#linear-gradient-${instanceNo.toString()})`}
        />
        <path
          className="u-fill--secondary"
          d="M305 193.66l-10-17.32-40-69.28c-2.75-4.77-7.25-4.77-10 0l-40 69.28-10 17.32-40 69.28c-2.75 4.77-.5 8.66 5 8.66h180c5.5 0 7.75-3.89 5-8.66zm-125 66c-5.5 0-7.75-3.9-5-8.66l30-52 10-17.32 30-52c2.75-4.77 7.25-4.77 10 0l30 52L295 199l30 52c2.75 4.76.5 8.66-5 8.66H180z"
        />
        <path
          className="u-fill--secondary"
          d="M200 0C89.54 0 0 89.54 0 200s89.54 200 200 200 200-89.54 200-200S310.46 0 200 0zm0 387.5C96.45 387.5 12.5 303.55 12.5 200S96.45 12.5 200 12.5s187.5 84 187.5 187.5S303.55 387.5 200 387.5z"
        />
      </g>
    </g>
  </svg>
)

Logo5.defaultProps = {
  className: '',
  instanceNo: '1'
}

Logo5.propTypes = {
  className: PropTypes.string,
  instanceNo: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default Logo5
