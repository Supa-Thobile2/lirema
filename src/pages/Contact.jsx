import React from 'react'
import img from '../assets/keyGuy.png'
import { FaMailchimp } from 'react-icons/fa6'
import { FaAddressCard, FaEnvelopeOpen, FaPhone, FaPhoneAlt, FaRegEnvelopeOpen } from 'react-icons/fa'
import { Button } from '../components'

function Contact() {
  return (
    <div className='w-full flex items-center justify-center flex-col p-8 md:p-16 space-y-8 md:space-y-6' id='contact'>
        <h6 className='text-4xl font-bond font-700'>Contact</h6>
        <p className='text-sm font-light font-200'> We're ready to discuss your engineering construction needs</p>
        <div className='block w-full  md:flex items-center justify-between space-y-4'>
            <div className='space-y-4 w-full mx-auto '>
                
                <div className='space-y-2'>
                    <FaRegEnvelopeOpen/>
                    <p>General Inqueries:</p>
                </div>
                <div className='space-y-2'>
                    <FaPhoneAlt/>
                    <p>General Inqueries:</p>
                </div>
                <div className='space-y-2'>
                    <FaAddressCard/>
                    <p>General Inqueries:</p>
                </div>
            </div>
            <div className='w-full mx-auto '>
                <form className='w-full  space-y-4  mx-auto'>
                    <div className='border '>
                        <input type="email" name="email" id="" placeholder='enter email here' className='p-4'/>
                    </div>
                    <div className='border '>
                        <input type="text" name="name" id="" placeholder='enter email here' className='p-4'/>
                    </div>
                    <div className='border '>
                        <input type="text" name="message" id="" placeholder='enter email here' className='p-4'/>
                    </div>
                    <div className='w-full mx-auto '>
                        <Button text='Submit'/>
                    </div>
                </form>
            </div>
        </div>


    </div>
  )
}

export default Contact