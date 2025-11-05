import React from 'react'
import { Header } from '../components'

function ServicesPage() {
   return (
     <div>
 
         <Header/>
         <div className='border-6 p-10 space-y-10 md:p-18 md:space-y-20 lg:p-14  lg:space-y-16 xl:p-14  flex items-center justify-center flex-col'>
             <p className='p-4 border text-sm font-bold'>Our Story</p>
             <h1 className='text-6xl md:text-8xl lg:text-4xl'>Services</h1>
             <p className='text-md md:text-2xl xl:text-lg'>Building innovative solutions that transform infrastructure and drive technological progress across multiple factors.</p>
             <div className='flex items-center gap-6 '>
                 <div>
                     <button className='p-4 border text-md md:text-lg font-bold font-900 outline-none'>Learn More </button>
                 </div>
                  <div>
                     <button className='p-4 border text-md md:text-lg font-bold font-900 outline-none'>Contact Us </button>
                 </div>
 
             </div>
 
         </div>
         
     </div>
   )
}

export default ServicesPage