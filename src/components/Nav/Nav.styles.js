import { css } from '@emotion/core'
import { FONT_SIZES, SPACING, COLOURS, MEDIA_QUERIES, EASINGS } from '../../styles/settings'

export const styles = css`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  height: ${SPACING.MOBILE.XL};
  padding: 0 ${SPACING.MOBILE.SM};
  z-index: 1;

  .c-nav__logo {
    width: 5rem;
  }

  .c-nav__list-item {
    display: block;
    margin-bottom: ${SPACING.MD};
    background-color: none;
  }

  .c-nav__link {
    font-size: ${FONT_SIZES.SM};
  }

  .c-nav__menu {
    position: absolute;
    height: 100vh;
    width: 80%;
    max-width: 40rem;
    top: 0;
    right: 0;
    bottom: 0;
    padding: ${SPACING.MOBILE.XL} ${SPACING.MOBILE.SM} ${SPACING.MOBILE.SM};
    background-color: var(--colour-tertiary);
    transform: translateX(100%);
    transition: ${EASINGS.SLOW};

    &.c-nav__menu--is-expanded {
      transform: translateX(0);
    }
  }

  @media (min-width: ${MEDIA_QUERIES.NOTEBOOK}) {
    height: ${SPACING.LG};
    padding: 0 ${SPACING.MD};

    .c-nav__logo {
      width: 7.5rem;
    }

    .c-nav__menu {
      position: relative;
      height: unset;
      width: unset;
      max-width: unset;
      top: unset;
      right: unset;
      bottom: unset;
      background-color: transparent;
      transform: translateX(0);
      padding: 0;
    }

    .c-nav__list-item {
      display: inline;
      margin-left: ${SPACING.MD};
      background-color: none;
    }

    .c-nav__link {
      font-size: ${FONT_SIZES.SM};
    }
  }
`
