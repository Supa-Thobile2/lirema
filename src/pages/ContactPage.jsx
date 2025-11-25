import React from 'react'
import { FaAddressCard, FaEnvelopeOpen, FaPhone, FaPhoneAlt, FaRegEnvelopeOpen } from 'react-icons/fa'
import { Button, Header } from '../components'
import Footer from './Footer'

function ContactPage() {
  return (
    <>
    <Header/>
    <div className='p-8 mt-14 space-y-16 '>
        <p className='text-[.6rem] font-regular font-400'>Connect</p>
        <div className='space-y-4'>
        <h1 className='text-[1.5rem] font-bold font-200'>Contact Li Rema Engineering and Construction</h1>
        <p className='text-[.6rem] font-semibold font-100'>Reach out to our expert team for comprehensive engineering and construction solution towards your project goal</p>
       </div>
       
        <div className='flex items-center gap-4'>
            <Button text='Email'/>
            <Button text='Call'/>
            <Button text='Whatsapp'/>
        </div>
    </div>
     
        <div className='w-full flex items-center justify-center flex-col p-8 space-y-16 md:p-16  md:space-y-6' id='contact'>
        <p className='text-[.6rem] font-light font-200'>Connect</p>
         <h6 className='text-[1.5rem] font-bond font-700'>Contact Us</h6>
         <p className='text-[.6rem] font-light font-200'> Tess us about your engineering and construction project.</p>
         <div className='block w-full  md:flex items-center justify-between space-y-4'>
             <div className='space-y-4 w-full mx-auto '>
                 
                 <div className='space-y-2'>
                     <FaRegEnvelopeOpen/>
                     <p>General Inqueries:</p>
                 </div>
                 <div className='space-y-2'>
                     <FaPhoneAlt/>
                     <p>General Inqueries:</p>
                 </div>
                 <div className='space-y-2'>
                     <FaAddressCard/>
                     <p>General Inqueries:</p>
                 </div>
             </div>
             <div className='w-full mx-auto  space-y-4'>
                 <form className='w-full  p-8 space-y-2  mx-auto'>
                     <div className=' '>
                         <input type="email" name="email" id="" placeholder='enter email here' className='p-2 border border-lightgray w-full rounded'/>
                     </div>
                     <div className=' '>
                         <input type="text" name="name" id="" placeholder='enter email here' className='p-2 border border-lightgray w-full rounded'/>
                     </div>
                     <div className=' '>
                         <input type="text" name="message" id="" placeholder='enter email here' className='p-2 border border-lightgray w-full rounded'/>
                     </div>
                     
                         <Button text='Submit'/>
                     
                 </form>
                 <div className='  space-y-4'>
                 <p>Tell us more about you?</p>
                 <div className=' space-y-2'>

                 <input type="checkbox" name="clent" id="client" />
                 <label htmlFor="client">Business Client</label><br/><br/>

                 <input type="checkbox" name="clent" id="client" />
                 <label htmlFor="client">Business Client</label><br/><br/>

                 <input type="checkbox" name="clent" id="client" />
                 <label htmlFor="client">Business Client</label><br/><br/>

                 <input type="checkbox" name="clent" id="client" />
                 <label htmlFor="client">Business Client</label><br/><br/>

                 <input type="checkbox" name="clent" id="client" />
                 <label htmlFor="client">Business Client</label><br/><br/>

                 <input type="checkbox" name="clent" id="client" />
                 <label htmlFor="client">Business Client</label>
                 <div>

                 <textarea className='border w-full' name="tes" id="" cols="30" rows="10" placeholder='Describe your project in detail'></textarea><br/><br/>
                 <div className="flex">
                 <input type="checkbox" name="clent" id="client" />
                   <label htmlFor="client">I agree to the terms and conditions</label>
                 
                 </div>
                 <Button text='Submit'/>

                 </div>
                 </div>
                 </div>
               
             </div>
             <div className='p-8  space-y-4'>
             <p className='text-[.6rem] font-light font-300'>Gauteng</p>
             <h3 className='text-[1.6rem] font-bold font-700'>Norkem Park North</h3>
             <p className='text-[.6rem] font-light font-300'>Find us where engineering meets innovation</p>



             </div>
         </div>
 
 
     </div>
     <Footer/>
     </>
   )
}

export default ContactPage