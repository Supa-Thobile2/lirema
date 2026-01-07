import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {  About, AboutPage, Civil, ConstructionPage, ContactPage, ElectricalSolutions, Home, HvacPage, QuoteForm, ServicesPage, Specialized, Smart, Partners, OurTeam, PrivacyPolicy, TermsAndConditions } from '../src/pages'











function App() {


  return (

<BrowserRouter>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/about' element={<AboutPage/>}/>

  <Route path='/services' element={<ServicesPage/>}/>
    <Route path='/hvac' element={<HvacPage/>}/>
    <Route path='/electric' element={<ElectricalSolutions/>}/>
     <Route path='/construction' element={<ConstructionPage/>}/>
      <Route path='/civil' element={<Civil/>}/>
      <Route path='/special' element={<Specialized/>}/> 
  <Route path='/contacts' element={<ContactPage/>}/>


<Route path='/quote' element={<QuoteForm/>}/>
<Route path='/smart-home' element={<Smart/>}/>
<Route path='/partners' element={<Partners/>}/>
<Route path='/teams' element={<OurTeam/>}/>
<Route path='/policy' element={<PrivacyPolicy/>}/>
<Route path='/terms' element={<TermsAndConditions/>}/>

</Routes>
</BrowserRouter>




  )
}

export default App