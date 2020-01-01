import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import HeadingBlock from '../HeadingBlock'

const defaultProps = {
  size: 'md',
  type: 'span'
}

describe('HeadingBlock', () => {
  it('renders correctly', () => {
    const { asFragment } = render(<HeadingBlock {...defaultProps} />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('renders correctly given the size is lg', () => {
    const { asFragment, container } = render(<HeadingBlock {...defaultProps} size="lg" />)

    expect(container.querySelector('.c-heading--lg')).toBeInTheDocument()
    expect(asFragment()).toMatchSnapshot()
  })

  it('renders correctly given the type is h1', () => {
    const { asFragment, container } = render(<HeadingBlock {...defaultProps} type="h1" />)

    expect(container.querySelector('h1')).toBeInTheDocument()
    expect(asFragment()).toMatchSnapshot()
  })

  it('renders correctly given a noMargin prop', () => {
    const { asFragment, container } = render(<HeadingBlock {...defaultProps} noMargin />)

    expect(container.querySelector('.c-heading--no-margin')).toBeInTheDocument()
    expect(asFragment()).toMatchSnapshot()
  })
})
