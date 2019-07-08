import { css } from '@emotion/core'
import { COLOURS, FONT_FAMILY, EASINGS, BORDER_RADIUS } from '../../styles/settings'

export const styles = css`
	font-family: ${FONT_FAMILY.MEDIUM};
	color: ${COLOURS.LIGHT};
	background: none;
	border: none;
	text-decoration: none;
	position: relative;
	cursor: pointer;

	&:not(.c-link--no-hover) {
		&:hover {
			&:after {
				width: 100%;
			}
		}

		&:after {
			content: '';
			width: 0;
			position: absolute;
			left: 0;
			bottom: -1rem;
			right: 0;
			height: 0.4rem;
			width: 0;
			transition: all ${EASINGS.QUICK};
			background-color: ${COLOURS.LIGHT};
			border-radius: ${BORDER_RADIUS.LG};
		}
	}

	&.c-link--active {
		&:not(.c-link--no-hover) {
			&:after {
				width: 100%;
			}
		}
	}
`
