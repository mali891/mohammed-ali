import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Hamburger from '../Hamburger'

describe('Hamburger', () => {
  const mockOnClickHandler = jest.fn()
  const defaultProps = {
    menuExpanded: false,
    onClick: mockOnClickHandler
  }

  it('renders correctly', () => {
    const { asFragment } = render(<Hamburger {...defaultProps} />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('renders correctly given a menuExpanded prop', () => {
    const { asFragment, container } = render(<Hamburger {...defaultProps} menuExpanded={true} />)

    expect(container.querySelector('.c-hamburger--is-active')).toBeInTheDocument()
    expect(asFragment()).toMatchSnapshot()
  })

  it('renders correctly given an onClick prop', () => {
    const { container } = render(<Hamburger {...defaultProps} onClick={mockOnClickHandler} />)
    const hamburger = container.querySelector('.c-hamburger')

    expect(mockOnClickHandler).toHaveBeenCalledTimes(0)
    fireEvent.click(hamburger)
    expect(mockOnClickHandler).toHaveBeenCalledTimes(1)
  })
})
