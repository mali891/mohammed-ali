import { css } from '@emotion/react'
import { FONT_SIZES, SPACING, MEDIA_QUERIES, VIEWPORT_SIZES } from '../../styles/settings'

export const styles = css`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  .c-footer__logo {
    width: ${SPACING.MOBILE.XL};
  }

  .c-footer__social {
    display: flex;
    align-items: center;
    justify-content: center;

    &__icon {
      width: 5rem;
      height: 5rem;
      border-radius: 50%;
      border: 1px solid white;
      display: inline-block;
      margin: 0 ${SPACING.MOBILE.XS};

      svg {
        width: 100%;
      }
    }
  }

  .c-footer__blurb {
    width: 100vw;
    display: flex;
    justify-content: center;
    padding: ${SPACING.MOBILE.XS};
    margin-top: ${SPACING.MOBILE.LG};
    text-align: center;

    p {
      font-size: ${FONT_SIZES.XS};
      text-align: center;
    }
  }

  ${VIEWPORT_SIZES.map(
    viewport =>
      `@media (min-width: ${MEDIA_QUERIES[`${viewport}`]}) {
        padding: ${SPACING[`${viewport}`].LG} ${SPACING[`${viewport}`].LG} 0 ${SPACING[`${viewport}`].LG};

        .c-footer__social {
          margin-top: ${SPACING[`${viewport}`].LG};
        }

        .c-footer__blurb {
          padding: ${SPACING[`${viewport}`].XS};
          margin-top: ${SPACING[`${viewport}`].LG};

          p {
            font-size: ${FONT_SIZES[`${viewport}`].XS};
            text-align: center;
          }
        }
    }`
  )}

  @media (min-width: ${MEDIA_QUERIES.TABLET}) {
    .c-footer__logo {
      width: ${SPACING.TABLET.LG};
    }

    .c-footer__social {
      &__icon {
        margin: 0 ${SPACING.TABLET.SM};
      }
    }
  }

  @media (min-width: ${MEDIA_QUERIES.NOTEBOOK}) {
    .c-footer__logo {
      width: ${SPACING.NOTEBOOK.LG};
    }

    .c-footer__social {
      &__icon {
        margin: 0 ${SPACING.NOTEBOOK.SM};
        width: 6rem;
        height: 6rem;
      }
    }
  }

  @media (min-width: ${MEDIA_QUERIES.DESKTOP}) {
    .c-footer__logo {
      width: ${SPACING.DESKTOP.LG};
    }

    .c-footer__social {
      &__icon {
        margin: 0 ${SPACING.DESKTOP.SM};
        width: 7rem;
        height: 7rem;
      }
    }
  }
`
