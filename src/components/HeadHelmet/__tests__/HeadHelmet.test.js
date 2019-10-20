import React from 'react'
import { render } from '@testing-library/react'

import HeadHelmet from '../HeadHelmet'

describe('HeadHelmet', () => {
  it('renders correctly', () => {
    const { asFragment } = render(<HeadHelmet title="Dummy page title" />)
    expect(asFragment()).toMatchSnapshot()
  })
})
