import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/Account.css';


export default function Example()  {
  return (
    <div className="container">
      <div className='account-tab-bar-container'>
        <div className='account-tab-bar'>
          <Link to='/overview'>
            <div className='account-tab'>Overview</div>
          </Link>
          <Link to='/personal'>
            <div className='account-tab'>Personal Info</div>
          </Link>
          <Link to='/orders'>
            <div className='account-tab-active'>Orders</div>
          </Link>
          <Link to='/autoship'>
            <div className='account-tab'>Autoship</div>
          </Link>
          <Link to='/addresses'>
            <div className='account-tab'>Addresses</div>
          </Link>
          <Link to='/paymentmethods'>
            <div className='account-tab'>Payment Methods</div>
          </Link>
          <Link to='/mypool'>
            <div className='account-tab'>My Pool</div>
          </Link>
        </div>
      </div>

      <div className='account-container'>
      <div className='account-title'>My Orders</div>
        <div className='account-rounded-tab-container'>

        </div>
      </div>
      
    </div>
  )
}