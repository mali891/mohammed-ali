import React from 'react'
import { Global, css } from '@emotion/react'
import { COLOURS, MEDIA_QUERIES, SPACING, VIEWPORT_SIZES } from '../settings'

const CodeHighlighting = () => (
  <Global
    styles={css`
      pre,
      code,
      code[class*='language-'],
      pre[class*='language-'] {
        font-family: SF Mono, Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
      }

      .gatsby-highlight {
        background-color: ${COLOURS.BLACK};
        padding: 2rem;
        border-radius: 1rem;
        overflow: auto;

        /**
        * Remove the default PrismJS theme background-color, border-radius, margin,
        * padding and overflow.
        * 1. Make the element just wide enough to fit its content.
        * 2. Always fill the visible space in .gatsby-highlight.
        * 3. Adjust the position of the line numbers
        */

        pre[class*='language-'] {
          background-color: transparent;
          margin: 0;
          padding: 0 0 0 6rem;
          overflow: initial;
          float: left; /* 1 */
          min-width: 100%; /* 2 */

          /* Adjust the position of the line numbers */
          .line-numbers {
            padding: 0;
            padding-left: 2.8rem;
            overflow: initial;
          }
        }

        ${VIEWPORT_SIZES.map(
          viewport =>
            `@media (min-width: ${MEDIA_QUERIES[`${viewport}`]}) {
              margin: ${SPACING[`${viewport}`].MD} 0;  
            }`
        )}

        @media (min-width: ${MEDIA_QUERIES.TABLET}) {
          pre[class*='language-'] {
            padding: 0 5rem 0 7rem;
          }
        }

        &-code-line {
          background-color: ${COLOURS.BLACK};
          display: block;
          margin-right: -1rem;
          margin-left: -6rem;
          padding-right: 1rem;
          padding-left: 6rem;
          border-left: 0.25rem solid ${COLOURS.GRADIENT_THREE.FIRST};
          background-color: ${COLOURS.DARK};
        }
      }

      .line-numbers-rows {
        border-right-color: ${COLOURS.DARK_BLUE} !important;

        span {
          :before {
            color: ${COLOURS.DARK_BLUE};
          }
        }
      }
    `}
  />
)

export default CodeHighlighting
