import React from 'react';
import Facebook from '../img/facebook-login.png'
import Google from '../img/google.png'
import { useNavigate } from 'react-router-dom';

const LogIn = () => {
    const navigate = useNavigate()

  return (
    <div className="login-background flex justify-center items-center">
      <div className='min-h-[450px] auth-container py-7 lg:py-10 bg-white shadow-lg rounded-xl flex flex-col justify-evenly items-center'>
        <h2 className='text-xl font-semibold'>Login</h2>
        <form className='flex flex-col gap-5  p-5'>
            <div className='flex flex-col'>
            <label htmlFor="username">Username</label>
            <input type="text" id='username' placeholder='Username' className='shadow appearance-none border rounded py-2 px-3'/>
            </div>
            <div className='flex flex-col'>
            <label htmlFor="password">Password</label>
            <input type="password" id='password' placeholder='Password' className='shadow appearance-none border rounded py-2 px-3'/>
            <small className='ml-auto underline mt-2 cursor-pointer'>Forgot password?</small>
            </div>
            <button className='btn bg-cyan-600 rounded text-white hover:bg-rose-500 transition-all hover:rounded-full duration-200 ease-linear'>Login</button>
        </form>
        <div className='flex flex-col gap-3 justify-center items-center'>
            <p>Or login with</p>
            <div className='flex gap-2'>
            <div className='flex justify-center items-center shadow-md rounded bg-slate-100 py-1 lg:w-[150px] gap-2'>
                <img src={Facebook} className='w-8 h-8 ' />
                <p className='text-sm'>Facebook</p>
            </div>
            <div className='flex justify-center items-center shadow-md rounded bg-slate-100 py-1 lg:w-[150px] gap-2'>
                <img src={Google} className='w-8 h-8 ' />
                <p className='text-sm'>Google</p>
            </div>
            </div>
        </div>
        <div className='flex flex-col justify-center items-center mt-7'>
        <h5>Marketing Agency</h5>
        <small className='underline cursor-pointer' onClick={()=>navigate('/signup')}>Sign up</small>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
