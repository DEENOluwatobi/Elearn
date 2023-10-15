import React from 'react'
import { FacebookLine, InstagramLine, TwitterLine, GoogleIcon } from '@base/icons';
import { useTheme } from '@context/ThemeContext';

const Socials = () => {
  const { theme } = useTheme();  
  return (
    <div className="flex items-center justify-center flex-col w-24 h-full gap-4">
            <div className={`${theme === 'dark' ? 'bg-white' : 'bg-gray-700'} w-1 h-8 `}></div>
            <div className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-500 cursor-pointer transition duration-500 ease-in-out hover:bg-blue-200 hover:border-gray-500">
                <FacebookLine size='md' className={`${theme === 'dark' ? '[&>path]:fill-[#ffffff]' : '[&>path]:fill-[#0d0d0d] hover:[&>path]:fill-[#0759e8]' }`}/>
            </div>
            <div className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-500 cursor-pointer transition duration-500 ease-in-out hover:bg-blue-200 hover:border-gray-500">
                <TwitterLine size='md' className={`${theme === 'dark' ? '[&>path]:fill-[#ffffff]' : '[&>path]:fill-[#0d0d0d]' }`}/>
            </div>
            <div className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-500 cursor-pointer transition duration-500 ease-in-out hover:bg-gradient-to-br from-yellow-200 via-red-200 to-blue-200 hover:border-gray-500">
                <InstagramLine size='md' className={`${theme === 'dark' ? '[&>path]:fill-[#ffffff]' : '[&>path]:fill-[#0d0d0d] hover:[&>path]:fill-[#e8074e]' }`}/>
            </div>
            <div className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-500 cursor-pointer transition duration-500 ease-in-out hover:bg-yellow-200 hover:border-red-500">
                <GoogleIcon size='sm' className={`${theme === 'dark' ? '[&>path]:fill-[#ffffff]' : '[&>path]:fill-[#0d0d0d] hover:[&>path]:fill-[#f10909]' }`}/>
            </div>
            <div className={`${theme === 'dark' ? 'bg-white' : 'bg-gray-700'} w-1 h-8 `}></div>
    </div>
  )
}

export default Socials