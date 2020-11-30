import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

// Components
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';

// CSS
import '../styles/Account.css';
import '../styles/App.css';


export default function Account()  {
  const[userInfo, setUserInfo]=useState({})
  const[isEditing, setIsEditing]=useState(false)
    let userId = localStorage.getItem('swimliUserId')
  useEffect(() => {
    axios.get(`https://swimli.herokuapp.com/users/${userId}`).then(response =>{
      console.log(response.data)
      setUserInfo(response.data)
    })
  }, []);


  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = "Personal Info - Account | Swimli"
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
              <div className="account-tab-active">Personal Info</div>
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
              <div className="account-tab" className="hidden">My Pool</div>
            </Link>
          </div>
        </div>

        <div className="account-container">
        <div className="account-title">Personal Info</div>
        <div className="account-title-action">
          <button onClick={() => setIsEditing(!isEditing)} className="account-title-action-button">{isEditing?"Update":"Edit"}</button>
          {isEditing?<button className="account-title-action-button" onClick={() => setIsEditing(false)}>Cancel</button>:null}
        </div>
        


          <div className="account-rounded-container">
            <div className="personal-tab">
              <div className="personal-tab-title">
                Name
              </div>
              <div className="personal-tab-content">
                {isEditing?
                  <span>
                    <input className="personalTabContentInputHalf" type="text" placeholder="First Name"/>
                    <input className="personalTabContentInputHalf" type="text" placeholder="Last Name"/>
                  </span>
                :userInfo.first_name + ' ' + userInfo.last_name}
              </div>
            </div>
            <div className="personal-tab">
              <div className="personal-tab-title">
                Address
              </div>
              <div className="personal-tab-content">
                2963 N Penstemon St.<br />
                Wichita, KS 67226 <b>(REPLACE)</b>
              </div>
            </div>
            <div className="personal-tab">
              <div className="personal-tab-title">
                Email
              </div>
              <div className="personal-tab-content">
                {isEditing?<input className="personal-tab-content-input" type="text" placeholder="Enter New Email"/>:userInfo.email}
              </div>
            </div>
            <div className="personal-tab">
              <div className="personal-tab-title">
                Password
              </div>
              <div className="personal-tab-content">
                {isEditing?
                  <span>
                    <input className="personal-tab-content-input-half" type="text" placeholder="New Password" />
                    <input className="personal-tab-content-input-half" type="text" placeholder="Confirm" />
                  </span>
                :"**********"}
              </div>
            </div>
          </div>
          <div className="account-rounded-container">
            <div className="personal-tab">
              <div className="personal-tab-title">
                Deactivate
              </div>
              <div className="personal-tab-content">
                <div className="personal-tab-content-action">Delete Account</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}