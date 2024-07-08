import React from 'react'

const MissionText = () => {
  return (
    <div>
    <div className='flex min-h-[600px] justify-evenly items-center flex-col py-24 gap-5'>
        <div className='flex justify-center flex-col items-start sm:w-[50%] w-[75%]'>
            <h2 className='text-lg font-bold'>Welcome to Marketing Agency</h2>
            <p>At Marketing Agency, we are passionate about crafting compelling content that resonates with audiences across diverse platforms. Founded on the belief that effective marketing should inspire,
                educate, and engage, we specialize in delivering impactful solutions tailored to meet the unique needs of each client.</p>
         </div>
         <div className='flex justify-center flex-col items-start sm:w-[50%] w-[75%]'>
            <h2 className='text-lg font-bold'>Our Mission</h2>
            <p>Our mission at Marketing Agency is to empower businesses and brands to thrive in a dynamic digital landscape. We combine creativity with strategic insights to create campaigns that not only drive results but also leave a lasting impression.</p>
         </div>
    </div>
    <div className='flex min-h-[100px] py-12 p-6 sm:p-3 flex-col sm:flex-row gap-5 sm:gap-2 bg-gray-600 text-white justify-around items-center'>
        <p>Discover how Marketing Agency can elevate your brand’s presence and drive growth. Contact us today to discuss your marketing goals and explore how we can collaborate to achieve success together.</p>
        <button className='btn text-black hover:bg-accent transition-all duration-300 ease-linear'>Contact</button>
    </div>
    </div>
  )
}

export default MissionText
