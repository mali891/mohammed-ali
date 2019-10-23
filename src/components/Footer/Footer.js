import React from 'react'
import PropTypes from 'prop-types'

import { Link } from '../'
import Logo from '../../img/logo/Logo'
import { Envelope, Github, LinkedIn } from '../../icons'
import { styles } from './Footer.styles'
import { URLS } from '../../constants'

const Footer = React.memo(({ footerRef }) => (
  <footer className="c-footer" css={styles} ref={footerRef}>
    <Link to={URLS.HOME} aria-label="Back to home page" noHover>
      <Logo className="c-footer__logo" instanceNo="2" />
    </Link>

    <div className="c-footer__social">
      <Link to="#!" aria-label="Send an email to Mohammed (will open your native email client)" noHover>
        <i className="c-footer__social__icon">
          <Envelope />
        </i>
      </Link>
      <Link
        to="#!"
        aria-label="Go to Mohammed's Github profile (opens in a new tab)"
        type="anchor"
        target="_blank"
        rel="noopener noreferrer"
        noHover
      >
        <i className="c-footer__social__icon">
          <Github />
        </i>
      </Link>
      <Link
        to="#!"
        aria-label="Go to Mohammed's LinkedIn profile (opens in a new tab)"
        type="anchor"
        target="_blank"
        rel="noopener noreferrer"
        noHover
      >
        <i className="c-footer__social__icon">
          <LinkedIn />
        </i>
      </Link>
    </div>

    <section className="c-footer__blurb">
      <p>
        Made with React, GraphQL and Gatsby.{' '}
        <Link
          type="anchor"
          to="#!"
          aria-label="See the source code of this website on Mohammed's Github profile (opens in a new tab)"
        >
          See source code
        </Link>
        .
      </p>
    </section>
  </footer>
))

Footer.propTypes = {
  footerRef: PropTypes.object.isRequired
}

export default Footer
