import React from 'react';
import first from '../first.json';
import Lottie from 'lottie-react';
import second from '../second.png';
function Login() {
  return (
    <div className='container row hel'>
      
       <div className='col-6 first_cont text '>
       <form>
       
       
        
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
       <img src={second} className='imgg'/>
     <div className='col-5 second_cont'>
      <Lottie class="lot" loop={true} animationData={first} />
     </div>
    </div>
    
    
  );
} 

export default Login;
