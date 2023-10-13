"use client";
import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { Close } from '@mui/icons-material';
import { motion } from 'framer-motion';
import ThemeBtn from './ThemeBtn';
import { useTheme } from '@context/ThemeContext'

type NavbarProps = {
  onLinkClick: (path: string) => void;
};

const Navbar: React.FC<NavbarProps> = ({ onLinkClick }) => {

  const handleLinkClick = (path: string) => {
    onLinkClick(path);
  };
  const MobileLinkClick = (path: string) => {
    onLinkClick(path);
    setMenu(!menu);
  };

  const [ menu, setMenu ] = useState(false)
  const { theme } = useTheme();
  const styles = {
    container: {
      backgroundColor: theme === 'dark' ? '#150a0a' : 'white',
      color: theme === 'dark' ? 'white' : 'black',
    }
  }

  return (
    <div className='fixed top-0 left-0 w-full flex flex-col'>
      <div className={`w-full h-5 bg-secondary flex justify-center items-center`}>
        <span className='text-white text-[.7em] font-semibold text-center w-full'>Seeking to acquire knowledge online? - Join now</span>
      </div>

      <div className={`${theme === 'dark' ? 'bg-[#b4b3b3]' : 'bg-[#f2f2f2]'} w-full h-12 flex justify-between items-center px-2 py-1 `}>
        <div className="flex md:hidden cursor-poiner relative" onClick={()=>setMenu(!menu)}>
          <MenuIcon/>
        </div>
        {
          menu &&
            <motion.div 
              initial={{ opacity: 0, x: "-20%" }}
              animate={{ opacity: 1, x: "-2%" }}
              exit={{ opacity: 0, x: "-20%" }}  
              className='flex md:hidden flex-col absolute top-0 left-0 bg-primary w-[15em] h-screen text-white 
                overflow-hidden mt-5 z-10 px-4 py-3 pb=5'
            >  
                <Close className='cursor-pointer text-white mb-5' onClick={()=>setMenu(!menu)}/>
                <div className='flex flex-col gap-2 border-b border-[#f2f2f2] py-2'>
                  <span className='text-white font-semibold' onClick={()=>MobileLinkClick('/')}>HOME</span>
                  <span className='text-white font-semibold' onClick={()=>MobileLinkClick('/class')}>CLASSROOM</span>
                  <span className='text-white font-semibold' onClick={()=>MobileLinkClick('/admission')}>ADMISSION</span>
                  <span className='text-white font-semibold' onClick={()=>MobileLinkClick('/skill')}>SKILL</span>
                  <span className='text-white font-semibold' onClick={()=>MobileLinkClick('/about')}>ABOUT</span>
                  <span className='text-white font-semibold' onClick={()=>MobileLinkClick('/batch')}>BATCH-23</span>
                </div>

                <div className='w-full mt-auto p-3'>
                  <ThemeBtn/>
                </div>   
            </motion.div>
        }
        <div className={`${theme === 'dark' ? 'text-white' : 'text-gray-700'} text-[.9em] font-semibold cursor-pointer`}>
          Logo
        </div>

        <ul className='hidden md:flex justify-between items-center gap-4'>
          <li
            className={`text-gray-700 relative group list-none text-[.9em] font-semibold cursor-pointer`}
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

        <div className='flex gap-2 justify-center items-center'>
          <div className="flex justify-center items-center p-2">
            <ThemeBtn/>
          </div>
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
