import { css } from "@emotion/core"
import { FONT_SIZES, SPACING, COLOURS } from "../../styles/settings"

export const styles = css`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${SPACING.LG} ${SPACING.LG} 0 ${SPACING.LG};
  border-top: ${SPACING.XS} solid ${COLOURS.BLACK};

  svg {
    width: ${SPACING.LG};
  }

  .c-footer {
    &__social {
      margin-top: ${SPACING.LG};

      &-icon {
        width: 7.5rem;
        height: 7.5rem;
        border-radius: 50%;
        border: 2px solid white;
        display: inline-block;
        margin: 0 ${SPACING.SM};

        svg {
          width: 100%;
        }
      }
    }

    &__blurb {
      width: 100vw;
      display: flex;
      justify-content: center;
      padding: ${SPACING.XS};
      margin-top: ${SPACING.LG};
      background-color: ${COLOURS.BLACK};
      text-align: center;

      p {
        font-size: ${FONT_SIZES.XS};
        text-align: center;
      }
    }
  }
`
