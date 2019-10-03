import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { HeadHelmet } from '../'
import { GlobalStyles } from '../../styles/settings'
import { ThemeConsumer } from '../../context/ThemeContext'
import { styles } from './AppWrapper.styles'

const AppWrapper = ({ children }) => {
  const dynamicClassNames = classNames([], {
    'c-app-wrapper': true,
    'u-anim--fade-in': true
  })

  return (
    <ThemeConsumer>
      {({ theme }) => (
        <div css={styles} className={`${dynamicClassNames} theme--${theme}`}>
          <GlobalStyles />
          <HeadHelmet />
          {children}
        </div>
      )}
    </ThemeConsumer>
  )
}

AppWrapper.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired
}

export default AppWrapper
