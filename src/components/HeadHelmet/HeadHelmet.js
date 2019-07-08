import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

import { COLOURS } from '../../styles/settings'

const HeadHelmet = ({ title }) => (
  <Helmet>
    <title>{title}</title>
    <meta name="theme-color" content={COLOURS.DARK} />
    <link href="https://fonts.googleapis.com/css?family=Rubik:300,400,500,600,700&display=swap" rel="stylesheet" />
  </Helmet>
)

HeadHelmet.defaultProps = {
  title: 'Mohammed Ali | Freelance Front-end Engineer'
}

HeadHelmet.propTypes = {
  title: PropTypes.string
}

export default HeadHelmet
