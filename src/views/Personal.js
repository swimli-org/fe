import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/Account.css';


export default function Example()  {
  return (
    <div className="container">
      <div className='account-tab-bar-container'>
        <div className='account-tab-bar'>
          <Link to='/overview'>
            <div className='account-tab' className='hidden'>Overview</div>
          </Link>
          <Link to='/personal'>
            <div className='account-tab-active'>Personal Info</div>
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
            <div className='account-tab'>Payment Methods</div>
          </Link>
          <Link to='/mypool'>
            <div className='account-tab' className='hidden'>My Pool</div>
          </Link>
        </div>
      </div>

      <div className='account-container'>
      <div className='account-title'>Personal Info</div>
        <div className='account-rounded-tab-container'>
          <div className='personal-account-tab'>
            <div className='personal-account-tab-title'>
              Name
            </div>
            <div className='personal-account-tab-title-content'>
              Dylan Baker
              <span>Update</span>
            </div>
          </div>
          <div className='personal-account-tab'>
            <div className='personal-account-tab-title'>
              Address
            </div>
            <div className='personal-account-tab-title-content'>
              2963 N Penstemon St. <br />
              Wichita, KS 67226
              <span>Change</span>
            </div>
          </div>
          <div className='personal-account-tab'>
          <div className='personal-account-tab-title'>
              Email
            </div>
            <div className='personal-account-tab-title-content'>
              dylanmbaker@yahoo.com
              <span>Update</span>
            </div>
          </div>
          <div className='personal-account-tab'>
            <div className='personal-account-tab-title'>
              Password
            </div>
            <div className='personal-account-tab-title-content'>
              **********
              <span>Change</span>
            </div>
          </div>
          <div className='personal-account-tab'>
          <div className='personal-account-tab-title'>
              Deactivate
            </div>
            <div className='personal-account-tab-title-content'>
              This cannot be undone.
              <span>Delete Account</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}