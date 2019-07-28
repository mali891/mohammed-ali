import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import { Container, HeadingBlock, Link } from '../'
import { styles } from './Header.styles'
import { scrollTo } from '../../functions'

const handleScroll = () => scrollTo(document.querySelector('.c-header__more-link'))

const renderMainHeader = title => (
  <header className="c-header" css={styles}>
    <Container className="c-header__container">
      <HeadingBlock type="h1" size="xl" noMargin>
        {title}
      </HeadingBlock>
    </Container>
    <Link className="c-header__more-link" type="button" onClick={handleScroll}>
      More
    </Link>
  </header>
)

const Header = React.memo(({ title }) => {
  return (
    <Fragment>
      {title ? (
        renderMainHeader(title)
      ) : (
        <StaticQuery
          query={graphql`
            query {
              site {
                siteMetadata {
                  title
                  description
                  strapline
                }
              }
            }
          `}
          render={data => renderMainHeader(data.site.siteMetadata.strapline)}
        />
      )}
    </Fragment>
  )
})

Header.propTypes = {
  title: PropTypes.string
}

export default Header
