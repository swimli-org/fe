import React from 'react'
import {Button} from 'antd'
import {Link} from 'react-router-dom'
import '../styles/Cart.css'

export default function Cart() {
    return (
      <div className="container">
        <h1>There is currently nothing in your cart</h1>
        <Button className='checkout-btn'><Link to='/checkout'>Checkout</Link></Button>
      </div>
    )
}
