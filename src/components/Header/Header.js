import React, { Fragment, useRef } from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { motion, useViewportScroll } from 'framer-motion'

import { Container, HeadingBlock, Link, HeaderScrollTarget } from '../'
import { styles } from './Header.styles'
import { scrollTo } from '../../functions'

const { scrollYProgress } = useViewportScroll()

const renderMainHeader = (title, handleScroll, scrollRef) => (
  <Fragment>
    <header className="c-header" css={styles}>
      <Container className="c-header__container">
        <motion.div
          drag
          dragConstraints={{
            top: -50,
            left: -50,
            right: 50,
            bottom: 50
          }}
        >
          <HeadingBlock type="h1" size="xl" align="center" noMargin>
            {title}
          </HeadingBlock>
        </motion.div>
        <motion.path d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0" style={{ pathLength: scrollYProgress }} />
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
