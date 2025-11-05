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
    <div>
        
            <Header/>
   
       

            <Hero/>
            <Services/>
            <About/>
            <Choose/>
            <Team/>
            <Quote/>
            <Subscribe/>
            <Contact/>
            
      

        
            <Footer/>
        
    </div>
  )
}

export default Home