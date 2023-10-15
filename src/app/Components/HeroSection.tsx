import React from 'react';
import { useTheme } from '@context/ThemeContext';
import Gallery from './Gallery';
import { FacebookLine, MailLine, InstagramLine, TwitterLine, GoogleIcon } from '@base/icons';
import Socials from './Socials';


const HeroSection = () => {

  const { theme } = useTheme();

  return (
      <section className="hero bg-primary">
        <div className="relative px-4 flex gap-4 flex-col md:flex-row w-full h-full justify-center items-center z-10">

          <div className='w-full md:w-[40%] flex flex-col justify-between py-2'>
            <div className='flex flex-col justify-center md:justify-start items-center md:items-start'>
              <span className={`poppins font-bold text-[5em] text-green-700 leading-[80px]`}>Watch.</span>
              <span className={`poppins font-bold text-[5em] text-red-600 leading-[80px]`}>Learn.</span>
              <span className={`poppins font-bold text-[5em] text-yellow-600 leading-[80px]`}>Grow.</span>
            </div>

            <div className='border border-gray-400 w-full h-12 rounded-xl flex overflow-hidden'>
              <input 
                type="text" 
                placeholder='Search courses...'
                className='border-none text-black outline-none placeholder:text-gray-600 text-sm w-full h-full p-2'
              />
              <button 
                type='submit' 
                className='bg-black text-white flex justify-center items-center text-sm hover:bg-gray-800
                duration-150 transition ease-in-out border-none outline-none px-4 w-[35%]'
              >
                  Search
              </button>
            </div>
            
          </div>

          <div className='w-full md:w-[60%] h-full overflow-hidden flex gap-5 justify-center items-center'>
            <Gallery/>

            <div className="flex items-center justify-center w-24 h-full">
              <Socials/>
            </div>

          </div>

        </div>
        <div className={`${theme === 'dark' ? ' before:bg-black after:bg-black' : 'before:bg-white after:bg-white'} waves after:opacity-50 gap-1`}></div>
      </section>
  )
}

export default HeroSection;