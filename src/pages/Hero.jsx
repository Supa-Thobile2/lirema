import React, {useState} from 'react'
import img from '../assets/keyGuy.png'
import { Link } from 'react-router-dom'
import { Button } from '../components'

function Hero() {
  // const [deals, setDeals] = useState('')
  // const handleButton = () =>{
  //     console.log('button clicked')
  
  
  // }
  return (

    <div className='block space-y-2 md:flex  md:p-18 mt-8 md:mt-14 ' id='home'>
    <div className='w-full mx-auto space-y-4 md:w-1/2  p-8 md:p-18 xl:p-20 md:space-y-16 lg:p-16 lg:space-y-18 text-center  flex items-center justify-center flex-col  mx-auto'>
       <div className='space-y-2'>
        <h1 className='text-3xl
         md:text-3xl font-bold font-300'>Engineering Solutions that build tommorrow</h1>
        <p className=' text-[.9rem] text-tracking-wider md:text-center text-sm font- font-400'><strong>Li Rema construction </strong> 
        delivers comprehensive engineering and construction services with precision and expertise. We transform complex challenges into seamless technical solutions.</p>
        </div> 
        
        <div className='w-full mx-auto flex items-center justify-center gap-8'>
          <div>
           <Button text='Explore'/>
           </div>
           <div>
           <Button text ='Contact'/>
            </div>

        </div>
       
    </div>

    <div className=' flex items-center justify-center flex-col p- md:w-1/2 '>
      <img src={img} alt='' className='object-fit block  md:h-full'/>


    </div>


    </div>
  )
}

export default Hero