import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../components'

function Footer() {
  return (
    <div className='w-full p-8 '>
    


        <div className=' space-y-4 w-full'>
          <h1 className='text-[1rem] font-bold font-700'>Li Rema Engineering & Construction</h1>
          <div className='space-y-2'>
            <ul className='space-y-8 w-full mx-auto flex items-center justify-center flex-col  space-y-2'>
                            <Link to='/'> <li className='text-[1rem] rounded-[12px]'>Home</li></Link>
                            
                                               <Link to='/services'> <li className='text-[1rem] rounded-[12px]'>Services</li></Link>
                                                                  <Link to='/about'> <li className='text-[1rem] rounded-[12px]'>About</li></Link>
                                                                                     <Link to='/contacts'> <li className='text-[1rem] rounded-[12px]'>Contact Us</li></Link>
                                                                                                        <Link to='#team'> <li className='text-[1rem] rounded-[12px]'>Our Team</li></Link>
                             
                                 <Button text='login'/>
                                 
                         </ul>

          </div>

          <div className='block space-y-2 md:flex items-center justify-between'>
            <div>
              <p className='text-[.7rem] font-light font-700'> 2025 <strong>LiRema Construction</strong> All Rights Reserved.</p>
            </div>
            <div className='block md:flex items-center justify-between space-y-2'>
              <p  className='text-[1rem] font-light font-700'>Privacy Policy</p>
              <p  className='text-[1rem] font-light font-700'>Terms Of Service</p>
              {/* <p>Cookie setting</p> */}
            </div>
          </div>

        </div>



     



        
    </div>
  )
}

export default Footer