import Guarantee from '../img/guarantee.png'

const ServicesGuarantee = () => {
  return (
    <div className='flex justify-center gap-8 items-center bg-green-100 min-h-[300px]'>
        <img src={Guarantee} className='w-24 h-24' />
        <div className='w-[40%]'>
        <h2 className='text-lg font-semibold'>If we don't achieve a 20% increase in traction, we'll refund your money.</h2>
        <p>At Marketing Agency, we're dedicated to driving meaningful growth for your business. Our promise is simple: if we don't deliver a significant 
            increase in traction, you'll receive a full refund. With our proven strategies and commitment to your success, we're here to ensure your 
            investment yields tangible results. Partner with us and experience the difference.</p>
        </div>
    </div>
  )
}

export default ServicesGuarantee
