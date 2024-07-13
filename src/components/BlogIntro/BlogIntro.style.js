import { css } from '@emotion/react'
import { SPACING, MEDIA_QUERIES, VIEWPORT_SIZES, FONT_SIZES, COLOURS } from '../../styles/settings'

export const styles = css`
  position: relative;

  &:after {
    content: '';
    height: 0.2rem;
    width: 100%;
    background-color: ${COLOURS.LIGHT};
    position: absolute;
    transform: translate(-50%, -50%);
    left: 50%;

    ${VIEWPORT_SIZES.map(
      viewport =>
        `@media (min-width: ${MEDIA_QUERIES[`${viewport}`]}) {
          bottom: calc(${SPACING[`${viewport}`].XL} / -2);
        }`
    )}
  }

  .c-blog-intro {
    &__metadata {
      width: 100%;
      display: flex;
      flex-direction: column;

      ${VIEWPORT_SIZES.map(
        viewport =>
          `@media (min-width: ${MEDIA_QUERIES[`${viewport}`]}) {
            margin-bottom: calc(${SPACING[`${viewport}`].XL} / 2);
          }`
      )}

      &__content {
        display: block;
        width: 100%;
        text-align: center;
        font-size: ${FONT_SIZES.XS};

        &:first-of-type {
          margin-bottom: 2rem;
        }
      }
    }
  }

  @media (min-width: ${MEDIA_QUERIES.TABLET}) {
    .c-blog-intro {
      &__metadata {
        flex-direction: row;
        justify-content: space-between;

        &__content {
          display: unset;
          width: unset;
        }
      }
    }
  }
`
