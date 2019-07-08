import { css } from "@emotion/core"
import { FONT_SIZES, SPACING } from "../../styles/settings"

export const styles = css`
  height: 100vh;
  width: 100vw;
  margin-bottom: ${SPACING.XL};

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
    font-size: ${FONT_SIZES.XS};
  }
`
