import React from 'react'
import { Global, css } from '@emotion/core'
import { COLOURS, FONT_SIZES, LINE_HEIGHT } from '../settings'

const Utilities = () => (
	<Global
		styles={css`
			/** TYPE **/

			.u-text {
				&--centre {
					text-align: center;
				}

				&--xs {
					font-size: ${FONT_SIZES.XS};
					line-height: ${LINE_HEIGHT.XS};
				}

				&--sm {
					font-size: ${FONT_SIZES.SM};
					line-height: ${LINE_HEIGHT.SM};
				}

				&--md {
					font-size: ${FONT_SIZES.MD};
					line-height: ${LINE_HEIGHT.MD};
				}

				&--lg {
					font-size: ${FONT_SIZES.LG};
					line-height: ${LINE_HEIGHT.LG};
				}
			}

			/** FILL **/

			.u-fill {
				&--white {
					fill: ${COLOURS.LIGHT};
				}
			}

			/*** ANIMATIONS ***/

			@keyframes fadeIn {
				0% {
					opacity: 0;
				}
				100% {
					opacity: 1;
				}
			}

			.u-anim {
				&--fade-in {
					opacity: 0;
					animation: fadeIn 400ms forwards ease-in-out 0ms;
				}
			}
		`}
	/>
)

export default Utilities
