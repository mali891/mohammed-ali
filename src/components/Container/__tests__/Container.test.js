import React from 'react'
import { render } from '@testing-library/react'

import Container from '../Container'

describe('Container', () => {
  it('renders correctly', () => {
    const { asFragment } = render(<Container />)
    expect(asFragment()).toMatchSnapshot()
  })
})
