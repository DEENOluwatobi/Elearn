import React from 'react';
import { useTheme } from '@context/ThemeContext';
import Gallery from './Gallery';
import { FacebookLine, GoogleLine, InstagramLine, TwitterLine } from '@base/icons';


const HeroSection = () => {

  const { theme } = useTheme();

  return (
      <section className="hero bg-primary">
        <div className="relative px-4 flex gap-4 flex-col md:flex-row w-full h-full justify-center items-center z-10">

          <div className='w-full md:w-[40%]'>
            <div className='flex flex-col justify-center md:justify-start items-center md:items-start'>
              <span className={`poppins text-black font-bold text-[5em]  leading-[30px]`}>Watch.</span>
              <span className={`poppins text-black font-bold text-[5em]  leading-[30px]`}>Learn.</span>
              <span className={`poppins text-black font-bold text-[5em]  leading-[30px]`}>Grow.</span>
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

          <div className='w-full md:w-[60%] h-full overflow-hidden flex gap-3 justify-center items-center'>
            <Gallery/>
            <div className="flex items-center justify-center flex-col">
              <div className="w-3 h-30 bg-gray-700"></div>
              <div className="w-50 h-50 flex items-center justify-center rounded-full border-3 border-gray-700 cursor-pointer transition duration-500 ease-in-out hover:bg-blue-400 hover:border-gray-500">
                <FacebookLine/>
              </div>
              <div className="w-50 h-50 flex items-center justify-center rounded-full border-3 border-gray-700 cursor-pointer transition duration-500 ease-in-out hover:bg-blue-500 hover:border-gray-500">
                <InstagramLine/>
              </div>
              <div className="w-50 h-50 flex items-center justify-center rounded-full border-3 border-gray-700 cursor-pointer transition duration-500 ease-in-out hover:bg-gradient-to-br from-blue-400 via-red-400 to-green-400 hover:border-gray-500">
                <TwitterLine/>
              </div>
              <div className="w-50 h-50 flex items-center justify-center rounded-full border-3 border-gray-700 cursor-pointer transition duration-500 ease-in-out hover:bg-red-400 hover:border-gray-500">
                <GoogleLine/>
              </div>
              <div className="w-3 h-30 bg-gray-700"></div>
            </div>
          </div>

        </div>
        <div className={`${theme === 'dark' ? ' before:bg-black after:bg-black' : 'before:bg-white after:bg-white'} waves after:opacity-50 gap-1`}></div>
      </section>
  )
}

export default HeroSection;