import React, {useEffect} from 'react';
import {Link} from 'react-router-dom'
import '../styles/Account.css';


export default function Example()  {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = "Overview - Account | Swimli"
  });

  return (
    <div className="container">
      <div className='account-tab-bar-container'>
        <div className='account-tab-bar'>
          <Link to='/overview'>
            <div className='account-tab-active'>Overview</div>
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
          <Link to='/payment-methods'>
            <div className='account-tab'>Payment Methods</div>
          </Link>
          <Link to='/my-pool'>
            <div className='account-tab'>My Pool</div>
          </Link>
        </div>
      </div>

      <div className='account-container'>
        <div className='account-title'>Overview</div>
        <div className='account-rounded-tab-container'>

        </div>
      </div>

    </div>
  )
}