import React from 'react'
import { FaAddressCard, FaEnvelopeOpen, FaPhone, FaPhoneAlt, FaRegEnvelopeOpen } from 'react-icons/fa'
import { Button, Header } from '../components'
import Footer from './Footer'

function ContactPage() {
  return (
    <>
    <Header/>
    <div className='p-8 mt-14 space-y-4 border'>
        <p>Connect</p>
        <h1>Contact Li Rema Engineering and Construction</h1>
        <p>Reach out to our expert team for comprehensive engineering and construction solution towards your project goal</p>
        <div className='flex items-center gap-4'>
            <button>Call</button>
            <button>Email</button>
        </div>
    </div>
     <div className='w-full flex items-center justify-center flex-col p-8 md:p-16 space-y-8 md:space-y-6' id='contact'>
        <p>Contact</p>
         <h6 className='text-4xl font-bond font-700'>Contact</h6>
         <p className='text-sm font-light font-200'> Reach out and solve your engineering challenges today.</p>
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
             <div className='w-full mx-auto '>
                 {/* <form className='w-full  space-y-4  mx-auto'>
                     <div className='border '>
                         <input type="email" name="email" id="" placeholder='enter email here' className='p-4'/>
                     </div>
                     <div className='border '>
                         <input type="text" name="name" id="" placeholder='enter email here' className='p-4'/>
                     </div>
                     <div className='border '>
                         <input type="text" name="message" id="" placeholder='enter email here' className='p-4'/>
                     </div>
                     <div className='w-full mx-auto '>
                         <button className='w-full p-2 border'>Submit</button>
                     </div>
                 </form> */}
                 image
             </div>
         </div>
 
 
     </div>
        <div className='w-full flex items-center justify-center flex-col p-8 md:p-16 space-y-8 md:space-y-6' id='contact'>
        <p>Connect</p>
         <h6 className='text-4xl font-bond font-700'>Contact Us</h6>
         <p className='text-sm font-light font-200'> Tess us about your engineering and construction project.</p>
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
             <div className='w-full mx-auto '>
                 <form className='w-full  space-y-4  mx-auto'>
                     <div className='border '>
                         <input type="email" name="email" id="" placeholder='enter email here' className='p-4 '/>
                     </div>
                     <div className='border '>
                         <input type="text" name="name" id="" placeholder='enter email here' className='p-4'/>
                     </div>
                     <div className='border '>
                         <input type="text" name="message" id="" placeholder='enter email here' className='p-4'/>
                     </div>
                     <div className='w-full mx-auto '>
                         <Button text='Submit'/>
                     </div>
                 </form>
                 <div className='border p-2 space-y-4'>
                 <p>Tell us more about you?</p>
                 <div className=' space-y-4'>

                 <input type="checkbox" name="clent" id="client" />
                 <label htmlFor="client">Business Client</label>
                 <input type="checkbox" name="clent" id="client" />
                 <label htmlFor="client">Business Client</label>
                 <input type="checkbox" name="clent" id="client" />
                 <label htmlFor="client">Business Client</label>
                 <input type="checkbox" name="clent" id="client" />
                 <label htmlFor="client">Business Client</label>
                 <input type="checkbox" name="clent" id="client" />
                 <label htmlFor="client">Business Client</label>
                 <input type="checkbox" name="clent" id="client" />
                 <label htmlFor="client">Business Client</label>
                 <div>
                 <textarea className='border-4' name="tes" id="" cols="30" rows="10" placeholder='Describe your project in detail'></textarea>
                 <div className="flex">
                 <input type="checkbox" name="clent" id="client" />
                   <label htmlFor="client">I agree to the terms and conditions</label>
                 
                 </div>
                 <Button text='Submit'/>

                 </div>
                 </div>
                 </div>
               
             </div>
             <div className='p-8 border-8 space-y-4'>
             <p>Location</p>
             <h3>Lacation</h3>
             <p>Find us where engineering meets innovation</p>



             </div>
         </div>
 
 
     </div>
     <Footer/>
     </>
   )
}

export default ContactPage