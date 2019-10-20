import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Footer from '../Footer'

describe('Footer', () => {
  it('renders correctly', () => {
    const { asFragment } = render(<Footer footerRef={{ current: {} }} />)
    expect(asFragment()).toMatchSnapshot()
  })
})
