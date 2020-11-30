import React, {useEffect} from 'react';
import { Link, useHistory, } from "react-router-dom";
import { Formik } from 'formik';
import axios from 'axios';

// Assets
import logo from '../assets/logoBlue.png';

export default function Register(props) {
    const history = useHistory();
    
    useEffect(() => {
      window.scrollTo(0, 0)
      document.title = "Register | Swimli"
    });
  
    return (
      <div className="sign-in">
      <div className="sign-in-container">
        <div className="sign-in-logo">
          <Link to="/">
            <img src={logo} />
          </Link>
        </div>
        <div className="sign-in-title">Create an Account</div>

        <div className="sign-in-form">
          <Formik
            initialValues={{ first_name: "", last_name: "", email: "", password: "" }}
            validate={values => {
              const errors = {};
              if (!values.email) {
                errors.email = "Required";
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = "Invalid email address";
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
          
              axios.post(`https://swimli.herokuapp.com/users/register`, values)
              .then(res=>{
                console.log(res)
                localStorage.swimliFirstName = res.data.first_name
                localStorage.swimliLastName = res.data.last_name
                localStorage.swimliUserId = res.data.id
                localStorage.swimliToken = res.data.token
                if(localStorage.swimliToken){
                props.history.push( "/" )
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
                  type="text"
                  name="first_name"
                  className="sign-in-input"
                  placeholder="First Name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.first_name}
                />
                {errors.first_name && touched.first_name && errors.first_name}
                <input
                  type="text"
                  name="last_name"
                  className="sign-in-input"
                  placeholder="Last Name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.last_name}
                />
                {errors.last_name && touched.last_name && errors.last_name}
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
                  disabled={isSubmitting}
                >
                  Create your Swimli account
                </button>
              </form>
            )}
          </Formik>
          
          <p>Already Have an Account?</p>
          <Link to="/sign-in/"><button className="create-account-btn">Sign In</button></Link>
        </div>
      </div>
    </div>
  )};