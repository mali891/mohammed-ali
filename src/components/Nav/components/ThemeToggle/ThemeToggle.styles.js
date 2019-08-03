import { css } from '@emotion/core'
import {
  COLOURS,
  FONT_SIZES,
  EASINGS,
  SPACING,
  BORDER_RADIUS,
  LINE_HEIGHT,
  MEDIA_QUERIES
} from '../../../../styles/settings'

export const styles = css`
  .c-theme-toggle__input {
    height: 0;
    width: 0;
    visibility: hidden;
  }

  .c-theme-toggle__label {
    cursor: pointer;
    text-indent: -9999px;
    width: 100px;
    height: 50px;
    background: grey;
    display: block;
    border-radius: 100px;
    position: relative;

    &:after {
      content: '';
      position: absolute;
      top: 2.5px;
      left: 2.5px;
      width: 45px;
      height: 45px;
      background: #fff;
      border-radius: 90px;
      transition: 0.3s;
    }

    &:active {
      &:after {
        width: 65px;
      }
    }
  }

  .c-theme-toggle__input:checked + .c-theme-toggle__label {
    background: ${COLOURS.GRADIENT_THREE.FIRST};
  }

  .c-theme-toggle__input:checked + .c-theme-toggle__label:after {
    left: calc(100% - 2.5px);
    transform: translateX(-100%);
  }
`
