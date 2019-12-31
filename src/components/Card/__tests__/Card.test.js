import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Card from '../Card'

const defaultProps = {
  title: 'Dummy title'
}

describe('Card', () => {
  it('renders correctly', () => {
    const { asFragment } = render(<Card {...defaultProps} />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('renders correctly given a fullWidth prop', () => {
    const { asFragment, container } = render(<Card {...defaultProps} fullWidth />)

    expect(container.querySelector('.c-card--fullwidth')).toBeInTheDocument()
    expect(asFragment()).toMatchSnapshot()
  })

  it('renders a link when given a link prop', () => {
    const { asFragment, container } = render(<Card {...defaultProps} link />)

    expect(container.querySelector('.c-link')).toBeInTheDocument()
    expect(asFragment()).toMatchSnapshot()
  })

  it('renders a subtitle when given a subtitle prop', () => {
    const { asFragment, container } = render(<Card {...defaultProps} subtitle="Dummy subtitle" />)

    expect(container.querySelector('.c-card__subtitle')).toBeInTheDocument()
    expect(asFragment()).toMatchSnapshot()
  })
})
