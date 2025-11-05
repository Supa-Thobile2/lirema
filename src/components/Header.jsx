import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa';

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
                <p className='text-sm font-bold font-400'>Li Rema engineering & Costruction</p>
            </div>
            <p onClick={handleVisibility}><FaBars size={20}/></p>
            {isVisible? '': 
             <div className='p-8 w-full'>
                    
               
                
                <div onClick={handleVisibility} className='border absolute top-0 right-0 h-[100vh] w-[100vw] p-8 bg-black text-white space-y-4 flex items-center justify-between flex-col'>
                    <p onClick={handleVisibility} className=' border border-white p-6 rounded-full inline-flex items-center justify-center h-20 w-20 text-2xl'>X</p>
                      <ul className=' p-10 w-full mx-auto flex items-center justify-center flex-col  space-y-10'>
                    <li className='text-md uppercase border-2 border-[#fff] py-2 px-4 rounded-[12px]'>About</li>
                    <li className='text-md uppercase'>Services</li>
                    <li className='text-md uppercase'>Work</li>
                    <button onClick={handleLogin} className='px-4 py-2 border rounded-full w-[100%] text-[4.8vw]'>
                        
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
                    <li className='text-sm font-bold font-600'>About</li>
                    <li className='text-sm font-bold font-600'>Services</li>
                    <li className='text-sm font-bold font-600'>Work</li>
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