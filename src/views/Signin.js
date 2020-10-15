import React from 'react'
import { Divider } from 'antd';
import { Formik } from 'formik';
import axios from 'axios'
import {
    Link,
    useHistory,
  } from "react-router-dom";
  
import '../styles/User.css'

import logoBlue from '../assets/logoBlue.png'




export default function Login (props) {
    const history =useHistory();
    return(
    <div className="fullscreen-container">
      
      
      <div id="fb-root"></div> <script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v8.0" nonce="gqahfPBc"></script>
      
      
      {console.log("PROPS",props)}
      <div className="fullscreen-header">
        <img src={logoBlue} className='fullscreen-header-logo' alt='Logo'></img>
      </div>



      <div className="signin-register-outer-container">
        <div className='signin-register-inner-container'>
          <div className='signin-register-inner-title'>Sign in</div>

          <div class="fb-login-button" data-size="large" data-button-type="continue_with" data-layout="default" data-auto-logout-link="false" data-use-continue-as="false" data-width=""></div>
       
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
          // and other goodies
        }) => (
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              className="signin-register-form-input"
              placeholder="Email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            {errors.email && touched.email && errors.email}
            <input
              type="password"
              name="password"
              className="signin-register-form-input"
              placeholder="Password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            {errors.password && touched.password && errors.password}
            <button
              type="submit"
              className="signin-register-form-btn"
              disabled={isSubmitting}>
              Sign In
            </button>
            <div className="signin-register-form-forgot">
              <Link to='/forgotpassword'>
                <p>Forgot Password?</p>
              </Link>
            </div>
          </form>
        )}
        </Formik>

    <hr></hr>
    <button type="submit" className="signin-register-switch-btn" onClick={()=>history.push('/register')}>
      Create your Account
    </button>



    </div>
    </div>
    </div>
  )};



/*

/*


  <div className='primary-container'>
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
        // and other goodies
      }) => (
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            className="primary-form"
            placeholder="Email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          {errors.email && touched.email && errors.email}
          <input
            type="password"
            name="password"
            className="primary-form"
            placeholder="Password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
          {errors.password && touched.password && errors.password}
          <Link to='/forgotpassword'>
            <p>Forgot Password?</p>
          </Link>
          <button
            type="submit"
            className="primary-btn"
            disabled={isSubmitting}>
            Sign In
          </button>
        </form>
      )}
    </Formik>
  </div>

  <div className='secondary-container'>
  <div className='secondary-title'>New to Swimli?</div>
    <button type="submit" className="secondary-btn" onClick={()=>history.push('/register')}>
      Create your Account
    </button>
  </div>
*/