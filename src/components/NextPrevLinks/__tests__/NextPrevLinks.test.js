import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import NextPrevLinks from '../NextPrevLinks'

const defaultProps = {
  next: {
    frontmatter: {
      path: '/blog/roll-your-own-react-tabs',
      title: 'Roll Your Own: React Tabs',
      tags: ['eS6', 'javascript', 'react']
    }
  },
  prev: {
    frontmatter: {
      path: '/blog/roll-your-own-scss-grid',
      title: 'Roll Your Own: SCSS Grid',
      tags: ['eS6', 'javascript', 'react']
    }
  }
}

describe('NextPrevLinks', () => {
  it('renders correctly', () => {
    const { asFragment } = render(<NextPrevLinks {...defaultProps} />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('renders correctly without a next link prop', () => {
    const { asFragment, container } = render(<NextPrevLinks {...defaultProps} next={null} />)

    expect(container.querySelector('.c-next-prev-links__arrow--prev')).toBeInTheDocument()
    expect(container.querySelector('.c-next-prev-links__arrow--next')).not.toBeInTheDocument()
    expect(asFragment()).toMatchSnapshot()
  })

  it('renders correctly without a prev link prop', () => {
    const { asFragment, container } = render(<NextPrevLinks {...defaultProps} prev={null} />)

    expect(container.querySelector('.c-next-prev-links__arrow--next')).toBeInTheDocument()
    expect(container.querySelector('.c-next-prev-links__arrow--prev')).not.toBeInTheDocument()
    expect(asFragment()).toMatchSnapshot()
  })
})
