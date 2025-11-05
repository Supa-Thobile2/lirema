import React from 'react'
import img from '../assets/keyGuy.png'

function Quote() {
  return (
    <div className='block p-8 space-y-8 md:flex items-center justify-center md:p-18'>
        <div className='space-y-12 p-8'>
            <h1 className='text-4xl font-bold font-600'>Ready to build your future</h1>
            <p className='text-sm font-medium font-200'>Connect with our expert engineering team to transform your complex technical challenges into innovative solutions</p>
            <div className='flex items-center gap-6 w-full'>
                <button className='p-4 border w-full'>Quote</button>
                <button className='p-4 border w-full'>Consult</button>
            </div>
        </div>
        <div>
            <img src={img} alt='' className='h-full block object-fit'/>

        </div>

    </div>
  )
}

export default Quote