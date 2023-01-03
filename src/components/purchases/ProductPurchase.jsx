import React from 'react'
import "./styles/ProductPurchase.css"

const ProductPurchase = ({productPurchase}) => {
  return (
    <article className='productPurchase'>
        <h3 className='productPurchase__title'>{productPurchase.title}</h3>
        <h3 className='productPurchase__quantity'>{productPurchase.productsInCart.quantity}</h3>
        <h4 className='productPurchase__price'>$ {(productPurchase.productsInCart.quantity* productPurchase.price).toFixed(2)}</h4>
    </article>
  )
}

export default ProductPurchase