import React from 'react'
import RegisterForm from '../components/RegisterForm'
import {
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation
  } from "react-router-dom";

export default function Register(props) {
    const history = useHistory();
    return (
        <div>
          <RegisterForm history={history}/>
        </div>
    )
}
