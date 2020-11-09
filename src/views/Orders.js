import React, {useEffect} from 'react';
import {Link} from 'react-router-dom'
import '../styles/Account.css';

import intelliflo from '../assets/products/intelliflo.jpg'



export default function Example()  {
    
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = "Orders - Account | Swimli"
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
            <div className='accountTabActive'>Orders</div>
          </Link>
          <Link to='/autoship'>
            <div className='accountTab'>Autoship</div>
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
      <div className='accountTitle'>My Orders</div>
      <div className='accountTitleAction'>
      <span>
          <select>
            <option>Past 30 days</option>
            <option>Past 3 months</option>
            <option>Past 6 months</option>
            <option>2020</option>
          </select>
        </span>
      </div>
        <div className='accountRoundedContainer'>
          <div className='accountRoundedTabHeader'>
            <div className='orders-header-left'>
              <div className='orders-header-title'>September 24, 2020</div>
              <div className='orders-header-sub-title'>Order #3592011</div>
            </div>
            <div className='orders-header-right'>
              <div className='orders-header-title'>$31.69</div>
              <div className='orders-header-sub-title'>2 items</div>
            </div>
            <div className='orders-header-middle'>
              <div className='orders-header-title'>Shipped to</div>
              <div className='orders-header-sub-title'>2963 N Penstemon St., Wichita, KS 67226</div>
            </div>
          </div>
          
          <div className='account-rounded-tab-content'>
            <div className='orders-delivery-details'>
              <div className='orders-delivery-title'>Delivered Thursday, April 2</div>
              <div className='orders-delivery-track'>Track Package</div>
            </div>
            <div className='orders-item-container'>
              <div className='orders-item-image'>
                <img src={intelliflo}></img>
              </div>
              <div className='orders-item-content'>
                <Link to='/product'>
                  <div className='orders-item-content-title'>
                    Intelliflo Variable Speed Energy Saving Pool Pump
                  </div>
                </Link>
                <div className='orders-item-content-price'>
                  $45.99
                </div>
                <div className='orders-item-content-review'>
                  Leave a review
                </div>
              </div>
            </div>
            <div className='orders-item-container'>
              <div className='orders-item-image'>
                <img src={intelliflo}></img>
              </div>
              <div className='orders-item-content'>
                <Link to='/product'>
                  <div className='orders-item-content-title'>
                    Intelliflo Variable Speed Energy Saving Pool Pump
                  </div>
                </Link>
                <div className='orders-item-content-price'>
                  $45.99
                </div>
                <div className='orders-item-content-review'>
                  Leave a review
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='accountRoundedContainer'>
          <div className='account-rounded-tab-header'>
            <div className='orders-header-left'>
              <div className='orders-header-title'>September 24, 2020</div>
              <div className='orders-header-sub-title'>Order #3592011</div>
            </div>
            <div className='orders-header-right'>
              <div className='orders-header-title'>$1,292.48</div>
              <div className='orders-header-sub-title'>3 items</div>
            </div>
            <div className='orders-header-middle'>
              <div className='orders-header-title'>Shipped to</div>
              <div className='orders-header-sub-title'>2963 N Penstemon St., Wichita, KS 67226</div>
            </div>
          </div>
          
          <div className='account-rounded-tab-content'>
            <div className='orders-delivery-details'>
              <div className='orders-delivery-title'>Delivered Thursday, April 2</div>
              <div className='orders-delivery-track'>Track Package</div>
            </div>
            <div className='orders-item-container'>
              <div className='orders-item-image'>
                <img src={intelliflo}></img>
              </div>
              <div className='orders-item-content'>
                <Link to='/product'>
                  <div className='orders-item-content-title'>
                    Intelliflo Variable Speed Energy Saving Pool Pump
                  </div>
                </Link>
                <div className='orders-item-content-price'>
                  $45.99
                </div>
                <div className='orders-item-content-review'>
                  Leave a review
                </div>
              </div>
            </div>
            <div className='orders-item-container'>
              <div className='orders-item-image'>
                <img src={intelliflo}></img>
              </div>
              <div className='orders-item-content'>
                <Link to='/product'>
                  <div className='orders-item-content-title'>
                    Intelliflo Variable Speed Energy Saving Pool Pump
                  </div>
                </Link>
                <div className='orders-item-content-price'>
                  $45.99
                </div>
                <div className='orders-item-content-review'>
                 Leave a review
                </div>
              </div>
            </div>
            <div className='orders-item-container'>
              <div className='orders-item-image'>
                <img src={intelliflo}></img>
              </div>
              <div className='orders-item-content'>
                <Link to='/product'>
                  <div className='orders-item-content-title'>
                    Intelliflo Variable Speed Energy Saving Pool Pump
                  </div>
                </Link>
                <div className='orders-item-content-price'>
                  $45.99
                </div>
                <div className='orders-item-content-review'>
                   Leave a review
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}