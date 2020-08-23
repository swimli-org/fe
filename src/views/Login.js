import React from 'react'
import {Link} from 'react-router-dom'

export default function Login() {
    return (
        <div className="container">
            <h1>Sign in to your Swimli Account</h1>
            New to Swimli? <Link to='/register'>Register</Link>
        </div>
    )
}
