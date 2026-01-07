<<<<<<< HEAD
import React from 'react';
import { Button, Header } from '../components';
import { motion } from 'framer-motion';

import img2 from '../images/hvac3.jpg';
import img3 from '../images/construction3.webp';
import img4 from '../images/construction2.webp';
import img5 from '../images/electric1.jpg';
import img6 from '../images/camera2.webp';
import img7 from '../images/camera1.jpg';

import Team from './Team';
import Contact from './Contact';
import Footer from './Footer';

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

function ServiceCard({ title, subtitle, description, image, buttons }) {
  return (
    <motion.article
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
    >
      {image && (
        <img
          src={image}
          alt={title}
          className="h-48 w-full object-cover"
        />
      )}

      <div className="p-6 space-y-4 flex-1 flex flex-col">
        {subtitle && (
          <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
            {subtitle}
          </p>
        )}

        <h2 className="text-lg md:text-xl font-semibold tracking-tight text-gray-900">
          {title}
        </h2>

        {description && (
          <p className="text-sm text-gray-600 leading-relaxed flex-1">
            {description}
          </p>
        )}

        <div className="flex flex-wrap gap-3 pt-2">
          {buttons.map((btn, idx) => (
            <Button key={idx} text={btn} />
          ))}
        </div>
      </div>
    </motion.article>
  );
}

function ServicesPage() {
  return (
    <>
      <Header />

      <main className="overflow-hidden">
        {/* HERO */}
        <section
          className="px-6 pt-24 pb-16 md:px-20"
          aria-labelledby="services-heading"
        >
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl space-y-6"
          >
            <p className="text-sm font-medium uppercase tracking-wide text-gray-500">
              Build
            </p>

            <h1
              id="services-heading"
              className="text-3xl md:text-5xl font-semibold tracking-tight text-gray-900"
            >
              Engineering solutions that work
            </h1>

            <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-2xl">
              Delivering precise technical solutions across multiple engineering
              disciplines with proven reliability and professional commitment.
            </p>

            <div className="flex gap-4 pt-4">
              <Button text="Services" />
              <Button text="Contact" variant="secondary" />
            </div>
          </motion.div>
        </section>

        {/* SERVICES GRID */}
        <section className="px-6 py-20 md:px-20 bg-gray-50">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <ServiceCard
              title="HVAC services for comfort"
              description="Comprehensive heating and cooling solutions tailored to your needs."
              image={img2}
              buttons={['Learn more']}
            />

            <ServiceCard
              subtitle="Civil"
              title="Civil and construction services that build futures"
              description="Integrated project management, sustainable construction, and comprehensive site execution."
              image={img3}
              buttons={['Explore', 'Details']}
            />

            <ServiceCard
              title="Specialized construction solutions"
              description="Custom engineering approaches for unique project requirements."
              image={img4}
              buttons={['Learn', 'Details']}
            />

            <ServiceCard
              subtitle="Electrify"
              title="Advanced electrical system design and maintenance"
              description="Reliable, efficient electrical infrastructure built to modern standards."
              image={img5}
              buttons={['Learn', 'Details']}
            />

            <ServiceCard
              subtitle="Smart"
              title="Smart home solutions for modern living"
              description="Integrated automation, surveillance, and intelligent control systems."
              image={img7}
              buttons={['Learn', 'Details']}
            />

            <ServiceCard
              title="Get your project started today"
              description="Talk to our experts and turn your idea into a successful project."
              image={img6}
              buttons={['Quote', 'Details']}
            />
          </div>
        </section>

        {/* SHARED SECTIONS */}
        <Team />
        <Quote />
        <Contact />
        <Footer />
      </main>
    </>
  );
=======
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
>>>>>>> parent of 3a49e25 (updated project by adding framer animation)
}

export default ServicesPage