import { css } from '@emotion/core'
import { FONT_SIZES, LINE_HEIGHT, SPACING, FONT_FAMILY, MEDIA_QUERIES, VIEWPORT_SIZES } from '../../styles/settings'

export const styles = css`
  font-family: ${FONT_FAMILY.MEDIUM};
  display: block;

  ${VIEWPORT_SIZES.map(
    viewport =>
      `@media (min-width: ${MEDIA_QUERIES[`${viewport}`]}) {
          &.c-heading {
            &--xs {
              font-size: ${FONT_SIZES[`${viewport}`].XS};
              line-height: ${LINE_HEIGHT[`${viewport}`].XS};
              margin-bottom: ${SPACING[`${viewport}`].XS};
              font-weight: 400;
            }

            &--sm {
              font-size: ${FONT_SIZES[`${viewport}`].SM};
              line-height: ${LINE_HEIGHT[`${viewport}`].SM};
              margin-bottom: ${SPACING[`${viewport}`].SM};
              font-weight: 400;
            }

            &--md {
              font-size: ${FONT_SIZES[`${viewport}`].MD};
              line-height: ${LINE_HEIGHT[`${viewport}`].MD};
              margin-bottom: ${SPACING[`${viewport}`].MD};
              font-weight: 400;
              letter-spacing: 0.1rem;
            }

            &--lg {
              font-size: ${FONT_SIZES[`${viewport}`].LG};
              line-height: ${LINE_HEIGHT[`${viewport}`].LG};
              margin-bottom: ${SPACING[`${viewport}`].LG};
              letter-spacing: 0.2rem;
            }

            &--xl {
              font-weight: 500;
              font-size: ${FONT_SIZES[`${viewport}`].XL};
              line-height: ${LINE_HEIGHT[`${viewport}`].XL};
              margin-bottom: ${SPACING[`${viewport}`].XL};
              letter-spacing: 0.3rem;
            }
          }
        }`
  )}

  &.c-heading__no-margin {
    margin-bottom: 0;
  }
`
