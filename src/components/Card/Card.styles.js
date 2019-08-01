import { css } from '@emotion/core'
import { COLOURS, FONT_SIZES, EASINGS, SPACING, BORDER_RADIUS, LINE_HEIGHT, MEDIA_QUERIES } from '../../styles/settings'

export const styles = css`
  width: 100%;
  min-height: 30rem;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 0 ${SPACING.MOBILE.SM} 0;
  transition: all ${EASINGS.QUICK};
  border-radius: ${BORDER_RADIUS.LG} ${BORDER_RADIUS.LG} 0 0;
  padding: ${SPACING.MOBILE.MD};

  &:hover {
    &.c-card--link {
      .c-card__border-bottom {
        &:after {
          width: 100%;
        }
      }
    }
  }

  aside {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &.c-card--condensed {
    min-height: 20rem;

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
    line-height: ${LINE_HEIGHT.MOBILE.XS};
  }

  .c-card__content {
    width: 100%;
    display: flex;
    justify-content: space-between;
    font-size: ${FONT_SIZES.MOBILE.XS};
    line-height: ${LINE_HEIGHT.MOBILE.XS};
    margin-top: ${SPACING.MOBILE.XL};

    p {
      font-size: ${FONT_SIZES.MOBILE.SM};
      line-height: ${LINE_HEIGHT.MOBILE.SM};
    }
  }

  .c-card__border-bottom {
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    height: 0.5rem;
    background-color: var(--colour-secondary);
    border-radius: 0 0 ${BORDER_RADIUS.LG} ${BORDER_RADIUS.LG};

    &:after {
      content: '';
      width: 0;
      position: absolute;
      left: 0;
      bottom: 0;
      right: 0;
      height: 0.2rem;
      width: 0;
      height: 0.5rem;
      transition: all ${EASINGS.DEFAULT};
      background-image: linear-gradient(to right, ${COLOURS.GRADIENT_THREE.FIRST}, ${COLOURS.GRADIENT_THREE.SECOND});
      border-radius: 0 0 ${BORDER_RADIUS.LG} ${BORDER_RADIUS.LG};
    }
  }

  @media (min-width: ${MEDIA_QUERIES.TABLET}) {
    width: 48%;
    padding: ${SPACING.TABLET.MD};

    &:nth-of-type(odd) {
      margin-right: 1%;
    }

    &:nth-of-type(even) {
      margin-left: 1%;
    }
  }

  @media (min-width: ${MEDIA_QUERIES.NOTEBOOK}) {
    padding: ${SPACING.TABLET.MD};

    .c-card__border-bottom {
      height: ${SPACING.MOBILE.XS};

      &:after {
        height: ${SPACING.MOBILE.XS};
      }
    }
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
      font-size: ${FONT_SIZES.DESKTOP.XS};
      line-height: ${LINE_HEIGHT.DESKTOP.XS};
    }

    .c-card__content {
      font-size: ${FONT_SIZES.DESKTOP.XS};
    }

    .c-card__border-bottom {
      height: ${SPACING.DESKTOP.XS};

      &:after {
        height: ${SPACING.DESKTOP.XS};
      }
    }
  }
`
