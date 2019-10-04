import React, { useRef } from 'react'
import PropTypes from 'prop-types'

import { ThemeProvider } from '../../context/ThemeContext'
import { Footer, Nav, AppWrapper } from '../../components'

const Layout = ({ children }) => {
  const footerRef = useRef(null)

  return (
    <ThemeProvider>
      <AppWrapper>
        <Nav footerRef={footerRef} />
        {children}
        <Footer footerRef={footerRef} />
      </AppWrapper>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
}

export default Layout
