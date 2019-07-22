import { css } from '@emotion/core'
import { FONT_SIZES, SPACING, MEDIA_QUERIES, VIEWPORT_SIZES } from '../../styles/settings'

export const styles = css`
  height: 100vh;
  width: 100vw;

  .c-header__container {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .c-header__more-link {
    position: absolute;
    transform: translate(-50%, -50%);
    left: 50%;
    bottom: 2rem;
  }

  ${VIEWPORT_SIZES.map(
    viewport =>
      `@media (min-width: ${MEDIA_QUERIES[`${viewport}`]}) {
        margin-bottom: ${SPACING[`${viewport}`].XL};

        .c-header__more-link {
          font-size: ${FONT_SIZES[`${viewport}`].XS};
        }
      }`
  )}

  @media (min-width: ${MEDIA_QUERIES.MOBILE}) {
    .c-heading {
      width: 80%;
      text-align: center;
    }
  }

  @media (min-width: ${MEDIA_QUERIES.TABLET}) {
    .c-heading {
      width: 90%;
    }
  }
  
  @media (min-width: ${MEDIA_QUERIES.NOTEBOOK}) {
    .c-heading {
      width: unset;
    }
  }
  
  @media (min-width: ${MEDIA_QUERIES.DESKTOP}) {
    .c-heading {
      text-align: left;
    }
  }
`
