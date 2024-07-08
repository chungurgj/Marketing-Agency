import Instagram from '../img/instagram.png';
import Facebook from '../img/facebook.png';

const Footer = () => {
  return (
    <div className='flex min-h-[250px] bg-gray-800 text-white flex-col justify-between pt-16 lg:gap-8 items-end'>
      <div className='flex flex-col sm:flex-row sm:justify-around items-center w-full'>
        <h2 className='text-2xl text-center sm:text-left'>Marketing<br/> Agency</h2>
        <div className='flex justify-around w-full sm:w-auto mt-4 sm:mt-0 gap-5 mb-5'>
          <ul className='hover:cursor-pointer'>
            <li><a>Home</a></li>
            <li><a>Services</a></li>
            <li><a>About Us</a></li>
          </ul>
          <ul className='hover:cursor-pointer'>
            <li><a>Portfolio</a></li>
            <li><a>Contact Us</a></li>
            <li><a>Privacy Policy</a></li>
          </ul>
        </div>
      </div>
      <div className='flex justify-start py-5 px-10 items-center bg-gray-900 h-[30px] w-full'>
        <p className='text-xs text-gray-100'>Developed by: <a className='underline cursor-pointer' href='https://github.com/chungurgj'>Gjorgji Chungurski</a></p>
      </div> 
    </div>
  );
}

export default Footer;
