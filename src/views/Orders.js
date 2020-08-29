import React from 'react'
import {Link} from 'react-router-dom'
import product from '../assets/products/1.jpg'

export default function User() {
    return (
        <div className="container">
            <div className="user-tabs-container">
                <div className="user-tabs-title">Hey, First Name!</div>
                <Link to='/account'><div className="user-tabs">Account</div></Link>
                <Link to='/orders'><div className="user-tabs-active">Orders</div></Link>
                <Link to='/autoship'><div className="user-tabs">Autoship</div></Link>
                <Link to='/addresses'><div className="user-tabs">Addresses</div></Link>
                <Link to='/paymentmethods'><div className="user-tabs">Payment Methods</div></Link>
                <Link to='/mypool'><div className="user-tabs">My Pool</div></Link>
            </div>
            <div className="user-content-container">
                <div className='user-title'>
                    Orders
                    <span><b>3 orders</b> placed in (Dropdown Menu)</span>
                </div>
                <div className='order-container'>
                    <div className='order-topbar'>Order 1</div>
                    <div className='order-contents'>
                        <div className='order-item'>
                            <div className='order-item-image'>
                                <img src={product} alt='Product'></img>
                            </div>
                            <div className='order-item-info'>
                                In The Swim Pool Shock 6 X 1 lb. bags
                            </div>
                        </div>
                        <div className='order-item'>
                            <div className='order-item-image'>
                                <img src={product} alt='Product'></img>
                            </div>
                            <div className='order-item-info'>
                                Item 2
                            </div>
                        </div>
                    </div>
                </div>

                <div className='order-container'>
                    <div className='order-topbar'>Order 2</div>
                    <div className='order-contents'>
                        <div className='order-item'>
                            <div className='order-item-image'>
                                <img src={product} alt='Product'></img>
                            </div>
                            <div className='order-item-info'>
                                Item 1
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
