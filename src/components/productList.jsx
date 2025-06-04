// src/components/productList.jsx
import React from 'react'
import ProductItem from './productItem'
import products from '../data/products'
import './productList.css'

export default function ProductList() {
  return (
    <div className="product-list">
      {products.map((p) => (
        <ProductItem
          key={p.id}
          name={p.name}
          price={p.price}
          imgSrc={p.img}
          description={p.description}
        />
      ))}
    </div>
  )
}
