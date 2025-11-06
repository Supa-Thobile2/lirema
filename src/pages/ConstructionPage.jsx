import React from 'react'
import { Header } from '../components'
import Contact from './Contact'
import Footer from './Footer'
import Team from './Team'
import Quote from './Quote'

function ConstructionPage() {
 return (
    <div>

        <Header/>
        <div className='space-y-2'>
        <div className='border-6 p-12 space-y-14 mt-12 space-y-4 md:p-18 md:space-y-24 lg:p-14  lg:space-y-16 xl:p-14  flex items-center justify-center flex-col'>
            <p className='p-4 border text-sm font-bold'>Construction Solutions</p>
            <h1 className='text-3xl md:text-8xl lg:text-4xl font-bold font-700'>Construction solutions</h1>
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
        <div className='border-6  p-12 space-y-14  md:p-18 md:space-y-24 lg:p-14  lg:space-y-16 xl:p-14  flex items-center justify-center flex-col'>
            <p>Construction</p>
            <h1 className='text-lg font-bold font-700'>Construction Expertise</h1>
            <p>Lorem, ipsum dolor.</p>
            <div className='   flex items-center justify-center  gap-4'>
                <div classname='w-full '>
                    <button className='border w-full p-2 flex items-center justify-center'>Learn More</button>
                </div>
                <div classname='w-full '>
                    <button className='border w-full p-2  flex items-center justify-center'>Learn More</button>
                </div>
            </div>

        </div>
        <div className='border-6 p-12  space-y-14  flex items-center justify-center flex-col'>
                <div className='space-y-8'>
                    <h1>Lorem, ipsum dolor.</h1>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                    <div className=' space-y-2 flex gap-4'>
                        <div className='w-full'>
                            <button className='w-full p-2 border '>Learn</button>
                        </div>
                         <div className='w-full'>
                            <button className='w-full p-2 border '>Learn</button>
                        </div>

                    </div>


                </div>
                
        </div>
        <div className='border-6 p-8  space-y-2  flex items-center justify-center flex-col'>
            <p>Construction solutions</p>'
            <h1 className='text-lg font-bold font-700'>Construction Solutions</h1>
           

        </div>
       
        
       
        <Team/>
        <Quote/>
   
        <Contact/>
        <Footer/>
        </div>
    </div>
  )
}

export default ConstructionPage