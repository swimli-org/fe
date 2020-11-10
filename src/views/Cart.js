import React, {useEffect} from 'react';
import {Button} from 'antd'
import {Link} from 'react-router-dom'

/* Import CSS */
import '../styles/Cart.css';

/* Import Components */
import CartRecommend from '../components/CartRecommend';

export default function Cart() {

  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = "Your Cart | Swimli"
  });

  return (
      <div className="container">
        <div className='cart-title'>Your Cart is Empty.</div>
        <div className='cart-sub-title'>Find something to put in it.</div>
        <Button className='checkout-btn'><Link to='/'>Continue Shopping</Link></Button>
        <CartRecommend />
      </div>
    )
}
