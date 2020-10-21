import React, {useEffect} from 'react';
import { Formik } from 'formik';
import axios from 'axios'
import {
    Link,
    useHistory,
  } from "react-router-dom";

/*import '../styles/User.css'*/



export default function Login (props) {
    const history =useHistory();
    
    useEffect(() => {
      window.scrollTo(0, 0)
    });
  
    return (
    <div className="container">
    {console.log("PROPS",props)}
      <div className='primary-title'>Forgot your Password?</div>

      <div className='primary-container'>
        <form>
            <input
                type="email"
                name="email"
                className="primary-form"
                placeholder="Email"
            />
            <button
                type="submit"
                className="primary-btn">
                Send Email
            </button>
        </form>
      </div>

      <div className='secondary-container'>
        <button type="submit" className="secondary-btn" onClick={()=>history.push('/signin')}>
          Sign In
        </button>
      </div>
    </div>
  )};
