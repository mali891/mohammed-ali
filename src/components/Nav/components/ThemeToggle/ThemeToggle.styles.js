import { css } from '@emotion/core'
import { COLOURS } from '../../../../styles/settings'

export const styles = css`
  display: flex;
  height: 3.75rem;

  .c-theme-toggle__input {
    height: 0;
    width: 0;
    visibility: hidden;
  }

  .c-theme-toggle__label {
    cursor: pointer;
    text-indent: -9999px;
    width: 7.5rem;
    height: 3.75rem;
    background: grey;
    display: block;
    border-radius: 10rem;
    position: relative;

    &:active {
      .c-theme-toggle__toggle {
        width: 4.5rem;
      }
    }
  }

  .c-theme-toggle__toggle {
    content: '';
    position: absolute;
    top: 0.1875rem;
    left: 0.1875rem;
    width: 3.375rem;
    height: 3.375rem;
    background: #fff;
    border-radius: 9rem;
    transition: 0.3s;
  }

  .c-theme-toggle__input:checked + .c-theme-toggle__label {
    background: ${COLOURS.GRADIENT_THREE.FIRST};
  }

  .c-theme-toggle__input:checked + .c-theme-toggle__toggle {
    left: calc(100% - 0.1875rem);
    transform: translateX(-100%);
  }
`
