import React from 'react'
import { Global, css } from '@emotion/core'
import { COLOURS } from '../settings'

const Utilities = () => (
  <Global
    styles={css`
      /** FILL **/
      .u-fill {
        &--white {
          fill: ${COLOURS.LIGHT};
        }
      }

      /*** ANIMATIONS ***/

      @keyframes fadeIn {
        0% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }

      .u-anim {
        &--fade-in {
          opacity: 0;
          animation: fadeIn 400ms forwards ease-in-out 0ms;
        }
      }
    `}
  />
)

export default Utilities
