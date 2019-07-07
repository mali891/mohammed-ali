import React from "react"
import { Global, css } from "@emotion/core"
import {
  COLOURS,
  FONT_SIZES,
  FONT_FAMILY,
  LINE_HEIGHT,
  EASINGS,
  BORDER_RADIUS,
  SPACING,
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
        fill: white;
      }

      html {
        font-size: 10px;
        min-height: 100%;
        scroll-behavior: smooth;
      }

      body {
        font-family: ${FONT_FAMILY.REGULAR};
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

      .c-link {
        font-family: ${FONT_FAMILY.MEDIUM};
        color: ${COLOURS.LIGHT};
        background: none;
        border: none;
        text-decoration: none;
        position: relative;
        cursor: pointer;

        &:not(.c-link--no-hover) {
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
          }
        }

        &--active {
          &:not(.c-link--no-hover) {
            &:after {
              width: 100%;
            }
          }
        }
      }

      /* TYPE */

      p {
        font-size: ${FONT_SIZES.SM};
        line-height: ${LINE_HEIGHT.SM};
      }

      .u-text {
        &--centre {
          text-align: center;
        }

        &--xs {
          font-size: ${FONT_SIZES.XS};
          line-height: ${LINE_HEIGHT.XS};
        }

        &--sm {
          font-size: ${FONT_SIZES.SM};
          line-height: ${LINE_HEIGHT.SM};
        }

        &--md {
          font-size: ${FONT_SIZES.MD};
          line-height: ${LINE_HEIGHT.MD};
        }

        &--lg {
          font-size: ${FONT_SIZES.LG};
          line-height: ${LINE_HEIGHT.LG};
        }
      }

      /* ANIMATIONS */

      @keyframes fadeIn {
        0% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }

      .u-anim--fade-in {
        opacity: 0;
        animation: fadeIn 400ms forwards ease-in-out 0ms;
      }

      .c-main {
        display: block;
        margin-top: ${SPACING.LG};
      }
    `}
  />
)

export default GlobalStyles
