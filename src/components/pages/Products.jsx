/*
  here is the search result
*/

import React from 'react'
import Cards from '../Cards'
import Footer from '../Footer'
import '../../App.css'

export default function Products(props) {
  const { searchVal } = props
  const searchUperCase =
    searchVal.substring(0, 1).toUpperCase() + searchVal.substring(1)
  return (
    <div className="products-container">
      <div className="products-header">
        <h1>{searchUperCase}</h1>
      </div>
      <div className="products-card">
        <Cards choosedItem={searchUperCase}></Cards>
      </div>
      <Footer></Footer>
    </div>
  )
}
