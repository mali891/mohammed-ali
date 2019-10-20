import React from 'react'
import { render } from '@testing-library/react'

import Homepage from '../blog'

const props = {
  data: {
    allMarkdownRemark: {
      edges: []
    }
  }
}

describe('Homepage', () => {
  it('renders correctly', () => {
    const { asFragment } = render(<Homepage {...props} />)
    expect(asFragment()).toMatchSnapshot()
  })
})
