import React from 'react'

const Navbar = () => {
  return (
    <div className='fixed top-0 left-0 w-full h-10 flex justify-between items-center px-2 py-1'>
        <div>
            Logo
        </div>

        <ul className='flex justify-between items-center'>
            <li>HOME</li>
            <li>ADMISSION</li>
            <li>SKILL</li>
            <li>ABOUT</li>
            <li>BATCH 2023</li>
        </ul>

        <div>
            <button>Login</button>
        </div>


    </div>
  )
}

export default Navbar