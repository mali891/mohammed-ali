import React from 'react'
import { Global, css } from '@emotion/core'
import { EASINGS } from '../settings'

const Utilities = () => (
  <Global
    styles={css`
      /** COLOURS **/
      .u-clr {
        &--primary {
          color: var(--colour-primary) !important;
          transition: ${EASINGS.DEFAULT};
        }

        &--secondary {
          color: var(--colour-secondary) !important;
          transition: ${EASINGS.DEFAULT};
        }

        &--tertiary {
          color: var(--colour-tertiary) !important;
          transition: ${EASINGS.DEFAULT};
        }
      }

      /** BACKGROUND COLOURS **/
      .u-bg {
        &--primary {
          background-color: var(--colour-primary) !important;
          transition: ${EASINGS.DEFAULT};
        }

        &--secondary {
          background-color: var(--colour-secondary) !important;
          transition: ${EASINGS.DEFAULT};
        }

        &--tertiary {
          background-color: var(--colour-tertiary) !important;
          transition: ${EASINGS.DEFAULT};
        }
      }

      /** FILL **/
      .u-fill {
        &--primary {
          fill: var(--colour-primary);
          transition: ${EASINGS.DEFAULT};
        }

        &--secondary {
          fill: var(--colour-secondary);
          transition: ${EASINGS.DEFAULT};
        }
      }

      /** STROKE **/
      .u-stroke {
        &--primary {
          stroke: var(--colour-primary);
          transition: ${EASINGS.DEFAULT};
        }

        &--secondary {
          stroke: var(--colour-secondary);
          transition: ${EASINGS.DEFAULT};
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
