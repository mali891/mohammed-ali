import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import CardContainer from '../CardContainer'

describe('CardContainer', () => {
  it('renders correctly', () => {
    const { asFragment } = render(<CardContainer />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('renders correctly given a marginBottom prop', () => {
    const { asFragment, container } = render(<CardContainer marginBottom />)

    expect(container.querySelector('.c-card-container--margin-bottom')).toBeInTheDocument()
    expect(asFragment()).toMatchSnapshot()
  })
})
