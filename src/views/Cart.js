import React from 'react'
import {Button} from 'antd'
import {Link} from 'react-router-dom'
import '../styles/Cart.css'

export default function Cart() {
    return (
      <div className="container">
        <div className='cart-title'>Your Cart is Empty.</div>
        <div className='cart-sub-title'>Find something to put in it.</div>
        <Button className='checkout-btn'><Link to='/'>Continue Shopping</Link></Button>
      </div>
    )
}
