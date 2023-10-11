"use client";
import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { Close } from '@mui/icons-material';

type NavbarProps = {
  onLinkClick: (path: string) => void;
};

const Navbar: React.FC<NavbarProps> = ({ onLinkClick }) => {
  const handleLinkClick = (path: string) => {
    onLinkClick(path);
  };

  const [ menu, setMenu ] = useState(false)

  return (
    <div className='fixed top-0 left-0 w-full flex flex-col'>
      <div className='w-full h-5 bg-secondary flex justify-center items-center'>
        <span className='text-white text-[.7em] font-semibold text-center w-full'>Seeking to acquire knowledge online? - Join now</span>
      </div>

      <div className='w-full h-12 flex justify-between items-center px-2 py-1 bg-[#f2f2f2] '>
        <div className="flex md:hidden cursor-poiner relative" onClick={()=>setMenu(!menu)}>
          <MenuIcon/>
        </div>
        {
          menu &&
            <div className='flex md:hidden flex-col absolute top-0 left-0 bg-primary w-[15em] h-screen text-white overflow-hidden'>
              <Close className='cursor-pointer text-white'  onClick={()=>setMenu(!menu)}/>
              <div className='flex flex-col gap-2'>
                <span className='text-white' onClick={()=>handleLinkClick('/')}>Home</span>
                <span className='text-white' onClick={()=>handleLinkClick('about')}>About Us</span>
                <span className='text-white' onClick={()=>handleLinkClick('contact')}>Contact us</span>
              </div>
            </div>
        }
        <div className='text-[.9em] font-semibold text-gray-700 cursor-pointer'>
          Logo
        </div>

        <ul className='hidden md:flex justify-between items-center gap-4'>
          <li
            className='relative group list-none text-[.9em] font-semibold text-gray-700 cursor-pointer'
            onClick={() => handleLinkClick('/')}
          >
            HOME
            <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></div>
          </li>

          <li
            className='relative group list-none text-[.9em] font-semibold text-gray-700 cursor-pointer'
            onClick={() => handleLinkClick('/admission')}
          >
            ADMISSION
            <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></div>
          </li>

          <li
            className='relative group list-none text-[.9em] font-semibold text-gray-700 cursor-pointer'
            onClick={() => handleLinkClick('/skill')}
          >
            SKILL
            <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></div>
          </li>

          <li
            className='relative group list-none text-[.9em] font-semibold text-gray-700 cursor-pointer'
            onClick={() => handleLinkClick('/batch')}
          >
            BATCH-23
            <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></div>
          </li>

          <li
            className='relative group list-none text-[.9em] font-semibold text-gray-700 cursor-pointer'
            onClick={() => handleLinkClick('/about')}
          >
            ABOUT
            <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></div>
          </li>
        </ul>

        <div>
          <span
            className='px-5 py-1 rounded-md border border-[primary] text-white text-center text-[.9em] bg-secondary cursor-pointer'
            onClick={() => handleLinkClick('/login')}
          >
            Login
          </span>
        </div>

      </div>
    </div>
  );
};

export default Navbar;
