import React from 'react'
import img from '../assets/keyGuy.png'

function Choose() {
  return (
    <div className='block md:flex items-center justify-center flex-col p-10 space-y-8'>
        <h6 className='text-sm font-medium'>Why Choose Us</h6>
        <h1 className='text-lg font-bold'>Unparalleled engineering excellence</h1>
        <p className='text-sm font-medium'>Delivering integrated solutions across multiple technical domains</p>
        <div className='block md:flex gap-4 p-10'>
            <div className='flex items-center justify-between flex-col space-y-4'>
                <div className='border-4 space-y-6 p-4'>
                    <h1 className='text-lg font-bold'>Technical expertise</h1>
                    <p className='text-sm font-medium'>Highly skilled engineers with deep technical knowledge</p>
                    <div>
                        <button className=''>Explore capabilities</button>
                    </div>
                </div>
                <div className='border-4 space-y-6 p-4'>
                    <h1 className='text-lg font-bold'>Technical expertise</h1>
                    <p className='text-sm font-medium'>Highly skilled engineers with deep technical knowledge</p>
                    <div>
                        <button className=''>Explore capabilities</button>
                    </div>
                </div>
            </div>
            <div className='w-full flex border'>
                <div className='flex items-center justify-center p-8 flex-col w-1/2'>
                    <h6>Innovation</h6>
                    <h1 lassName='text-lg font-bold'>Cutting-edge technological solutions for complex challenges</h1>
                    <p className='text-sm font-medium'>Advanced problem-solving approaches</p>
                </div>
                <div className='w-1/2'><img src={img} alt=''/></div>
            </div>
        </div>

    </div>
  )
}

export default Choose