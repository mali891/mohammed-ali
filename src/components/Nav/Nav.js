import React, { useState } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { Hamburger, ThemeToggle } from './components'
import { Link } from '../'
import Logo from '../../img/logo/Logo'
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

  const navItems = [
    {
      title: 'Home',
      toLink: URLS.HOME,
      clickHandler: closeMenu,
      reRoute: true
    },
    {
      title: 'Reviews',
      toLink: URLS.REVIEWS,
      clickHandler: closeMenu,
      reRoute: true
    },
    {
      title: 'Blog',
      toLink: URLS.BLOG,
      clickHandler: closeMenu,
      reRoute: true
    },
    {
      title: 'Contact',
      toLink: null,
      clickHandler: handleContactClick,
      reRoute: false
    }
  ]

  return (
    <nav css={styles} className="c-nav u-bg--primary u-clr--secondary" role="navigation">
      {menuExpanded && <div className="c-nav__overlay u-anim--fade-in" onClick={closeMenu} role="presentation"></div>}
      {
        <Link to={URLS.HOME} aria-label="Back to home page" noHover>
          <Logo className="c-nav__logo" />
        </Link>
      }

      <div className={dynamicClassNames} id="navigation">
        <ul className="c-nav__list">
          {navItems.map(({ title, toLink, clickHandler, reRoute }) =>
            reRoute ? (
              <li className="c-nav__list-item" key={toLink}>
                <Link className="c-nav__link" to={toLink} onClick={clickHandler}>
                  {title}
                </Link>
              </li>
            ) : (
              <li className="c-nav__list-item" key={toLink}>
                <Link className="c-nav__link" onClick={clickHandler} type="button">
                  {title}
                </Link>
              </li>
            )
          )}
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
