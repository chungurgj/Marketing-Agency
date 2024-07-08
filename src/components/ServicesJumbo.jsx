import React, { useState } from 'react';

const starterPack = {
  'Starter Businesses': 'Tailored for new ventures aiming to establish a strong online presence. We focus on initial branding and attracting your first customers.',
  'Community Shops': 'Designed for local shops and stores to expand their reach online. We optimize local SEO and online listings for increased visibility.',
  'Solo Professionals': 'Ideal for freelancers and consultants looking to enhance their online reputation. We highlight your skills and services to attract clients.',
  'Online Retail Startups': 'Perfect for new e-commerce stores. We assist in setting up your online store and implementing marketing strategies to boost sales.',
  'Charity Organizations': 'Suited for nonprofits seeking to raise awareness and support. We help promote your cause and engage a broader audience.'
};

const growthPack = {
  'ScaleUp Startups': 'Accelerate growth for startups looking to expand online. We implement advanced marketing strategies to increase market reach and sales.',
  'Local Market Leaders': 'Help local businesses dominate their market. We optimize online presence and marketing campaigns to attract steady local customers.',
  'Consulting Experts': 'Elevate your consulting or freelance career with strategic marketing solutions. Position yourself as a leader in your niche market.',
  'Growing E-commerce Ventures': 'Drive growth for e-commerce stores. We deploy comprehensive marketing tactics to increase visibility and achieve sustainable growth.',
  'Impactful Nonprofits': 'Amplify your nonprofit impact. We create impactful marketing campaigns to raise funds, recruit volunteers, and expand outreach.'
};

const premiumPack = {
  'Premium Startups': 'Empower your startup with premium marketing strategies. We create bespoke campaigns to establish your brand as a leader in the market.',
  'Market Dominators': 'Dominate your local market with cutting-edge marketing techniques. Stand out and attract a steady flow of local customers.',
  'Elite Consultants': 'Elevate your consulting career with elite marketing services. Enhance visibility and credibility among top-tier clients.',
  'High-Performance E-commerce': 'Transform your online store into a high-performance platform. Implement advanced marketing methodologies to drive sales and growth.',
  'Impact-Driven Charities': 'Drive social change with impactful marketing. Amplify your message, engage supporters, and secure sustainable funding for your cause.'
};

const ServicesJumbo = () => {

  return (
    <div className='flex flex-col min-h-screen  bg-gray-100 justify-center items-center pt-8 pb-24'>
      <div className='mt-24 w-full flex flex-col gap-16 items-center'>
        <Package title={'Starter Package'} price={499} customer={Object.keys(starterPack)} des={Object.values(starterPack)} />
        <Package title={'Growth Package'} reverse price={999} customer={Object.keys(growthPack)} des={Object.values(growthPack)} />
        <Package title={'Premium Package'} price={1699} customer={Object.keys(premiumPack)} des={Object.values(premiumPack)} />
      </div>
    </div>
  );
};

const Package = ({ title, price, customer, des, reverse }) => {
  const [selected, setSelected] = useState(null);

  return (
    <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} justify-around w-full gap-5 px-5`}>
      <article className='min-h-[400px] bg-pink-100 lg:w-[30%] shadow-lg'>
        <div className='h-[40px] bg-gray-700 flex justify-around items-center text-white'>
          <h2 className='sm:text-lg'>{title}</h2>
          <p className='text-green-400 underline text-sm sm:text-md '>${price}/month</p>
        </div>
        <div className='grid grid-cols-2 gap-1 h-[90%] p-6 overflow-y-auto'>
          {customer?.map((key, index) => (
            <article
              key={index}
              className={`h-full hover:bg-green-400 hover:text-white  transition-all duration-200 p-4 lg:px-8 ease-linear cursor-pointer bg-white flex items-center justify-center ${index === customer.length - 1 ? 'col-span-2' : ''}`}
              onMouseEnter={() => setSelected(index)}
              onMouseLeave={() => setSelected(null)}
            >
              {key}
            </article>
          ))}
        </div>
      </article>

      <div className='flex flex-col justify-center items-start md:w-[40%]'>
        <ul className='max-w-full grid grid-cols-2 gap-4 '>
          {des?.map((value, index) => (
            <li key={index} className={`p-2 col-span-2 md:col-span-1 ${selected === index ? 'bg-accent text-white' : 'bg-gray-50'}`}>{value}</li>
          ))}
        </ul>
        <button className='btn bg-green-500 text-white mt-4 hover:bg-accent hover:text-black duration-300 transition-all ease-linear'>START NOW</button>
      </div>
    </div>
  );
};

export default ServicesJumbo;
