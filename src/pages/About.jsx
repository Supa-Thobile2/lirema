import React from 'react'
import { FaBriefcase, FaHardHat } from 'react-icons/fa'
import img from '../assets/keyGuy.png'
import { Button } from '../components'

function About() {
  return (

    <div className='block  w-full p-4 space-y-4  md:flex' id='about'>
    <div className=' w-full  space-y-2 md:w-1/2  flex flex-col space-y-2 md:space-y-8  md:p-16  mx-auto'>
        <h6 className='text-md font-semibold text-left'>About </h6>
        <h1 className='text-lg md:text-xl font-bold'>Transforming engineering challenges into innovative solutions </h1>
        <p className='text-sm font-light font-400'>LiRema Engineering and Construction delivers comprehensive technical services with unmatched precision. We combine technical expertise with strategic innovation to solve complex engineering challenges. </p>
        <div className='flex items-centre justify-between p-4'>
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