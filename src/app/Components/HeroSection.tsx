import React from 'react';
import { useTheme } from '@context/ThemeContext';
import Gallery from './Gallery';

const HeroSection = () => {

  const { theme } = useTheme();

  return (
      <section className="hero bg-primary">
        <div className="relative px-4 flex flex-col md:flex-row w-full h-full justify-center items-center z-10">

          <div className='w-full md:w-[40%]'>
            <div className='flex flex-col gap-2 justify-center md:justify-start items-center md:items-start'>
              <span className={`text-black font-semibold text-2xl`}>Watch.</span>
              <span className={`text-black font-semibold text-2xl`}>Learn.</span>
              <span className={`text-black font-semibold text-2xl`}>Grow.</span>
            </div>

            <div className='border border-gray-400 w-full h-10 rounded-lg flex'>
              <input 
                type="text" 
                placeholder='Search courses...'
                className='border-none outline-none placeholder:text-gray-300 text-sm w-full h-full px-2 py-1'
              />
              <button 
                type='submit' 
                className='bg-secondary text-white flex justify-center items-center text-sm hover:bg-green-500 
                            duration-150 transition ease-in-out border-none outline-none'
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