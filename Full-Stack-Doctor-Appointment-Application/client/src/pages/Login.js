import React from 'react';
import Particles from 'react-particles';
import doc from '../doc.json';
import Lottie from 'lottie-react';

function Login() {
  return (
    <div className='container row hel'>
      
       
     
       <div className='col-6 first_cont text '>
       <form>
       
        <h3 className='sign'>Login </h3>
        
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
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
        <Particles 
        params={{ 
          particles: { 
            number: { 
              value: 200, 
              density: { 
                enable: true, 
                value_area: 1000, 
              } 
            }, 
          }, 
        }} 
      /> 
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
        <p className="forgot-password text-right forgot ">
          Forgot <a href="#">password?</a>
        </p>
      </form>
       </div>
       
     <div className='col-5 second_cont'>
      <Lottie class="lot" loop={true} animationData={doc} />
     </div>
    </div>
    
    
  );
} 

export default Login;
