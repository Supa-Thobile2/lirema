import React from 'react'
import { FaBriefcase, FaHardHat } from 'react-icons/fa'
import img from '../images/pavel-neznanov-w95Fb7EEcjE-unsplash.jpg'
import { Button } from '../components'

function About() {
  return (

    <div className='block  w-full p-4  md:flex' id='about'>
    <div className=' w-full p-2  space-y-8 md:w-1/2  flex flex-col space-y-2 md:space-y-8  md:p-16  mx-auto'>
        <p className='text-[.8rem] font-semibold font-700 text-left'>About </p>
        <div className='space-y-2'>
        <h1 className='text-[1rem]  font-bold font-600'>Transforming engineering challenges into innovative solutions </h1>
        <p className='text-[.6rem] font-light font-400'>Li Rema Engineering and Construction delivers comprehensive technical services with unmatched precision. We combine technical expertise with strategic innovation to solve complex engineering challenges. </p>
        </div>
        <div className='flex items-centre justify-between '>
          <div><img src={img} alt='' className='w-10'/></div>

          <div><img src={img} alt='' className='w-10'/></div>
          <div><img src={img} alt='' className='w-10'/></div>
          <div><img src={img} alt='' className='w-10'/></div>

        </div>
        <div className=' w-full flex   gap-2 space-y-2'>
          <div className='w-full'>
            <Button text='Our Story'/>
          </div>
           <div className='w-full'>
           <Button text='Get Quote'/>
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