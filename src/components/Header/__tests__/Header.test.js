import React from 'react'
import renderer from 'react-test-renderer'

import Header from '../Header'

describe('Header', () => {
  xit('renders correctly', () => {
    const tree = renderer.create(<Header itle="Default Starter" />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
