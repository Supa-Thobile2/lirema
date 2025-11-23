import React from 'react'
import { Button, Header } from '../components'
import Contact from './Contact'
import Footer from './Footer'
import Team from './Team'
import Quote from './Quote'

function ConstructionPage() {
 return (
    <div>

        <Header/>
        <div className='space-y-2'>
        <div className='border-6 p-16 space-y-15 mt-12 space-y-4 md:p-18 md:space-y-24 lg:p-14  lg:space-y-16 xl:p-14  flex items-center justify-center flex-col'>
            <p className='p-4 border text-sm font-bold'>Construction Solutions</p>
            <div className='space-y-2'>
            <h1 className='text-3xl md:text-8xl lg:text-4xl font-bold font-700'>Construction solutions</h1>
            <p className='text-md md:text-lg xl:text-lg'>Building innovative solutions that transform infrastructure and drive technological progress across multiple factors.</p>
           </div>
            <div className='flex items-center gap-2 w-full'>
                <div>
                    <Button text='Learn'/>
                </div>
                 <div>
                    <Button text='Contact'/>
                </div>

            </div>

        </div>
        <div className='border-6  p-16 space-y-16  md:p-18 md:space-y-24 lg:p-14  lg:space-y-16 xl:p-14  flex items-center justify-center flex-col'>
            <p>Construction</p>
            <div className='space-y-2'>
            <h1 className='text-lg font-bold font-700'>Construction Expertise</h1>
            <p>Lorem, ipsum dolor.</p>
            </div>
            <div className='   flex items-center justify-center  gap-4'>
                <div classname='w-full '>
                    <Button text='Learn'/>
                </div>
                <div classname='w-full '>
                    <Button text='Learn'/>
                </div>
            </div>

        </div>
        <div className='border-6 p-16  space-y-16  flex items-center justify-center flex-col'>
                <div className='space-y-8'>
                    <h1>Lorem, ipsum dolor.</h1>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                    <div className=' space-y-2 flex gap-4'>
                        <div className='w-full'>
                            <Button text='Learn'/>
                        </div>
                         <div className='w-full'>
                           <Button text='Learn'/>
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