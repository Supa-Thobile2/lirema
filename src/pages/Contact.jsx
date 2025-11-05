import React from 'react'
import img from '../assets/keyGuy.png'

function Contact() {
  return (
    <div className='w-full flex items-center justify-center flex-col p-18'>
        <h6>Contact</h6>
        <p>We're ready to discuss your engineering construction needs</p>
        <div className='block md:flex items-center justify-between'>
            <div className='space-y-6 p-8 md:w-1/5'>
                
                <div>
                    <h6>Email</h6>
                    <p>General Inqueries:</p>
                </div>
                <div>
                    <h6>Email</h6>
                    <p>General Inqueries:</p>
                </div>
                <div>
                    <h6>Email</h6>
                    <p>General Inqueries:</p>
                </div>
            </div>
            <div className='w-1/2'>
            <img src={img} alt=''/>
            </div>
        </div>


    </div>
  )
}

export default Contact