import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import '../styles/Account.css';

// Assets
import visa from '../assets/creditcards/visa.png';

// Components
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Example()  {
    
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = "Payment Methods - Account | Swimli"
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
              <div className="account-tab">Orders</div>
            </Link>
            <Link to="/autoship">
              <div className="account-tab">Autoship</div>
            </Link>
            <Link to="/addresses">
              <div className="account-tab">Addresses</div>
            </Link>
            <Link to="/payment-methods">
              <div className="account-tab-active">Payment Methods</div>
            </Link>
            <Link to="/my-pool">
              <div className="account-tab" className="hidden">My Pool</div>
            </Link>
          </div>
        </div>

        <div className="account-container">
        <div className="account-title">Payment Methods</div>
        <div className="account-title-action">
          <button className="account-title-action-button">Add a New Card</button>
        </div>
          <div className="account-rounded-container">
            <div className="account-rounded-tab-header">
              <div className="account-rounded-tab-header-left">
                <img src={visa} className="payments-card-icon"></img>
                Visa ending in 3590
              </div>
              <div className="account-rounded-tab-header-right">
                <button className="account-rounded-tab-header-action">Edit</button>
              </div>
            </div>
            
            <div className="account-rounded-tab-content">
              <div className="payments-content-left">
                <span>Name on card</span>
                <p>
                  Dylan M Baker<br />
                  **** **** **** 3590<br />
                  Expires 10/2022
                </p>
              </div>
              <div className="payments-content-right">
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
      <Footer />
    </div>
  )
}
