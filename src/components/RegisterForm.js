import React from 'react'
import { Formik } from 'formik';
import '../styles/User.css'

  

const RegisterForm = (props) => (
    <>
    {console.log(props)}

      <Formik
        initialValues={{ fName:'', lName:'',email: '', password: '' }}
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
          props.history.push('/')
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
              name="fName"
              className="registerFormInput"
              placeholder="First Name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.fName}
            />
            {errors.fName && touched.fName && errors.fName}
            <input
              type="text"
              name="lName"
              className="registerFormInput"
              placeholder="Last Name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.lName}
            />
            {errors.lName && touched.lName && errors.lName}
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
              Create your Swimli account
            </button>
          </form>
        )}
      </Formik>
      </>
  );
  export default RegisterForm
  
