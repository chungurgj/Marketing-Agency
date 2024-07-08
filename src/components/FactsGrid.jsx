import React from 'react'

const FactsGrid = () => {
  return (
    <div className='grid gap-5 m-3 md:grid-cols-5 py-16 px-5 bg-gray-50'>
      <Fact color={'bg-coral'} span={'md:col-span-2'} title={'Mission statement'} text={'Empowering businesses with creative and data-driven marketing solutions to foster growth and meaningful connections.'}/>
      <Fact color={'bg-lavander'} span={'md:col-span-3'} title={'Services Offered'} text={'Comprehensive Digital Marketing Solutions: Our offerings span strategic planning, search engine optimization (SEO), social media management, pay-per-click (PPC) advertising, and branding. We integrate these services seamlessly to optimize your online presence and drive sustainable growth.'}/>
      <Fact color={'bg-mint'} span={'md:col-span-1'} title={'Unique Selling Proposition '} text={'Combining creative storytelling with data-driven insights for impactful, results-oriented campaigns.'}/>
      <Fact color={'bg-peach'} span={'md:col-span-2'} title={'Case Studies or Success Stories'} text={'Proven track record of delivering successful campaigns that drive engagement and achieve measurable results for our clients.'}/>
      <Fact color={'bg-gray-300'} span={'md:col-span-2'} title={'Craft Compelling Content That Resonates'} text={'We specialize in crafting compelling content tailored to resonate with your audience across various platforms. From engaging blogs and captivating social media posts to informative newsletters, we ensure your message stands out.'}/>
    </div>
  )
}

export default FactsGrid

const Fact = ({color, text, span,title}) =>{
  return (
    <article className={`fact rounded text-black ${color} ${span}`}>
      <h2 className='text-xl'>{title}</h2>
      <p>{text}</p>
      </article>
  )
}
