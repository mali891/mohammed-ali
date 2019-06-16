import { css } from "@emotion/core"
import { FONT_SIZES, LINE_HEIGHT, SPACING } from "../../styles"

export const styles = css`
  font-family: "Apercu Medium", "Apercu Regular", "system-ui", "sans-serif";

  &.c-heading {
    &--xs {
      font-size: ${FONT_SIZES.XS};
      line-height: ${LINE_HEIGHT.XS};
      margin-bottom: ${SPACING.XS};
    }

    &--sm {
      font-size: ${FONT_SIZES.SM};
      line-height: ${LINE_HEIGHT.SM};
      margin-bottom: ${SPACING.SM};
    }

    &--md {
      font-size: ${FONT_SIZES.MD};
      line-height: ${LINE_HEIGHT.MD};
      margin-bottom: ${SPACING.MD};
      letter-spacing: 0.1rem;
    }

    &--lg {
      font-size: ${FONT_SIZES.LG};
      line-height: ${LINE_HEIGHT.LG};
      margin-bottom: ${SPACING.LG};
      letter-spacing: 0.2rem;
    }

    &--xl {
      font-weight: 500;
      font-size: ${FONT_SIZES.XL};
      line-height: ${LINE_HEIGHT.XL};
      margin-bottom: ${SPACING.XL};
      letter-spacing: 0.3rem;
    }
  }
`
