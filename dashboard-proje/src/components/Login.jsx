import React from 'react'
import '../Styles/Login.css';
import { FaGoogle } from "react-icons/fa";
const Login = () => {
  return (
    <div className='Container'>
        <div className='Text-concatenate'>
          <div><i className='M-text'>m</i></div>
          <span className='Mg-text'>Magio</span>
          </div>
          <div className='form-container'>
            <form>
              <div className='text-top'>
              <h2>Welcome Back</h2>
              
              <p>Welcome back. Please your enter details</p>
              </div>
             

            
               <br></br>


<label>
 Email
 <input type='Email' placeholder='Enter your Email' className='input-1'></input>
</label>

            <br></br>

            <label>
 Password
 <input type='Password' placeholder='******' ></input>
</label>

           
            <div className='Text-middle'>
            <span>Remember 30 days</span>
           <span>Forgot Password</span>
            </div>
           

    <button className='Sign-btn'>Create Account</button>

    <br></br>
     <button className='Google-button'> <FaGoogle /> Sign up with Google</button>

     <br></br>
     <p class="Text">Don't have a account <a href='#' class="Sign-text">Sign up for free</a></p>
            </form>
          </div>
        </div>
   
  )
}

export default Login
