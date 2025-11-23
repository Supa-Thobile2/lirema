import React from 'react'
import img from '../assets/keyGuy.png'
import { Link } from 'react-router-dom'
import Button from './Button'

function ServicesCard(props) {
  return (
    <div className='   '>
      <img src={img} alt='' className='object-fit block h-full'/>
        <div className='space-y-4 p-2 md:p-4 '>
            <h6 className='text-sm font-bold font-400'>{props.heading}</h6>
            <h1 className='text-lg font-bold font-400'>{props.subtext}</h1>
            <p className='text-md font-medium font-200'>{props.description}</p>
            <div>
              <Link to='{props.link}'>
                <Button text='{props.btnText}'/>
                </Link>

            </div>
        </div>
        
    </div>
  )
}

export default ServicesCard