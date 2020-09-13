import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/User.css'


import uc from '../assets/UnderConstruction.png'


export default function User() {
    return (
        <div className="container">
            <div className='user-account-title'>
                Account
            </div>
            <img src={uc} style = {{width: '100%'}}></img>
        </div>
    )
}