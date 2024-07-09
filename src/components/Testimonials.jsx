import { useState, useEffect } from 'react';
import Pic1 from '../img/Michael.jpg';
import Pic2 from '../img/Sarah.jpg';
import Pic3 from '../img/Emily.jpg';
import Pic4 from '../img/John.png';
import Pic5 from '../img/maria.jpg';
import LT from '../img/LT.png';

const Testimonials = () => {
  const initialTestimonials = [
    {
      id: 1,
      name: "John Doe",
      des: "Working with ABC Marketing has been an absolute pleasure. They have a talented team that truly understands our brand and audience. Their innovative strategies have significantly boosted our online presence and engagement.",
      image: Pic1
    },
    {
      id: 2,
      name: "Jane Doe",
      des: "ABC Marketing has exceeded our expectations with their creative campaigns and attention to detail. Their dedication to delivering results-driven solutions has made a remarkable impact on our business growth.",
      image: Pic2
    },
    {
      id: 3,
      name: "Alice Smith",
      des: "We are thrilled with the outstanding service provided by ABC Marketing. Their expertise in digital marketing and commitment to our success is commendable. They have become an invaluable partner in achieving our marketing goals.",
      image: Pic3
    },
    {
      id: 4,
      name: "Michael Brown",
      des: "Choosing ABC Marketing was one of the best decisions we made for our company. Their strategic approach and comprehensive marketing solutions have significantly enhanced our brand visibility and customer engagement.",
      image: Pic4
    },
    {
      id: 5,
      name: "Emily Johnson",
      des: "ABC Marketing stands out for their professionalism and results-driven approach. They have consistently delivered creative campaigns that resonate with our target audience, driving tangible business outcomes.",
      image: Pic5
    },
  ];

  const [testimonials, setTestimonials] = useState(initialTestimonials);
  const [visibleCount, setVisibleCount] = useState(3); // Default to showing 3 testimonials

  // Adjust visible count based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setVisibleCount(3); // lg breakpoint or larger
      } else if (window.innerWidth >= 768) {
        setVisibleCount(2); // md breakpoint
      } else {
        setVisibleCount(1); // sm breakpoint or smaller
      }
    };

    handleResize(); // Call once to set initial state
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleNext = () => {
    // Shift the first testimonial to the end to simulate infinite scrolling
    setTestimonials((prevTestimonials) => [
      ...prevTestimonials.slice(1),
      prevTestimonials[0],
    ]);
  };

  const handlePrev = () => {
    // Pop the last testimonial and unshift it to the beginning
    setTestimonials((prevTestimonials) => [
      prevTestimonials[prevTestimonials.length - 1],
      ...prevTestimonials.slice(0, prevTestimonials.length - 1),
    ]);
  };

  const bgColors = ['bg-rose-200','bg-rose-300']

  return (
    <div className='relative flex min-h-[550px] overflow-hidden py-10 lg:p-10'>
      <div className='absolute inset-y-0  flex items-center'>
        <img onClick={handlePrev} src={LT} className='cursor-pointer h-10 w-10' alt="Previous"  />
      </div>
      <div className='absolute inset-y-0 right-10 flex items-center'>
        <img onClick={handleNext} src={LT} className='cursor-pointer rotate-180 h-10 w-10' alt="Next" />
      </div>
      <div className='flex justify-center items-center w-full overflow-hidden'>
        <div className='flex max-w-[75%]'>
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={testimonial.id}
              name={testimonial.name}
              des={testimonial.des}
              image={testimonial.image}
              isActive={index < visibleCount} // Show only up to `visibleCount` testimonials
              bgColor={bgColors[index%bgColors.length]}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

const Testimonial = ({ image, name, des, isActive, bgColor}) => (
  <article className={`flex flex-col gap-3 justify-center shadow-xl items-center p-4 sm:p-6 min-h-[400px] rounded-2xl ${bgColor} mx-4 transition-opacity duration-300 ${isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-95 hidden'}`}>
    <div className={`transition-opacity duration-300  ${isActive ? 'opacity-100' : 'opacity-0'}`}>
      <img src={image} alt={name} className='testimonial-image' />
    </div>
    <div className={`transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
      <div className='ml-4 p-3'>
        <h3 className='text-lg font-semibold'>{name}</h3>
        <p className='bg-white text-md p-1 italic'>"{des}"</p>
      </div>
    </div>
  </article>
);
