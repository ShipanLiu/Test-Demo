import React from 'react'
import ReactDOM from 'react-dom'
import Filter from '../Filter'

import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import renderer from 'react-test-renderer'

afterEach(cleanup)

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Filter></Filter>, div)
})

// test wheather the 'choosedKey' property was delivered
it('renders perfectly', () => {
  const { getByTestId } = render(<Filter choosedKey></Filter>)
  expect(getByTestId('filter')).toHaveProperty
})

it('matches snapshot', () => {
  const tree = renderer.create(<Filter choosedKey></Filter>).toJSON()
  console.log(tree)
  // create a Snapshot file
  expect(tree).toMatchSnapshot()
})
