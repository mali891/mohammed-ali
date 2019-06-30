import React from "react"
import { Link } from "gatsby"

import { styles } from "./Nav.styles"
import Logo5 from "../../img/Logo5"
import { URLS } from "../../constants"

const Nav = () => (
  <nav css={styles} className="c-nav">
    {
      <Link className="c-link--no-hover" to={URLS.HOME}>
        <Logo5 />
      </Link>
    }
    <ul>
      <li>
        <Link activeClassName="c-link--active" to={URLS.HOME}>
          Home
        </Link>
      </li>
      <li>
        <Link activeClassName="c-link--active" to={URLS.REVIEWS}>
          Reviews
        </Link>
      </li>
      <li>
        <Link activeClassName="c-link--active" to={URLS.BLOG}>
          Blog
        </Link>
      </li>
      <li>
        <Link activeClassName="c-link--active" to={URLS.CONTACT}>
          Contact
        </Link>
      </li>
    </ul>
  </nav>
)

export default Nav
