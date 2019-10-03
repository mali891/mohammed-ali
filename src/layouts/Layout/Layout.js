import React from 'react'
import PropTypes from 'prop-types'

import { ThemeProvider } from '../../context/ThemeContext'
import { Footer, Nav, AppWrapper } from '../../components'

const Layout = ({ children }) => (
  <ThemeProvider>
    <AppWrapper>
      <Nav />
      {children}
      <Footer />
    </AppWrapper>
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
}

export default Layout
