import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import Prism from 'prismjs'

import { ContentGroup } from '../'
import { styles } from './CodeBlock.styles'

const CodeBlock = ({ children, language }) => {
  useEffect(() => Prism.highlightAll(), [])

  return (
    <ContentGroup>
      <pre css={styles}>
        <code className={`language-${language}`}>{children}</code>
      </pre>
    </ContentGroup>
  )
}

CodeBlock.defaultProps = {
  language: 'javascript'
}

CodeBlock.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  language: PropTypes.string
}

export default CodeBlock
