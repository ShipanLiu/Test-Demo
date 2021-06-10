import React from 'react'
import ReactDOM from 'react-dom'
import Navbar from '../Navbar'

import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import renderer from 'react-test-renderer'

afterEach(cleanup)

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Navbar></Navbar>, div)
})

// test wheather the 'onSearch' property was delivered
it('renders perfectly', () => {
  const { getByTestId } = render(<Navbar onSearch></Navbar>)
  expect(getByTestId('navbar')).toHaveProperty
})

it('matches snapshot', () => {
  const tree = renderer.create(<Navbar onSearch></Navbar>).toJSON()
  console.log(tree)
  // create a Snapshot file
  expect(tree).toMatchSnapshot()
})
