import React from "react"
import { StaticQuery, graphql } from "gatsby"

const TitleAndDescription = ({ data }) => {
  const title = data.site.siteMetadata.title
  const description = data.site.siteMetadata.description

  return (
    <React.Fragment>
      <h1>{title}</h1>
      <h2>{description}</h2>
    </React.Fragment>
  )
}

const Header = () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={data => <TitleAndDescription data={data} />}
  />
)

export default Header
