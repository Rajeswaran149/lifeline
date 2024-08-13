import React, { useState } from 'react';
import { CiHeart } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { SlBag } from "react-icons/sl";
import { MdPersonOutline } from "react-icons/md";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import lifelineImage from './lifeline.jpg';

const Navbar = () => {
  const [ isMenuOpen , setIsMenuOpen ] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(true);
}
  const closingWindow = () => {
      setIsMenuOpen(false)
  }


  return (
    <nav className='bg-red-500 p-6 m-1 rounded-t-md'>
    <div className='flex space-x-2 items-center justify-between md:hidden'>
          <div className='text-white font-serif text-2xl'>
            𝕃𝕚𝕗𝕖𝕝𝕚𝕟𝕖  
          </div>
          <div className='flex md:hidden space-x-2 items-center'>
            <button className=' text-white font-bold'>
              Log in
            </button>
            <IoMdMenu className='text-white size-7 hover:bg-red-600 rounded' onClick={toggleMenu} />
          </div>
    </div>
    {isMenuOpen && (
      <div className=' fixed top-0 left-0  w-full h-full flex flex-col justify-between p-6 bg-white '>
                <div className='flex justify-end '>
                  <IoClose className='size-6 text-red-400 hover:bg-red-700 rounded' onClick={closingWindow}/>
                </div>
                <div className=' relative flex flex-col justify-center items-center bottom-16 '>
                <a href='#' className='text-black font-semibold mb-4 hover:bg-red-500 px-2 rounded-sm'>Emergency Alerts</a>
                <a href='#' className='text-black font-semibold mb-4 hover:bg-red-500 px-2 rounded-sm '>Resource Locator</a>
                <a href='#' className='text-black font-semibold mb-4 hover:bg-red-500 px-2 rounded-sm '>Query Chatbot</a>
                <a href='#' className='text-black font-semibold mb-4 hover:bg-red-500 px-2 rounded-sm'>Personalized Support</a>
                <a href='#' className='text-black font-semibold mb-4 hover:bg-red-500 px-2 rounded-sm'>Quick Actions</a>
                <a href='#' className='text-black font-semibold mb-4 hover:bg-red-500 px-2 rounded-sm'>Emotional Support</a>

                
              </div>
             
              
        </div>
        )}

    <div className= ' hidden bg-white p-4 rounded-sm md:flex justify-between items-center'>

  
      <div className='text-red-600 font-semibold text-2xl '>
         𝕃𝕚𝕗𝕖𝕝𝕚𝕟𝕖
      </div>

      {/* Desktop View: Menu Items  */}
      <div className='hidden md:flex md:flex-row text-black font-semibold'>
        <a className=' hover:bg-red-500 px-2 rounded-sm' href='#'>Emergency Alerts</a>
        <a className=' hover:bg-red-500 px-2 rounded-sm' href='#'>Resource Locator</a>
        <a className=' hover:bg-red-500 px-2 rounded-sm' href='#'>Query Chatbot</a>
        <a className=' hover:bg-red-500 px-2 rounded-sm' href='#'>Personalized Support</a>
        <a className=' hover:bg-red-500 px-2 rounded-sm' href='#'>Quick Actions</a>
        <a className=' hover:bg-red-500 px-2 rounded-sm' href='#'>Emotional Support</a>
      </div>
      
      {/* Desktop View:Icons and Login/Signup */}
      <div className=' md:flex md:space-x-2 md:justify-between items-center'>
        
        <div className='flex space-x-2 px-1 py-0.5 border border-gray-300  rounded-sm '>
          <div>SignUp</div>
          <span>/</span>
          <div>LogIn</div>
        </div>
      </div>
      
      
    </div>
    <div className='md:hidden'>
      {/* replace here to original image */}
 
      <img className='object-cover w-full h-50 p-4 rounded-lg' src={lifelineImage} alt="Lifeline image" />

    
    </div>
    <div className='md:hidden'>
      <h1 className='text-white text-3xl '>Re imagining the way you think introducing LIFELINE</h1>
      <h6 className='text-white mt-2'>Click on the explore button below to know more about Lifeline.</h6>
    </div>

    <div className='flex justify-center mt-6 md:hidden'>
      <button className='bg-white px-10 py-1 rounded-sm font-medium'>Explore</button>
    </div>
  </nav>
  );
};

export default Navbar;
