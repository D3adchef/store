// src/components/productItem.jsx
import React from 'react'
import './productItem.css'

export default function ProductItem({ name, price, imgSrc, description }) {
  return (
    <div className="product-card">
      <img src={imgSrc} alt={name} className="product-img" />
      <h3>{name}</h3>
      <p className="price">${price.toFixed(2)}</p>
      <p className="description">{description}</p>
    </div>
  )
}
