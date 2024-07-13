import { css } from '@emotion/react'
import { COLOURS, EASINGS } from '../../styles/settings'

export const styles = css`
  transition: ${EASINGS.DEFAULT};
  background-color: var(--colour-primary);
  color: var(--colour-secondary);

  &.theme--light {
    --colour-primary: ${COLOURS.LIGHT};
    --colour-secondary: ${COLOURS.DARK};
    --colour-tertiary: ${COLOURS.GREY};
  }
`
