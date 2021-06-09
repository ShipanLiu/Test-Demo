import React from 'react'
import './Cards.css'
import CardItem from './CardItem'
import { useState } from 'react/cjs/react.development'

function Cards(props) {
  const drinksInfo = [
    {
      index: 0,
      isSale: false,
      price: '€49.99',
      productImage: '/img/Product_1.jpeg',
      productName: 'Pure Blonde Crate',
      type: 'Beer',
    },
    {
      index: 1,
      isSale: true,
      price: '€14.99',
      productImage: '/img/Product_2.jpeg',
      productName: 'Victoria Bitter 4x6x375ml',
      type: 'Beer',
    },
    {
      index: 2,
      isSale: false,
      price: '€24.99',
      productImage: '/img/Product_3.jpeg',
      productName: 'Kirin Megumi 4x6x330ml',
      type: 'Beer',
    },
    {
      index: 3,
      isSale: true,
      price: '€4.99',
      productImage: '/img/Product_4.jpeg',
      productName: 'Panhead CH Johnny Octane Can',
      type: 'Beer',
    },
    {
      index: 4,
      isSale: false,
      price: '€25.99',
      productImage: '/img/Product_5.jpeg',
      productName: 'Aquila Spark SauvB Bottle',
      type: 'Wine',
    },
    {
      index: 5,
      isSale: true,
      price: '€29.99',
      productImage: '/img/Product_6.jpeg',
      productName: 'Bernadino Spumante Bottle',
      type: 'Wine',
    },
    {
      index: 6,
      isSale: true,
      price: '€69.99',
      productImage: '/img/Product_7.jpeg',
      productName: 'Grey Goose Orginal 10x12x50ml',
      type: 'Spirits',
    },
    {
      index: 7,
      isSale: false,
      price: '€49.99',
      productImage: '/img/Product_8.jpeg',
      productName: 'Scrumpy RBerry 6x1.25L',
      type: 'Cider',
    },
  ]

  const { choosedItem } = props
  console.log(choosedItem)

  return (
    <div className="cards">
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            {choosedItem === 'All'
              ? drinksInfo.map((drinkObj) => (
                  <CardItem
                    key={drinkObj.index}
                    id={drinkObj.index}
                    price={drinkObj.price}
                    src={drinkObj.productImage}
                    name={drinkObj.productName}
                    type={drinkObj.type}
                    isSale={drinkObj.isSale}
                    path="/"
                  />
                ))
              : drinksInfo.map((drinkObj) => {
                  if (drinkObj.type === choosedItem) {
                    return (
                      <CardItem
                        key={drinkObj.index}
                        id={drinkObj.index}
                        price={drinkObj.price}
                        src={drinkObj.productImage}
                        name={drinkObj.productName}
                        type={drinkObj.type}
                        isSale={drinkObj.isSale}
                        path="/"
                      />
                    )
                  }
                })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards
