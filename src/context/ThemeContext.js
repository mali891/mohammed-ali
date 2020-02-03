import React, { createContext, useState } from 'react'
import PropTypes from 'prop-types'

const { Provider, Consumer } = createContext()

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark')

  return <Provider value={{ theme, setTheme }}>{children}</Provider>
}

ThemeProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
}

export { ThemeProvider, Consumer as ThemeConsumer }
