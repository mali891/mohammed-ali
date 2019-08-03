import React from 'react'
import { styles } from './ThemeToggle.styles'

const toggleTheme = () => document.querySelector('body').classList.toggle('theme--light')

// prettier-ignore
const ThemeToggle = () => (
  <div css={styles} className="c-theme-toggle">
    <input className="c-theme-toggle__input" type="checkbox" id="theme-toggle" />
    <label className="c-theme-toggle__label" onClick={toggleTheme} htmlFor="theme-toggle">Toggle theme</label>
  </div>
)

export default ThemeToggle
