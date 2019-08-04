import React from 'react'
import { Global, css } from '@emotion/core'
import { COLOURS, EASINGS } from '../settings'

const Theme = () => (
  <Global
    styles={css`
      :root {
        --colour-primary: ${COLOURS.DARK};
        --colour-secondary: ${COLOURS.LIGHT};
        --colour-tertiary: ${COLOURS.BLACK};
        --colour-accent: ${COLOURS.GRADIENT_THREE.FIRST};
      }

      body {
        transition: ${EASINGS.DEFAULT};
        background-color: var(--colour-primary);
        color: var(--colour-secondary);

        &.theme--light {
          --colour-primary: ${COLOURS.LIGHT};
          --colour-secondary: ${COLOURS.DARK};
          --colour-tertiary: ${COLOURS.GREY};
        }
      }

      ::selection {
        background-color: ${COLOURS.GRADIENT_THREE.FIRST};
      }
    `}
  />
)

export default Theme
