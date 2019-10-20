import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import ContentGroup from '../ContentGroup'

describe('ContentGroup', () => {
  it('renders correctly', () => {
    const { asFragment } = render(<ContentGroup />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('renders correctly given a noMargin prop', () => {
    const { asFragment, container } = render(<ContentGroup noMargin />)

    expect(container.querySelector('.c-content-group--no-margin')).toBeInTheDocument()
    expect(asFragment()).toMatchSnapshot()
  })
})
