import React, { Fragment } from "react"
import { StaticQuery, graphql } from "gatsby"

import { Container, HeadingBlock } from "../"
import { styles } from "./Header.styles"
import { scrollTo } from "../../functions"

const renderMainHeader = title => (
  <header className="c-header" css={styles}>
    <Container>
      <HeadingBlock type="h1" size="xl" noMargin>
        {title}
      </HeadingBlock>
    </Container>
    <button className="c-link" onClick={handleScroll}>
      More
    </button>
  </header>
)

const handleScroll = () => {
  scrollTo(document.querySelector(".c-main"))
}

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
