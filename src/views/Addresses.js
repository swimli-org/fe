import React from 'react'
import {Link} from 'react-router-dom'

export default function User() {
    return (
        <div className="container">
            <div className="user-tabs-container">
                <div className="user-tabs-title">Hey, First Name!</div>
                <Link to='/overview'><div className="user-tabs">Overview</div></Link>
                <Link to='/personal'><div className="user-tabs">Personal</div></Link>
                <Link to='/orders'><div className="user-tabs">Orders</div></Link>
                <Link to='/autoship'><div className="user-tabs">Autoship</div></Link>
                <Link to='/addresses'><div className="user-tabs-active">Addresses</div></Link>
                <Link to='/paymentmethods'><div className="user-tabs">Payment Methods</div></Link>
                <Link to='/mypool'><div className="user-tabs">My Pool</div></Link>
            </div>
            <div className="user-content-container">
                <div className='user-title'>Addresses</div>
            </div>
        </div>
    )
}