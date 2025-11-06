import React from 'react'
import { Header } from '../components'


function AboutPage() {
  return (
    <div>

        <Header/>
        <div className='border-6 p-12 mt-14 space-y-20 md:p-18 md:space-y-24 lg:p-14  lg:space-y-16 xl:p-14  flex items-center justify-center flex-col'>
            <p className='p-4 border text-sm font-bold'>Our Story</p>
            <h1 className='text-6xl md:text-8xl lg:text-4xl'>About Us</h1>
            <p className='text-md md:text-lg xl:text-lg'>Building innovative solutions that transform infrastructure and drive technological progress across multiple factors.</p>
            <div className='flex items-center gap-2'>
                <div>
                    <button className='p-4 border'>Learn More </button>
                </div>
                 <div>
                    <button className='p-4 border'>Contact Us </button>
                </div>

            </div>

        </div>
        <div className='border-8 p-12 space-y-8'>
            <h6>Our Mission </h6>
            <h1>Engineering excellence through innovation and precision</h1>

        </div>
        
    </div>
  )
}

export default AboutPage