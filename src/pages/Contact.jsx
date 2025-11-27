import React from 'react'
import img from '../assets/keyGuy.png'
import { FaMailchimp } from 'react-icons/fa6'
import { FaAddressCard, FaEnvelopeOpen, FaPhone, FaPhoneAlt, FaRegEnvelopeOpen } from 'react-icons/fa'
import { Button } from '../components'

function Contact() {
  return (
    <div className='w-full flex items-center justify-center flex-col p-8 md:p-16 space-y-8 md:space-y-6' id='contact'>
        <div className='space-y-2 text-center'>
        <h6 className='text-[1.5rem] font-bond font-700'>Contact</h6>
        <p className='text-[.6rem] font-light font-200'> We're ready to discuss your engineering construction needs</p>
        </div>
        <div className='block w-full  md:flex items-center justify-between space-y-4'>
            <div className='space-y-4 w-full mx-auto '>
                
                <div className='space-y-2'>
                    <FaRegEnvelopeOpen/>
                    <p className='text-[.6rem] font-light font-300'>General Inqueries:litabaletsatsi@gmail.com</p>
                </div>
                <div className='space-y-2'>
                    <FaPhoneAlt/>
                    <p className='text-[.6rem] font-light font-300'>General Inqueries: 074 089 6568</p>
                </div>
                <div className='space-y-2'>
                    <FaAddressCard/>
                    <p className='text-[.6rem] font-light font-300'>General Inqueries:No. # Lorna Street, Birchleigh North, Kempton Park</p>
                </div>
            </div>
            <div className='w-full mx-auto '>
                <form className='w-full  space-y-2  mx-auto'>
                    <div className=' '>
                        <input type="email" name="email" id="" placeholder='enter email here' className='p-2 rounded-2xl border-[lightgray] border outline-none w-full'/>
                    </div>
                    <div className=' '>
                        <input type="text" name="name" id="" placeholder='enter email here' className='p-2 rounded-2xl border-[lightgray] border outline-none w-full'/>
                    </div>
                    <div className=' '>
                        <input type="text" name="message" id="" placeholder='enter email here' className='p-2 rounded-2xl border-[lightgray] border outline-none w-full'/>
                    </div>
                    
                        <Button text='Submit'/>
                    
                </form>
            </div>
        </div>


    </div>
  )
}

export default Contact