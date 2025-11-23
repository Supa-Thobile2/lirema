import React from 'react'
import { Button, Header } from '../components'
import Contact from './Contact'
import Footer from './Footer'
import Team from './Team'
import Quote from './Quote'

function Specialized() {
  return (
    <div>

        <Header/>
        <div className='space-y-2'>
        <div className='border-6 p-18 space-y-14 mt-16 space-y-4 md:p-18 md:space-y-24 lg:p-14  lg:space-y-16 xl:p-14  flex items-center justify-center flex-col'>
            <p className='p-4 border text-sm font-bold'>Build</p>
            <div className='space-y-2'>
            <h1 className='text-3xl md:text-8xl lg:text-4xl font-bold font-700'>Specialized construction expertise</h1>
            <p className='text-md md:text-lg xl:text-lg'>Precision engineering and advanced construction techniques that transform complex challenges into techniques that transform complex challenges into seamless architectural solutions.</p>
           </div>
           
            <div className='flex items-center gap-2 w-full'>
                <div>
                    <Button text='Explore'/>
                </div>
                 <div>
                    <Button text='Contact'/>
                </div>

            </div>

        </div>
        <div className='border-6  p-14 space-y-14  md:p-18 md:space-y-24 lg:p-14  lg:space-y-16 xl:p-14  flex items-center justify-center flex-col'>
           <p>Foundations</p>
            <h1 className='text-lg font-bold font-700'>Structural engineering solutions</h1>
            <p>We build strong foundations that withstandhest conditions. Our </p>
            <div className='   flex items-center justify-center  gap-4'>
                <div classname='w-full '>
                    <Button text='Learn'/>
                </div>
                <div classname='w-full '>
                    <Button text='Learn'/>
                </div>
            </div>

        </div>
        <div className='border-6 p-14  space-y-14  flex items-center justify-center flex-col'>
                <div className='space-y-8'>
                    <p>Foundations</p>
                    <h1>Structural engineering solutions</h1>
                    <p>We build strong foundations that withstand harshest conditions. Our premium engineering transforms raw ground into stable platforms foe complex architectural projects</p>
                    {/* logo - partner */}
                    <div className=' space-y-2 flex gap-4'>
                        <div className='w-full'>
                            <Button text='Learn'/>
                        </div>
                         <div className='w-full'>
                            <Button text='View Project'/>
                        </div>

                    </div>


                </div>
                <div>image</div>
                
        </div>
        <div className='border-6 p-14  space-y-14  flex items-center justify-center flex-col'>
                <div className='space-y-8'>
                    <p>Infrastructure</p>
                    <h1>Advanced construction techniques</h1>
                    <ul>
                        <li>Complex Network</li>
                        <li>Integrated urban solutions</li>
                        <li>Sustainable development strategies</li>
                    </ul>
                    {/* logo - partner */}
                    <div className='  flex gap-4'>
                        <div className='w-full'>
                            <Button text='Explore'/>
                        </div>
                         <div className='w-full'>
                            <Button text='Details '/>
                        </div>

                    </div>


                </div>
                <div>image</div>
                
        </div>
         <div className='border-6  p-14 space-y-14  md:p-18 md:space-y-24 lg:p-14  lg:space-y-16 xl:p-14  flex items-center justify-center flex-col'>
            <h1 className='text-lg font-bold font-700'>Custom engineering solutions</h1>
            <p>Pushing boundaries of construction technology with cutting-edge design and implementation. We transform complex challenges into seamless architectural achievements.</p>
            <div className='   flex items-center justify-center  gap-4'>
                <div classname='w-full '>
                   <Button text='Discover'/>
                </div>
                <div classname='w-full '>
                    <Button text='Our Approach'/>
                </div>
            </div>

        </div>
        <div className='border-6  p-14 space-y-14  md:p-18 md:space-y-24 lg:p-14  lg:space-y-16 xl:p-14  flex items-center justify-center flex-col'>
            <h1 className='text-lg font-bold font-700'>Custom engineering solutions</h1>
            <p>Pushing boundaries of construction technology with cutting-edge design and implementation. We transform complex challenges into seamless architectural achievements.</p>
            <div className='   flex items-center justify-center  gap-4'>
                <div classname='w-full '>
                   <Button text='Discover'/>
                </div>
                <div classname='w-full '>
                   <Button text='Our Approach'/>
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

export default Specialized