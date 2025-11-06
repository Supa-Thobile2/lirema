import React from 'react'
import { Header } from '../components'
import Contact from './Contact'
import Footer from './Footer'

function HvacPage() {
  return (
    <div>

        <Header/>
        <div className='space-y-2'>
        <div className='border-6 p-16 mt-14 space-y-14 md:p-18 md:space-y-24 lg:p-14  lg:space-y-16 xl:p-14  flex items-center justify-center flex-col'>
            <p className='p-4 border text-sm font-bold'>HVAC</p>
            <h1 className='text-3xl md:text-8xl lg:text-4xl font-bold font-700'>Precision HVAC solutions</h1>
            <p className='text-md md:text-lg xl:text-lg'>Building innovative solutions that transform infrastructure and drive technological progress across multiple factors.</p>
            <div className='flex items-center gap-2 w-full'>
                <div>
                    <button className='p-4 border w-full text-sm font-bold font-300'>Learn More </button>
                </div>
                 <div>
                    <button className='p-4 border w-full text-sm font-bold font-300'>Contact Us </button>
                </div>

            </div>

        </div>
        <div className='border-8 p-12 block md:flex gap-4'>
            <div className='space-y-8'>
            <h6 className='text-sm font-bold font-700'>HVAC </h6>
            <h1 className='text-2xl md:text-8xl lg:text-4xl font-bold font-700'>Professional HVAC installation for optimal comfort</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, fugit. Nisi iusto voluptatum aspernatur doloribus blanditiis alias autem minus inventore quia reiciendis consequuntur fugit ducimus, cum impedit perferendis doloremque suscipit?</p>
            <ul className="space-y-4">
                <li>Installation</li>
                <li>Repairs</li>
                {/* <li>Main</li> */}
            </ul>
            <div className='flex'>
                <div className='w-full'>
                    <button className='p-2 text-sm font-bold font-300 w-full'>Learn More</button>
                </div>
                <div className='w-full'>
                    <button className='p-2 text-sm font-bold font-300 w-full'>Learn More</button>
                </div>


            </div>
            </div>
            <div>image</div>
        </div>
        <div className='block p-12 border-8 md:flex'>
            <div className='space-y-8'>
                <p className='text-sm font-bold font-300'>HVAC</p>
                <h4 className='text-2xl font-bold font-500'>Comprehensive HVAC maintainance long term perfomance</h4>
                <p className='text-sm font-light font-200'>Three statatat
                </p>
                <ul className='space-y-4'>
                    <li>Installation</li>
                     <li>Repairs</li>
                      <li>Maintain</li>
                </ul>
                <div className='flex'>
                    <div className='w-full'> 
                        <button className='p-2 border'>Lern More</button>

                    </div>
                    <div className='w-full'> 
                        <button className='p-2 border'>Lern More</button>

                    </div>

                </div>
            </div>
            <div>image</div>

        </div>
        <div className='block p-12 border-8 space-y-8 md:flex items-center justify-center flex-col'>
            <p>HVAC</p>
            
                <h1 className='text-2xl font-bold font-500'>Swift HVAC Repair Services</h1>

            <div className='block md:flex'>
                 <div>
                    image

                </div> 
                <div className='space-y-4'>
                    
                    <h1 className='text-lg font-bold font-700'>Expert trobleshooting and resolution</h1>
                    <p>Lorem</p>

                    <div className='flex items-center'>
                        <div className='w-full'>
                            <button className='p-2 w-full border'>Leran More</button>
                        </div>
                        <div className='w-full'>
                            <button classname='p-2 w-full border'>Leran More</button>
                        </div>
                    </div>

                </div>

            </div>


        </div>
        <div className='block p-12 border-8 space-y-8 md:flex items-center justify-center flex-col'>
            <div>
                video
            </div>
            <div className='space-y-8'>
                <h1 className='text-lg font-bold font-700'>Li Rema Engineering & Construction</h1>
                <div className='flex items-center divide'>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>logo</p>
                </div>
            </div>

        </div>
        <div className='block p-12 border-8 space-y-8 md:flex items-center justify-center flex-col'>
            <div className='space-y-8'>
                <p>
                    HVAC
                </p>
                <h1 className='text-lg font-bold font-500'>Ready to optimize your climate control</h1>
                <p>Lorem, ipsum dolor.</p>

                <div className='block md:flex items-center justify-center'>
                <div className='flex items-center justify-center'>
                    <div className='w-full'>
                        <button className='text-sm font-bold font-200 w-full'>Learn More</button>
                    </div>
                     <div className='w-full'>
                        <button className='text-sm font-bold font-200 w-full'>Learn More</button>
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