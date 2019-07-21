import React from 'react'

import { ThemeConsumer } from '../../context/ThemeContext'
import { Link, ThemeToggle } from '../'
import Logo5 from '../../img/logo/Logo5'
import { URLS } from '../../constants'
import { scrollTo } from '../../functions'
import { styles } from './Nav.styles'

const scrollToFooter = () => scrollTo(document.querySelector('.c-footer'))

const toggleTheme = (theme, setTheme) => (theme === 'light' ? setTheme('dark') : setTheme('light'))

const Nav = React.memo(() => (
  <ThemeConsumer>
    {({ theme, setTheme }) => (
      <nav css={styles} className="c-nav">
        {
          <Link to={URLS.HOME} onClick={() => toggleTheme(theme, setTheme)} noHover>
            <Logo5 className="c-nav__logo" />
          </Link>
        }
        {/* <ThemeToggle /> */}
        <ul className="c-nav__list">
          <li className="c-nav__list-item">
            <Link className="c-nav__link" to={URLS.HOME}>
              Home
            </Link>
          </li>
          <li className="c-nav__list-item">
            <Link className="c-nav__link" to={URLS.REVIEWS}>
              Reviews
            </Link>
          </li>
          <li className="c-nav__list-item">
            <Link className="c-nav__link" to={URLS.BLOG}>
              Blog
            </Link>
          </li>
          <li className="c-nav__list-item">
            <Link className="c-nav__link" to={URLS.BLOG} onClick={scrollToFooter} type="button">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    )}
  </ThemeConsumer>
))

export default Nav
