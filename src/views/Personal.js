import React, {useState, useEffect} from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'
import '../styles/Account.css';


export default function Example()  {
  const[userInfo, setUserInfo]=useState({})
  const[isEditing, setIsEditing]=useState(false)
    let userId = localStorage.getItem('swimliUserId')
  useEffect(() => {
    axios.get(`https://swimli.herokuapp.com/users/${userId}`).then(response =>{
      console.log(response.data)
      setUserInfo(response.data)
    })
  }, []);

  return (
    <div className="container">
      <div className='account-tab-bar-container'>
        <div className='account-tab-bar'>
          <Link to='/overview'>
            <div className='account-tab' className='hidden'>Overview</div>
          </Link>
          <Link to='/personal'>
            <div className='account-tab-active'>Personal Info</div>
          </Link>
          <Link to='/orders'>
            <div className='account-tab'>Orders</div>
          </Link>
          <Link to='/autoship'>
            <div className='account-tab'>Autoship</div>
          </Link>
          <Link to='/addresses'>
            <div className='account-tab'>Addresses</div>
          </Link>
          <Link to='/paymentmethods'>
            <div className='account-tab'>Payment Methods</div>
          </Link>
          <Link to='/mypool'>
            <div className='account-tab' className='hidden'>My Pool</div>
          </Link>
        </div>
      </div>

      <div className='account-container'>
  <div className='account-title'>Personal Info</div>
      
        <div className='account-rounded-tab-container'>
          <div className='personal-account-tab'>
            <div className='personal-account-tab-title'>
              Name
            </div>
            <div className='personal-account-tab-title-content'>
              {isEditing?<input type="text" placeholder="Enter New Name"/>:userInfo.first_name + ' ' + userInfo.last_name}
      
            </div>
          </div>
          <div className='personal-account-tab'>
            <div className='personal-account-tab-title'>
              Address
            </div>
            <div className='personal-account-tab-title-content'>
            {isEditing?<input type="text" placeholder="Add Address Here"/>:"User Address"}
            </div>
          </div>
          <div className='personal-account-tab'>
          <div className='personal-account-tab-title'>
              Email
            </div>
            <div className='personal-account-tab-title-content'>
            {isEditing?<input type="text" placeholder="Enter New Email"/>:userInfo.email}
      
            </div>
          </div>
          <div className='personal-account-tab'>
            <div className='personal-account-tab-title'>
              Password
            </div>
            <div className='personal-account-tab-title-content'>
            {isEditing?<input type="text" placeholder='Enter New Password'value=""/>:"********"}
            </div>
          </div>
          {/* <div className='personal-account-tab'>
          <div className='personal-account-tab-title'>
              Deactivate
            </div>
            <div className='personal-account-tab-title-content'>
              This cannot be undone.
              <span>Delete Account</span>
            </div>
          </div> */}
        </div>
        <button onClick={() => setIsEditing(!isEditing)} className='personal-account-edit-btn'>{isEditing?"Update":"Edit"}</button>
      {isEditing?<button className='personal-account-edit-btn' onClick={() => setIsEditing(false)}>Cancel</button>:null}
      </div>
    </div>
  )
}