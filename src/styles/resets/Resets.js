import React from 'react'
import { Global, css } from '@emotion/core'
import { COLOURS, FONT_FAMILY } from '../settings'

const Resets = () => (
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

      :root {
        --colour-primary: ${COLOURS.DARK};
        --colour-secondary: ${COLOURS.LIGHT};
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
        background-color: var(--colour-primary);
        color: var(--colour-secondary);
        min-height: 100%;
        max-width: 100vw;
        overflow-x: hidden;

        &.theme--light {
          --colour-primary: ${COLOURS.LIGHT};
          --colour-secondary: ${COLOURS.DARK};
        }
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
    `}
  />
)

export default Resets
