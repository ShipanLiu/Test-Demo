import React from 'react'
import { Link } from 'react-router-dom'

function CardItem(props) {
  const { price, src, name, path } = props
  return (
    <>
      <li className="cards__item">
        <Link className="cards__item__link" to={path}>
          <figure className="cards__item__pic-wrap">
            <img className="cards__item__img" alt="img not found" src={src} />
            {props.isSale ? <span className="sale-lable">Sale</span> : ''}
          </figure>
          <div className="cards__item__info">
            <h5 className="cards__item__text">{`${name}  ${price}`}</h5>
          </div>
        </Link>
      </li>
    </>
  )
}

export default CardItem
