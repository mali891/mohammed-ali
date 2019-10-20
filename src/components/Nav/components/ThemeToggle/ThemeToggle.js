import React from 'react'

import { ThemeConsumer } from '../../../../context/ThemeContext'
import { styles } from './ThemeToggle.styles'
import { Sun, Moon } from '../../../../icons'

const toggleTheme = (theme, setTheme) => (theme === 'dark' ? setTheme('light') : setTheme('dark'))
const handleKeyDown = (e, theme, setTheme) => e.keyCode === 13 && toggleTheme(theme, setTheme)

const ThemeToggle = () => (
  <ThemeConsumer>
    {({ theme, setTheme }) => (
      <div
        css={styles}
        className={`c-theme-toggle c-theme-toggle--${theme}`}
        aria-label="Toggle theme and colour contrast"
      >
        <input
          className="c-theme-toggle__input"
          type="checkbox"
          id="theme-toggle"
          checked={theme === 'light'}
          readOnly
        />
        <label
          className="c-theme-toggle__label"
          onClick={() => toggleTheme(theme, setTheme)}
          onKeyDown={e => handleKeyDown(e, theme, setTheme)}
          htmlFor="theme-toggle"
          tabIndex={0}
        >
          <div className="c-theme-toggle__toggle">
            {theme === 'light' ? <Sun className="c-theme-toggle__icon" /> : <Moon className="c-theme-toggle__icon" />}
          </div>
        </label>
      </div>
    )}
  </ThemeConsumer>
)

export default ThemeToggle
