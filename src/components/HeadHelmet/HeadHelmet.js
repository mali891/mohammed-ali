import React from "react"
import { Helmet } from "react-helmet"

import { colours } from "../../styles"

const HeadHelmet = () => (
  <Helmet>
    <title>Mohammed Ali | Freelance Front-end Engineer</title>
    <meta name="theme-color" content={colours.dark} />
    <link
      href="https://fonts.googleapis.com/css?family=Rubik:300,400,500,600,700&display=swap"
      rel="stylesheet"
    />
  </Helmet>
)

export default HeadHelmet
