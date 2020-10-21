import React, {useEffect} from 'react';
import RegisterForm from '../components/RegisterForm'
import {
    Link,
    useHistory,
  } from "react-router-dom";

export default function Register(props) {
    const history = useHistory();
    
    useEffect(() => {
      window.scrollTo(0, 0)
    });
  
    return (
        <div className="container">
          <RegisterForm history={history}/>

          <div className='secondary-container'>
          <div className='secondary-title'>Have an account?</div>
            <button type="submit" className="secondary-btn" onClick={()=>history.push('/signin')}>
              Sign in to Your Account
            </button>
          </div>
        </div>
    )
}



