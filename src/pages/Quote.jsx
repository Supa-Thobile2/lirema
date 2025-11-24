import React from 'react'
import img from '../assets/keyGuy.png'
import { Button } from '../components'

function Quote() {
  return (
    <div className='block p-4 space-y-8 md:flex items-center justify-center md:p-18'>
        <div className='space-y-12 p-4 md:p-8'>
          <div className='space-y-2'>
            <h1 className='text-[1.5rem] font-bold font-600'>Ready to build your future</h1>
            <p className='text-[.6rem] font-medium font-200'>Connect with our expert engineering team to transform your complex technical challenges into innovative solutions</p>
           </div>
            <div className='flex items-center gap-6 w-full'>
               <Button text='Quote'/>
               <Button text='Consult'/>
            </div>
        </div>
        <div>
            <img src={img} alt='' className='h-full block object-fit'/>

        </div>

    </div>
  )
}

export default Quote