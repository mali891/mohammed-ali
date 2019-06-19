import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"

import { styles } from "./Form.styles"

const Form = ({ children, className, ...other }) => {
  const dynamicClassNames = classNames([className], {
    "c-form": true,
  })

  return (
    <form action="#!" css={styles} className={dynamicClassNames} {...other}>
      <div className="c-form-input">
        <label className="c-form-input__label" htmlFor="name">
          Name *
        </label>{" "}
        <input
          className="c-form-input__input"
          type="text"
          name="name"
          id="name"
        />
      </div>
      <div className="c-form-input">
        <label className="c-form-input__label" htmlFor="email">
          Email
        </label>{" "}
        <input
          className="c-form-input__input"
          type="text"
          name="email"
          id="email"
        />
      </div>
      <div className="c-form-input">
        <label className="c-form-input__label" htmlFor="phone">
          Phone
        </label>{" "}
        <input
          className="c-form-input__input"
          type="text"
          name="phone"
          id="phone"
        />
      </div>
      <div className="c-form-input">
        <label className="c-form-input__label" htmlFor="name">
          Message *
        </label>{" "}
        <textarea
          className="c-form-input__textarea"
          name="message"
          id="message"
          cols="30"
        />
      </div>
    </form>
  )
}

Form.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
}

export default Form
