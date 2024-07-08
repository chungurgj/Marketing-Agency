import React from 'react'

const AboutUsJumbo = () => {
  return (
    <div className='min-h-[500px] bg-green-200 flex flex-col justify-center items-center py-24 '>
      <h1 className='text-xl'>What sets us apart?</h1>
      <div className='grid sm:grid-cols-4 gap-3 m-6 sm:px-16  lg:w-[60%]'>
       <Fact span={'sm:col-span-2 md:col-span-1'} color={'bg-gray-200'}  title={'Strategic approach'} text={'We take a data-driven approach to marketing, ensuring every strategy is backed by insights and analytics.'}/>
       <Fact span={'sm:col-span-2 md:col-span-3'} color={'bg-blue-300'} title={'Creative Excellence'} text={'Our team of seasoned professionals brings a wealth of experience in creative storytelling and brand development.'}/>
       <Fact span={'sm:col-span-2'} color={'bg-coral'} title={'Client-Centric Focus'} text={'We prioritize building long-term relationships with our clients, understanding their goals, and exceeding their expectations.'}/>
       <Fact span={'sm:col-span-2'} color={'bg-orange-300'} title={'Industry Recognition'} text={'Proud recipients of [mention any awards or accolades], we are committed to excellence and innovation in everything we do.'}/>
       
      </div>
    </div>
  )
}

export default AboutUsJumbo

const Fact = ({span,title,color,text}) =>{

    return (<article className={`about-padding p-4 shadow-lg flex flex-col gap-3 ${span} ${color}`}>
        <h2 className='text-lg'>{title}</h2>
        <p>{text}</p>
    </article>)
}