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

  svg {
    width: 75px;
  }

  ul {
    li {
      display: inline;
      font-size: ${FONT_SIZES.SM};
      margin-left: ${SPACING.MD};
    }
  }
`
