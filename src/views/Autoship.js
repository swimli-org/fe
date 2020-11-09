import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import '../styles/Account.css';


export default function Account()  {
  const[isEditing, setIsEditing]=useState(false)
  
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = "Autoship - Account | Swimli"
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
            <div className='accountTabActive'>Autoship</div>
          </Link>
          <Link to='/addresses'>
            <div className='accountTab'>Addresses</div>
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
        <div className='accountTitle'>Autoship</div>
        <div className='accountTitleAction'>
          <button onClick={() => setIsEditing(!isEditing)} className='accountTitleActionButton'>{isEditing?"Cancel":"Edit"}</button>
        </div>
        <div className='accountRoundedContainer'>
          <div className='accountRoundedTabHeader'>
            <div className='accountRoundedTabHeaderLeft'>
              My Autoship #1
            </div>
            <div className='accountRoundedTabHeaderRight'>
              {isEditing?
                <span>
                  <button className='accountRoundedTabHeaderAction'>Rename</button>
                  <button className='accountRoundedTabHeaderAction'>Delete</button>
                </span>
              :""}
            </div>
          </div>
          
          <div className='account-rounded-tab-content'>
            
          </div>
        </div>
      </div>
      
    </div>
  )
}
