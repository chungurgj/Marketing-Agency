import { useNavigate } from "react-router-dom"

const Cover = () => {
  const navigate = useNavigate()

  return (
    <div className="flex coverImg justify-end items-start flex-col padding-cover gap-4">
        <h1 className='text-4xl'>Do what you're good at, we'll bring you clients.</h1>
        <p>Let's use social media to make your business skyrocket and increase<br/> traffic like you would not believe.</p>
        <button className='btn hover:bg-accent ease-linear duration-300' onClick={()=>navigate('/services')}>Get started </button>
    </div>
  )
}

export default Cover
