import React from 'react'

function Subscribe() {
  return (
    <div className='flex items-center justify-center flex-col p-18 space-y-8'>

    <h1>Stay Informed Engineering insights</h1>
    <p>Receive the latest update, technical innovations and industry trends directly to your inbox.</p>
    <div className='border flex items-center justify-between w-[40%] mx-auto'>
        <input type="email" name="email" id="email" className='w-full outline-none' />
        <button>Subscribe now</button>
    </div>
    <p>By subscribing you agree to our terms and conditions of service</p>

    </div>
  )
}

export default Subscribe