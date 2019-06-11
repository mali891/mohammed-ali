import React from "react"
import { Global, css } from "@emotion/core"
import { colours, spacing, fontSizes, lineHeight } from "./"
import "./fonts/fonts.css"

const GlobalStyles = () => (
  <Global
    styles={css`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      html {
        font-size: 10px;
      }

      body {
        font-family: "Apercu Regular", "Apercu Medium", "system-ui",
          "sans-serif";
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: ${colours.dark};
        color: ${colours.white};
      }

      h1,
      h2,
      h3,
      h4,
      h5 {
        font-family: "Apercu Medium", "Apercu Regular", "system-ui",
          "sans-serif";
      }

      a {
        color: ${colours.white};
      }

      p {
        font-size: ${fontSizes.body};
        line-height: ${lineHeight.body};
      }

      .c-heading--one {
        font-size: ${fontSizes.headingOne};
        line-height: ${lineHeight.headingOne};
        margin-bottom: ${spacing.xl};
      }

      .c-heading--two {
        font-size: ${fontSizes.headingTwo};
        line-height: ${lineHeight.headingTwo};
        margin-bottom: ${spacing.l};
      }

      .c-heading--three {
        font-size: ${fontSizes.headingThree};
        line-height: ${lineHeight.headingThree};
        margin-bottom: ${spacing.m};
      }
    `}
  />
)

export default GlobalStyles
