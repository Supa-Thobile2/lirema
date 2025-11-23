import React from 'react'

import Hero from './Hero'
import Services from './Services'
import About from './About'
import Work from './Work'
import Footer from './Footer'
import { Header } from '../components'
import Choose from './Choose'
import Team from './Team'
import Quote from './Quote'
import Subscribe from './Subscribe'
import Contact from './Contact'

function Home() {
  return (
    <div className='space-y-2'>
        
            <Header/>
   
       
<div className='p-4 space-y-4'>
            <Hero/>
            <Services/>
            <About/>
            <Choose/>
            <Team/>
            <Quote/>
            <Subscribe/>
            <Contact/>
          </div>
            
      

        
            <Footer/>
        
    </div>
  )
}

export default Home