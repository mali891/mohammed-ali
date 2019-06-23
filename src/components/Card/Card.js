import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"

import { HeadingBlock } from "../"
import { styles } from "./Card.styles"

const Card = ({ title, children, className, ...other }) => {
  const dynamicClassNames = classNames([className], {
    "c-card": true,
  })

  return (
    <div css={styles} className={dynamicClassNames}>
      <div className="c-card__heading">
        <HeadingBlock type="h3" size="sm" noMargin>
          {title}
        </HeadingBlock>
      </div>

      <span className="c-card__divider" />

      <div className="c-card__content">{children}</div>

      <span className="c-card__border-bottom" />
    </div>
  )
}

Card.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  className: PropTypes.string,
}

export default Card
