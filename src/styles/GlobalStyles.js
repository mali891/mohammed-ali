import React from "react"
import { Global, css } from "@emotion/core"
import { COLOURS, FONT_SIZES, LINE_HEIGHT } from "./"
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
        scroll-behavior: smooth;
        min-height: 100%;
      }

      body {
        font-family: "Apercu Regular", "Apercu Medium", "system-ui",
          "sans-serif";
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: ${COLOURS.DARK};
        color: ${COLOURS.LIGHT};
        min-height: 100%;
      }

      img {
        max-width: 100%;
      }

      fieldset {
        margin: 0;
        padding: 0;
        border: 0;
      }

      a {
        color: ${COLOURS.LIGHT};
      }

      p {
        font-size: ${FONT_SIZES.SM};
        line-height: ${LINE_HEIGHT.SM};
      }
    `}
  />
)

export default GlobalStyles
