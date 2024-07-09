import React, { useState } from 'react';
import { starterPack, growthPack, premiumPack } from './PackageData';

const ServicesJumbo = () => {

  return (
    <div className='flex flex-col min-h-screen  bg-gray-100 justify-center items-center pt-8 pb-24'>
      <div className='mt-24 w-full flex flex-col gap-32 items-center'>
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
          {/* <li className='bg-accent flex justify-center items-center underline border'>View more</li> */}
        </ul>
        <button className='btn bg-green-500 text-white mt-4 hover:bg-accent hover:text-black duration-300 transition-all ease-linear'>START NOW</button>
      </div>
    </div>
  );
};

export default ServicesJumbo;
