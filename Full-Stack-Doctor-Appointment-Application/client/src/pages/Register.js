import React from 'react';
import Lottie from 'lottie-react';
import doc from '../doc.json';


function Register() {
  return (
    <div className='container row hel'>
      <div className='col-5 second_cont'>
      <Lottie class loop={true} animationData={doc} />
     </div>
       <div className='col-6 first_cont text '>
       <form>
       
        <h3 className='sign'>Sign Up</h3>
        
        <div className="mb-3 padd">
          <label>Email addr</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        <div className="mb-3 padd">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        <div className="mb-3 padd">
          <div className="custom-control custom-checkbox padd">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label padd" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>
        <div className="d-grid padd">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
        <p className="forgot-password text-right padd">
          Forgot <a href="#">password?</a>
        </p>
      </form>
       </div>
     
    </div>
  );
} 

export default Register;
