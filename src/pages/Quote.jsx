import React from 'react'
import img from '../assets/keyGuy.png'

function Quote() {
  return (
    <div className='block md:flex items-center justify-center p-16'>
        <div className='space-y-6'>
            <h1 className='text-4xl font-bold font-600'>Ready to build your future</h1>
            <p className='text-md font-medium font-200'>Connect with our expert engineering team to transform your complex technical challenges into innovative solutions</p>
            <div className='flex items-center gap-6'>
                <button className='p-2 border'>Quote</button>
                <button className='p-2 border'>Consult</button>
            </div>
        </div>
        <div>
            <img src={img} alt=''/>

        </div>

    </div>
  )
}

export default Quote