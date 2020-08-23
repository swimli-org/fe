import React from 'react'

export default function User() {
    return (
        <div className="container">
            <div className="user-tabs-container">
                <div className="user-tabs-title">Guest</div>
                <div className="user-tabs-active">Account</div>
                <div className="user-tabs">Orders</div>
                <div className="user-tabs">Autoship</div>
                <div className="user-tabs">Addresses</div>
                <div className="user-tabs">Payment Methods</div>
                <div className="user-tabs">My Pool</div>
            </div>
            <div className="user-tabs-content-container">
                My Account
            </div>
        </div>
    )
}
