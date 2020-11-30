import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';

//Assets
import intelliflo from '../assets/products/intelliflo.jpg';

//Components
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';

//CSS
import '../styles/Account.css';



export default function Example()  {
    
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = "Orders - Account | Swimli"
  });

  return (
    <div className="container">
      <NavBar />
      <div className="content-wrap">
        <div className="account-tab-bar-container">
          <div className="account-tab-bar">
            <Link to="/overview">
              <div className="account-tab" className="hidden">Overview</div>
            </Link>
            <Link to="/personal">
              <div className="account-tab">Personal Info</div>
            </Link>
            <Link to="/orders">
              <div className="account-tab-active">Orders</div>
            </Link>
            <Link to="/autoship">
              <div className="account-tab">Autoship</div>
            </Link>
            <Link to="/addresses">
              <div className="account-tab">Addresses</div>
            </Link>
            <Link to="/payment-methods">
              <div className="account-tab">Payment Methods</div>
            </Link>
            <Link to="/my-pool">
              <div className="account-tab" className="hidden">My Pool</div>
            </Link>
          </div>
        </div>

        <div className="account-container">
          <div className="account-title">My Orders</div>
          <div className="account-title-action">
            <span>
              <select>
                <option>Past 30 days</option>
                <option>Past 3 months</option>
                <option>Past 6 months</option>
                <option>2020</option>
              </select>
            </span>
          </div>
          <div className="account-rounded-container">
            <div className="account-rounded-tab-header">
              <div className="orders-header-left">
                <div className="orders-header-title">September 24, 2020</div>
                <div className="orders-header-sub-title">Order #3592011</div>
              </div>
              <div className="orders-header-right">
                <div className="orders-header-title">$31.69</div>
                <div className="orders-header-sub-title">2 items</div>
              </div>
              <div className="orders-header-middle">
                <div className="orders-header-title">Shipped to</div>
                <div className="orders-header-sub-title">2963 N Penstemon St., Wichita, KS 67226</div>
              </div>
            </div>
            
            <div className="account-rounded-tab-content">
              <div className="orders-delivery-details">
                <div className="orders-delivery-title">Delivered Thursday, April 2</div>
                <div className="orders-delivery-track">Track Package</div>
              </div>
              <div className="orders-item-container">
                <div className="orders-item-image">
                  <img src={intelliflo}></img>
                </div>
                <div className="orders-item-content">
                  <Link to="/product">
                    <div className="orders-item-content-title">
                      Intelliflo Variable Speed Energy Saving Pool Pump
                    </div>
                  </Link>
                  <div className="orders-item-content-price">
                    $45.99
                  </div>
                  <div className="orders-item-content-review">
                    Leave a review
                  </div>
                </div>
              </div>
              <div className="orders-item-container">
                <div className="orders-item-image">
                  <img src={intelliflo}></img>
                </div>
                <div className="orders-item-content">
                  <Link to="/product">
                    <div className="orders-item-content-title">
                      Intelliflo Variable Speed Energy Saving Pool Pump
                    </div>
                  </Link>
                  <div className="orders-item-content-price">
                    $45.99
                  </div>
                  <div className="orders-item-content-review">
                    Leave a review
                  </div>
                </div>
              </div>
            </div>
          </div>







          <div className="account-rounded-container">
            <div className="account-rounded-tab-header">
              <div className="orders-header-left">
                <div className="orders-header-title">September 24, 2020</div>
                <div className="orders-header-sub-title">Order #3592011</div>
              </div>
              <div className="orders-header-right">
                <div className="orders-header-title">$31.69</div>
                <div className="orders-header-sub-title">2 items</div>
              </div>
              <div className="orders-header-middle">
                <div className="orders-header-title">Shipped to</div>
                <div className="orders-header-sub-title">2963 N Penstemon St., Wichita, KS 67226</div>
              </div>
            </div>
            
            <div className="account-rounded-tab-content">
              <div className="orders-delivery-details">
                <div className="orders-delivery-title">Delivered Thursday, April 2</div>
                <div className="orders-delivery-track">Track Package</div>
              </div>
              <div className="orders-item-container">
                <div className="orders-item-image">
                  <img src={intelliflo}></img>
                </div>
                <div className="orders-item-content">
                  <Link to="/product">
                    <div className="orders-item-content-title">
                      Intelliflo Variable Speed Energy Saving Pool Pump
                    </div>
                  </Link>
                  <div className="orders-item-content-price">
                    $45.99
                  </div>
                  <div className="orders-item-content-review">
                    Leave a review
                  </div>
                </div>
              </div>
              <div className="orders-item-container">
                <div className="orders-item-image">
                  <img src={intelliflo}></img>
                </div>
                <div className="orders-item-content">
                  <Link to="/product">
                    <div className="orders-item-content-title">
                      Intelliflo Variable Speed Energy Saving Pool Pump
                    </div>
                  </Link>
                  <div className="orders-item-content-price">
                    $45.99
                  </div>
                  <div className="orders-item-content-review">
                    Leave a review
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}