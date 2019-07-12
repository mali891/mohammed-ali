import React from 'react'
import PropTypes from 'prop-types'

import { ThemeProvider } from '../../context/ThemeContext'
import { Footer, HeadHelmet, Nav } from '../../components'
import { GlobalStyles } from '../../styles/settings'

const Layout = ({ children }) => (
  <div className="u-anim--fade-in">
    <GlobalStyles />
    <HeadHelmet />
    <ThemeProvider>
      <Nav />
      {children}
      <Footer />
    </ThemeProvider>
  </div>
)

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
}

export default Layout
