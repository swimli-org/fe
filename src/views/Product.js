import React from 'react'
import {Button, Select} from 'antd'
import {Link} from 'react-router-dom'
import '../styles/Product.css'
import intelliflo from '../assets/products/intelliflo.jpg'

const { Option } = Select;

function handleChange(value) {
  console.log(`selected ${value}`);
}

export default function Product() {
    return (
      <div className="container">
        <div className='breadcrumb-trail'><span>Equipment</span> / <span>Pumps & Motors</span></div>
        <div className='product-header'>
            <div className='product-header-left'>
                <div className='product-brand'>
                    <span>By Pentair</span>
                </div>
                <div className='product-name'>
                    Intelliflo Variable Speed Energy Saving Pool Pump
                </div>
                <div className='product-rating'>
                    <span>635 Reviews</span>
                    </div>
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
        
        <div className='addcart-container'>
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
                    <span>Quantity</span>
                    <Button className='addcart-btn'><Link to='/cart'>Add to Cart</Link></Button>
                    <Button className='autoship-btn'><Link to='/cart'>Add to Autoship</Link></Button>
                </div>
            </div>
        </div>
        <div className='product-info-container'>
            <div className='product-info-tabs'>Description</div>
            <div className='product-info-content'>
                <p>
                    The Pentair 011028 Intelliflo variable speed pool pump features 8 speeds with a programmable digital time clock for each speed along with a rotating LCD screen that displays actual wattage consumption and speed settings. This Pentair Intelliflo pool pump is the solution for those looking to saving and increase performance with the Eco-Friendly, Energy Saving pool pump. IntelliFlo offers the same reliable performance and energy-savings that have made it the best-selling variable speed pump on the planet.
                </p>
            </div>
        </div>
        <div className='similar-products-container'>
            <p>Similar Products</p>
            <div className='similar-products'></div>
        </div>
        

      </div>
    )
}
