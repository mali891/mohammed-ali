import React from 'react'
import { Global, css } from '@emotion/core'
import { COLOURS } from '../settings'

const Utilities = () => (
  <Global
    styles={css`
      /** COLOURS **/
      .u-clr {
        &--primary {
          color: var(--colour-primary) !important;
        }

        &--secondary {
          color: var(--colour-secondary) !important;
        }

        &--tertiary {
          color: var(--colour-tertiary) !important;
        }
      }

      /** BACKGROUND COLOURS **/
      .u-bg {
        &--primary {
          background-color: var(--colour-primary) !important;
        }

        &--secondary {
          background-color: var(--colour-secondary) !important;
        }

        &--tertiary {
          background-color: var(--colour-tertiary) !important;
        }
      }

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
