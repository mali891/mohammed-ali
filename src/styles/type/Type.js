import React from 'react'
import { Global, css } from '@emotion/core'
import { FONT_SIZES, MEDIA_QUERIES, SPACING, VIEWPORT_SIZES } from '../settings'
import '../fonts/fonts.css'

const Type = () => (
  <Global
    styles={css`
      ${VIEWPORT_SIZES.map(
        viewport =>
          `@media (min-width: ${MEDIA_QUERIES[`${viewport}`]}) {
          p,
          pre,
          code,
          code[class*='language-'],
          pre[class*='language-'] {
            font-size: ${FONT_SIZES[`${viewport}`].SM};
          }

          .c-main {
            margin-top: ${SPACING[`${viewport}`].LG};
          }
        }
        @media (min-width: ${MEDIA_QUERIES[`${viewport}`]}) {
          &.c-heading {
            &--xs {
              font-size: ${FONT_SIZES[`${viewport}`].XS};
              margin-bottom: ${SPACING[`${viewport}`].XS};
              font-weight: 400;

              pre, code, code[class*='language-'], pre[class*='language-'] {
                font-size: ${FONT_SIZES[`${viewport}`].XS};
                margin-bottom: ${SPACING[`${viewport}`].XS};
                font-weight: 400;
              }
            }

            &--sm {
              font-size: ${FONT_SIZES[`${viewport}`].SM};
              margin-bottom: ${SPACING[`${viewport}`].SM};
              font-weight: 400;

              pre, code, code[class*='language-'], pre[class*='language-'] {
                font-size: ${FONT_SIZES[`${viewport}`].SM};
                margin-bottom: ${SPACING[`${viewport}`].SM};
              }
            }

            &--md {
              font-size: ${FONT_SIZES[`${viewport}`].MD};
              margin-bottom: ${SPACING[`${viewport}`].MD};
              font-weight: 400;
              letter-spacing: 0.1rem;

              pre, code, code[class*='language-'], pre[class*='language-'] {
                font-size: ${FONT_SIZES[`${viewport}`].MD};
                margin-bottom: ${SPACING[`${viewport}`].MD};
              }
            }

            &--lg {
              font-size: ${FONT_SIZES[`${viewport}`].LG};
              margin-bottom: ${SPACING[`${viewport}`].LG};
              letter-spacing: 0.2rem;

              pre, code, code[class*='language-'], pre[class*='language-'] {
                font-size: ${FONT_SIZES[`${viewport}`].LG};
                margin-bottom: ${SPACING[`${viewport}`].LG};
              }
            }

            &--xl {
              font-weight: 500;
              font-size: ${FONT_SIZES[`${viewport}`].XL};
              margin-bottom: ${SPACING[`${viewport}`].XL};
              letter-spacing: 0.3rem;

              pre, code, code[class*='language-'], pre[class*='language-'] {
                font-size: ${FONT_SIZES[`${viewport}`].XL};
                margin-bottom: ${SPACING[`${viewport}`].XL};
                font-weight: 400;
              }
            }
          }
        }`
      )}
    `}
  />
)

export default Type
