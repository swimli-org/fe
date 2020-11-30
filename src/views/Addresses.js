import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';

// CSS
import '../styles/Account.css';

// Components
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Example()  {

  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = "Addresses - Account | Swimli"
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
              <div className="account-tab-active">Addresses</div>
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
          <div className="account-title">Addresses</div>
          <div className="account-title-action">
            <button className="account-title-action-button">Add a New Address</button>
          </div>
          <div className="account-rounded-container">
            <div className="account-rounded-tab-header">
              <div className="account-rounded-tab-header-left">
                Home
              </div>
              <div className="account-rounded-tab-header-right">
                <button className="account-rounded-tab-header-action">Edit</button>
              </div>
            </div>
            
            <div className="account-rounded-tab-content">
              <b>Dylan Baker</b><br />
              2963 N Penstemon St.<br />
              Wichita, KS 67226<br />
              Phone: (316) 789-3632<br />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
