import React from 'react'
import PropTypes from 'prop-types'

const Logo4 = ({ className }) => (
  <svg className={className ? className : ''} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400">
    <g id="Layer_2" data-name="Layer 2">
      <g id="Layer_1-2" data-name="Layer 1">
        <path
          className="u-fill--secondary"
          d="M205 193.66l-10-17.32-40-69.28c-2.75-4.77-7.25-4.77-10 0l-40 69.28-10 17.32-40 69.28c-2.75 4.77-.5 8.66 5 8.66h180c5.5 0 7.75-3.89 5-8.66zm-125 66c-5.5 0-7.75-3.9-5-8.66l30-52 10-17.32 30-52c2.75-4.77 7.25-4.77 10 0l30 52L195 199l30 52c2.75 4.76.5 8.66-5 8.66H80z"
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

Logo4.propTypes = {
  className: PropTypes.string
}

export default Logo4
