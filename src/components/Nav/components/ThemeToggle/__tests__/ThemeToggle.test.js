import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import ThemeToggle from '../ThemeToggle'
import { ThemeProvider } from '../../../../../context/ThemeContext'

describe('ThemeToggle', () => {
  it('renders correctly', () => {
    const { asFragment } = render(
      <ThemeProvider>
        <ThemeToggle />
      </ThemeProvider>
    )
    expect(asFragment()).toMatchSnapshot()
  })

  it('clicking the component toggles the state of the icon from moon to sun and back again', () => {
    const { asFragment, container } = render(
      <ThemeProvider theme="dark">
        <ThemeToggle />
      </ThemeProvider>
    )
    const label = container.querySelector('.c-theme-toggle__label')

    expect(container.querySelector('.icon--moon')).toBeInTheDocument()
    expect(container.querySelector('.icon--sun')).not.toBeInTheDocument()

    fireEvent.click(label)

    expect(container.querySelector('.icon--sun')).toBeInTheDocument()
    expect(container.querySelector('.icon--moon')).not.toBeInTheDocument()

    fireEvent.click(label)

    expect(container.querySelector('.icon--moon')).toBeInTheDocument()
    expect(container.querySelector('.icon--sun')).not.toBeInTheDocument()

    expect(asFragment()).toMatchSnapshot()
  })

  it('pressing enter on the component toggles the state of the icon from moon to sun and back again', () => {
    const e = { keyCode: 13 }
    const { asFragment, container } = render(
      <ThemeProvider theme="dark">
        <ThemeToggle />
      </ThemeProvider>
    )
    const label = container.querySelector('.c-theme-toggle__label')

    expect(container.querySelector('.icon--moon')).toBeInTheDocument()
    expect(container.querySelector('.icon--sun')).not.toBeInTheDocument()

    fireEvent.keyDown(label, e)

    expect(container.querySelector('.icon--sun')).toBeInTheDocument()
    expect(container.querySelector('.icon--moon')).not.toBeInTheDocument()

    fireEvent.keyDown(label, e)

    expect(container.querySelector('.icon--moon')).toBeInTheDocument()
    expect(container.querySelector('.icon--sun')).not.toBeInTheDocument()

    expect(asFragment()).toMatchSnapshot()
  })
})
