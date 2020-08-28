import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/User.css'


export default function User() {
    return (
        <div className="container">
            <div className="user-tabs-container">
                <div className="user-tabs-title">Guest</div>
                <Link to='/account'><div className="user-tabs-active">Account</div></Link>
                <Link to='/orders'><div className="user-tabs">Orders</div></Link>
                <Link to='/autoship'><div className="user-tabs">Autoship</div></Link>
                <Link to='/addresses'><div className="user-tabs">Addresses</div></Link>
                <Link to='/paymentmethods'><div className="user-tabs">Payment Methods</div></Link>
                <Link to='/mypool'><div className="user-tabs">My Pool</div></Link>
            </div>
            <div className="user-tabs-content-container">
                My Account
            </div>
        </div>
    )
}
