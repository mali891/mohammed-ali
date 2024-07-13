import { css } from '@emotion/react'
import { SPACING, MEDIA_QUERIES } from '../../styles/settings'

export const styles = css`
  display: block;
  text-align: center;

  .c-next-prev-links__prev {
    margin-bottom: ${SPACING.MOBILE.SM};
  }

  .c-next-prev-links__arrow {
    width: 1.5rem;

    &--prev {
      transform: rotate(180deg);
      margin-right: 1rem;
    }

    &--next {
      margin-left: 1rem;
    }
  }

  @media (min-width: ${MEDIA_QUERIES.NOTEBOOK}) {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    text-align: left;

    .c-next-prev-links__prev,
    .c-next-prev-links__next {
      max-width: 50%;
    }

    .c-next-prev-links__prev {
      margin-bottom: unset;
      padding-right: 1rem;
    }

    .c-next-prev-links__next {
      text-align: right;
      padding-left: 1rem;

      &.c-next-prev-links--only {
        margin-left: auto;
      }
    }

    .c-next-prev-links__arrow {
      width: 2rem;
    }
  }
`
