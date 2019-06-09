import React from "react"
import PropTypes from "prop-types"

import { styles } from "./Container.styles"

const Container = ({ children, ...other }) => (
  <div css={styles} className="c__container" {...other}>
    {children}
  </div>
)

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
}

export default Container
