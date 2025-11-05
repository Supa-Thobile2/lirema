import React from 'react'
import { FaBriefcase, FaHardHat } from 'react-icons/fa'
import img from '../assets/keyGuy.png'

function About() {
  return (

    <div className='block w-full  p-6 md:p-4 md:flex'>
    <div className='border w-full p-4 md:p-2 md:space-y-1 space-y-4 md:w-1/2  flex flex-col space-y-2 md:space-y-8  md:p-16  mx-auto'>
        <h6 className='text-md font-semibold text-left'>About </h6>
        <h1 className='text-lg md:text-xl font-bold'>Transforming engineering challenges into innovative solutions </h1>
        <p className='text-sm font-light font-400'>LiRema Engineering and Construction delivers comprehensive technical services with unmatched precision. We combine technical expertise with strategic innovation to solve complex engineering challenges. </p>
        <div className='flex items-centre justify-evenly'>
          <div><img src={img} alt='' className='w-10'/></div>

          <div><img src={img} alt='' className='w-10'/></div>
          <div><img src={img} alt='' className='w-10'/></div>
          <div><img src={img} alt='' className='w-10'/></div>

        </div>
        <div className=' w-full mx-auto  flex items-center justify-center  gap-2'>
          <div className=''>
            <button className='p-4 border text-sm font-bold w-full'>Our story</button>
          </div>
           <div className=''>
            <button className='p-4 border text-sm font-bold w-full'>Learn More</button>
          </div>

        </div>
           

        
    </div>
    <div className='  md:w-1/2 mx-auto'>
      <img src={img} alt='' className='object-fit w-full h-full block'/>

    </div>
    </div>
  )
}

export default About