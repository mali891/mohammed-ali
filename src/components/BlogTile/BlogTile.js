import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import { Link } from "gatsby"

import { HeadingBlock } from "../"
import { styles } from "./BlogTile.styles"

const BlogTile = ({ title, date, length, className, path, ...other }) => {
  const dynamicClassNames = classNames([className], {
    "c-blog-tile": true,
  })

  return (
    <Link
      css={styles}
      className={dynamicClassNames}
      key={path}
      to={path}
      className={dynamicClassNames}
      {...other}
    >
      <div className="c-blog-tile__container">
        <div className="c-blog-tile__heading">
          <HeadingBlock type="h3" size="md" noMargin>
            {title}
          </HeadingBlock>
        </div>

        <span className="c-blog-tile__divider" />

        <div className="c-blog-tile__info">
          <span>{date}</span>
          <span>{length} read</span>
        </div>

        <span className="c-blog-tile__border-bottom" />
      </div>
    </Link>
  )
}

BlogTile.propTypes = {
  className: PropTypes.string,
  date: PropTypes.string.isRequired,
  length: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default BlogTile
