import React from 'react'
import { render } from '@testing-library/react'

import HeaderScrollTarget from '../HeaderScrollTarget'

describe('HeaderScrollTarget', () => {
  it('renders correctly', () => {
    const { asFragment } = render(<HeaderScrollTarget scrollRef={{ current: {} }} />)
    expect(asFragment()).toMatchSnapshot()
  })
})
