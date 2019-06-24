import React from "react"

import Logo5 from "../../img/Logo5"
import { styles } from "./Footer.styles"

const Footer = () => (
  <footer className="c-footer" css={styles}>
    <Logo5 />
    <div className="c-footer__blurb">
      <p>
        Made with React, GraphQL and Gatsby. See <a href="#!">source code</a>.
      </p>
    </div>
  </footer>
)

export default Footer
