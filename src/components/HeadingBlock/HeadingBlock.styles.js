import { css } from "@emotion/core"
import { FONT_SIZES, LINE_HEIGHT, SPACING } from "../../styles/settings"

export const styles = css`
  font-family: "Apercu Medium", "Apercu Regular", "system-ui", "sans-serif";

  &.c-heading {
    &--xs {
      font-size: ${FONT_SIZES.XS};
      line-height: ${LINE_HEIGHT.XS};
      margin-bottom: ${SPACING.XS};
      font-weight: 400;
    }

    &--sm {
      font-size: ${FONT_SIZES.SM};
      line-height: ${LINE_HEIGHT.SM};
      margin-bottom: ${SPACING.SM};
      font-weight: 400;
    }

    &--md {
      font-size: ${FONT_SIZES.MD};
      line-height: ${LINE_HEIGHT.MD};
      margin-bottom: ${SPACING.MD};
      font-weight: 400;
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

    &__no-margin {
      margin-bottom: 0;
    }
  }
`
