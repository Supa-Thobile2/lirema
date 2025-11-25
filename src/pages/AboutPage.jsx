import React from 'react'
import { Button, Header } from '../components'
import Team from './Team'
import Contact from './Contact'
import Footer from './Footer'


function AboutPage() {
  return (
    <div>

        <Header/>
        <div className=' px-8 py-20 mt-14 space-y-16 md:p-18 md:space-y-24 lg:p-14  lg:space-y-16 xl:p-14  flex items-center justify-center flex-col'>

            <p className='p-4  text-[.6rem] font-bold'>Our Story</p>
            <div className='space-y-2'>
            <h1 className='text-[1.5rem] font-bold fomt-700 md:text-8xl lg:text-4xl'>About Us</h1>
            <p className='text-[.6rem] md:text-lg xl:text-lg'>Building engineering solutions that transform infrastructure.</p>
           </div>
           
            <div className='flex items-center gap-4'>
                <div>
                   <Button text='Learn'/>
                </div>
                 <div>
                   <Button text='Contact'/>
                </div>

            </div>

        </div>
        <div className=' p-8 space-y-2'>
            <p className='text-[.6rem] font-light font-200'>Our Mission</p>
            <h1 className='text-[1.5rem] font-bold font-700'>Engineering excellence through innovation and precision</h1>
            <p className='text-[.6rem] font-light font-200'>Li Rema Engineering and construction stands as pioneering force in technical solutions. We deliver comprehensive engineering services that merge technical expertise with strategic vision.</p>
            {/* image */}

        </div>
        <div className=' p-8 space-y-2 '>
            <p className='text-[.6rem] font-light font-200'>Our Strenghts</p>
            <h1 className='text-[1.6rem] font-bold font-700'>Why choose Li Rema?</h1>
            <p className='text-[.6rem] font-light font-200'>Comprehensive engineering solutions for complex challenges.</p>
            <div className='block space-y-2 md:flex items-center'>
            <div className='block space-y-2 p-4 md:flex items-center border border-lightgray'>
                <div className=' '>
                    <div className='space-y-2'>
                    <p className='text-[.6rem] font-light font-200'>Expertise</p>
                    <h4 className='text-[1.2rem] font-bold font-700'>Proven technical mastery across multiple engineering domains.</h4>
                    <p className='text-sm font-light font-200'>Deep technical knowledge </p>
                    </div>
                    <div>
                        <Button text='Learn'/>
                      
                    </div>

                </div>
                <div>
                    image
                </div>
            </div>
             <div className='block  p-4 md:flex items-center border border-lightgray'>
                <div className=' space-y-2'>
                    <p className='text-[.6rem] font-light font-200'>Expertise</p>
                    <h4 className='text-[1.2rem] font-bold font-700'>Proven technical mastery across multiple engineering domains.</h4>
                    <p className='text-[.6rem] font-light font-200'>Deep technical knowledge </p>
                    <div>
                        <Button text='Learn'/>
                      
                    </div>

                </div>
                <div>
                    image
                </div>
            </div>
             <div className='block p-4 md:flex items-center border border-lightgray'>
                <div className=' space-y-2'>
                    <p className='text-[.6rem] font-light font-200'>Expertise</p>
                    <h4 className='text-[1.2rem] font-bold font-700'>Proven technical mastery across multiple engineering domains.</h4>
                    <p className='text-[.6rem] font-light font-200'>Deep technical knowledge </p>
                    <div>
                        <Button text='Learn'/>
                      
                    </div>

                </div>
                <div>
                    image
                </div>
            </div>


        </div>
        </div>
        
        
        <div className=' p-8 space-y-2'>
            <p className='text-[.6rem] font-light font-200'>Our Journey</p>
            <h3 className='text-[1.5rem] font-bold font-700'>
                Milestones of engineering excellence
            </h3>
            <p className='text-[.6rem] font-light font-200'>A story of continuous growth and technical advancement through strategic development and innovative solutions.</p>
            <div className='flex items-center w-full gap-4 '>
                <Button text='View History'/>
                <Button text='Learn'/>
            </div>
            {/* history links */}
        </div>
        <div  className=' p-8 space-y-2'>
            <div className='space-y-2'>
                <h3 className='text-[1.5rem] font-bold font-700'>Our trusted partners</h3>
                <p className='text-[.6rem] font-light font-200'>Collaborative networks driving technological innovation and excellence.</p>
                <div className='flex items-center justify-between gap-4'>
                    <Button text='View Partner'/>
                   <Button text='Learn'/>

                </div>
            </div>
            <div>image</div>
        </div>
              <div  className=' p-8 space-y-2'>
            
                <h3 className='text-[1.5rem] font-bold font-700'>Ready to build your next project?</h3>
                <p className='text-[.6rem] font-light font-200'>Connect with our expert team to discuss your next engineering and construction needs.</p>
                <div className='flex items-center justify-between gap-4'>
                    <Button text='Contact'/>
                    <Button text='Request quote'/>

                </div>
            
            
        </div>
        <Team/>
        <Contact/>
        <Footer/>

        
    </div>
  )
}

export default AboutPage