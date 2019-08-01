import React, { Fragment } from 'react'
import { Global, css } from '@emotion/core'
import { Resets, Utilities, Theme } from './'
import './fonts/fonts.css'
import { FONT_SIZES, LINE_HEIGHT, SPACING, MEDIA_QUERIES, VIEWPORT_SIZES } from './settings'

const GlobalStyles = () => (
  <Fragment>
    <Resets />
    <Utilities />
    <Theme />
    <Global
      styles={css`
        ${VIEWPORT_SIZES.map(
          viewport =>
            `@media (min-width: ${MEDIA_QUERIES[`${viewport}`]}) {
              p {
                font-size: ${FONT_SIZES[`${viewport}`].SM};
                line-height: ${LINE_HEIGHT[`${viewport}`].SM};
              }

              .c-main {
                margin-top: ${SPACING[`${viewport}`].LG};
              }
            }`
        )}
      `}
    />
  </Fragment>
)

export default GlobalStyles
