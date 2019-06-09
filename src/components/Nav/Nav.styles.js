import { css } from "@emotion/core"
import { fontSizes, spacing, colours } from "../../styles"

export const styles = css`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  height: ${spacing.l};
  padding: 0 ${spacing.m};
  background-color: ${colours.dark};
  z-index: 1;

  ul {
    li {
      display: inline;
      font-size: ${fontSizes.body};
      margin-left: ${spacing.m};
    }
  }
`
