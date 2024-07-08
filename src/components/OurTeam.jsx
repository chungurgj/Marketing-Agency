import Gjorgji from '../img/gjorgji.jpg'
import Maria from '../img/maria.jpg'
import John from '../img/John.png'
import Emily from '../img/Emily.jpg'
import Michael from '../img/Michael.jpg'
import Sarah from '../img/Sarah.jpg'

const OurTeam = () => {
  return (
    <div className='grid sm:grid-cols-6 min-h-[650px] bg-gray-50 gap-10 m-4 px-2 sm:px-14 py-20'>
      <Employee 
    fullName={'Gjorgji Chungurski'} 
    image={Gjorgji}
    color={'bg-blue-200'} 
    role={'CEO and Founder'} 
    description={'Gjorgji is the visionary behind Marketing Agency. With over 15 years of experience in the marketing industry, Gjorgji has led numerous successful campaigns and is passionate about driving innovative strategies that help businesses thrive.'} 
  />
  <Employee 
    fullName={'Maria Rodriguez'} 
    image={Maria}
    color={'bg-blue-300'} 
    role={'Chief Marketing Officer'} 
    description={'Maria is a marketing guru with a knack for creating compelling campaigns. She oversees all marketing efforts and ensures our clients\' brands are effectively communicated to their target audiences.'} 
  />
  <Employee 
    fullName={'John Doe'} 
    image={John}
    color={'bg-blue-200'} 
    role={'Creative Director'} 
    description={'John\'s creative vision is at the heart of our agency. With a background in graphic design and multimedia arts, he leads our creative team in developing visually stunning and impactful content.'} 
  />
  <Employee 
    fullName={'Emily Smith'} 
    image={Emily}
    color={'bg-blue-300'} 
    role={'Social Media Manager'} 
    description={'Emily knows the ins and outs of social media marketing. She creates and manages engaging content across all platforms, helping our clients build strong online presences and connect with their audiences.'} 
  />
  <Employee 
    fullName={'Michael Brown'} 
    image={Michael}
    color={'bg-blue-200'} 
    role={'Content Strategist'} 
    description={'Michael is a master of words. He crafts compelling content strategies that resonate with target audiences, drive engagement, and enhance brand storytelling.'} 
  />
  <Employee 
    fullName={'Sarah Lee'} 
    image={Sarah}
    color={'bg-blue-300'} 
    role={'Digital Marketing Specialist'} 
    description={'Sarah specializes in digital marketing tactics, including SEO, PPC, and email marketing. She ensures our clients\' online campaigns are optimized for maximum reach and effectiveness.'} 
  />
    </div>
  )
}

export default OurTeam

const Employee = ({fullName, role, description, image,color}) =>{

    return (<article className={`flex sm:flex-col gap-5 md:gap-0 md:flex-row justify-around p-2 items-center min-h-[300px] ${color} sm:col-span-3 lg:col-span-2 rounded`}>
        <div className='flex flex-col justify-center items-center sm:gap-3'>
         <img src={image}  className='employee-image'/>
         <div>
            <h3>{fullName}</h3>
            <h4 className='underline'>{role}</h4>
        </div>
        </div>
        <p className='text-sm md:w-[50%] bg-white p-3'>{description}</p>
    </article>)
}