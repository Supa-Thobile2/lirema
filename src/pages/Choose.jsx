import React from 'react'
import img from '../assets/keyGuy.png'

function Choose() {
  return (
    <div className='block md:flex items-center justify-center flex-col p-6 space-y-2'>
        <h6 className='text-sm font-medium'>Why Choose Us</h6>
        <h1 className='text-2xl font-bold'>Unparalleled engineering excellence</h1>
        <p className='text-sm font-medium'>Delivering integrated solutions across multiple technical domains</p>
        <div className='block space-y-2 md:flex gap-4 p-2'>
            <div className='flex items-center justify-between flex-col space-y-4'>
                <div className='border space-y-2 p-4'>
                    <h1 className='text-lg font-bold'>Technical expertise</h1>
                    <p className='text-sm font-medium'>Highly skilled engineers with deep technical knowledge</p>
                    <div>
                        <button className=''>Explore capabilities</button>
                    </div>
                </div>
                <div className='border space-y-2 p-4'>
                    <h1 className='text-lg font-bold'>Technical expertise</h1>
                    <p className='text-sm font-medium'>Highly skilled engineers with deep technical knowledge</p>
                    <div>
                        <button className=''>Explore capabilities</button>
                    </div>
                </div>
            </div>
            <div className='w-full block md:flex border  space-y-6'>
                <div className='flex items-center justify-center p-4 flex-col w-full space-y-2 md:w-1/2'>
                    <h6 className='text-md font-semibold font-300'
                        >Innovation</h6>
                    <h1 className='text-lg font-bold'>Cutting-edge technological solutions for complex challenges</h1>
                    <p className='text-sm font-medium'>Advanced problem-solving approaches</p>
                </div>
                <div className='w-full md:w-1/2'><img src={img} alt='' className='w-full object-fit'/></div>
            </div>
        </div>

    </div>
  )
}

export default Choose