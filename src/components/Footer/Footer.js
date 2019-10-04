import React from 'react'
import PropTypes from 'prop-types'

import { Link } from '../'
import Logo5 from '../../img/logo/Logo5'
import { EnvelopeDark, GithubDark, LinkedInDark } from '../../icons'
import { styles } from './Footer.styles'
import { URLS } from '../../constants'

const Footer = React.memo(({ footerRef }) => (
  <footer className="c-footer" css={styles} ref={footerRef}>
    <Link to={URLS.HOME} noHover>
      <Logo5 className="c-footer__logo" />
    </Link>

    <div className="c-footer__social">
      <Link to="#!" noHover>
        <i className="c-footer__social__icon">
          <EnvelopeDark />
        </i>
      </Link>
      <Link to="#!" noHover>
        <i className="c-footer__social__icon">
          <GithubDark />
        </i>
      </Link>
      <Link to="#!" noHover>
        <i className="c-footer__social__icon">
          <LinkedInDark />
        </i>
      </Link>
    </div>

    <section className="c-footer__blurb">
      <p>
        Made with React, GraphQL and Gatsby.{' '}
        <Link type="anchor" to="#!">
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
