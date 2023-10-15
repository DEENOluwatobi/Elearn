import React from 'react';
import { useTheme } from '@context/ThemeContext';
import Gallery from './Gallery';
import Socials from './Socials';


const HeroSection = () => {

  const { theme } = useTheme();

  return (
      <section className="hero bg-primary">
        <div className="relative px-4 flex gap-4 flex-col md:flex-row w-full h-full justify-center items-center z-10">

          <div className='w-full md:w-[50%] flex items-center justify-center gap-5'>
            <div className="md:flex hidden items-center justify-center w-24 h-full">
              <Socials/>
            </div>

            <div className='w-full h-full flex flex-col justify-between py-2 gap-5'>
              
              <div className='flex flex-col justify-center md:justify-start items-center md:items-start gap-2'>
                <span className={`barlow font-bold text-[2.6em] primary`}>
                    Empowering Minds, Transforming Futures 
                </span>
                <span className={`${theme === 'dark' ? 'text-white' : 'text-gray-600'} w-[65%] text-[1.1em]`}>
                    Transforming Minds and Shaping Futures - Where the Virtues of Education 
                    Merge with the Frontiers of Innovation
                </span>
              </div>

              <div className='border border-gray-400 w-full h-12 rounded-xl flex overflow-hidden'>
                <input 
                  type="text" 
                  placeholder='Search courses...'
                  className='border-none text-black outline-none placeholder:text-gray-600 w-full h-full p-2'
                />
                <button 
                  type='submit' 
                  className='bg-black text-white flex justify-center items-center hover:bg-gray-800
                  duration-150 transition ease-in-out border-none outline-none px-4 w-[35%]'
                >
                    Search
                </button>
              </div>
              
            </div>
          </div>

          <div className='w-full md:w-[50%] h-full overflow-hidden flex gap-5 justify-center items-center'>
            <Gallery/>
            <div className="flex md:hidden items-center justify-center w-24 h-full">
              <Socials/>
            </div>
          </div>

        </div>
        <div className={`${theme === 'dark' ? ' before:bg-black after:bg-black' : 'before:bg-white after:bg-white'} waves after:opacity-50 gap-1`}></div>
      </section>
  )
}

export default HeroSection;