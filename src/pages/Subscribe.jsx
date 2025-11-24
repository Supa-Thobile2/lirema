import React from 'react'
import { Button } from '../components'

function Subscribe() {
  return (
    <div className='space-y-8 flex items-center justify-center flex-col p-8 md:p-16 md:space-y-12'>
    <div className='space-y-2'>
    <h1 className='text-[1.5rem] font-bold font-700'>Stay Informed Engineering insights</h1>
    <p className='text-[.6rem] font-regular font-200'> Receive the latest update, technical innovations and industry trends directly to your inbox.</p>
  </div>  
    <div className='flex items-center justify-between w-full border rounded md:w-[40%] mx-auto '>
        <input type="email" name="email" id="email" className='w-full outline-none ' />
        
             <Button text='Subscribe Now'/>

        
       
    </div>
    <p className='text-[0.6rem] font-semibold font-200'>By subscribing you agree to our terms and conditions of service</p>

    </div>
  )
}

export default Subscribe