import React from 'react'
import img from '../assets/keyGuy.png'
import { Button } from '../components'

function Choose() {
  return (
    <div className='block p-4 md:flex items-center justify-center flex-col  space-y-4 md:p-16 space-y-4'>
        <h6 className='text-[.6rem] font-medium font-400'>Why Choose Us</h6>
        <div className='space-y-2'>
        <h1 className='text-[1.4rem] font-bold font-700'>Unparalleled engineering excellence</h1>
        <p className='text-[.6rem] font-medium font-400'>Delivering integrated solutions across multiple technical domains</p>
       </div>
       
        <div className='block space-y-2 md:flex gap-4 '>
            <div className='flex items-center justify-between flex-col space-y-2'>
                <div className='border space-y-2 '>
                    <div className='space-y-2'>
                    <h1 className='text-[1.5rem] font-bold font-700'>Technical expertise</h1>
                    <p className='text-[.6rem] font-medium font-200'>Highly skilled engineers with deep technical knowledge</p>
                    </div>
                    <div>
                        <Button text='Explore Capabilities'/>
                    </div>
                </div>
                <div className='border  space-y-2 '>
                    <h1 className='text-[1.5rem] font-bold font-700'>Technical expertise</h1>
                    <p className='text-[.6rem] font-medium font-200'>Highly skilled engineers with deep technical knowledge</p>
                    <div>
                        <Button text='Explore Capabilities'/>
                    </div>
                </div>
            </div>
            <div className='w-full  block md:flex border  '>
                <div className=' flex items-center justify-center p-4 space-y-2 flex-col w-full space-y-1 md:w-1/2'>
                    <h6 className='text-[.6rem] font-semibold font-300'
                        >Innovation</h6>
                        <div className='space-y-2'>
                    <h1 className='text-[1.5rem] font-bold font-700'>Cutting-edge technological solutions for complex challenges</h1>
                    <p className='text-[.6rem] font-medium font-200'>Advanced problem-solving approaches</p>
               </div>
                </div>
                <div className='w-full md:w-1/2'><img src={img} alt='' className='h-full object-fit'/></div>
            </div>
        </div>

    </div>
  )
}

export default Choose