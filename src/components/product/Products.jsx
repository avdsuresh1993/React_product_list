import React from 'react'
import './Products.css'

export const Products = ({ product }) => {
  const { id, image, title, price } = product

  return (
    <div className='card-container child'>
        <img src={image} alt={`${title} image`} />
        <div className='card-content'>
        <h3>{title}</h3>
        <p>{`$ ${price}`}</p>
        <div className='btn-class'>
        <button>add cart</button>
        <button>remove cart</button>
      </div>
      </div>
    </div>
  )
}
