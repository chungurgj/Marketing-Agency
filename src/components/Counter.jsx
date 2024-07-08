import Business from '../img/business.png';
import Campaign from '../img/campaign.png';
import Client from '../img/client.png';
import Revenue from '../img/revenue.png';
import Experience from '../img/experience.png';
import { useEffect, useRef, useState } from 'react';

const Counter = () => {
  return (
    <div className='grid m-3 gap-2 sm:grid-cols-4 md:w-[90vw] lg:w-[70vw] xl:w-[47vw] mx-auto p-16'>
      <Count span={'sm:col-span-2'} number={500} title={'Businesses Empowered'} image={Business} pink={'bg-pink-100'} />
      <Count span={'sm:col-span-2'} number={20000} title={'Campaigns Launched'} image={Campaign} pink={'bg-pink-200'} />
      <Count number={95} title={'Client Satisfaction'} percentage={true} image={Client} pink={'bg-pink-300'} />
      <Count span={'sm:col-span-2'} number={50} dollar={true} million={true} title={'Revenue Generated'} image={Revenue} pink={'bg-pink-200'} />
      <Count number={10} title={'Years of Experience'} image={Experience} pink={'bg-pink-100'} />
    </div>
  );
};

export default Counter;

const Count = ({ span, title, number, percentage, dollar, million, image, pink }) => {
  const [currentNumber, setCurrentNumber] = useState(0);
  const countRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const incrementer = Math.ceil(number / 50);
          const timer = setInterval(() => {
            setCurrentNumber((prevNumber) => {
              const nextNumber = prevNumber + incrementer;
              return nextNumber >= number ? number : nextNumber;
            });
          }, 70);

          return () => clearInterval(timer);
        }
      });
    });

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
    };
  }, [number]);

  return (
    <article ref={countRef} className={`min-h-[150px]  flex flex-col justify-center gap-1 items-center ${pink} shadow-lg text-black ${span}`}>
      <img src={image} height={40} width={40} alt={`${title} Icon`} />
      <h2 className='text-center text-lg'>{dollar ? '$' : ''}{currentNumber}{million ? 'M' : ''}{percentage ? '%' : '+'} {title}</h2>
    </article>
  );
};
