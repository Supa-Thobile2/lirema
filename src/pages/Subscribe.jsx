import React from 'react'

function Subscribe() {
  return (
    <div className='space-y-8 flex items-center justify-center flex-col p-8 md:p-28 md:space-y-12'>

    <h1 className='text-3xl font-bold font-200'>Stay Informed Engineering insights</h1>
    <p className='text-sm font-regular'> Receive the latest update, technical innovations and industry trends directly to your inbox.</p>
    <div className='border flex items-center justify-between gap-4 w-full md:w-[40%] mx-auto '>
        <input type="email" name="email" id="email" className='w-full outline-none' />
        <div className='w-full mx-auto'>
             <button className='p-2 border w-full'>Subscribe now</button>

        </div>
       
    </div>
    <p>By subscribing you agree to our terms and conditions of service</p>

    </div>
  )
}

export default Subscribe