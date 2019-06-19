import React from "react"
import { Global, css } from "@emotion/core"
import {
  COLOURS,
  FONT_SIZES,
  LINE_HEIGHT,
  SPACING,
  EASINGS,
  BORDER_RADIUS,
} from "./settings"
import "./fonts/fonts.css"

const GlobalStyles = () => (
  <Global
    styles={css`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        &:focus {
          outline: ${COLOURS.GRADIENT_THREE.FIRST} auto 1px;
        }
      }
      .cls-1,
      .cls-2 {
        fill : white;
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

      ::selection {
        background-color: ${COLOURS.GRADIENT_THREE.FIRST};
      }

      img {
        max-width: 100%;
      }

      fieldset {
        margin: 0;
        padding: 0;
        border: 0;
      }

      /* LINKS */

      a,
      .c-link {
        color: ${COLOURS.LIGHT};
        text-decoration: none;
        position: relative;
        cursor: pointer;

        &:not(.c-link__no-hover) {
          &:hover {
            &:after {
              width: 100%;
            }
          }

          &:after {
            content: "";
            width: 0;
            position: absolute;
            left: 0;
            bottom: -1rem;
            right: 0;
            height: 0.4rem;
            width: 0;
            transition: all ${EASINGS.QUICK};
            background-color: ${COLOURS.LIGHT};
            border-radius: ${BORDER_RADIUS.LG};
            /* background-image: linear-gradient(
            to right,
            ${COLOURS.GRADIENT_THREE.FIRST},
            ${COLOURS.GRADIENT_THREE.SECOND}
            ); */
          }
        }
      }

      /* TYPE */

        p {
          font-size: ${FONT_SIZES.SM};
          line-height: ${LINE_HEIGHT.SM};
        }
      `}
  />
)

export default GlobalStyles
