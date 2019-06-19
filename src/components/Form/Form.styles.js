import { css } from "@emotion/core"
import {
  SPACING,
  COLOURS,
  FONT_SIZES,
  LINE_HEIGHT,
} from "../../styles/settings"

export const styles = css`
  width: 100%;
  display: block;
  font-size: ${FONT_SIZES.SM};
  font-family: "Apercu Regular", "system-ui", sans-serif;

  .c-form-input,
  .c-form-input__input,
  .c-form-input__textarea {
    display: block;
    width: 100%;
    margin-bottom: ${SPACING.SM};
  }

  .c-form-input__input,
  .c-form-input__textarea {
    padding: 1.5rem;
    border: none;
    background-color: ${COLOURS.BLACK};
    color: ${COLOURS.LIGHT};
    font-size: ${FONT_SIZES.SM};
    line-height: ${LINE_HEIGHT.SM};

    &:focus {
      outline: ${COLOURS.GRADIENT_THREE.FIRST} auto 1px;
      border: 1px solid ${COLOURS.GRADIENT_THREE.FIRST};
    }
  }

  .c-form-input {
    display: block;
    margin-bottom: ${SPACING.MD};
  }

  .c-form-input__label {
    display: block;
    margin-bottom: ${SPACING.XS};
  }

  .c-form-input__textarea {
    height: 30rem;
  }
`
