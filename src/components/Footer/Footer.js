import React from "react"
import { Link } from "gatsby"

import Logo5 from "../../img/Logo5"
import { styles } from "./Footer.styles"
import { URLS } from "../../constants"

const Footer = () => (
  <footer className="c-footer" css={styles}>
    <Link to={URLS.HOME}>
      <Logo5 />
    </Link>
    <div className="c-footer__social"></div>
    <div className="c-footer__blurb">
      <p>
        Made with React, GraphQL and Gatsby. See <a href="#!">source code</a>.
      </p>
    </div>
  </footer>
)

export default Footer
