import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Header() {
    const [isVisible, setIsVisible] = useState(true);
   const handleVisibility = () =>{
    setIsVisible(!isVisible)

    }
    const handleLogin=()=>{
        console.log('button pressed')

    }
  return (
    
    <div className='
     border-b-1 fixed w-full inset-0  '>
        <div className=''>
        <div className=' p-4  flex items-center justify-between w-[100%] md:hidden'>
            <div  >
                <p className='text-[1rem] font-bold font-400'>Li Rema engineering & Costruction</p>
            </div>
            <p onClick={handleVisibility}><FaBars size={20}/></p>
            {isVisible? '': 
             <div className='p-8 w-full'>
                    
               
                
                <div  className='border absolute top-0 right-0 h-[100vh] w-[100vw] p-8 bg-black text-white space-y-4 flex items-center justify-between flex-col'>
                    <p onClick={handleVisibility} className=' border border-white p-6 rounded-full inline-flex items-center justify-center h-20 w-20 text-2xl'>X</p>
                      <ul className=' p-2 w-full mx-auto flex items-center justify-center flex-col  space-y-2'>
                   <Link to='#'> <li className='text-[1rem] rounded-[12px]'>Home</li></Link>
                   
                                      <Link to='#services'> <li className='text-[1rem] rounded-[12px]'>Services</li></Link>
                                                         <Link to='#about'> <li className='text-[1rem] rounded-[12px]'>About</li></Link>
                                                                            <Link to='#contact'> <li className='text-[1rem] rounded-[12px]'>Contact Us</li></Link>
                                                                                               <Link to='#team'> <li className='text-[1rem] rounded-[12px]'>Our Team</li></Link>
                    <button onClick={handleLogin} className='px-4 py-2 border rounded-full w-[100%] text-[1rem]'>
                        
                        Log In</button>
                </ul>

                </div>
                
            </div>
            }
           
        </div>
        <div className='hidden p-4 md:flex items-center justify-between'>
            <div>
                 <p className='text-md font-bold font-400'>Li Rema engineering & Costruction</p>
            </div>
            <div>
                
                <ul className='flex items-center justify-between gap-2'>
                                      <Link to='#about'> <li className='text-md uppercase border-2 border-[#fff] py-2 px-4 rounded-[12px]'>Home</li></Link>
                   <Link to='#services'> <li className='text-md uppercase border-2 border-[#fff] py-2 px-4 rounded-[12px]'>Services</li></Link>
                   <Link to='#about'> <li className='text-md uppercase border-2 border-[#fff] py-2 px-4 rounded-[12px]'>About</li></Link>
                    <button className='px-6 py-2 border rounded-full text-sm font-bold font-600'>
                        
                        Log In</button>
                </ul>
            </div>



        </div>
        </div>
    </div>
  )
}

export default Header