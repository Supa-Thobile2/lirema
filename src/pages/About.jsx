import React from 'react'
import { FaBriefcase, FaHardHat } from 'react-icons/fa'
import img from '../assets/keyGuy.png'

function About() {
  return (

    <div className='block w-full  p-8 md:flex items-center justify-center'>
    <div className='border w-full  md:w-3/4  flex flex-col space-y-12 md:space-y-8  md:p-16  mx-auto'>
        <h6 className='text-md font-bold text-left'>About </h6>
        <h1 className='text-xl font-bold'>Transforming engineering challenges into innovative solutions </h1>
        <p className='text-xl font-sm font-400'>LiRema Engineering and Construction delivers comprehensive technical services with unmatched precision. We combine technical expertise with strategic innovation to solve complex engineering challenges. </p>
        <div className='flex items-centre justify-evenly'>
          <div><img src={img} alt='' className='w-10'/></div>

          <div><img src={img} alt='' className='w-10'/></div>
          <div><img src={img} alt='' className='w-10'/></div>
          <div><img src={img} alt='' className='w-10'/></div>

        </div>
        <div className='block w-full mx-auto space-y-2 md:space-y-0 md:flex items-center  md:gap-2'>
          <div className=''>
            <button className='p-4 border text-xl font-bold '>Our story</button>
          </div>
           <div className=''>
            <button className='p-4 border text-xl font-bold'>Learn More</button>
          </div>

        </div>
           

        
    </div>
    <div className=' md:w-1/4 mx-auto'>
      <img src={img} alt='' className='object-fit '/>

    </div>
    </div>
  )
}

export default About