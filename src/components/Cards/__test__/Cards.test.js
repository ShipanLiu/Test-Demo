import React from 'react'
import ReactDOM from 'react-dom'
import Cards from '../Cards'

import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import renderer from 'react-test-renderer'

afterEach(cleanup)

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Cards></Cards>, div)
})

// test wheather the 'onSearch' property was delivered
it('renders perfectly', () => {
  const { getByTestId } = render(<Cards choosedItem></Cards>)
  expect(getByTestId('cards')).toHaveProperty
})

it('matches snapshot', () => {
  const tree = renderer.create(<Cards choosedItem></Cards>).toJSON()
  console.log(tree)
  // create a Snapshot file
  expect(tree).toMatchSnapshot()
})
