import { css } from '@emotion/core'
import { FONT_SIZES, SPACING, FONT_FAMILY, MEDIA_QUERIES, VIEWPORT_SIZES } from '../../styles/settings'

export const styles = css`
  font-family: ${FONT_FAMILY.MEDIUM};
  display: block;

  ${VIEWPORT_SIZES.map(
    viewport =>
      `@media (min-width: ${MEDIA_QUERIES[`${viewport}`]}) {
          &.c-heading {
            &--xs {
              font-size: ${FONT_SIZES[`${viewport}`].XS};
              margin-bottom: ${SPACING[`${viewport}`].XS};
              font-weight: 400;
            }

            &--sm {
              font-size: ${FONT_SIZES[`${viewport}`].SM};
              margin-bottom: ${SPACING[`${viewport}`].SM};
              font-weight: 400;
            }

            &--md {
              font-size: ${FONT_SIZES[`${viewport}`].MD};
              margin-bottom: ${SPACING[`${viewport}`].MD};
              font-weight: 400;
              letter-spacing: 0.1rem;
            }

            &--lg {
              font-size: ${FONT_SIZES[`${viewport}`].LG};
              margin-bottom: ${SPACING[`${viewport}`].LG};
              letter-spacing: 0.2rem;
            }

            &--xl {
              font-weight: 500;
              font-size: ${FONT_SIZES[`${viewport}`].XL};
              margin-bottom: ${SPACING[`${viewport}`].XL};
              letter-spacing: 0.3rem;
            }
          }
        }`
  )}

  &.c-heading--no-margin {
    margin-bottom: 0;
  }

  &.c-heading--align-center {
    text-align: center;
  }
`
