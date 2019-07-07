import React, { Fragment } from "react"
import { Global, css } from "@emotion/core"
import { Resets, Utilities } from "./"
import "./fonts/fonts.css"
import { FONT_SIZES, LINE_HEIGHT, SPACING } from "./settings"

const GlobalStyles = () => (
  <Fragment>
    <Resets />
    <Utilities />
    <Global
      styles={css`
        /*** TYPE ***/

        p {
          font-size: ${FONT_SIZES.SM};
          line-height: ${LINE_HEIGHT.SM};
        }

        .c-main {
          display: block;
          margin-top: ${SPACING.LG};
        }
      `}
    />
  </Fragment>
)

export default GlobalStyles
