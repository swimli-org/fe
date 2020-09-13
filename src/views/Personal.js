import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/User.css'


export default function User() {
    return (
        <div className="container">
            <div className="user-tabs-container">
                <div className="user-tabs-title">Hey, First Name!</div>
                <Link to='/overview'><div className="user-tabs">Overview</div></Link>
                <Link to='/personal'><div className="user-tabs-active">Personal</div></Link>
                <Link to='/orders'><div className="user-tabs">Orders</div></Link>
                <Link to='/autoship'><div className="user-tabs">Autoship</div></Link>
                <Link to='/addresses'><div className="user-tabs">Addresses</div></Link>
                <Link to='/paymentmethods'><div className="user-tabs">Payment Methods</div></Link>
                <Link to='/mypool'><div className="user-tabs">My Pool</div></Link>
            </div>
            <div className="user-content-container">
                <div className='user-title'>My Account</div>

                <div className='personal-tab'>
                    <div className='personal-title'>Name</div>
                    <div className='personal-description'>
                        users first and last name
                        <span>Change Name</span>
                    </div>
                </div>
                <div className='personal-tab'>
                    <div className='personal-title'>Address</div>
                    <div className='personal-description'>
                        Street Address<br />
                        Apt # (if applicable)<br />
                        City, State abbreviation, Zip Code
                        <span>Update Address</span>
                    </div>
                </div>
                <div className='personal-tab'>
                    <div className='personal-title'>Email</div>
                    <div className='personal-description'>
                        users email
                        <span>Update Email</span>
                    </div>
                </div>
                <div className='personal-tab'>
                    <div className='personal-title'>Password</div>
                    <div className='personal-description'>
                        ************
                        <span>Change Password</span>
                    </div>
                </div>
                <div className='personal-tab'>
                    <div className='personal-title'>Deactivation</div>
                    <div className='personal-description'>
                        This cannot not be undone.
                        <span>Deactive Account</span>
                    </div>
                </div>








            </div>
        </div>
    )
}