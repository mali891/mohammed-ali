import React from "react"

import { Link } from "../"
import { styles } from "./Nav.styles"
import Logo5 from "../../img/Logo5"
import { URLS } from "../../constants"
import { scrollTo } from "../../functions"

const scrollToFooter = () => scrollTo(document.querySelector(".c-footer"))

const Nav = () => (
  <nav css={styles} className="c-nav">
    {
      <Link to={URLS.HOME} noHover>
        <Logo5 />
      </Link>
    }
    <ul>
      <li>
        <Link to={URLS.HOME}>Home</Link>
      </li>
      <li>
        <Link to={URLS.REVIEWS}>Reviews</Link>
      </li>
      <li>
        <Link to={URLS.BLOG}>Blog</Link>
      </li>
      <li onClick={scrollToFooter}>
        <Link to={URLS.BLOG} type="button">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
)

export default Nav
