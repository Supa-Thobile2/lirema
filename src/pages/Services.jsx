import React from 'react'
import Img from '../assets/pac-logo.jpg'
import { FaFan, FaHammer, FaThermometer, FaTools } from 'react-icons/fa'
import { FaComputer } from 'react-icons/fa6'
import { servicesData } from '../data/Data'
import { ServicesCard } from '../components'


function Services() {
  return (
    <div className='p-8 block w-full mx-auto md:flex items-center justify-center  flex-col space-y-1 p-1 md:p-18 space-y-0 md:space-y-4 xl:p-6 '>
        <h6 className='text-sm font-semibold font-600 '>Services</h6>
        <h1 className='text-4xl font-bold font-800'>Comprehensive technical solutions</h1>
       
       
        <p className='text-[8px] font-medium font-500'>Integrated engineering services for complex industrial and residential projects</p>
        
       <div className='block space-y-2 md:flex items-center gap-4'>
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