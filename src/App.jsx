// src/App.jsx
import React from 'react'
import ProductList from './components/productList'
import './App.css'

function App() {
  return (
    <div className="app-container">
     <img
  src={import.meta.env.BASE_URL + 'images/logo.png'}
  alt="Store Logo"
  className="logo"
/>
      <h1></h1>
      <p className="tagline"></p>

      <ProductList />
    </div>
  )
}

export default App
