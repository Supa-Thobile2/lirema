import React from 'react'
import { Button, Header } from '../components'
import { FaChevronRight } from 'react-icons/fa'
import Team from './Team'
import Contact from './Contact'
import Footer from './Footer'

function ServicesPage() {
   return (
     <div>
 
         <Header/>
         <div className='  mt-14 p-8 space-y-20 '>
             <p className='text-[.6rem]     '>Buld</p>
             <div className='space-y-4'>
             <h1 className='text-xl font-bold  md:text-2xl lg:text-4xl'>Engineering solutions that work</h1>
             <p className='text-md md:text-2xl xl:text-lg'>Delivering precise technical across multiple engineering disciplines with proven reliability and professinal commitment.</p>
             </div>
             <div className='flex items-center  gap-6 w-full'>
                 <div className='w-full'>
                    <Button text='Service'/>
                 </div>
                  <div className='w-full'>
                     <Button text='Contact'/>
                 </div>
 
             </div>
 
         </div>
         <div className='space-y-16 p-4'>
          
           <p className='text-sm font-medium font-400'>cool</p>
         
         
         <div className='block md:flex items-center'>
         <div className='p-2 space-y-8'>
        <h3 className='text-xl font-bold'>HVAC services for comfort</h3>
         <p className='text-sm font-light font-300 '>Comprehensive heating and cooling solutions</p>
         <div className='flex items-center'>
         <Button text='Learn'/>
         </div>
         </div>
         <div>image</div>
         </div>

         </div>
           <div className=' space-y-16 p-4'>
        
         <div className='block md:flex items-center'>
         <div className=' space-y-16'>
         <p className='text-sm font-medium font-400'>Civil</p>
         <h1 className='text-xl font-bold'>Civil and Construction services that build futures</h1>
         <ul className='space-y-4'>
         <li className='text-sm font-light font-400 '>Integrated project</li>
         <li className='text-sm font-light font-400 '>Sustainable construction</li>
         <li className='text-sm font-light font-400 '>Comprehensive site management</li>
         
         </ul>
         <div className='block space-y-2 md:space-y-0 md:flex items-center gap-4'>
         <Button text='Explore'/>
         <Button text='Details <FaChevronRight'/>
         </div>
         </div>
         <div>image</div>
         </div>

         </div>
           <div className=' space-y-16 p-4'>
            <p className='text-sm font-medium font-400'>build</p>
        
         <div className='block md:flex items-center space-y-16'>
         <div className='p-2 space-y-2'>
          <h3 className='text-xl font-bold'>Specialized construction solutions </h3>
         <h1 className='text-sm font-light font-300'>Custom engineering for unique projects requirements</h1>
         <div className='block space-y-2 md:flex items-center gap-4'>
         <Button text='Learn'/>
         <Button text='Details <FaChevronRight'/>
         </div>
         </div>
         <div>image</div>
         </div>

         </div>
          <div className='space-y-16 p-4'>

         <div className='block md:flex items-center'>
         <div className='p-2 space-y-4'>
         <p className='text-sm font-medium font-400'>Electrify</p>
         <h1 className='text-xl font-bold'>Advanced electrical system design and maintanance</h1>
         <div className='block space-y-4 md:flex items-center gap-4'>
         <Button text='Learn'/>
         <Button text='Details <FaChevronRight'/>
         </div>
         </div>
         <div>image</div>
         </div>

         </div>
           <div className=' space-y-16 p-4'>

         <div className='block md:flex items-center'>
         <div className='p-2 space-y-4'>
         <p className='text-sm font-medium font-400'>Smart</p>
         <h1 className='text-xl font-bold'>Smart home solutions for modern living</h1>
         <div className='block space-y-4 md:flex items-center gap-4'>
         <Button text='Learn'/>
         <Button text='Details <FaChevronRight'/>
         </div>
         </div>
         <div>image</div>
         </div>

         </div>
         <div className='space-y-16 p-4'>
         <h3 className='text-xl font-bold'>Our comprehensive  engineering expertise</h3>
         <div className='block md:flex items-center'>
         <div>
         {/* image */}
         <h3>Technical precision</h3>
         </div>
         <div className="w-full">
         <Button text='Contact'/>
         </div>
          <div>
         {/* image */}
         <h3>Innovative Solutions</h3>
         </div>
          <div>
         {/* image */}
         <h3>Client focused delivery</h3>
         </div>
      
       
         </div>

         </div>
          <div className=' space-y-16 p-4'>

         <div className='flex items-center'>
         <div className='p-2 space-y-4'>
        
         <h1 className='text-xl font-bold'>Get your project started today</h1>
         <div className='block space-y-2 md:flex items-center gap-4'>
         <Button text='Quote'/>
         <Button text='Details <FaChevronRight/>'/>
         </div>
         </div>
         <div>image</div>
         </div>
        

         </div>
          <Team/>
         <Contact/>
         <Footer/>
         
         

     </div>
   )
}

export default ServicesPage