import React from 'react'
import Image from 'next/image'
import me from 'public/me.jpeg'

import { GlobeAltIcon, MenuIcon, SearchIcon, UserCircleIcon } from '@heroicons/react/solid'

function Header() {
  return (
    <header className='sticky top-0 z-50 grid grid-cols-3  bottom-0   bg-white shadow-md p-5 md:px-10'>
      
      {/*left*/}

        <div className='relative flex items-center h-20 cursor-pointer my-auto '>
        <Image 
        src="/me.jpeg"
        layout="fill"
        objectFit='contain'
        objectPosition='left' />
        </div>
        {/*middle*/}
        <div className='flex items-center md:border-2 rounded-full  md:shadow-sm py-2'>
          <input className='flex-grow text-center pl-5 bg-transparent outline-none text-base text-black
          placeholder-black' type="text" placeholder='Search Here !' />
      <SearchIcon className='hidden md:inline-flex h-8 bg-blue-500 text-white rounded-full p-2 cursor-pointer md:mx-2'/>
     
    </div>
    <div className='flex items-center space-x-4 justify-end text-gray-500 '>
      <p className='hidden md:inline'>Host option</p>
      <GlobeAltIcon className='h-6 cursor-pointer' />

      
    
    <div className='flex items-center space-x-2 border-2 p-2 justify-end text-gray-500 rounded-full'>
      <MenuIcon className='h-6 cursor-pointer'>

      </MenuIcon>
      <UserCircleIcon className='h-6 cursor-pointer'>

      </UserCircleIcon>
      </div>
    </div>

        
        
    </header>
    
  );
}

export default Header;