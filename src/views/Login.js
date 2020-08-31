import React from 'react'
import { Formik } from 'formik';
import axios from 'axios'
import {
    Link,
    useHistory,
  } from "react-router-dom";

/*import '../styles/User.css'*/



export default function Login (props) {
    const history =useHistory();
    return(
    <>
    {console.log("PROPS",props)}


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
              className="registerFormInput"
              placeholder="Email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            {errors.email && touched.email && errors.email}
            <input
              placeholder='Password'
              type="password"
              name="password"
              className="registerFormInput"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            {errors.password && touched.password && errors.password}
            <button
              type="submit"
              className="registerFormButton"
              disabled={isSubmitting}
            >
              Sign In
            </button>
          </form>
        )}
      </Formik>
      </>
    )};
