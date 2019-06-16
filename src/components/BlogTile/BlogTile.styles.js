import { css } from "@emotion/core"
import { COLOURS, FONT_SIZES, EASINGS, SPACING } from "../../styles"

export const styles = css`
  display: flex;
  width: 24%;

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

    &:hover {
      .c-blog-tile {
        &__divider,
        &__border-bottom {
          &:after {
            width: 100%;
          }
        }
      }
    }

    .c-blog-tile {
      &__divider {
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
        }
      }

      &__info {
        width: 100%;
        display: flex;
        justify-content: space-between;
        font-size: ${FONT_SIZES.XS};
        margin-bottom: ${SPACING.XS};
      }

      &__border-bottom {
        width: 100%;
        position: absolute;
        left: 0;
        bottom: 0;
        right: 0;
        height: ${SPACING.XS};
        background-color: ${COLOURS.LIGHT};

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
        }
      }
    }
  }
`
