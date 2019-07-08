import { css } from "@emotion/core"
import { FONT_SIZES, SPACING, COLOURS } from "../../styles/settings"

export const styles = css`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  height: ${SPACING.LG};
  padding: 0 ${SPACING.MD};
  background-color: ${COLOURS.DARK};
  z-index: 1;

  .c-nav__logo {
    width: 7.5rem;
  }

  .c-nav__list-item {
    display: inline;
    margin-left: ${SPACING.MD};
  }

  .c-nav__link {
    font-size: ${FONT_SIZES.SM};
  }
`
