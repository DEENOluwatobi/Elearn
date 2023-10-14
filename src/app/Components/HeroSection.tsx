import React from 'react';
import { useTheme } from '@context/ThemeContext';
import Gallery from './Gallery';

const HeroSection = () => {

  const { theme } = useTheme();

  return (
      <section className="hero bg-primary">
        <div className="relative flex w-full h-full justify-center items-center z-10">

          <div className='w-[40%]'>
            <span className='text-black text-[2em] w-full'>
              Hello Online School
            </span>
          </div>

          <div className='w-[60%] h-full overflow-hidden'>
            <Gallery/>
          </div>

        </div>
        <div className={`${theme === 'dark' ? ' before:bg-black after:bg-black' : 'before:bg-white after:bg-white'} waves after:opacity-50 gap-1`}></div>
      </section>
  )
}

export default HeroSection;