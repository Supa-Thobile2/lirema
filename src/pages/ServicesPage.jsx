import React from 'react'
import { Button, Header } from '../components'
import { FaChevronRight } from 'react-icons/fa'
import img from '../images/scott-blake-x-ghf9LjrVg-unsplash.jpg'
import img2 from '../images/kettenreaktion-l_Vn4HlFQVw-unsplash.jpg'
import img3 from '../images/quan-jing-HSzTjbAF5Qs-unsplash.jpg'
import img4 from '../images/yk-k-cWPULrqLCL8-unsplash.jpg'
import img5 from '../images/nicolas-thomas-3GZi6OpSDcY-unsplash.jpg'
import img6 from '../images/andy-tang-jP_KGADOp9c-unsplash.jpg'
import img7 from '../images/kien-nguyen-994AH40vmVs-unsplash.jpg'
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
         <div className=' p-4'>
          
           <p className='text-[1.2rem] font-medium font-400 ml-4'>cool</p>
         
         
         <div className='block md:flex items-center '>
         <div className='space-y-4 p-4'>
        <h3 className='text-[1.6rem] font-bold'>HVAC services for comfort</h3>
         <p className='text-[1.2rem] font-light font-300 '>Comprehensive heating and cooling solutions</p>
         <div className='flex items-center'>
         <Button text='Learn'/>
         </div>
         </div>
         <div><img src={img2} alt=''/></div>
         </div>

         </div>
           <div className='  p-4'>
        
         <div className='block md:flex items-center'>
         <div className=' space-y-4 p-4 '>
         <p className='text-[1.2rem] font-medium font-400'>Civil</p>
         <h1 className='text-[1.8rem] font-bold'>Civil and Construction services that build futures</h1>
         <ul className='space-y-2'>
         <li className='text-[1.2rem] font-light font-400 '>Integrated project</li>
         <li className='text-[1.2rem] font-light font-400 '>Sustainable construction</li>
         <li className='text-[1.2rem] font-light font-400 '>Comprehensive site management</li>
         
         </ul>
         <div className='flex items-center gap-4'>
         <Button text='Explore'/>
         <Button text='Details '/>
         </div>
         </div>
         <div><img  src={img3} alt=''/></div>
         </div>

         </div>
           <div className='  p-4'>
            <p className='text-[1.2rem] font-medium font-400'>build</p>
        
         <div className='block md:flex items-center space-y-4'>
         <div className='p-2 space-y-2'>
          <h3 className='text-[1.6rem] font-bold'>Specialized construction solutions </h3>
         <h1 className='text-[1.2rem] font-light font-300'>Custom engineering for unique projects requirements</h1>
         <div className='flex items-center gap-4'>
         <Button text='Learn'/>
         <Button text='Details '/>
         </div>
         </div>
         <div><img src={img4} alt=''/></div>
         </div>

         </div>
          <div className=' p-4'>

         <div className='block md:flex items-center'>
         <div className='p-2 space-y-4'>
         <p className='text-[1.2rem] font-medium font-400'>Electrify</p>
         <h1 className='text-[1.6rem] font-bold'>Advanced electrical system design and maintanance</h1>
         <div className='flex items-center gap-4'>
         <Button text='Learn'/>
         <Button text='Details '/>
         </div>
         </div>
         <div><img src={img5} alt=""/></div>
         </div>

         </div>
           <div className='  p-4'>

         <div className='block md:flex items-center'>
         <div className='p-2 space-y-4'>
         <p className='text-[1.2rem] font-medium font-400'>Smart</p>
         <h1 className='text-[1.6rem] font-bold'>Smart home solutions for modern living</h1>
         <div className='flex items-center gap-4'>
         <Button text='Learn'/>
         <Button text='Details '/>
         </div>
         </div>
         <div><img src={img} alt=''/></div>
         </div>

         </div>
         <div className=' p-4'>
         <h3 className='text-[1.6rem] font-semibold font-300'>Our comprehensive  engineering expertise</h3>
         <div className='flex items-center flex-col'>
         <div>
         <img src={img7} alt=''/>
         <h3 className='text-[1.4rem] font-semibold font-300'>Technical precision</h3>
         </div>
        
          <div>
         <img src={img7} alt=''/>
         <h3 className='text-[1.4rem] font-semibold font-300'>Innovative Solutions</h3>
         </div>
          <div>
         <img src={img7} alt=''/>
         <h3 className='text-[1.4rem] font-semibold font-300'>Client focused delivery</h3>
         </div>
      
        <div className="w-full">
         <Button text='Contact'/>
         </div>
         </div>

         </div>
          <div className='  p-4'>

         <div className='flex items-center'>
         <div className='p-2 space-y-4'>
        
         <h1 className='text-xl font-bold'>Get your project started today</h1>
         <div className='flex items-center gap-4'>
         <Button text='Quote'/>
         <Button text='Details '/>
         </div>
         </div>
         <div>
          <img src={img6} alt=''/>
         </div>
         </div>
        

         </div>
          <Team/>
         <Contact/>
         <Footer/>
         
         

     </div>
   )
}

export default ServicesPage