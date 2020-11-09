import React, {useEffect} from 'react';
import {Link} from 'react-router-dom'
import '../styles/Account.css';


export default function Example()  {

  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = "Addresses - Account | Swimli"
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
            <div className='accountTabActive'>Addresses</div>
          </Link>
          <Link to='/payment-methods'>
            <div className='accountTab'>Payment Methods</div>
          </Link>
          <Link to='/my-pool'>
            <div className='accountTab' className='hidden'>My Pool</div>
          </Link>
        </div>
      </div>

      <div className='accountContainer'>
        <div className='accountTitle'>Addresses</div>
        <div className='accountTitleAction'>
          <button className='accountTitleActionButton'>Add a New Address</button>
        </div>
        <div className='accountRoundedContainer'>
          <div className='accountRoundedTabHeader'>
            <div className='accountRoundedTabHeaderLeft'>
              Home
            </div>
            <div className='accountRoundedTabHeaderRight'>
              <button className='accountRoundedTabHeaderAction'>Edit</button>
            </div>
          </div>
          
          <div className='account-rounded-tab-content'>
            <b>Dylan Baker</b><br />
            2963 N Penstemon St.<br />
            Wichita, KS 67226<br />
            Phone: (316) 789-3632<br />
          </div>
        </div>
      </div>
      
    </div>
  )
}
