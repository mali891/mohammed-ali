import React from 'react'
import { render } from '@testing-library/react'

import Header from '../Header'

describe('Header', () => {
  it('renders correctly', () => {
    const { asFragment } = render(<Header title="Dummy title" />)
    expect(asFragment()).toMatchSnapshot()
  })
})
