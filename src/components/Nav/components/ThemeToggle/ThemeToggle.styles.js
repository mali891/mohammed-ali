import { css } from '@emotion/react'
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
    position: relative;
    display: block;
    width: 7.5rem;
    height: 3.75rem;
    background: grey;
    border-radius: 10rem;

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
    background: ${COLOURS.DARK};
    border-radius: 9rem;
    transition: 0.3s;
  }

  .c-theme-toggle__icon {
    width: 2.5rem;
    height: 2.5rem;
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
  }

  &.c-theme-toggle--light {
    .c-theme-toggle__toggle {
      background: ${COLOURS.LIGHT};
    }

    .c-theme-toggle__label {
      background: ${COLOURS.GRADIENT_THREE.FIRST};
    }

    .c-theme-toggle__toggle {
      left: calc(100% - 0.1875rem);
      transform: translateX(-100%);
    }
  }
`
