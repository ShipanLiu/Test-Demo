import React, { useState } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Home from './components/pages/Home'
import Products from './components/pages/Products'

import 'antd/dist/antd.css'

export default function App() {
  const [searchVal, setSearchVal] = useState('')

  const onSearch = (value) => {
    setSearchVal(value)
  }

  return (
    <>
      <Navbar onSearch={onSearch}></Navbar>
      <Switch>
        <Route path="/products">
          <Products searchVal={searchVal}></Products>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Redirect from="/" to="/home"></Redirect>
      </Switch>
    </>
  )
}
