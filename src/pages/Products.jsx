import React from 'react'
import Cards from '../components/Cards/Cards'
import HotSale from '../components/Cards/HoteSale'
import Footer from '../components/Footer/Footer'
import '../App.css'

export default function Products(props) {
  const { searchVal } = props
  const itemArr = ['All', 'Beer', 'Wine', 'Spirits', 'Cider']
  const searchUperCase =
    searchVal.substring(0, 1).toUpperCase() + searchVal.substring(1)
  const len = itemArr.filter((item) => item === searchUperCase).length
  console.log(len)

  return (
    <>
      {len === 1 ? (
        <div className="products-container">
          <div className="products-header">
            <h1>{searchUperCase}</h1>
          </div>
          <div className="products-card">
            <Cards choosedItem={searchUperCase}></Cards>
          </div>
          <Footer></Footer>
        </div>
      ) : (
        <div className="products-container">
          <div className="products-header">
            <h1>So Sorry! We can't find it</h1>
          </div>
          <div className="products-recommend">
            <p>hot sale:</p>
          </div>
          <div className="products-card">
            <HotSale></HotSale>
          </div>
          <Footer></Footer>
        </div>
      )}
    </>
  )
}
