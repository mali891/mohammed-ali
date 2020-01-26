import { css } from '@emotion/core'
import { FONT_FAMILY } from '../../styles/settings'

export const styles = css`
  font-family: ${FONT_FAMILY.MEDIUM};
  display: block;

  &.c-heading--no-margin {
    margin-bottom: 0;
  }

  &.c-heading--align-center {
    text-align: center;
  }
`
