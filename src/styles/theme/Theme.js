import React from 'react'
import { Global, css } from '@emotion/core'
import { COLOURS } from '../settings'

const Theme = () => (
  <Global
    styles={css`
      :root {
        --colour-primary: ${COLOURS.DARK};
        --colour-secondary: ${COLOURS.LIGHT};
        --colour-tertiary: ${COLOURS.BLACK};
        --colour-accent: ${COLOURS.GRADIENT_THREE.FIRST};
      }

      ::selection {
        background-color: ${COLOURS.GRADIENT_THREE.FIRST};
      }
    `}
  />
)

export default Theme
