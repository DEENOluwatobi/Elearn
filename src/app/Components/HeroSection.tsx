import React from 'react';
import { useTheme } from '@context/ThemeContext';
import Gallery from './Gallery';

const HeroSection = () => {

  const { theme } = useTheme();

  return (
      <section className="hero bg-primary">
        <div className="relative px-4 flex gap-4 flex-col md:flex-row w-full h-full justify-center items-center z-10">

          <div className='w-full md:w-[40%]'>
            <div className='flex flex-col justify-center md:justify-start items-center md:items-start'>
              <span className={`poppins text-black font-bold text-[5em] primary leading-1`}>Watch.</span>
              <span className={`poppins text-black font-bold text-[5em] primary`}>Learn.</span>
              <span className={`poppins text-black font-bold text-[5em] primary`}>Grow.</span>
            </div>

            <div className='border border-gray-400 w-full h-10 rounded-lg flex overflow-hidden'>
              <input 
                type="text" 
                placeholder='Search courses...'
                className='border-none outline-none placeholder:text-gray-300 text-sm w-full h-full px-2 py-1'
              />
              <button 
                type='submit' 
                className='bg-secondary text-white flex justify-center items-center text-sm hover:bg-primary 
                            duration-150 transition ease-in-out border-none outline-none px-4'
              >
                  Search
              </button>
            </div>
            
          </div>

          <div className='w-full md:w-[60%] h-full overflow-hidden'>
            <Gallery/>
          </div>

        </div>
        <div className={`${theme === 'dark' ? ' before:bg-black after:bg-black' : 'before:bg-white after:bg-white'} waves after:opacity-50 gap-1`}></div>
      </section>
  )
}

export default HeroSection;