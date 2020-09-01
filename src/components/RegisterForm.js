import React from 'react'
import { Formik } from 'formik';
import axios from 'axios'
/*import '../styles/User.css'*/



const RegisterForm = (props) => (
    <>
    {console.log(props)}

    <div className='primary-title'>Sign in to Swimli</div>

      <div className='primary-container'>

      <Formik
        initialValues={{ first_name:'', last_name:'',email: '', password: '' }}
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
       
          axios.post(`https://swimli.herokuapp.com/users/register`, values)
          .then(res=>{
            console.log(res)
            localStorage.swimliFirstName = res.data.first_name
            localStorage.swimliLastName = res.data.last_name
            localStorage.swimliUserId = res.data.id
            localStorage.swimliToken = res.data.token
            if(localStorage.swimliToken){
            props.history.push('/')
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
            <div className='primary-input-title'>First Name:</div>
              <input
              type="text"
              name="first_name"
              className="primary-form"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.first_name}
            />
            {errors.first_name && touched.first_name && errors.first_name}
            <div className='primary-input-title'>Last Name:</div>
            <input
              type="text"
              name="last_name"
              className="primary-form"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.last_name}
            />
            {errors.last_name && touched.last_name && errors.last_name}
            <div className='primary-input-title'>Email:</div>
            <input
              type="email"
              name="email"
              className="primary-form"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            {errors.email && touched.email && errors.email}
            <div className='primary-input-title'>Password:</div>
            <input
              type="password"
              name="password"
              className="primary-form"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            {errors.password && touched.password && errors.password}
            <button
              type="submit"
              className="primary-btn"
              disabled={isSubmitting}
            >
              Create your Swimli account
            </button>
          </form>
        )}
      </Formik>
      </div>
      </>
  );
  export default RegisterForm
