import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Link from '../Link'

describe('Link', () => {
  it('renders correctly', () => {
    const { asFragment } = render(<Link />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('renders correctly given a newTab prop', () => {
    const { asFragment, container } = render(<Link type="anchor" newTab />)

    expect(container.querySelector('a[target="_blank"]')).toBeInTheDocument()
    expect(asFragment()).toMatchSnapshot()
  })

  it('renders correctly given a noHover prop', () => {
    const { asFragment, container } = render(<Link noHover />)

    expect(container.querySelector('.c-link--no-hover')).toBeInTheDocument()
    expect(asFragment()).toMatchSnapshot()
  })

  it('renders correctly when given a specific to prop', () => {
    const { asFragment, container } = render(<Link type="anchor" to="test.com" />)

    expect(container.querySelector('a[href="test.com"]')).toBeInTheDocument()
    expect(asFragment()).toMatchSnapshot()
  })

  it('renders correctly when given a gatsby type prop', () => {
    const { asFragment } = render(<Link type="gatsby" />)

    expect(asFragment()).toMatchSnapshot()
  })

  it('renders correctly when given an anchor type prop', () => {
    const { asFragment, container } = render(<Link type="anchor" />)

    expect(container.querySelector('a')).toBeInTheDocument()
    expect(asFragment()).toMatchSnapshot()
  })

  it('renders correctly when given a button type prop', () => {
    const { asFragment, container } = render(<Link type="button" />)

    expect(container.querySelector('button')).toBeInTheDocument()
    expect(asFragment()).toMatchSnapshot()
  })

  it('renders correctly when given an onClick prop', () => {
    const mockOnClickHandler = jest.fn()
    const { container } = render(<Link onClick={mockOnClickHandler} />)
    const link = container.querySelector('.c-link')

    expect(mockOnClickHandler).toHaveBeenCalledTimes(0)
    fireEvent.click(link)
    expect(mockOnClickHandler).toHaveBeenCalledTimes(1)
  })
})
