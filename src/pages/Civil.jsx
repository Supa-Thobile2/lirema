import React from 'react'
import { Button, Header } from '../components'
import Contact from './Contact'
import Footer from './Footer'
import Team from './Team'
import Quote from './Quote'

function Civil() {
  return (
    <div>

        <Header/>
        <div className='space-y-2 mt-14'>
        <div className='border-6 p-16 space-y-16 md:p-28 md:space-y-24 lg:p-14  lg:space-y-16 xl:p-14  flex items-center justify-center flex-col'>
            <p className=' text-sm font-light font-300'>Civil</p>
            <div className='space-y-2'>
            <h1 className='text-xl md:text-4xl lg:text-4xl font-bold font-700'>Civil Engineering Excellence</h1>
            <p className='text-md md:text-lg xl:text-lg'>Transform landscapes with precision engineering and innovative construction solutions that drive progress</p>
            </div>
            <div className='flex items-center gap-4 w-full'>
                <div>
                    <Button text='Explore'/>
                </div>
                 <div>
                    <Button text='Contact'/>
                </div>

            </div>

        </div>
        <div className='border-6 p-16 space-y-16 md:p-18 md:space-y-24 lg:p-14  lg:space-y-16 xl:p-14  flex items-center justify-center flex-col'>
           <p>Services</p>
           <div className='space-y-2'>
            <h1 className='text-lg font-bold font-700'>Civil Construction Expertise</h1>
            <p>Transforming landscapes through precision and engineering and innovative solutions. We deliver comprehensive civil construction services that meet the highest industry standards.</p>
           </div>
            <div className='   flex items-center justify-center  gap-2'>
                <div className='w-full '>
                    <Button text='Learn'/>
                </div>
                <div className='w-full '>
                    <Button text='Contact'/>
                </div>
            </div>

        </div>
        <div className='border-6 p-16  space-y-16  flex items-center justify-center flex-col'>
                <div className='space-y-4'>
                    <p>Foundations</p>
                    <h1>Site Preparation and groundwork</h1>
                    <p>Comprehensive site preparation using advanced techniques and equipment. We ensure stable and optimized foundations for all construction projects.</p>
                    <div className='  flex gap-4'>
                        <div className='w-full'>
                            <Button text='Explore'/>
                        </div>
                         <div className='w-full'>
                            <Button text='Details'/>
                        </div>

                    </div>


                </div>
               
        </div>
        <div className='border-6  p-14 space-y-8 flex items-center justify-center flex-col'>
            <p>Construction</p>
            <h1 className='text-lg font-bold font-700'>Residential and Commercial building solutions</h1>
            <p>We transform spaces with precision and vision. Our construction approach integrates cutting-edge techniques with practical engineering expertise.</p>
            <div className='flex gap-4'>
                <div className='w-full'>
                    <Button text='Explore'/>
                </div>
                <div className='w-full'>
                    <Button text='Details'/>
                </div>

            </div>

        </div>
        <div className='border-6  p-14 space-y-8 flex items-center justify-center flex-col'>
            <div className='block space-y-4 md:flex'>
                <div>video</div>
                <div className='space-y-4'>
                    <p>Builds</p>
                    <h1 className='text-lg font-bold font-700'>Comprehensive residential construction services</h1>
                    <p className='text-sm font-light font-100'>We design and construct houses that blend functionality with modern architectural principles. Our residential projects reflect individual client visions.</p>
                    <div className='flex gap-4'>
                        <div className='w-full'>
                            <Button text='Explore'/>
                        </div>
                        <div className='w-full'>
                            <Button text='Details'/>
                        </div>
                    </div>
                </div>
            </div>

        </div>
         <div className='border-6 p-16 space-y-16 md:p-18 md:space-y-24 lg:p-14  lg:space-y-16 xl:p-14  flex items-center justify-center flex-col'>
           <p>Management</p>
           <div className='space-y-2'>
            <h1 className='text-lg font-bold font-700'>Project Consulting Service</h1>
            <p>Comprehensive project management from concept to completion. We deliver strategic solution that transform complex challenge into successful outcomes.</p>
           </div>
            <div className='   flex items-center justify-center  gap-2'>
                <div className='w-full '>
                    <Button text='Learn'/>
                </div>
                <div className='w-full '>
                    <Button text='Contact'/>
                </div>
            </div>

        </div>
        <div className='border-6 p-16 space-y-16 md:p-18 md:space-y-24 lg:p-14  lg:space-y-16 xl:p-14  flex items-center justify-center flex-col'>
           <p>Consultation</p>
           <div className='space-y-2'>
            <h1 className='text-lg font-bold font-700'>Strategic project planning</h1>
            <p>Developing comprehensive projects roadmaps that align technical requirements with business objectives and resources optimization..</p>
           </div>
            <div className='   flex items-center justify-center  gap-2'>
                <div className='w-full '>
                    <Button text='Explore'/>
                </div>
                <div className='w-full '>
                    <Button text='Details'/>
                </div>
            </div>

        </div>
        <div className='border-6 p-16 space-y-16 md:p-18 md:space-y-24 lg:p-14  lg:space-y-16 xl:p-14  flex items-center justify-center flex-col'>
           
           <div className='space-y-2'>
            <h1 className='text-lg font-bold font-700'>Ready to start your next project</h1>
            <p>Government with our expert civil engineering team for comprehensive construction solutions.</p>
           </div>
            <div className='   flex items-center justify-center  gap-2'>
                <div className='w-full '>
                    <Button text='Consult'/>
                </div>
                <div className='w-full '>
                    <Button text='Quote'/>
                </div>
            </div>

        </div>

        <Team/>
        <Quote/>
   
        <Contact/>
        <Footer/>
        </div>
    </div>
  )
}

export default Civil