import React from 'react'
import { render } from '@testing-library/react'

import Reviews from '../reviews'

describe('Reviews', () => {
  it('renders correctly', () => {
    const { asFragment } = render(<Reviews />)
    expect(asFragment()).toMatchSnapshot()
  })
})
