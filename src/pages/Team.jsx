import React from 'react'

import img from '../assets/keyGuy.png'

function Team() {
  return (
    <div className='block w-full mx-auto space-y-4 md:space-y-8 md:flex items-center justify-center flex-col p-6 md:p-18 space-y-2 md:space-6 ' id='team'>
        <h6 className='text-[.6rem] font-bold font-200'>Team</h6>
        <div className='space-y-2'>
        <h1 className='text-[1.5rem] font-bold'>Our Team</h1>
        <p className='text-[.6rem] font-medium font-200'>Experienced professionals driving technical innovation</p>
        </div>
        
        <div className='block md:flex items-center space-y-2 gap-4 md:gap-8 md:space-y-0'>
            <div className=' border  p-4 flex items-center justify-center flex-col'>
                <img src={img} alt='' className='object-fit w-15 h-15 rounded-full'/>
                <div className='space-y-2'>
                <h4 className='text-lg font-bold '>Litaba Letsatsi</h4>
                <p className='text-sm font-semibold font-200'>Chief Technician</p>
                <p className='text-sm font-regular font-200'>Visionary leader with deacdes of experience in engineering and management</p>
            </div>
            </div>
              <div className=' border  p-4 flex items-center justify-center flex-col'>
                <img src={img} alt='' className='object-fit w-15 h-15 rounded-full'/>
                <h4 className='text-lg font-bold '>Litaba Letsatsi</h4>
                <p className='text-sm font-semibold font-200'>Chief Technician</p>
                <p className='text-sm font-regular font-200'>Visionary leader with deacdes of experience in engineering and management</p>
            </div>
              <div className=' border  p-4 flex items-center justify-center flex-col'>
                <img src={img} alt='' className='object-fit w-15 h-15 rounded-full'/>
                <h4 className='text-lg font-bold '>Litaba Letsatsi</h4>
                <p className='text-sm font-semibold font-200'>Chief Technician</p>
                <p className='text-sm font-regular font-200'>Visionary leader with deacdes of experience in engineering and management</p>
            </div>
              <div className=' border  p-4 flex items-center justify-center flex-col'>
                <img src={img} alt='' className='object-fit w-15 h-15 rounded-full'/>
                <h4 className='text-lg font-bold '>Litaba Letsatsi</h4>
                <p className='text-sm font-semibold font-200'>Chief Technician</p>
                <p className='text-sm font-regular font-200'>Visionary leader with deacdes of experience in engineering and management</p>
            </div>
            
          

        </div>



    </div>
  )
}

export default Team