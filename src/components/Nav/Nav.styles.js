import { css } from '@emotion/core'
import { FONT_SIZES, SPACING, MEDIA_QUERIES } from '../../styles/settings'

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

  .c-nav__overlay {
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.6);
    z-index: 1;
  }

  .c-nav__logo {
    width: 5rem;
  }

  .c-nav__list {
    margin-bottom: ${SPACING.MOBILE.XL};
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
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    position: absolute;
    height: 100vh;
    width: 80%;
    max-width: 40rem;
    top: 0;
    right: 0;
    bottom: 0;
    padding: ${SPACING.MOBILE.XL} ${SPACING.MOBILE.SM} ${SPACING.MOBILE.XL};
    background-color: var(--colour-tertiary);
    transform: translateX(100%);
    z-index: 2;

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
      flex-direction: row;
      align-items: center;
      border-left: none;
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

    .c-nav__list {
      margin-right: 5rem;
      margin-bottom: unset;
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
