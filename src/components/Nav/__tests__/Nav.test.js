import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Nav from '../Nav'
import { ThemeProvider } from '../../../context/ThemeContext'

describe('Nav', () => {
  it('renders correctly', () => {
    const { asFragment } = render(
      <ThemeProvider>
        <Nav footerRef={{ current: {} }} />
      </ThemeProvider>
    )
    expect(asFragment()).toMatchSnapshot()
  })

  it('clicking the hamburger activates the menu', () => {
    const { asFragment, container } = render(
      <ThemeProvider>
        <Nav footerRef={{ current: {} }} />
      </ThemeProvider>
    )
    const hamburger = container.querySelector('.c-hamburger')

    expect(container.querySelector('.c-nav__overlay')).not.toBeInTheDocument()
    expect(container.querySelector('.c-nav__menu--is-expanded')).not.toBeInTheDocument()

    fireEvent.click(hamburger)

    expect(container.querySelector('.c-nav__overlay')).toBeInTheDocument()
    expect(container.querySelector('.c-nav__menu--is-expanded')).toBeInTheDocument()
    expect(asFragment()).toMatchSnapshot()
  })
})
