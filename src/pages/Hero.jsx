import React, {useState} from 'react'
import img from '../assets/keyGuy.png'

function Hero() {
  const [deals, setDeals] = useState('')
  const handleButton = () =>{
      console.log('button clicked')
  
  
  }
  return (

    <div className='w-full block md:flex items-center border'>
    <div className='md:w-3/4 space-y-2 p-8 md:p-24 md:space-y-16 lg:p-18 lg:space-y-18 text-center border flex items-center justify-center flex-col  mx-auto'>
        
        <h1 className='text-2xl
         md:text-3xl font-bold font-300'>Engineering Solutions that build tommorrow</h1>
        <p className=' text-2xl text-tracking-wider md:text-center text-sm font- font-400'><strong>Li Rema construction </strong> 
        delivers comprehensive engineering and construction services with precision and expertise. We transform complex challenges into seamless technical solutions.</p>
        <div className='w-full block md:flex items-center gap-8'>
          <div>
           <button onClick={handleButton} className='px-6 py-2 border my-2 rounded-xl w-full mx-auto text-[16px] font-bold'>Explore Our Services</button>
           </div>
           <div>
            <button onClick={handleButton} className='px-6 py-2 border my-2 rounded-xl w-full mx-auto text-[16px] font-bold'>Contact Us</button>
            </div>

        </div>
       
    </div>

    <div className='md:w-1/4'>
      <img src={img} alt='' className='object-fit w-full h-full'/>


    </div>


    </div>
  )
}

export default Hero