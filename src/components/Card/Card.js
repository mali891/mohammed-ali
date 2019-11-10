import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { HeadingBlock, Link } from '../'
import { styles } from './Card.styles'

const Card = ({ children, className, condensed, link, path, subtitle, title, ...other }) => {
  const dynamicClassNames = classNames([className], {
    'c-card': true,
    'u-bg--tertiary': true,
    'c-card--condensed': condensed,
    'c-card--link': link,
    'c-card-fullheight': link
  })

  const renderCard = () => (
    <div css={link ? null : styles} className={link ? 'c-card--fullheight' : dynamicClassNames} {...other}>
      <div className="c-card__heading">
        <HeadingBlock type="span" size="sm" noMargin>
          {title}
        </HeadingBlock>
        {subtitle && <span className="c-card__subtitle">{subtitle}</span>}
      </div>

      <div className="c-card__content">{children}</div>
    </div>
  )

  return (
    <Fragment>
      {link ? (
        <Link css={styles} className={dynamicClassNames} to={path} noHover>
          {renderCard()}
        </Link>
      ) : (
        <Fragment>{renderCard()}</Fragment>
      )}
    </Fragment>
  )
}

Card.defaultProps = {
  condensed: false,
  link: false
}

Card.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  className: PropTypes.string,
  condensed: PropTypes.bool,
  link: PropTypes.bool,
  path: PropTypes.string,
  subtitle: PropTypes.string,
  title: PropTypes.string.isRequired
}

export default Card
