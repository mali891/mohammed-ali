import { css } from '@emotion/core'
import { SPACING, MEDIA_QUERIES, VIEWPORT_SIZES } from '../../styles/settings'

export const styles = css`
  display: block;
  width: 100%;
  margin-bottom: ${SPACING.XL};
  padding: 0 1rem;

  ${VIEWPORT_SIZES.map(
    viewport =>
      `@media (min-width: ${MEDIA_QUERIES[`${viewport}`]}) {
        margin-bottom: ${SPACING[`${viewport}`].XL};
      }`
  )}
`
