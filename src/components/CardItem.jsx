import React from 'react'
import { Link } from 'react-router-dom'

function CardItem(props) {
  const { id, price, src, name, type, isSale, path } = props
  console.log(src)
  return (
    <>
      <li className="cards__item">
        <Link className="cards__item__link" to={path}>
          <figure className="cards__item__pic-wrap" data-category={props.label}>
            <img className="cards__item__img" alt="img not found" src={src} />
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
