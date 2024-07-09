import React from 'react'

const ServiceCards = () => {
  return (
    <div className='flex flex-col lg:flex-row justify-center items-center bg-gray-100 card-padding gap-3'>
      <Card title={'Starter package'} price={'499'} height={'lg:min-h-[400px]'} textColor={'text-green-300'} 
      des={'Ideal for startups and small businesses looking to establish their online presence.Includes basic website design, social media setup, and content strategy consultation.'}
      features={['Customizable website template','Social media account setup (Facebook, Instagram)','Basic SEO optimization']}/>
      <Card title={'Premium package'} price={'1699'} height={'lg:min-h-[500px]'} textColor={'text-green-600'}
      des={'Designed for businesses aiming to expand their reach and increase engagement. Includes advanced digital marketing strategies and ongoing analytics to optimize performance.'}
      features={['Custom website design and development','Advanced SEO and PPC management', 'Social media management (content creation and posting)'
        ,'Monthly performance reviews and strategy sessions','Email marketing automation and campaign management'
      ]}/>
      <Card title={'Growth package'} price={'999'} height={'lg:min-h-[430px]'} textColor={'text-green-400'}
      des={'Comprehensive solution for established businesses seeking maximum online visibility and customer engagement. Offers full-scale digital marketing services with dedicated account management.'}
      features={['Tailored digital marketing campaign','Monthly content calendar and strategy','SEO audit and optimization','Performance analytics and reporting']}/>
    </div>
  )
}

export default ServiceCards

const Card = ({title,price,height,textColor,des,features}) =>(
    <article className={`hover:-translate-y-6 duration-200  transition-all ease-linear rounded-xl  card flex flex-col  w-[90%] md:w-[70%] lg:w-[30%] min-h-[500px] ${height}`}>
        <div className='bg-gray-900 text-white  p-3 flex justify-around rounded-t-xl'>
            <h2>{title}</h2>
            <p className={`${textColor}`}>{price}$/month</p>
        </div>
        <div className='bg-gray-300  p-5'>
            {des}
        </div>
        <div className='grid gap-1 grid-cols-2 m-5'>
        {features?.map((feature,index)=>{
            const elongate = index % 2 === 0 && index === features.length -1;
            return (
            <p className={`${price === '499' ? 'bg-green-50' : price === '999'
                ? 'bg-green-100' : 'bg-green-200'
            } text-sm sm:text-md p-3 ${elongate ? 'col-span-2' : ''}`} key={index}>{feature}</p>
        )
        })}
        
        </div>
        <button className='btn bg-gray-600 mt-auto hover:bg-accent transition-all duration-300  ease-linear text-white rounded-b-xl'>See full</button>
      </article>
)