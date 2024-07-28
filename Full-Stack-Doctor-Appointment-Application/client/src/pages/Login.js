import React from 'react';


import toast from 'react-hot-toast';

import { response } from 'express';

function Login() {

 const onFinish = async(values) => {
  
    try {
      toast.success('Login Successfully');
      toast.success("Redirectiing to home page");
      localStorage.setItem('token',response.data.token);
      
    } catch (error) {
      toast.error('Something went wrong');
    }
 }


  return (
    <div className='container row hel'>
      
       <div className='col-6 first_cont text '>
       <form onfinish={onFinish}>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control "
            placeholder="Enter email"
            onfocus="(backgroundColor='black')"
          />
        </div>
        <div className="mb-3 ">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        
        <div className="mb-3 ">
          <div className="custom-control custom-checkbox ">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label check" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>
        <div className="d-grid ">
          <button type="submit" className="btn btn-dark">
            Submit
          </button>
        </div>
        <p className="forgot-password text-right forgot below__text ">
          Forgot <a href="#">password?</a>
        </p>
        <p className="forgot-password below_text ">
          Don't Have an Account ? <a href="./register">Register Now</a>
        </p>
      </form>
       </div>
      
     <div className='col-5'>
        <img className="imag" src='https://www.thewmch.com/wp-content/uploads/2023/02/female-doctor-using-her-digital-tablet-free-vector.jpg' alt='doctorimage' />
     </div>
    </div>
    
    
  );
} 

export default Login;
