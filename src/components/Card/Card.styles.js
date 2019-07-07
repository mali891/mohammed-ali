import { css } from "@emotion/core"
import {
  COLOURS,
  FONT_SIZES,
  EASINGS,
  SPACING,
  BORDER_RADIUS,
  LINE_HEIGHT,
} from "../../styles/settings"

export const styles = css`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: auto;
  margin: 0 3%;
  background-color: ${COLOURS.BLACK};
  padding: ${SPACING.MD};
  transition: all ${EASINGS.QUICK};
  border-radius: ${BORDER_RADIUS.LG};
  width: 100%;
  min-height: 50rem;

  &:hover {
    &.c-card--link {
      .c-card__border-bottom {
        &:after {
          width: 100%;
        }
      }
    }
  }

  &.c-card--condensed {
    min-height: 40rem;

    .c-card {
      &__heading {
        margin-bottom: ${SPACING.MD};
      }
    }
  }

  .c-card {
    &__heading {
      position: relative;
      margin-bottom: ${SPACING.XL};
      word-wrap: break-word;
      hyphens: manual;

      &:after {
        content: "";
        width: 100%;
        position: absolute;
        left: 0;
        bottom: -${SPACING.MD};
        right: 0;
        height: 0.2rem;
        width: 10rem;
        transition: all ${EASINGS.DEFAULT};
        background-image: linear-gradient(
          to right,
          ${COLOURS.GRADIENT_THREE.FIRST},
          ${COLOURS.GRADIENT_THREE.SECOND}
        );
        border-radius: ${BORDER_RADIUS.LG};
      }
    }

    &__subtitle {
      font-size: ${FONT_SIZES.XS};
      line-height: ${LINE_HEIGHT.XS};
    }

    &__content {
      width: 100%;
      display: flex;
      justify-content: space-between;
      font-size: ${FONT_SIZES.XS};
    }

    &__border-bottom {
      width: 100%;
      position: absolute;
      left: 0;
      bottom: 0;
      right: 0;
      height: ${SPACING.XS};
      background-color: ${COLOURS.LIGHT};
      border-radius: 0 0 ${BORDER_RADIUS.LG} ${BORDER_RADIUS.LG};

      &:after {
        content: "";
        width: 0;
        position: absolute;
        left: 0;
        bottom: 0;
        right: 0;
        height: 0.2rem;
        width: 0;
        height: ${SPACING.XS};
        transition: all ${EASINGS.DEFAULT};
        background-image: linear-gradient(
          to right,
          ${COLOURS.GRADIENT_THREE.FIRST},
          ${COLOURS.GRADIENT_THREE.SECOND}
        );
        border-radius: 0 0 ${BORDER_RADIUS.LG} ${BORDER_RADIUS.LG};
      }
    }
  }
`
