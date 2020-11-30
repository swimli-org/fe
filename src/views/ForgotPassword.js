import React, {useEffect} from 'react';
import { Formik } from 'formik';
import axios from 'axios';
import { Link, useHistory, } from "react-router-dom";

// Assets
import logo from '../assets/logoBlue.png';

// CSS
import '../styles/User.css';



export default function Login (props) {
    const history =useHistory();
    
    useEffect(() => {
      window.scrollTo(0, 0)
      document.title = "Forgot Password | Swimli"
    });
  
    return (
    <div className="sign-in">
      <div className="sign-in-container">
        {console.log("PROPS",props)}
        <div className="sign-in-logo">
          <Link to="/">
            <img src={logo} />
          </Link>
        </div>
        <div className='sign-in-title'>Forgot Your Password?</div>

        <div className='sign-in-form'>
          <form>
              <input
                  type="email"
                  name="email"
                  className="sign-in-input"
                  placeholder="Email"
              />
              <button
                  type="submit"
                  className="sign-in-btn">
                  Send Email
              </button>
          </form>
          <p></p>
          <Link to="/sign-in/">
            <button className="create-account-btn">
              Sign In
            </button>
          </Link>

          <Link to="/create-an-account/">
            <button className="create-account-btn">
              Create An Account
            </button>
          </Link>
        </div>
      </div>
    </div>
  )};
