import React from "react"

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

export default TitleAndDescription
