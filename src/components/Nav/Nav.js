import React from "react"
import { Link } from "gatsby"

import { styles } from "./Nav.styles"
import Logo5 from "../../img/Logo5"
import { URLS } from "../../constants"
import { scrollTo } from "../../functions"

const scrollToFooter = () => scrollTo(document.querySelector(".c-footer"))

const Nav = () => (
  <nav css={styles} className="c-nav">
    {
      <Link className="c-link c-link--no-hover" to={URLS.HOME}>
        <Logo5 />
      </Link>
    }
    <ul>
      <li>
        <Link
          className="c-link"
          activeClassName="c-link--active"
          to={URLS.HOME}
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          className="c-link"
          activeClassName="c-link--active"
          to={URLS.REVIEWS}
        >
          Reviews
        </Link>
      </li>
      <li>
        <Link
          className="c-link"
          activeClassName="c-link--active"
          to={URLS.BLOG}
        >
          Blog
        </Link>
      </li>
      <li onClick={scrollToFooter}>
        <button className="c-link">Contact</button>
      </li>
    </ul>
  </nav>
)

export default Nav
