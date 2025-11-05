import React, {useState} from 'react'
import img from '../assets/keyGuy.png'

function Hero() {
  const [deals, setDeals] = useState('')
  const handleButton = () =>{
      console.log('button clicked')
  
  
  }
  return (

    <div className='p-1'>
    <div className='w-full mx-auto space-y-4 md:w-3/4  p-2 md:p-24 md:space-y-16 lg:p-18 lg:space-y-18 text-center  flex items-center justify-center flex-col  mx-auto'>
        
        <h1 className='text-3xl
         md:text-3xl font-bold font-300'>Engineering Solutions that build tommorrow</h1>
        <p className=' text-[.9rem] text-tracking-wider md:text-center text-sm font- font-400'><strong>Li Rema construction </strong> 
        delivers comprehensive engineering and construction services with precision and expertise. We transform complex challenges into seamless technical solutions.</p>
        <div className='w-full mx-auto flex items-center justify-center gap-8'>
          <div>
           <button onClick={handleButton} className='px-6 py-2 border my-2 rounded-xl w-full mx-auto text-[8px] w-full'>Explore Our Services</button>
           </div>
           <div>
            <button onClick={handleButton} className='px-6 py-2 border my-2 rounded-xl w-full mx-auto text-[8px] w-full'>Contact Us</button>
            </div>

        </div>
       
    </div>

    <div className='w-90 mx-auto md:w-1/4 p-4'>
      <img src={img} alt='' className='object-fit '/>


    </div>


    </div>
  )
}

export default Hero