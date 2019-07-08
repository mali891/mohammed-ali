import React from "react"

import { Link } from "../"
import Logo5 from "../../img/logo/Logo5"
import { URLS } from "../../constants"
import { scrollTo } from "../../functions"
import { styles } from "./Nav.styles"

const scrollToFooter = () => scrollTo(document.querySelector(".c-footer"))

const Nav = () => (
  <nav css={styles} className="c-nav">
    {
      <Link to={URLS.HOME} noHover>
        <Logo5 className="c-nav__logo" />
      </Link>
    }
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
      <li className="c-nav__list-item" onClick={scrollToFooter}>
        <Link className="c-nav__link" to={URLS.BLOG} type="button">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
)

export default Nav
