import React from 'react'
import Img from '../assets/pac-logo.jpg'
import { FaFan, FaHammer, FaThermometer, FaTools } from 'react-icons/fa'
import { FaComputer } from 'react-icons/fa6'
import { servicesData } from '../data/Data'
import { ServicesCard } from '../components'


function Services() {
  return (
    <div className='   p-4 space-y-4 block w-full md:flex items-center justify-center  flex-col md:p-16 md:space-y-8 xl:p-16 ' id='services'>
        <p className='text-[.7rem] font-semibold font-300 '>Services</p>
        <div className='space-y-2'>
        <h1 className='text-[1.4rem] font-bold font-700'>Comprehensive technical solutions</h1>
       
       
        <p className='text-[.67rem] font-medium font-500'>Integrated engineering services for complex industrial and residential projects</p>
        </div>
       <div className='block  p-2 shadow-xl space-y-2  md:flex items-center justify-center gap-4 md:gap-8'>
        {servicesData.map((item, index)=>{
            return <ServicesCard
            heading ={item.heading}
        subtext= {item.sxt}
        description= {item.description}
        btnText={item.btnText}
            
            />

        })}
        
</div>
     
    </div>
  )
}

export default Services