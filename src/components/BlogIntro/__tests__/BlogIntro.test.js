import React from 'react'
import { render } from '@testing-library/react'

import BlogIntro from '../BlogIntro'

const defaultProps = {
  date: '2030-01-01',
  length: '1 min',
  excerpt: 'lorem ipsum sit dolor amet'
}

describe('BlogIntro', () => {
  it('renders correctly', () => {
    const { asFragment } = render(<BlogIntro {...defaultProps} />)
    expect(asFragment()).toMatchSnapshot()
  })
})
