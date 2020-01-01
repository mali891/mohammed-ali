import React, { Fragment, useRef } from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import { Container, HeadingBlock, Link, HeaderScrollTarget } from '../'
import { styles } from './Header.styles'
import { scrollTo } from '../../functions'

const renderMainHeader = (title, handleScroll, scrollRef) => (
  <Fragment>
    <header className="c-header" css={styles}>
      <Container className="c-header__container">
        <HeadingBlock type="h1" size="xl" align="center" noMargin>
          {title}
        </HeadingBlock>
      </Container>
      <Link className="c-header__more-link" type="button" onClick={handleScroll}>
        More
      </Link>
    </header>
    <HeaderScrollTarget scrollRef={scrollRef} />
  </Fragment>
)

const Header = React.memo(({ title }) => {
  const scrollRef = useRef(null)
  const handleScroll = () => scrollTo(scrollRef.current)

  return (
    <Fragment>
      {title ? (
        renderMainHeader(title, handleScroll, scrollRef)
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
          render={data => renderMainHeader(data.site.siteMetadata.strapline, handleScroll, scrollRef)}
        />
      )}
    </Fragment>
  )
})

Header.propTypes = {
  title: PropTypes.string
}

export default Header
