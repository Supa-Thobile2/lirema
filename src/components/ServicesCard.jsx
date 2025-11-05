import React from 'react'
import img from '../assets/keyGuy.png'

function ServicesCard(props) {
  return (
    <div className='border-2   '>
      <img src={img} alt='' className='object-fit w-full h-full'/>
        <div className='space-y-1 p-2 md:pace-y-4 md:p-8'>
            <h6 className='text-sm font-bold font-400'>{props.heading}</h6>
            <h1 className='text-lg font-bold font-400'>{props.subtext}</h1>
            <p className='text-md font-medium font-200'>{props.description}</p>
            <div>
                <button className='p-2 border text-md font-bold'>{props.btnText}</button>

            </div>
        </div>
        
    </div>
  )
}

export default ServicesCard