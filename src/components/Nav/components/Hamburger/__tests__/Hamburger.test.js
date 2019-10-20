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

  // it('renders correctly given a noHover prop', () => {
  //   const { asFragment, container } = render(<Hamburger noHover />)

  //   expect(container.querySelector('.c-Hamburger--no-hover')).toBeInTheDocument()
  //   expect(asFragment()).toMatchSnapshot()
  // })

  // it('renders correctly when given a specific to prop', () => {
  //   const { asFragment, container } = render(<Hamburger type="anchor" to="test.com" />)

  //   expect(container.querySelector('a[href="test.com"]')).toBeInTheDocument()
  //   expect(asFragment()).toMatchSnapshot()
  // })

  // it('renders correctly when given a gatsby type prop', () => {
  //   const { asFragment } = render(<Hamburger type="gatsby" />)

  //   expect(asFragment()).toMatchSnapshot()
  // })

  // it('renders correctly when given an anchor type prop', () => {
  //   const { asFragment, container } = render(<Hamburger type="anchor" />)

  //   expect(container.querySelector('a')).toBeInTheDocument()
  //   expect(asFragment()).toMatchSnapshot()
  // })

  // it('renders correctly when given a button type prop', () => {
  //   const { asFragment, container } = render(<Hamburger type="button" />)

  //   expect(container.querySelector('button')).toBeInTheDocument()
  //   expect(asFragment()).toMatchSnapshot()
  // })

  // it('renders correctly when given an onClick prop', () => {
  //   const mockOnClickHandler = jest.fn()
  //   const { asFragment, container } = render(<Hamburger onClick={mockOnClickHandler} />)
  //   const Hamburger = container.querySelector('.c-Hamburger')

  //   expect(mockOnClickHandler).toHaveBeenCalledTimes(0)
  //   fireEvent.click(Hamburger)
  //   expect(mockOnClickHandler).toHaveBeenCalledTimes(1)
  //   expect(asFragment()).toMatchSnapshot()
  // })
})
