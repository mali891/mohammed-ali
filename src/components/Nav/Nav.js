import React from "react"

import { styles } from "./Nav.styles"
import Logo from "../../img/Logo"

const Nav = () => (
  <nav css={styles} className="c__nav">
    {<Logo />}
    <ul>
      <li>Home</li>
      <li>Reviews</li>
      <li>Blog</li>
      <li>Contact</li>
    </ul>
  </nav>
)

export default Nav
