import React from 'react';
import  rem from '../rem.png';
import axios from 'axios';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
function Register() {
  const navigate = useNavigate();
   const onFinish =async(values)=>{
    try {
      const response = await axios.post('http://localhost:5000/api/user/register',values);
      if(response.data.success){
        toast.success(response.data.message)
        toast.success('Register Successfully')
        navigate('/login')}
        else{
          toast.error(response.data.message)
        }
    } catch (error) {
      toast.error('Something went wrong')
    }

   }
  return (
    <div className='container hel'>
      <div className='col-4'>
      <img src={rem} className='img'/>
      </div>
      
       <div className='col-8  text firstt_cont' onfinish={onFinish}>
     
       <div className="mb-3">
         <label>Email address</label>
         <input
           type="email"
           className="form-control "
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
         <button type="submit" className="btn btn-dark" htmlType="submit">
           Submit
         </button>
       </div>
       <p className="forgot-password text-right forgot below__text ">
         Have an Account ? <Link to = "/login"> 
   Login Now
</Link>
       </p>
      
     
      </div>
      
       
     
    </div>
    
    
  );
} 

export default Register;
