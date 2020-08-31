import React from 'react'
import '../styles/Product.css'
import intelliflo from '../assets/products/intelliflo.jpg'

export default function Product() {
    return (
      <div className="container">
        <div className='breadcrumb-trail'>Equipment / Pumps & Motors</div>
        <div className='product-image-container'>
        <img src={intelliflo} className='product-image' alt='Intelliflo'></img>

        </div>
        <div className='product-header'>
            <div className='product-header-left'>
                <div className='product-brand'>By Pentair</div>
                <div className='product-name'>
                    Intelliflo Variable Speed Energy Saving Pool Pump
                </div>
                <div className='product-rating'>635 Reviews</div>
            </div>
            <div className='product-header-right'>
                <div className='product-price'>$1,299.99</div>
                <div className='product-price-tip'>
                    Free 1-3 Day Shipping
                </div>
            </div>
        </div>
      </div>
    )
}
