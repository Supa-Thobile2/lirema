import React from 'react'
import img from '../assets/keyGuy.png'

function Contact() {
  return (
    <div className='w-full flex items-center justify-center flex-col p-2 space-y-2'>
        <h6 className='text-4xl font-bond font-700'>Contact</h6>
        <p className='text-sm font-light font-200'> We're ready to discuss your engineering construction needs</p>
        <div className='block md:flex items-center justify-between'>
            <div className=' p-2 w-full mx-auto md:w-1/5'>
                
                <div className='space-y-2'>
                    <h6>Email</h6>
                    <p>General Inqueries:</p>
                </div>
                <div className='space-y-2'>
                    <h6>Email</h6>
                    <p>General Inqueries:</p>
                </div>
                <div className='space-y-2'>
                    <h6>Email</h6>
                    <p>General Inqueries:</p>
                </div>
            </div>
            <div className='w-full mx-auto md:w-1/2'>
                <form className='w-full  space-y-2  mx-auto'>
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
                        <button className='w-full p-2 border'>Submit</button>
                    </div>
                </form>
            </div>
        </div>


    </div>
  )
}

export default Contact