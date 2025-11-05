import React from 'react'

import img from '../assets/keyGuy.png'

function Team() {
  return (
    <div className='block w-full mx-auto md:flex items-center justify-center flex-col p-18 space-y-4'>
        <h6 className='text-sm font-bold font-200'>Team</h6>
        <h1 className='text-4xl font-bold'>Our Team</h1>
        <p className='text-sm font-medium font-100'>Experienced professionals driving technical innovation</p>
        <div className='block md:flex items-center'>
            <div className='space-y-4 border  p-2 flex items-center justify-center flex-col'>
                <img src={img} alt='' className='object-fit w-10 h-10 rounded-full'/>
                <h4 className='text-2xl font-semibold '>Litaba Letsatsi</h4>
                <p className='text-md font-semibold font-200'>Chief Technician</p>
                <p className='text-md font-semibold font-200'>Visionary leader with deacdes of experience in engineering and management</p>
            </div>
                        <div className='space-y-4 border  p-2 flex items-center justify-center flex-col'>
                <img src={img} alt='' className='object-fit w-10 h-10 rounded-full'/>
                <h4 className='text-2xl font-semibold '>Litaba Letsatsi</h4>
                <p className='text-md font-semibold font-200'>Chief Technician</p>
                <p className='text-md font-semibold font-200'>Visionary leader with deacdes of experience in engineering and management</p>
            </div>

        </div>



    </div>
  )
}

export default Team