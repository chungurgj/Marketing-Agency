import c1 from '../img/c1.png'
import c2 from '../img/c2.png'
import c3 from '../img/c3.png'
import c4 from '../img/c4.png'
import c5 from '../img/c5.png'
import c6 from '../img/c6.png'
import c7 from '../img/c7.png'

const CompaniesHelped = () => {
  return (
    
     
    <div className='grid grid-cols-6 gap-5 p-2 sm:p-6 bg-slate-200  min-h-[200px] justify-evenly items-center'>
      <Company image={c1} reduce></Company>
      <Company image={c2}></Company>
      <Company image={c3}></Company>
      <Company image={c4}></Company>
      <Company image={c5}></Company>
      <Company image={c6}></Company>
      
    </div>
    
  )
}

export default CompaniesHelped

const Company = ({image,reduce}) =>(
    <div className='flex justify-center items-center col-span-3 sm:col-span-2 lg:col-span-1'>
        <img src={image} className={`company ${reduce ? 'sm:h-[80px]' : ''}`} />
    </div>
)