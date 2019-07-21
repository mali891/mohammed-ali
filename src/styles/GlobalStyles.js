import React, { Fragment } from 'react'
import { Global, css } from '@emotion/core'
import { Resets, Utilities } from './'
import './fonts/fonts.css'
import { FONT_SIZES, LINE_HEIGHT, SPACING, MEDIA_QUERIES, VIEWPORT_SIZES } from './settings'

const GlobalStyles = () => (
  <Fragment>
    <Resets />
    <Utilities />
    <Global
      styles={css`
        /*** TYPE ***/
        p {
          font-size: ${FONT_SIZES.MOBILE.SM};
          line-height: ${LINE_HEIGHT.MOBILE.SM};
        }

        .c-main {
          display: block;
          margin-top: ${SPACING.MOBILE.SM};
        }

        /*** MEDIA QUERIES ***/
        ${VIEWPORT_SIZES.map(
          viewport =>
            `@media (min-width: ${MEDIA_QUERIES[`${viewport}`]}) {
              p {
                font-size: ${FONT_SIZES[`${viewport}`].SM};
                line-height: ${LINE_HEIGHT[`${viewport}`].SM};
              }
            }`
        )}

        @media (min-width: ${MEDIA_QUERIES.TABLET}) {
          .c-main {
            margin-top: ${SPACING.TABLET.SM};
          }
        }

        @media (min-width: ${MEDIA_QUERIES.NOTEBOOK}) {
          .c-main {
            margin-top: ${SPACING.TABLET.MD};
          }
        }

        @media (min-width: ${MEDIA_QUERIES.DESKTOP}) {
          .c-main {
            margin-top: ${SPACING.DESKTOP.LG};
          }
        }
      `}
    />
  </Fragment>
)

export default GlobalStyles
