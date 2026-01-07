<<<<<<< HEAD
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '../components';

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

function ServiceCard({
  title,
  subtitle,
  description,
  image,
  buttons,
  href = '#',
}) {
  return (
    <motion.article
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
    >
      {/* Click-through overlay */}
      <Link
        to={href}
        aria-label={`View service: ${title}`}
        className="absolute inset-0 z-10"
      />

      {/* Image */}
      {image && (
        <div className="overflow-hidden">
          <img
            src={image}
            alt={title}
            loading="lazy"
            decoding="async"
            className="
              h-48 w-full object-cover
              transition-transform duration-500 ease-out
              group-hover:scale-105
              motion-reduce:transform-none
            "
          />
        </div>
      )}

      {/* Content */}
      <div className="relative z-20 p-6 space-y-4 flex flex-col h-full">
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

        {/* Buttons */}
        <div className="flex flex-wrap gap-3 pt-2">
          {buttons.map((btn, idx) => (
            <Button
              key={idx}
              text={btn}
              onClick={(e) => e.stopPropagation()}
            />
          ))}
        </div>
      </div>
    </motion.article>
  );
}

export default ServiceCard;
=======
import React from 'react'
import img from '../images/emmanuel-ikwuegbu-zWOgsj3j0wA-unsplash.jpg'
import { Link } from 'react-router-dom'
import Button from './Button'

function ServicesCard(props) {
  return (
    <div className=' border border-[lightgray] '>
      <img src={img} alt='' className='object-fit block h-full'/>
        <div className='space-y-2 p-4'>
            <h6 className='text-[1rem] font-bold font-400'>{props.heading}</h6>
            <div className='space-y-2'>
            <h1 className='text-[.7rem] font-semibold font-400'>{props.subtext}</h1>
            <p className='text-[.6rem] font-medium font-200'>{props.description}</p>
            </div>
            <div>
              <Link to={props.link}>
                <Button text={props.btnText}/>
                </Link>

            </div>
        </div>
        
    </div>
  )
}

export default ServicesCard
>>>>>>> parent of 3a49e25 (updated project by adding framer animation)
