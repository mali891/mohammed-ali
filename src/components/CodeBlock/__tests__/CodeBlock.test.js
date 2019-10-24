import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import CodeBlock from '../CodeBlock'

describe('CodeBlock', () => {
  it('renders correctly', () => {
    const { asFragment } = render(
      <CodeBlock>
        <p>Dummy children</p>
      </CodeBlock>
    )
    expect(asFragment()).toMatchSnapshot()
  })

  it('renders correctly given an alternative language prop', () => {
    const { asFragment, container } = render(
      <CodeBlock language="scss">
        <p>Dummy children</p>
      </CodeBlock>
    )

    expect(container.querySelector('.language-scss')).toBeInTheDocument()
    expect(asFragment()).toMatchSnapshot()
  })
})
