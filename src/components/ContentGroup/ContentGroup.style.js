import { css } from '@emotion/core'
import { SPACING, MEDIA_QUERIES } from '../../styles/settings'

export const styles = css`
  display: block;
  width: 100%;
  margin-bottom: ${SPACING.XL};
  padding: 0 1rem;

  @media (min-width: ${MEDIA_QUERIES.DESKTOP}) {
    padding: 0;
  }
`
