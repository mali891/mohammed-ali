import React from "react"
import { Link } from "gatsby"

import { styles } from "./Nav.styles"
import Logo from "../../img/Logo"

const Nav = () => (
  <nav css={styles} className="c-nav">
    {<Logo />}
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
