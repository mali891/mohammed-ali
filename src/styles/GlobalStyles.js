import React, { Fragment } from 'react'
import { Resets, Utilities, Theme, CodeHighlighting, Type } from './'

const GlobalStyles = () => (
  <Fragment>
    <Resets />
    <Utilities />
    <Theme />
    <CodeHighlighting />
    <Type />
  </Fragment>
)

export default GlobalStyles
