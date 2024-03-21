import React from 'react'
import { useLocation } from 'react-router-dom'

const ProductDetail = () => { 
    const location = useLocation()
    const {state} = location
  return (
    <div>
        Product
    </div>
  )
}

export default ProductDetail