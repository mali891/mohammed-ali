import React from "react"
import { Link } from "gatsby"

import Logo5 from "../../img/Logo5"
import { EnvelopeDark, GithubDark, LinkedInDark } from "../../icons"
import { styles } from "./Footer.styles"
import { URLS } from "../../constants"

const Footer = () => (
  <footer className="c-footer" css={styles}>
    <Link className="c-link--no-hover" to={URLS.HOME}>
      <Logo5 />
    </Link>
    <div className="c-footer__social">
      <Link className="c-link c-link--no-hover" to="#!">
        <i className="c-footer__social-icon">
          <EnvelopeDark />
        </i>
      </Link>
      <Link className="c-link c-link--no-hover" to="#!">
        <i className="c-footer__social-icon">
          <GithubDark />
        </i>
      </Link>
      <Link className="c-link c-link--no-hover" to="#!">
        <i className="c-footer__social-icon">
          <LinkedInDark />
        </i>
      </Link>
    </div>
    <div className="c-footer__blurb">
      <p>
        Made with React, GraphQL and Gatsby.{" "}
        <a className="c-link" href="#!">
          See source code
        </a>
        .
      </p>
    </div>
  </footer>
)

export default Footer
