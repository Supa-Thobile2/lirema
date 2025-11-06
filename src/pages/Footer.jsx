import React from 'react'

function Footer() {
  return (
    <div className='w-full p-4 '>
    


        <div className=' space-y-4 w-full'>
          <h1>logo</h1>
          <div >
            <ul className='block space-y-2 md:flex items-center justify-evenly '>
              <li className='p-2 text-sm font-regular font-400'>Home</li>
              <li className='p-2 text-sm font-regular font-400'>Services</li>
              <li className='p-2 text-sm font-regular font-400'>About</li>
              <li className='p-2 text-sm font-regular font-400'>Contact</li>
              <li className='p-2 text-sm font-regular font-400'>Projects</li>
            </ul>

          </div>

          <div className='block space-y-2 md:flex items-center justify-between'>
            <div>
              <p className='text-sm font-light'> 2025 <strong>LiRema Construction</strong> All Rights Reserved.</p>
            </div>
            <div className='block md:flex items-center justify-between space-y-2'>
              <p>Privacy Policy</p>
              <p>Terms Of Service</p>
              {/* <p>Cookie setting</p> */}
            </div>
          </div>

        </div>



     



        
    </div>
  )
}

export default Footer