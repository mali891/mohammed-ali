import React, { Fragment } from "react"
import { StaticQuery, graphql } from "gatsby"

import { Container, HeadingBlock, Link } from "../"
import { styles } from "./Header.styles"
import { scrollTo } from "../../functions"

const handleScroll = () =>
  scrollTo(document.querySelectorAll("button.c-link")[1])

const renderMainHeader = title => (
  <header className="c-header" css={styles}>
    <Container>
      <HeadingBlock type="h1" size="xl" noMargin>
        {title}
      </HeadingBlock>
    </Container>
    <Link type="button" onClick={handleScroll}>
      More
    </Link>
  </header>
)

const Header = ({ title }) => {
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
}

export default Header
