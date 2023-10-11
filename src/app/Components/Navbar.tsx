// import React from 'react'

// type NavbarProps = {
//   onLinkClick: (path: string) => void;
// };

// const Navbar: React.FC<NavbarProps> = ({ onLinkClick }) => {

//   return (
//     <div className='fixed top-0 left-0 w-full flex flex-col'>
//       <div className='w-full h-5 bg-secondary flex justify-center items-center'>
//         <span className='text-white text-[.7em] font-semibold text-center w-full'>Seeking to acquire knowledge online? - Join now</span>
//       </div>
//       <div className='w-full h-12 flex justify-between items-center px-2 py-1 bg-[#f2f2f2]'>
//           <div className='text-[.9em] font-semibold text-gray-700'>
//               Logo
//           </div>

//           <ul className='flex justify-between items-center gap-4'>
//               <li className='relative group list-none text-[.9em] font-semibold text-gray-700' onClick={() => onLinkClick('/')}>
//                  HOME
//                 <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></div>
//               </li>

//               <li className='relative group list-none text-[.9em] font-semibold text-gray-700' onClick={() => onLinkClick('/admission')}>
//                 ADMISSION
//                 <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></div>
//               </li>

//               <li className='relative group list-none text-[.9em] font-semibold text-gray-700' onClick={() => onLinkClick('/skill')}>
//                 SKILL
//                 <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></div>
//               </li>

//               <li className='relative group list-none text-[.9em] font-semibold text-gray-700' onClick={() => onLinkClick('/batch')}>
//                 BATCH-23
//                 <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></div>
//               </li>

//               <li className='relative group list-none text-[.9em] font-semibold text-gray-700' onClick={() => onLinkClick('/about')}>
//                 ABOUT
//                 <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></div>
//               </li>
//           </ul>

//           <div>
//               <span className='px-5 py-1 rounded-md border border-[primary] text-white text-center text-[.9em] bg-secondary' onClick={() => onLinkClick('/login')}>
//                 Login
//               </span>
//           </div>


//       </div>
//     </div>
//   )
// }

// export default Navbar

import React from 'react';

type NavbarProps = {
  onLinkClick: (path: string) => void;
};

const Navbar: React.FC<NavbarProps> = ({ onLinkClick }) => {
  const handleLinkClick = (path: string) => {
    onLinkClick(path);
  };

  return (
    <div className='fixed top-0 left-0 w-full flex flex-col'>
      <div className='w-full h-5 bg-secondary flex justify-center items-center'>
        <span className='text-white text-[.7em] font-semibold text-center w-full'>Seeking to acquire knowledge online? - Join now</span>
      </div>

      <div className='w-full h-12 flex justify-between items-center px-2 py-1 bg-[#f2f2f2]'>
        <div className='text-[.9em] font-semibold text-gray-700'>
          Logo
        </div>
        <ul className='flex justify-between items-center gap-4'>
          <li
            className='relative group list-none text-[.9em] font-semibold text-gray-700'
            onClick={() => handleLinkClick('/')}
          >
            HOME
            <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></div>
          </li>

          <li
            className='relative group list-none text-[.9em] font-semibold text-gray-700'
            onClick={() => handleLinkClick('/admission')}
          >
            ADMISSION
            <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></div>
          </li>

          <li
            className='relative group list-none text-[.9em] font-semibold text-gray-700'
            onClick={() => handleLinkClick('/skill')}
          >
            SKILL
            <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></div>
          </li>

          <li
            className='relative group list-none text-[.9em] font-semibold text-gray-700'
            onClick={() => handleLinkClick('/batch')}
          >
            BATCH-23
            <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></div>
          </li>

          <li
            className='relative group list-none text-[.9em] font-semibold text-gray-700'
            onClick={() => handleLinkClick('/about')}
          >
            ABOUT
            <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></div>
          </li>
        </ul>

        <div>
          <span
            className='px-5 py-1 rounded-md border border-[primary] text-white text-center text-[.9em] bg-secondary'
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
