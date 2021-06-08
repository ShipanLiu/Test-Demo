import React, { PureComponent } from 'react'
import { Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Home from './components/pages/Home'

// import './App.css'
import 'antd/dist/antd.css'

export default class App extends PureComponent {
  render() {
    return (
      <>
        <Navbar></Navbar>
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </>
    )
  }
}
