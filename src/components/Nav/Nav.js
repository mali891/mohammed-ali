import React from "react"
import { Link } from "gatsby"

import { styles } from "./Nav.styles"
import Logo5 from "../../img/Logo5"

const Nav = () => (
  <nav css={styles} className="c-nav">
    {
      <Link className="c-link__no-hover" to="/">
        <Logo5 />
      </Link>
    }
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/">Reviews</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
      <li>
        <Link to="/">Contact</Link>
      </li>
    </ul>
  </nav>
)

export default Nav
