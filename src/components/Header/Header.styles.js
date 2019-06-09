import { css } from "@emotion/core"
import { fontSizes, spacing } from "../../styles"

export const styles = css`
  height: 100vh;
  width: 100vw;
  margin-bottom: ${spacing.xl};

  .c__container {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  h1 {
    font-size: ${fontSizes.headingTwo};
    font-weight: 500;
  }

  span {
    position: absolute;
    transform: translate(-50%, -50%);
    left: 50%;
    bottom: 2rem;
    font-size: ${fontSizes.small};
  }
`
