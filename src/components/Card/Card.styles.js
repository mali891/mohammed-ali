import { css } from '@emotion/react'
import { COLOURS, FONT_SIZES, EASINGS, SPACING, BORDER_RADIUS, MEDIA_QUERIES } from '../../styles/settings'

export const styles = css`
  width: 100%;
  min-height: 30rem;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 0 ${SPACING.MOBILE.SM} 0;
  border-radius: ${BORDER_RADIUS.LG};
  padding: ${SPACING.MOBILE.MD};
  transition: all ${EASINGS.DEFAULT};
  border: 0.2rem solid transparent;

  &:hover {
    border-color: var(--colour-secondary);

    &.c-card--link {
      .c-card__border-bottom {
        &:after {
          width: 100%;
        }
      }
    }
  }

  .c-card--fullheight {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &.c-card--fullwidth {
    width: 100%;
    max-width: unset;
    min-height: unset;
    margin: 0 0 5rem 0;

    .c-card {
      &__heading {
        margin-bottom: ${SPACING.MOBILE.MD};
      }
    }
  }

  .c-card__heading {
    position: relative;
    word-wrap: break-word;
    hyphens: manual;

    &:after {
      content: '';
      width: 100%;
      position: absolute;
      left: 0;
      bottom: -${SPACING.MD};
      right: 0;
      height: 0.2rem;
      width: 10rem;
      transition: all ${EASINGS.DEFAULT};
      background-image: linear-gradient(to right, ${COLOURS.GRADIENT_THREE.FIRST}, ${COLOURS.GRADIENT_THREE.SECOND});
      border-radius: ${BORDER_RADIUS.LG};
    }
  }

  .c-card__subtitle {
    font-size: ${FONT_SIZES.MOBILE.XS};
  }

  .c-card__content {
    width: 100%;
    display: flex;
    justify-content: space-between;
    font-size: ${FONT_SIZES.MOBILE.XS};
    margin-top: ${SPACING.MOBILE.XL};

    p {
      font-size: ${FONT_SIZES.MOBILE.SM};
    }
  }

  @media (min-width: ${MEDIA_QUERIES.TABLET}) {
    width: 48%;
    padding: ${SPACING.TABLET.MD};

    &:nth-of-type(odd) {
      &:not(.c-card--fullwidth) {
        margin-right: 1%;
      }
    }

    &:nth-of-type(even) {
      &:not(.c-card--fullwidth) {
        margin-left: 1%;
      }
    }
  }

  @media (min-width: ${MEDIA_QUERIES.NOTEBOOK}) {
    padding: ${SPACING.TABLET.MD};
  }

  @media (min-width: ${MEDIA_QUERIES.DESKTOP}) {
    width: 40rem;
    max-width: 20%;
    min-height: 50rem;
    margin: 0 1%;
    padding: ${SPACING.DESKTOP.MD};

    &.c-card--condensed {
      min-height: 40rem;

      .c-card {
        &__heading {
          margin-bottom: ${SPACING.DESKTOP.MD};
        }
      }
    }

    .c-card__heading {
      margin-bottom: ${SPACING.DESKTOP.XL};

      &:after {
        bottom: -${SPACING.DESKTOP.MD};
        width: 10rem;
      }
    }

    .c-card__subtitle {
      font-size: 2.2rem;
    }

    .c-card__content {
      font-size: ${FONT_SIZES.DESKTOP.XS};
    }
  }
`
