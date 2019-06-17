import { css } from "@emotion/core"
import {
  COLOURS,
  FONT_SIZES,
  EASINGS,
  SPACING,
  BORDER_RADIUS,
} from "../../styles/settings"

export const styles = css`
  display: flex;
  width: auto;
  margin: 0 1%;

  .c-blog-tile__container {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    background-color: ${COLOURS.BLACK};
    padding: ${SPACING.MD};
    cursor: pointer;
    transition: all ${EASINGS.QUICK};
    border-radius: ${BORDER_RADIUS.LG};
    max-width: 40rem;
    min-height: 50rem;

    &:hover {
      .c-blog-tile {
        &__heading,
        &__border-bottom {
          &:after {
            width: 100%;
          }
        }
        
        &__heading {
          &:after {
            width: 15rem;
          }
        }
      }
    }

    .c-blog-tile {
      /* &__divider {
        position: relative;
        display: block;
        width: ${SPACING.LG};
        height: 0.2rem;
        background-color: ${COLOURS.LIGHT};
        margin: ${SPACING.MD} 0 ${SPACING.XL};

        &:after {
          content: "";
          width: 100%;
          position: absolute;
          left: 0;
          bottom: 0;
          right: 0;
          height: 0.2rem;
          width: 0;
          transition: all ${EASINGS.DEFAULT};
          background-image: linear-gradient(
            to right,
            ${COLOURS.GRADIENT_THREE.FIRST},
            ${COLOURS.GRADIENT_THREE.SECOND}
          );
          border-radius: ${BORDER_RADIUS.LG};
        }
      } */

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

      &__info {
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
  }
`
