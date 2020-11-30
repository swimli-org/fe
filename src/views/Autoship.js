import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';

// CSS
import '../styles/Account.css';

// Components
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Account()  {
  const[isEditing, setIsEditing]=useState(false)
  
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = "Autoship - Account | Swimli"
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
              <div className="account-tab-active">Autoship</div>
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
          <div className="account-title">Autoship</div>
          <div className="account-title-action">
            <button onClick={() => setIsEditing(!isEditing)} className="account-title-action-button">{isEditing?"Cancel":"Edit"}</button>
          </div>
          <div className="account-rounded-container">
            <div className="account-rounded-tab-header">
              <div className="account-rounded-tab-header-left">
                My Autoship #1
              </div>
              <div className="account-rounded-tab-header-right">
                {isEditing?
                  <span>
                    <button className="account-rounded-tab-header-action">Rename</button>
                    <button className="account-rounded-tab-header-action">Delete</button>
                  </span>
                :""}
              </div>
            </div>
            
            <div className="account-rounded-tab-content">
              
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
