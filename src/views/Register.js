import React from 'react'
import RegisterForm from '../components/RegisterForm'
import {
    Link,
    useHistory,
  } from "react-router-dom";

export default function Register(props) {
    const history = useHistory();
    return (
        <div className="container">
          <h1>Create an Account</h1>
          <RegisterForm history={history}/>
          Already have an account? <Link to='/login'>Sign in</Link>
        </div>
    )
}
