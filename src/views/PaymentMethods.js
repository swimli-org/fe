import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/Account.css';

import visa from '../assets/creditcards/visa.png'


export default function Example()  {
  return (
    <div className="container">
      <div className='account-tab-bar-container'>
        <div className='account-tab-bar'>
          <Link to='/overview'>
            <div className='account-tab' className='hidden'>Overview</div>
          </Link>
          <Link to='/personal'>
            <div className='account-tab'>Personal Info</div>
          </Link>
          <Link to='/orders'>
            <div className='account-tab'>Orders</div>
          </Link>
          <Link to='/autoship'>
            <div className='account-tab'>Autoship</div>
          </Link>
          <Link to='/addresses'>
            <div className='account-tab'>Addresses</div>
          </Link>
          <Link to='/paymentmethods'>
            <div className='account-tab-active'>Payment Methods</div>
          </Link>
          <Link to='/mypool'>
            <div className='account-tab' className='hidden'>My Pool</div>
          </Link>
        </div>
      </div>

      <div className='account-container'>
      <div className='account-title'>Payment Methods</div>
        <div className='account-rounded-tab-container'>
          <div className='account-rounded-tab-header'>
            <div className='payments-header-left'>
              <img src={visa} className='payments-card-icon'></img>
              Visa ending in 3590
            </div>
            <div className='payments-header-right'>
              Dylan M Baker
            </div>
          </div>
          
          <div className='account-rounded-tab-content'>
            <div className='payments-content-left'>
              <span>Name on card</span>
              <p>
                Dylan M Baker<br />
                **** **** **** 3590<br />
                Expires 10/2022
              </p>
            </div>
            <div className='payments-content-middle'>
              <span>Billing Address</span>
              <p>
                Dylan M Baker<br />
                2963 N Penstemon St.<br />
                Wichita, KS 67226<br />
                United States
              </p>
            </div>
            <div className='payments-content-right'>
              <button className='payments-card-button'>Remove</button>
              <button className='payments-card-button'>Edit</button>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}
