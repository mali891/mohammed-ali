import React, { useState } from 'react'
import classNames from 'classnames'

import Hamburger from './components/Hamburger'
import { ThemeConsumer } from '../../context/ThemeContext'
import { Link } from '../'
import Logo5 from '../../img/logo/Logo5'
import { URLS } from '../../constants'
import { scrollTo } from '../../functions'
import { styles } from './Nav.styles'

const scrollToFooter = () => scrollTo(document.querySelector('.c-footer'))

const toggleTheme = (theme, setTheme) => (theme === 'light' ? setTheme('dark') : setTheme('light'))

const Nav = React.memo(() => {
  const [menuExpanded, setMenuExpanded] = useState(false)
  const toggleMenu = () => setMenuExpanded(!menuExpanded)
  const closeMenu = () => setMenuExpanded(false)

  const dynamicClassNames = classNames([], {
    'c-nav__menu': true,
    'c-nav__menu--is-expanded': menuExpanded
  })

  const handleContactClick = () => {
    scrollToFooter()
    closeMenu()
  }

  return (
    <ThemeConsumer>
      {({ theme, setTheme }) => (
        <nav css={styles} className="c-nav">
          {
            <Link to={URLS.HOME} onClick={() => toggleTheme(theme, setTheme)} noHover>
              <Logo5 className="c-nav__logo" />
            </Link>
          }
          {/* <ThemeToggle /> */}
          <div className={dynamicClassNames} id="navigation">
            <ul className="c-nav__list">
              <li className="c-nav__list-item">
                <Link className="c-nav__link" to={URLS.HOME} onClick={closeMenu}>
                  Home
                </Link>
              </li>
              <li className="c-nav__list-item">
                <Link className="c-nav__link" to={URLS.REVIEWS} onClick={closeMenu}>
                  Reviews
                </Link>
              </li>
              <li className="c-nav__list-item">
                <Link className="c-nav__link" to={URLS.BLOG} onClick={closeMenu}>
                  Blog
                </Link>
              </li>
              <li className="c-nav__list-item">
                <Link className="c-nav__link" to={URLS.BLOG} onClick={handleContactClick} type="button">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <Hamburger onClick={toggleMenu} menuExpanded={menuExpanded} />
        </nav>
      )}
    </ThemeConsumer>
  )
})

export default Nav
