import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"

import { styles } from "./ContentGroup.style"

const ContentGroup = ({ children, className, ...other }) => {
  const dynamicClassNames = classNames([className], {
    "c__content-group": true,
  })

  return (
    <div css={styles} className={dynamicClassNames} {...other}>
      {children}
    </div>
  )
}

ContentGroup.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  className: PropTypes.string,
}

export default ContentGroup
