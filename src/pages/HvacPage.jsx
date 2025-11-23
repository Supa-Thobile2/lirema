import React from 'react'
import { Button, Header } from '../components'
import Contact from './Contact'
import Footer from './Footer'
import img from '../assets/keyGuy.png'

function HvacPage() {
  return (
    <div>

        <Header/>
        <div className='space-y-2'>
        <div className=' p-16 mt-14 space-y-16 md:p-28 md:space-y-24 lg:p-14  lg:space-y-16 xl:p-14  flex items-center justify-center flex-col'>
            <p className='text-sm font-bold'>Comfort</p>
            <div className='space-y-4'>
            <h1 className='text-3xl md:text-8xl lg:text-4xl font-bold font-700'>Precision HVAC solutions</h1>
            <p className='text-md md:text-lg xl:text-lg'>Engineered climate control systems designed to optimize comfort and efficiency for residential and commercial spaces with expert technical precision.</p>
            </div>
            
            <div className='flex items-center justify-center gap-2 w-full'>
                <div>
                   <Button text='Explore'/>
                </div>
                 <div>
                    <Button text='Contact'/>
                </div>

            </div>

        </div>
        <div className='space-y-2 p-8 block md:flex gap-4'>
            <div className='space-y-8'>
            <h6 className='text-sm font-light font-300'>Install </h6>
            <h1 className='text-2xl md:text-8xl lg:text-4xl font-bold font-700'>Professional HVAC installation for optimal comfort</h1>
            <p>We design and implement precise HVAC systems tailored to your specific environmental needs. Our technicians ensure seamless integration and maxixise efficiency for every space.</p>
            <ul className="space-y-2">
                <li>Custom system matching your unique requirements</li>
                <li>Energy-efficiency solutions that reduce operational costs</li>
                <li>Advanced technology for precise temperature control</li>
            </ul>
            <div className='flex items-center justify-between flex-col gap-4'>
                <div className='w-full'>
                    <Button text='Consult'/>
                </div>
                <div className='w-full'>
                   <Button text='Details'/>
                </div>


            </div>
            </div>
            <div className='  md:w-1/2 mx-auto'>
      <img src={img} alt='' className='object-fit w-full h-full block'/>

    </div>
        </div>
        <div className='block p-8 space-y-2  md:flex'>
            <div className='space-y-8'>
                <p className='text-sm font-bold font-300'>Maintain</p>
                <h4 className='text-2xl font-bold font-500'>Comprehensive HVAC maintainance long term perfomance</h4>
                <p className='text-sm font-light font-200'>Regular maintanance prevents unexpected breakdowns and extends sytems lifespans. Our skilled technicians provide thorough inspections and proactive servicing.
                </p>
                <ul className='space-y-4'>
                    <li>Scheduled preventative maintanance programs</li>
                     <li>Detailed diagnostics and performance tracking</li>
                      <li>Quick responses and experttechnical advise</li>
                </ul>
                <div className='block space-y-2 md:flex'>
                    <div className='w-full'> 
                        <Button text='Schedule'/>

                    </div>
                    <div className='w-full'> 
                        <Button text='Learn'/>

                    </div>

                </div>
            </div>
               <div className='  md:w-1/2 mx-auto'>
      <img src={img} alt='' className='object-fit w-full h-full block'/>

    </div>

        </div>
        <div className='block p-8 space-y-12 md:flex items-center justify-center flex-col'>
            <p>Repair</p>
            
                <div className='space-y-4'>
                <h1 className='text-2xl font-bold font-500'>Swift HVAC Repair Services</h1>
                <p>Rapid diagnostics and precise repair solutions for all HVAC systems.</p>
                </div>
            <div className='block md:flex'>
                  <div className='  md:w-1/2 mx-auto'>
      <img src={img} alt='' className='object-fit w-full h-full block'/>

    </div>
                <div className='space-y-4'>
                    
                    <h1 className='text-lg font-bold font-700'>Expert trobleshooting and resolution</h1>
                    <p>We diagnose and fix complex HVAC issues with minimal downtime and efficiency</p>

                    <div className='flex items-center gap-4'>
                        <div className='w-full'>
                           <Button text='Repair'/> 
                        </div>
                        <div className='w-full'>
                           <Button text='Contact'/>
                        </div>
                    </div>

                </div>

            </div>


        </div>
        <div className='block p-8 space-y-8 md:flex items-center justify-center flex-col'>
            <div>
                video
            </div>
            <div className='space-y-8'>
                <h1 className='text-lg font-bold font-700'>Li Rema Engineering & Construction can transform your HVAC system</h1>
                <div className='flex items-center divide'>
                <p></p>
                <p>logo</p>
                </div>
            </div>

        </div>
        <div className='block p-8 space-y-16 md:flex items-center justify-center flex-col'>
            <div className='space-y-8'>
                <p>
                    HVAC
                </p>
                <div className='space-y-4'>
                <h1 className='text-lg font-bold font-500'>Ready to optimize your climate control?</h1>
                <p>Get expert HVAC solutions designed for your specific needs and environment</p>
                </div>
                <div className='block md:flex items-center justify-center'>
                <div className='flex items-center justify-center gap-4'>
                    <div className='w-full'>
                        <Button text='Quote'/>
                    </div>
                     <div className='w-full'>
                        <Button text='Contact'/>
                    </div>

                </div>
                <div>image</div>
                </div>
            </div>
            

        </div>
        <Contact/>
        <Footer/>
        </div>
    </div>
  )
}

export default HvacPage