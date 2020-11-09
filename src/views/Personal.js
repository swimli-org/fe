import React, {useState, useEffect} from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'
import '../styles/Account.css';


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
      <div className='accountTabBarContainer'>
        <div className='accountTabBar'>
          <Link to='/overview'>
            <div className='accountTab' className='hidden'>Overview</div>
          </Link>
          <Link to='/personal'>
            <div className='accountTabActive'>Personal Info</div>
          </Link>
          <Link to='/orders'>
            <div className='accountTab'>Orders</div>
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
      <div className='accountTitle'>Personal Info</div>
      <div className='accountTitleAction'>
        <button onClick={() => setIsEditing(!isEditing)} className='accountTitleActionButton'>{isEditing?"Update":"Edit"}</button>
        {isEditing?<button className='accountTitleActionButton' onClick={() => setIsEditing(false)}>Cancel</button>:null}
      </div>
      


        <div className='accountRoundedContainer'>
          <div className='personalTab'>
            <div className='personalTabTitle'>
              Name
            </div>
            <div className='personalTabContent'>
              {isEditing?
                <span>
                  <input className='personalTabContentInputHalf' type="text" placeholder="First Name"/>
                  <input className='personalTabContentInputHalf' type="text" placeholder="Last Name"/>
                </span>
              :userInfo.first_name + ' ' + userInfo.last_name}
            </div>
          </div>
          <div className='personalTab'>
            <div className='personalTabTitle'>
              Address
            </div>
            <div className='personalTabContent'>
              2963 N Penstemon St.<br />
              Wichita, KS 67226 <b>(REPLACE)</b>
            </div>
          </div>
          <div className='personalTab'>
            <div className='personalTabTitle'>
              Email
            </div>
            <div className='personalTabContent'>
              {isEditing?<input className='personalTabContentInput' type="text" placeholder="Enter New Email"/>:userInfo.email}
            </div>
          </div>
          <div className='personalTab'>
            <div className='personalTabTitle'>
              Password
            </div>
            <div className='personalTabContent'>
              {isEditing?
                <span>
                  <input className='personalTabContentInputHalf' type="text" placeholder='New Password'value=""/>
                  <input className='personalTabContentInputHalf' type="text" placeholder='Confirm New Password'value=""/>
                </span>
              :"**********"}
            </div>
          </div>
        </div>
        <div className='accountRoundedContainer'>
          <div className='personalTab'>
            <div className='personalTabTitle'>
              Deactivate
            </div>
            <div className='personalTabContent'>
              This cannot be undone.
              <div className='personalTabContentAction'>Delete Account</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}