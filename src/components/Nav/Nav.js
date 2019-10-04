import React, { useState } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { Hamburger, ThemeToggle } from './components'
import { Link } from '../'
import Logo5 from '../../img/logo/Logo5'
import { URLS } from '../../constants'
import { scrollTo } from '../../functions'
import { styles } from './Nav.styles'

const Nav = React.memo(({ footerRef }) => {
  const [menuExpanded, setMenuExpanded] = useState(false)
  const toggleMenu = () => setMenuExpanded(!menuExpanded)
  const closeMenu = () => setMenuExpanded(false)

  const dynamicClassNames = classNames([], {
    'c-nav__menu': true,
    'u-bg--primary': true,
    'c-nav__menu--is-expanded': menuExpanded
  })

  const handleContactClick = () => {
    scrollTo(footerRef.current)
    closeMenu()
  }

  return (
    <nav css={styles} className="c-nav u-bg--primary u-clr--secondary">
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
      {menuExpanded && <div className="c-nav__overlay u-anim--fade-in" onClick={closeMenu} role="presentation"></div>}
      {
        <Link to={URLS.HOME} aria-label="Home link" noHover>
          <Logo5 className="c-nav__logo" />
        </Link>
      }

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
            <Link className="c-nav__link" onClick={handleContactClick} type="button">
              Contact
            </Link>
          </li>
        </ul>
        <ThemeToggle />
      </div>

      <Hamburger onClick={toggleMenu} menuExpanded={menuExpanded} />
    </nav>
  )
})

Nav.propTypes = {
  footerRef: PropTypes.object.isRequired
}

export default Nav
