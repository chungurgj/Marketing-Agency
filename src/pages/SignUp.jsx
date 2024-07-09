import React from 'react';
import Facebook from '../img/facebook-login.png'
import Google from '../img/google.png'
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const navigate = useNavigate()

  return (
    <div className="signup-background flex justify-center items-center">
      <div className='min-h-[620px] auth-container lg:py-10 bg-white shadow-lg rounded-xl flex flex-col justify-evenly items-center'>
        <h2 className='text-xl font-semibold'>Sign up</h2>
        <form className='flex flex-col gap-4  p-5'>
            <div className='flex flex-col'>
            <label htmlFor="username">Username</label>
            <input type="text" id='username' placeholder='Username' className='shadow appearance-none border rounded py-2 px-3'/>
            </div>
            <div className='flex flex-col'>
            <label htmlFor="password">Password</label>
            <input type="password" id='password' placeholder='Password' className='shadow appearance-none border rounded py-2 px-3'/>
            </div>
            <div className='flex flex-col'>
            <label htmlFor="rpassword">Repeat password</label>
            <input type="password" id='rpassword' placeholder='Password' className='shadow appearance-none border rounded py-2 px-3'/>
            </div>
            <button className='btn bg-cyan-600 rounded text-white hover:bg-rose-500 transition-all hover:rounded-full duration-200 ease-linear'>Sign up</button>
        </form>
        
        <div className='flex flex-col justify-center items-center'>
        <h5>Marketing Agency</h5>
        <small className='underline cursor-pointer' onClick={()=>navigate('/login')}>Log in</small>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
