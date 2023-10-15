"use client";
import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { Close, Phone } from '@mui/icons-material';
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
    <div className='fixed top-0 left-0 w-full flex flex-col z-[99]'>
      <div className={`w-full h-6 bg-black flex justify-center items-center`}>
        <span className='text-white text-[.8em] font-semibold text-center w-full'>Seeking to acquire knowledge online? - Join now</span>
      </div>

      <div className={`w-full h-12 md:h-16 flex justify-between items-center px-2 py-1 ${theme === 'dark' ? 'bg-[#302f2f]' : 'bg-white'} backdrop-filter backdrop-blur-md bg-opacity-20 shadow-sm`}>
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
                  <span className='text-white font-semibold' onClick={()=>MobileLinkClick('/')}>Home</span>
                  <span className='text-white font-semibold' onClick={()=>MobileLinkClick('/class')}>Classroom</span>
                  <span className='text-white font-semibold' onClick={()=>MobileLinkClick('/admission')}>Admission</span>
                  <span className='text-white font-semibold' onClick={()=>MobileLinkClick('/skill')}>Skill</span>
                  <span className='text-white font-semibold' onClick={()=>MobileLinkClick('/about')}>About</span>
                  <span className='text-white font-semibold' onClick={()=>MobileLinkClick('/batch')}>Batch-23</span>
                </div>

                <div className='flex flex-col gap-2 border-b border-[#f2f2f2] py-2'>
                  <span className='text-white font-semibold' onClick={()=>MobileLinkClick('/#about')}>Login</span>
                  <span
                    className={`${theme === 'dark' ? 'text-black bg-white' : 'text-white bg-black'} px-6 py-2 rounded-full  text-center cursor-pointer w-full`}
                    onClick={() => handleLinkClick('/register')}
                  >
                    Register
                  </span>
                </div>

                <div className='w-full mt-auto p-3 flex items-center justify-center gap-2'>
                  <ThemeBtn/>
                  <Phone/>
                </div>   
            </motion.div>
        }
        <div className={`${theme === 'dark' ? 'text-white' : 'text-gray-700'} font-semibold cursor-pointer`}>
          Logo
        </div>

        <ul className='hidden md:flex justify-between items-center gap-4'>
          <li
            className={`${theme === 'dark' ? 'text-white' : 'text-black'} relative group list-none cursor-pointer`}
            onClick={() => handleLinkClick('/')}
          >
            Home
            <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></div>
          </li>

          <li
            className={`${theme === 'dark' ? 'text-white' : 'text-black'} relative group list-none cursor-pointer`}
            onClick={() => handleLinkClick('/class')}
          >
            Classroom
            <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></div>
          </li>

          <li
            className={`${theme === 'dark' ? 'text-white' : 'text-black'} relative group list-none cursor-pointer`}
            onClick={() => handleLinkClick('/admission')}
          >
            Admission
            <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></div>
          </li>

          <li
            className={`${theme === 'dark' ? 'text-white' : 'text-black'} relative group list-none cursor-pointer`}
            onClick={() => handleLinkClick('/skill')}
          >
            Skill
            <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></div>
          </li>

          <li
            className={`${theme === 'dark' ? 'text-white' : 'text-black'} relative group list-none cursor-pointer`}
            onClick={() => handleLinkClick('/batch')}
          >
            Batch-23
            <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></div>
          </li>

          <li
            className={`${theme === 'dark' ? 'text-white' : 'text-black'} relative group list-none cursor-pointer`}
            onClick={() => handleLinkClick('/about')}
          >
            About
            <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></div>
          </li>
        </ul>

        <div className='flex gap-2 justify-center items-center'>
          <div className="flex justify-center items-center p-2">
            <Phone className={`${theme === 'dark' ? 'text-white' : 'text-black'} cursor-pointer`}/>
          </div>
          <div className="flex justify-center items-center p-2">
            <ThemeBtn/>
          </div>
          <div 
            onClick={() => handleLinkClick('/register')} 
            className={`${theme === 'dark' ? 'text-white border-white' : 'text-black border-black'} py-1 border-b-2 cursor-pointer`}
          >
              Login
          </div>
          <span
            className={`${theme === 'dark' ? 'text-black bg-white' : 'text-white bg-black'} px-6 py-2 rounded-full  text-center cursor-pointer`}
            onClick={() => handleLinkClick('/register')}
          >
            Register
          </span>
        </div>

      </div>
    </div>
  );
};

export default Navbar;
