import React from 'react'
import { render } from '@testing-library/react'

import Blog from '../blog'

const props = {
  data: {
    allMarkdownRemark: {
      edges: [
        {
          node: {
            frontmatter: {
              title: 'Test title 1',
              path: '/test-title/1',
              date: '2020-01-01',
              length: '3 min'
            }
          }
        },
        {
          node: {
            frontmatter: {
              title: 'Test title 2',
              path: '/test-title/2',
              date: '2020-02-02',
              length: '4 min'
            }
          }
        }
      ]
    }
  }
}

describe('Blog', () => {
  it('renders correctly', () => {
    const { asFragment } = render(<Blog {...props} />)
    expect(asFragment()).toMatchSnapshot()
  })
})
