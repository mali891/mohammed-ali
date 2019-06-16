import { css } from "@emotion/core"
import { FONT_SIZES, SPACING } from "../../styles"

export const styles = css`
  height: 100vh;
  width: 100vw;
  margin-bottom: ${SPACING.XL};

  .c-container {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .c-heading {
    margin-bottom: 0;
  }

  span {
    position: absolute;
    transform: translate(-50%, -50%);
    left: 50%;
    bottom: 2rem;
    font-size: ${FONT_SIZES.XS};
  }
`
