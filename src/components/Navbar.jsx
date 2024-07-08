import { useState } from 'react';
import Menu from '../img/menu.png'
import { useEffect } from 'react';
import Close from '../img/close-white.png'
import { useLocation } from 'react-router-dom';
const Navbar = () => {
    const [openSideMenu,setOpenSideMenu] = useState(false)
    const location = useLocation()

    useEffect(()=>{
        console.log(openSideMenu)
    },[openSideMenu])
  return (
    <div className='fixed top-0 z-50'>
        <div className={`fixed top-0 left-0 h-screen bg-secondary sm:hidden w-[65%] transform transition-all ease-in-out duration-300
        ${openSideMenu ? 'translate-x-0' : '-translate-x-full'}`}>
            <div className='flex flex-col justify-between h-[50%] '>
            <div className='flex justify-between items-center py-[19px] px-4 bg-primary'>
                <h2 className=' text-white px-2 p-1 rounded'>Marketing Agency</h2>
                <img src={Close} height={25} width={25} onClick={()=>setOpenSideMenu(false)}/> 
            </div>
           
            <ul className='flex flex-col justify-center items-center '>
                <li className='sidebar-element'><a>Home</a></li>
                <li className='sidebar-element'><a>About Us</a></li>
                <li className='sidebar-element'><a>Services</a></li>
            </ul>

            <ul className='flex justify-center gap-5'>
                <li><a className='bg-accent p-1 px-3 rounded text-white'>Log in</a></li>
                <li><a>Sign up</a></li>
            </ul>
            </div>
        </div>

        <nav className='flex w-screen p-4 bg-transparent text-black justify-center'>
        <div className='container flex px-5 sm:px-1 justify-between items-center w-full '>
            <a className='text-lg' href="/">Marketing Agency</a>
            <span className='menu-span ml-auto' onClick={()=>setOpenSideMenu(!openSideMenu)}><img src={Menu}/></span>
            
            <div className='flex justify-between items-center sm:w-full'>
            <ul className='justify-between gap-5 hidden sm:flex '>
                <li className={`nav-element ${location.pathname === '/' ? 'active' : ''}`}><a href="/">Home</a></li>
                <li className={`nav-element ${location.pathname.startsWith('/about') ? 'active' : ''}`}><a href="/about">About Us</a></li>
                <li className={`nav-element ${location.pathname.startsWith('/services') ? 'active' : ''}`}><a href="/services">Services</a></li>
            </ul>
            <div className='sm:flex hidden gap-5 items-center'>
                <a href="" className='bg-accent p-1 px-3 rounded '>Log in</a>
                <a href="">Sign up</a>
            </div>
            </div>
        </div>
        </nav>
    </div>
  );
}

export default Navbar;
