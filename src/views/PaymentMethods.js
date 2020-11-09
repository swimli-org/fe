import React, {useEffect} from 'react';
import {Link} from 'react-router-dom'
import '../styles/Account.css';

import visa from '../assets/creditcards/visa.png'


export default function Example()  {
    
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = "Payment Methods - Account | Swimli"
  });

  return (
    <div className="container">
      <div className='accountTabBarContainer'>
        <div className='accountTabBar'>
          <Link to='/overview'>
            <div className='accountTab' className='hidden'>Overview</div>
          </Link>
          <Link to='/personal'>
            <div className='accountTab'>Personal Info</div>
          </Link>
          <Link to='/orders'>
            <div className='accountTab'>Orders</div>
          </Link>
          <Link to='/autoship'>
            <div className='accountTab'>Autoship</div>
          </Link>
          <Link to='/addresses'>
            <div className='accountTab'>Addresses</div>
          </Link>
          <Link to='/payment-methods'>
            <div className='accountTabActive'>Payment Methods</div>
          </Link>
          <Link to='/my-pool'>
            <div className='accountTab' className='hidden'>My Pool</div>
          </Link>
        </div>
      </div>

      <div className='accountContainer'>
      <div className='accountTitle'>Payment Methods</div>
      <div className='accountTitleAction'>
        <button className='accountTitleActionButton'>Add a New Card</button>
      </div>
        <div className='accountRoundedContainer'>
          <div className='accountRoundedTabHeader'>
            <div className='accountRoundedTabHeaderLeft'>
              <img src={visa} className='payments-card-icon'></img>
              Visa ending in 3590
            </div>
            <div className='accountRoundedTabHeaderRight'>
              <button className='accountRoundedTabHeaderAction'>Edit</button>
            </div>
          </div>
          
          <div className='account-rounded-tab-content'>
            <div className='paymentsContentLeft'>
              <span>Name on card</span>
              <p>
                Dylan M Baker<br />
                **** **** **** 3590<br />
                Expires 10/2022
              </p>
            </div>
            <div className='paymentsContentRight'>
              <span>Billing Address</span>
              <p>
                Dylan M Baker<br />
                2963 N Penstemon St.<br />
                Wichita, KS 67226<br />
                United States
              </p>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}
