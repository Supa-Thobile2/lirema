import React from 'react'

import img from '../assets/keyGuy.png'

function Team() {
  return (
    <div className='block w-full mx-auto md:flex items-center justify-center flex-col p-6 md:p-18 space-y-2 md:space-6 '>
        <h6 className='text-sm font-bold font-200'>Team</h6>
        <h1 className='text-4xl font-bold'>Our Team</h1>
        <p className='text-sm font-medium font-100'>Experienced professionals driving technical innovation</p>
        <div className='block md:flex items-center space-y-2 gap-4 md:space-y-0'>
            <div className=' border  p-4 flex items-center justify-center flex-col'>
                <img src={img} alt='' className='object-fit w-15 h-15 rounded-full'/>
                <h4 className='text-lg font-bold '>Litaba Letsatsi</h4>
                <p className='text-sm font-semibold font-200'>Chief Technician</p>
                <p className='text-sm font-regular font-200'>Visionary leader with deacdes of experience in engineering and management</p>
            </div>
                        <div className=' border  p-2 flex items-center justify-center flex-col'>
                <img src={img} alt='' className='object-fit w-15 h-15 rounded-full'/>
                <h4 className='text-2xl font-semibold '>Litaba Letsatsi</h4>
                <p className='text-md font-semibold font-200'>Chief Technician</p>
                <p className='text-md font-semibold font-200'>Visionary leader with deacdes of experience in engineering and management</p>
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