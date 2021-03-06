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
      document.title = "Sign In | Swimli"
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
        <div className="sign-in-title">Sign In</div>

        <div className='sign-in-form'>
          <Formik
            initialValues={{ email: '', password: '' }}
            validate={values => {
              const errors = {};
              if (!values.email) {
                errors.email = 'Required';
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = 'Invalid email address';
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
          
              axios.post(`https://swimli.herokuapp.com/users/login`, values)
              .then(res=>{
                console.log(res)
                localStorage.swimliFirstName = res.data.first_name
                localStorage.swimliLastName = res.data.last_name
                localStorage.swimliUserId = res.data.id
                localStorage.swimliToken = res.data.token
                if(localStorage.swimliToken){
                history.push('/')
                }
                
              })
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              /* and other goodies */
            }) => (
              <form onSubmit={handleSubmit}>
                <input
                  type="email"
                  name="email"
                  className="sign-in-input"
                  placeholder="Email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                {errors.email && touched.email && errors.email}
                <input
                  type="password"
                  name="password"
                  className="sign-in-input"
                  placeholder="Password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                {errors.password && touched.password && errors.password}
                <button
                  type="submit"
                  className="sign-in-btn"
                  disabled={isSubmitting}>
                  Sign In
                </button>
              </form>
            )}
          </Formik>
          <Link to="/forgot-password/">
            <div className="forgot-password">
              Forgot Password?
            </div>
          </Link>
          <p>New Here?</p>
          <Link to="/create-an-account/">
            <button className="create-account-btn">
              Create An Account
            </button>
          </Link>
        </div>
      </div>
    </div>
  )};