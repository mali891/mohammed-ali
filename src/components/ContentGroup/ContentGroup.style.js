import { css } from '@emotion/core'
import { SPACING, MEDIA_QUERIES, VIEWPORT_SIZES } from '../../styles/settings'

export const styles = css`
  display: block;
  width: 100%;
  margin-bottom: ${SPACING.XL};

  ${VIEWPORT_SIZES.map(
    viewport =>
      `@media (min-width: ${MEDIA_QUERIES[`${viewport}`]}) {
        margin-bottom: ${SPACING[`${viewport}`].XL};
      }`
  )}

  @media (min-width: ${MEDIA_QUERIES.MOBILE}) {
    padding: 0 ${SPACING.MOBILE.SM};
  }

  @media (min-width: ${MEDIA_QUERIES.DESKTOP}) {
    padding: 0;
  }
`
