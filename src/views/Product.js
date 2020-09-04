import React from 'react'
import {Button} from 'antd'
import {Link} from 'react-router-dom'
import '../styles/Product.css'
import intelliflo from '../assets/products/intelliflo.jpg'

export default function Product() {
    return (
      <div className="container">
        <div className='breadcrumb-trail'>Equipment / Pumps & Motors</div>
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
        <div className='product-image-container'>
            <img src={intelliflo} className='product-image' alt='Intelliflo'></img>
        </div>
        
        <div className='product-body-container'>
            <div className='addcart'>
                <div className='addcart-top'>
                    <div className='addcart-top-left'>
                        <p>Avaibility</p>
                        <span>In Stock</span>
                    </div>
                    <div className='addcart-top-right'>
                        <p>Order Now</p>
                        <span>Recieve by September 3</span>
                    </div>
                </div>
                <div className='addcart-bottom'>
                    Quantity
                    <Button className='addcart-btn'><Link to='/cart'>Add to Cart</Link></Button>
                    <p>OR</p>
                    <Button className='autoship-btn'><Link to='/cart'>Add to Autoship</Link></Button>
                </div>
            </div>
            <div className='product-body-tabs'>Description</div>
            <div className='product-body-tabs-content'>Hi</div>
        </div>
        <div className='similar-products-container'>
            <p>Similar Products</p>
            <div className='similar-products'></div>
        </div>
        

      </div>
    )
}
