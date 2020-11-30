import React, {useEffect} from 'react';
import {Link} from 'react-router-dom'

//Import CSS
import '../styles/Account.css';

//Import Components
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';


export default function Example()  {
    
  useEffect(() => {
    window.scrollTo(0, 0)
  });

  useEffect(() => {
    document.title = "My Pool - Account | Swimli"
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
              <div className="account-tab">Payment Methods</div>
            </Link>
            <Link to="/my-pool">
              <div className="account-tab-active" className="hidden">My Pool</div>
            </Link>
          </div>
        </div>

        <div className="account-container">
        <div className="account-title">My Pool</div>
          <div className="account-rounded-tab-container">

          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}