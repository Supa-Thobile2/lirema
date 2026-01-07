<<<<<<< HEAD
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button, Header } from "../components";
import { Team, Contact, Footer } from "../pages";

function LoginPage() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [loginData, setLoginData] = useState({ email: "", password: "" });

  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Here you can add authentication logic
    alert(`Logging in with Email: ${loginData.email}`);
    setIsLoginOpen(false);
  };

  // Framer Motion variants
  const container = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2, duration: 0.5 } },
    exit: { opacity: 0, y: 20, transition: { duration: 0.3 } },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };
=======
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
>>>>>>> parent of 3a49e25 (updated project by adding framer animation)

    }
  return (
<<<<<<< HEAD
    <div>
      <Header />

      <section
        className="py-20 px-6 max-w-5xl mx-auto text-center space-y-6"
        aria-labelledby="login-hero-title"
      >
        <motion.h1
          id="login-hero-title"
          className="text-3xl md:text-5xl font-bold leading-snug"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.7 } }}
        >
          Welcome Back
        </motion.h1>
        <motion.p
          className="text-sm md:text-base text-gray-700 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.2 } }}
        >
          Log in to access your projects, messages, and updates with Li Rema Engineering.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.4 } }}
        >
          <Button
            text="Login"
            ariaLabel="Open login modal"
            onClick={() => setIsLoginOpen(true)}
          />
        </motion.div>
      </section>

      {/* Login Modal */}
      {isLoginOpen && (
        <motion.div
          className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4"
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <motion.div
            className="bg-white rounded-xl shadow-lg max-w-md w-full p-6 relative"
            variants={container}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <button
              onClick={() => setIsLoginOpen(false)}
              aria-label="Close login modal"
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
            >
              ×
            </button>

            <motion.h2
              className="text-xl md:text-2xl font-bold mb-4 text-center"
              variants={fadeUp}
            >
              Login
            </motion.h2>

            <motion.form
              onSubmit={handleLoginSubmit}
              className="space-y-4"
              variants={fadeUp}
            >
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={loginData.email}
                  onChange={handleLoginChange}
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-400 focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={loginData.password}
                  onChange={handleLoginChange}
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-400 focus:outline-none"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 text-white px-4 py-2 rounded-md w-full mt-2"
              >
                Log In
              </motion.button>
            </motion.form>
          </motion.div>
        </motion.div>
      )}

      {/* Reusable Page Sections */}
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

export default LoginPage;
=======
    
    <div className='
     border-b-1 fixed w-full inset-0  '>
        <div className=''>
        <div className=' p-4  flex items-center justify-between w-[100%] md:hidden'>
            <div  >
                <p className='text-[1rem] font-bold font-400'>Li Rema engineering & Costruction</p>
            </div>
            <p onClick={handleVisibility}><FaBars size={20}/></p>
            {isVisible? '': 
             <div className=' w-full'>
                    
               
                
                <div  className='border space-y-8 absolute top-0 right-0 w-full bg-white p-16 text-[#000]  flex items-center justify-between flex-col'>
                    <p onClick={handleVisibility} className=' border border-white  rounded-full inline-flex items-center justify-center h-20 w-20 text-2xl'>X</p>
                      <ul className='space-y-8 w-full mx-auto flex items-center justify-center flex-col  space-y-2'>
                   <Link to='/'> <li className='text-[1rem] rounded-[12px]'>Home</li></Link>
                   
                                      <Link to='/services'> <li className='text-[1rem] rounded-[12px]'>Services</li></Link>
                                                         <Link to='/about'> <li className='text-[1rem] rounded-[12px]'>About</li></Link>
                                                                            <Link to='/contacts'> <li className='text-[1rem] rounded-[12px]'>Contact Us</li></Link>
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
>>>>>>> parent of 3a49e25 (updated project by adding framer animation)
