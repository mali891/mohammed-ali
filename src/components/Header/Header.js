import React, { Fragment } from "react"
import { StaticQuery, graphql } from "gatsby"

import { Nav, HeadHelmet, Container, HeadingBlock } from "../"
import { GlobalStyles } from "../../styles/settings"
import { styles } from "./Header.styles"
import { scrollTo } from "../../functions"

const renderMainHeader = strapline => (
  <Fragment>
    <GlobalStyles />
    <HeadHelmet />
    <header css={styles}>
      <Nav />
      <Container>
        <HeadingBlock type="h1" size="xl" noMargin>
          {strapline}
        </HeadingBlock>
      </Container>
      <span
        className="c-link"
        onClick={() => scrollTo(document.querySelector(".o-main"))}
      >
        More
      </span>
    </header>
  </Fragment>
)

const Header = () => (
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
)

export default Header
