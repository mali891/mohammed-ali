import React from 'react'

import { ThemeConsumer } from '../../../../context/ThemeContext'
import { styles } from './ThemeToggle.styles'

const toggleTheme = (theme, setTheme) => (theme === 'dark' ? setTheme('light') : setTheme('dark'))

const ThemeToggle = () => (
  <ThemeConsumer>
    {({ theme, setTheme }) => (
      <div css={styles} className="c-theme-toggle">
        <input className="c-theme-toggle__input" type="checkbox" id="theme-toggle" />
        <label className="c-theme-toggle__label" onClick={() => toggleTheme(theme, setTheme)} htmlFor="theme-toggle">
          <div className="c-theme-toggle__toggle">Toggle theme</div>
        </label>
      </div>
    )}
  </ThemeConsumer>
)

export default ThemeToggle
