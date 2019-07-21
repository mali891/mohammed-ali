import { css } from '@emotion/core'

import { MEDIA_QUERIES, SPACING } from '../../styles/settings'

export const styles = css`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  @media (min-width: ${MEDIA_QUERIES.DESKTOP}) {
    &.c-card-container--margin-bottom {
      margin-bottom: ${SPACING.DESKTOP.SM};
    }
  }
`
