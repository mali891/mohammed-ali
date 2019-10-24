import React from 'react'
import { render } from '@testing-library/react'

import AppWrapper from '../AppWrapper'
import { ThemeProvider } from '../../../context/ThemeContext'

describe('AppWrapper', () => {
  it('renders correctly', () => {
    const { asFragment } = render(
      <ThemeProvider>
        <AppWrapper>
          <p>Dummy children</p>
        </AppWrapper>
      </ThemeProvider>
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
