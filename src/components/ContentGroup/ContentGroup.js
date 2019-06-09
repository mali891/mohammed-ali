import React from "react"
import PropTypes from "prop-types"

import { styles } from "./ContentGroup.style"

const ContentGroup = ({ children }) => (
  <div css={styles} className="c__content-group">
    {children}
  </div>
)

ContentGroup.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
}

export default ContentGroup
