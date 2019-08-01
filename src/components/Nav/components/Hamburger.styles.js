import { css } from '@emotion/core'
import { COLOURS, MEDIA_QUERIES, EASINGS } from '../../../styles/settings'

export const styles = css`
  /*!
 * Hamburgers
 * @description Tasty CSS-animated hamburgers
 * @author Jonathan Suh @jonsuh
 * @site https://jonsuh.com/hamburgers
 * @link https://github.com/jonsuh/hamburgers
 */

  display: inline-block;
  cursor: pointer;
  transition: ${EASINGS.DEFAULT};
  font: inherit;
  color: inherit;
  text-transform: none;
  background-color: transparent;
  border: 0;
  margin: 0;
  overflow: visible;

  .c-hamburger__box {
    width: 40px;
    height: 24px;
    display: inline-block;
    position: relative;
  }

  .c-hamburger__inner {
    display: block;
    top: 50%;
    margin-top: -2px;

    &:before {
      top: -10px;
    }

    &:after {
      bottom: -10px;
    }

    &:before,
    &:after {
      content: '';
      display: block;
    }
  }

  .c-hamburger__inner,
  .c-hamburger__inner::before,
  .c-hamburger__inner::after {
    width: 40px;
    height: 4px;
    background-color: var(--colour-secondary);
    border-radius: 4px;
    position: absolute;
    transition-property: transform;
    transition-duration: 0.15s;
    transition-timing-function: ease;
  }

  /*
   * Collapse
   */
  .c-hamburger__inner {
    top: auto;
    bottom: 0;
    transition-duration: 0.13s;
    transition-delay: 0.13s;
    transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);

    &:before {
      transition: top 0.12s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1),
        transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }

    &:after {
      top: -20px;
      transition: top 0.2s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), opacity 0.1s linear;
    }
  }

  &.c-hamburger--is-active {
    .c-hamburger__inner {
      transform: translate3d(0, -10px, 0) rotate(-45deg);
      transition-delay: 0.22s;
      transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);

      &:before {
        top: 0;
        transform: rotate(-90deg);
        transition: top 0.1s 0.16s cubic-bezier(0.33333, 0, 0.66667, 0.33333),
          transform 0.13s 0.25s cubic-bezier(0.215, 0.61, 0.355, 1);
      }

      &:after {
        top: 0;
        opacity: 0;
        transition: top 0.2s cubic-bezier(0.33333, 0, 0.66667, 0.33333), opacity 0.1s 0.22s linear;
      }
    }
  }

  @media (min-width: ${MEDIA_QUERIES.NOTEBOOK}) {
    display: none;
  }
`
