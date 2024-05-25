import React from 'react';
import reg from '../reg.json';
import Lottie from 'lottie-react';
import  rem from '../rem.png';
function Login() {
  return (
    <div className='container row hel'>
      <img src={rem} className='img'/>
      <div className='col-6'>
      
      <Lottie class="lot2" loop={true} animationData={reg} />
     </div>
       <div className='col-6  text firstt_cont'>
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
         Have an Account ? <a href="./login">Login Now</a>
       </p>
      
     </form>
      </div>
      
       
     
    </div>
    
    
  );
} 

export default Login;
