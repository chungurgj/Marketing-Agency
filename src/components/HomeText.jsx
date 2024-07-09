import HomeImg from '../img/hometextimg.png'
import { useNavigate } from 'react-router-dom'

const HomeText = () => {
  const navigate = useNavigate()

  return (
    <div className='flex flex-col sm:flex-row gap-10 sm:gap-0 p-16 justify-around items-center'>
        <div className='flex flex-col gap-4'>
            <h2 className='text-2xl'>Unlock Your Potential with Effective Marketing</h2>
            <p className='max-w-[700px] '>In today's fast-paced digital landscape, effective marketing isn't just beneficial—it's essential. Whether you're a startup aiming to build brand awareness or an established business seeking growth, strategic marketing is your key to reaching and engaging your target audience. At [Your Agency Name], we empower businesses 
            with tailored marketing solutions that drive results. Discover how our expertise can propel your success in the digital era.</p>
            <button className='btn bg-green-500 hover:bg-green-800 hover:text-white duration-300 ease-linear transition-all'
            onClick={()=>navigate('/services')}>Time is money. Start now.</button>
        </div>
        <img src={HomeImg} height={300} width={300}  />
    </div>
  )
}

export default HomeText
