import React, { useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Home from './components/pages/Home'
import Products from './components/pages/Products'

// import './App.css'
import 'antd/dist/antd.css'

export default function App() {
  const [searchVal, setSearchVal] = useState('')

  const onSearch = (value) => {
    setSearchVal(value)
    // console.log(value)
  }

  return (
    <>
      <Navbar onSearch={onSearch}></Navbar>
      <Switch>
        <Route path="/">
          <Home searchVal={searchVal}></Home>
        </Route>
        <Route path="/products" component={Products} />
      </Switch>
    </>
  )
}
