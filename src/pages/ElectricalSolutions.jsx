import React from 'react'
import { Button, Header } from '../components'
import Contact from './Contact'
import Footer from './Footer'
import Team from './Team'
import Quote from './Quote'

function ElectricalSolutions() {
  return (
    <div>

        <Header/>
        <div className='p-12 space-y-4'>
        <div className=' space-y-16 mt-16   md:space-y-18   lg:space-y-16   flex items-center justify-center flex-col'>
            <p className='text-sm font-light font-200'>Electrify</p>
            <div className='space-y-4'>
            <h1 className='text-2xl md:text-4xl lg:text-4xl font-bold font-700'>Electrical services refined</h1>
            <p className='text-sm font-light font-300'>Reiablble infrastructure designed to support your business operations with and cutting edge expertise</p>
            </div>
            
            <div className='flex items-center justify-center gap-4 w-full'>
                <div>
                    <Button text='Explore'/>
                </div>
                 <div>
                  <Button text='Learn'/>
                </div>

            </div>

        </div>
        <div className='   space-y-16   lg:space-y-16   flex items-center justify-center flex-col'>
            <p >Services</p>
            <div className='space-y-4'>
            <h1 className='text-lg font-bold font-700'>Comprehensive electrical solutions for every need</h1>
            <p className='text-sm font-light font-300'>We deliver precision electrical services across multiple sectors and application.</p>
            </div> 
            
            {/* //image */}
            <div className='block space-y-4  md:flex items-center justify-center  gap-4'>
                <div classname='space-y-4'>
                    <h1 className='text-lg font-bold font-700'>HT Switching and Authorization </h1>
                    <p className='text-sm font-light font-300 '>Advanced high tension electrical management with strict safety protocols and expert technical implementation.</p>
                </div>
                 <div classname=' space-y-4'>
                    <h1 className='text-lg font-bold font-700'>Transformer maintainance </h1>
                    <p className='text-sm font-light font-300'>Advanced high tension electrical management with strict safety protocols and expert technical implementation.</p>
                </div>
                 <div classname='w-full space-y-4'>
                    <h1 className='text-lg font-bold font-700'>Switchgear Maintainance </h1>
                    <p className='text-sm font-light font-200'>Advanced high tension electrical management with strict safety protocols and expert technical implementation.</p>
                </div>

                
            </div>

        </div>
        <div className=' space-y-14  flex items-center justify-center flex-col'>
                <div className='space-y-8'>
                    <p className='text-sm font-bold font-300'>Expertise</p>
                    <div className='space-y-6'>
                    <h1 className='text-lg font-bold font-700'>HT Switching and Authorization</h1>
                    <p>Precision electrical management for complex industrial environments.</p>
                    </div>
                    <ul className='space-y-2'>
                        <li>Advanced safety protocols</li>
                        <li>Certified technical </li>
                        <li>Comprehensive risk management</li>
                    </ul>
                    <div className=' space-y-2 flex gap-4'>
                        <div className='w-full'>
                           <Button text='Learn'/>
                        </div>
                         <div className='w-full'>
                           <Button text='Contact'/>
                        </div>

                    </div>


                </div>
                
        </div>
         <div className='   space-y-14  flex items-center justify-center flex-col'>
                <div className='space-y-4'>
                    <p className='text-sm font-block font-300'>Reliability</p>
                    <div className='space-y-2'>
                    <h1 className='text-lg font-bold font-700'>Transformer maintanance and care</h1>
                    <p className='text-sm font-block font-300'>Ensuring continuous electrical perfomance through expert diagnostic and preventitive strategies.</p>
                    </div>
                    <ul className='space-y-2'>
                        <li>Comprehensive system analysis</li>
                        <li>Predictive maintanance techniques </li>
                        <li>Minimized operational disruptions</li>
                    </ul>
                    <div className=' space-y-2 flex gap-4'>
                        <div className='w-full'>
                            <Button text='Request Service'/>
                        </div>
                         <div className='w-full'>
                            <Button text='Contact'/>
                        </div>

                    </div>


                </div>
                
        </div>
         <div className='  space-y-14  flex items-center justify-center flex-col'>
                <div className='space-y-8'>
                    <p className='text-sm font-bold font-300'>Connection</p>
                    <div className='space-y-4'>
                    <h1 className='text-lg font-bold font-700'>Cable joints and terminations with technical precision</h1>
                    <p className='text-lg'>Seamless electrical connections demand expert craftsmanship. Our technicians deliver precise cable termination that guarantee long term prfomance and sytem integrity.</p>
                    </div>
                    <ul classname='space-y-2'>
                        <li>Advanced safety protocols</li>
                        <li>Certified technical </li>
                        <li>Comprehensive risk management</li>
                    </ul>
                    <div className=' space-y-2 flex gap-4'>
                        <div className='w-full'>
                           <Button text='Explore'/>
                        </div>
                         <div className='w-full'>
                            <Button text='Connect'/>
                        </div>

                    </div>


                </div>
                
        </div>
         <div className='space-y-16  flex items-center justify-center flex-col'>
                <div className='space-y-8'>
                    <p className='text-sm font-light font-300'>Safety</p>
                    <div className='space-y-2'>
                    <h1 className='text-lg font-bold font-700'>Domestic electrical installation for morder homes</h1>
                    <p className='text-sm font-light font-300'>Transform your living space with professional. We provide comprehensive residential wiring that meets highest safety and perfomance standards </p>
                   </div>
                    <div className=' space-y-4 flex gap-4'>
                        <div className='w-full'>
                            <Button text='Upgrade'/>
                        </div>
                         <div className='w-full'>
                            <Button text='Consult'/>
                        </div>

                    </div>


                </div>
                
        </div>
         <div className='  space-y-14  flex items-center justify-center flex-col'>
                <div className='space-y-8'>
                    <p className='text-sm font-light font-300'>Sustainable</p>
                    <h1 className='text-md font-bold font-700'>Solar installation and renewable energy solutions</h1>
                    <p className='text-sm font-light font-300'>Harness clean energy with advanced solar installation services. We design, implement efficient solar system that reduces environmental impact and energy costs.</p>
                 
                    <div className=' space-y-2 flex gap-4'>
                        <div className='w-full'>
                            <Button text='Install'/>
                        </div>
                         <div className='w-full'>
                            <Button text='Discuss'/>
                        </div>

                    </div>


                </div>
                
        </div>
         <div className='  space-y-14  flex items-center justify-center flex-col'>
                <div className='space-y-8'>
                    <p className='text-sm font-light font-300'>Sustainable</p>
                    <div className='space-y-2'>
                    <h1 className='text-md font-bond font-700'>Solar installation and renewable energy solutions</h1>
                    <p className='text-sm font-light font-300'>Harness clean energy with advanced solar installation services. We design, implement efficient solar system that reduces environmental impact and energy costs.</p>
                    </div>
                    


                </div>
                <div className='block md:flex gap-4'>
                    <div className='space-y-4'>
                        <div className='space-y-2'>
                            <p className='text-sm font-light font-300'>CCTV</p>
                            <h1 className='text-md font-bond font-700'>Advanced security monitoring </h1>
                            <p className='text-sm font-light font-300'>Comprehensive visual survelliance for residential and commercial properties.</p>
                            <div className=' space-y-2 flex gap-4'>
                        <div className='w-full'>
                            <Button text='Protect'/>
                        </div>
                         <div className='w-full'>
                           <Button text='Consult'/>
                        </div>

                    </div>
                        </div>
                        <div>image</div>
                    </div>
                    <div className='block gap-6 space-y-4 md:flex  flex-wrap'>

                        <div className='border space-y-2 p-4'>
                            <p className='text-sm font-light font-300'>Access</p>
                            <h1 className='text-md font-bond font-700'>Control systems</h1>
                            <p className='text-sm font-light font-300'>Secure entry management for enhanced property protection</p>
                            <div className='w-full'>
                                <Button text='Learn'/>

                            </div>
                        </div>
                         <div className='border space-y-2 p-4'>
                            <p className='text-sm font-light font-300'>Remote</p>
                            <h1 className='text-sm font-bold font-700'>Management solutions</h1>
                            <p className='text-sm font-light font-300'>Seamless control of integrated home and office.</p>
                            <div className='w-full'>
                                <Button text='Connect'/>

                            </div>
                        </div>
                          <div className='border space-y-2 p-4'>
                            <p className='text-sm font-light font-300'>Alarm</p>
                            <h1 className='text-sm font-bold font-700'>Security systems</h1>
                            <p className='text-sm font-light font-300'>Advanced detection and notification for comprehensive property protection.</p>
                            <div className='w-full'>
                                <Button text='Activate'/>

                            </div>
                        </div>
                          <div className='border space-y-2 p-4'>
                            <p className='text-sm font-light font-300'>Gate</p>
                            <h1 className='text-sm font-bold font-700'>Motor installation</h1>
                            <p className='text-sm font-light font-300'>Automated entry solutions for convenient and secure property access.</p>
                            <div className='w-full'>
                                <Button text='Install'/>

                            </div>
                        </div>


          

                        
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

export default ElectricalSolutions