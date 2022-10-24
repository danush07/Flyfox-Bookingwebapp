import React, { useState } from 'react'
import Image from 'next/image'
import me from 'public/me.jpeg'

import { GlobeAltIcon, MenuIcon, SearchIcon, UserCircleIcon, UsersIcon } from '@heroicons/react/solid'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { useRouter } from 'next/router';

function Header({placeholder}) {
  const [searchInput, setSearchInput] = useState('')
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())
  const [noofvisitors, setnoofvisitors] =useState(1)
  const router = useRouter();

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate)
    setEndDate(ranges.selection.endDate)

  }
  const resetInput = () => {
    setSearchInput("");
  };
  const search = () => {
    router.push({
      pathname: "/search",
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        noofvisitors,

      },
    });
  };
  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection',
  }


  return (
    <header className='sticky top-0 z-50 grid grid-cols-3  bottom-0 bg-white shadow-md p-5 md:px-10'>
      
      {/*left*/}

        <div onClick={() => router.push("/")}
        className='relative flex items-center h-20 cursor-pointer my-auto '>
        <Image 
        src="/me.jpeg"
        layout="fill"
        objectFit='contain'
        objectPosition='left' />
        </div>
        {/*middle*/}
        <div className='flex items-center md:border-2 rounded-full  md:shadow-sm py-2'>
          <input value={searchInput} onChange= {(e) => setSearchInput(e.target.value)}
          className='flex-grow text-center pl-5 bg-transparent outline-none text-base text-black
          placeholder-black' type="text" placeholder={placeholder || 'Search Here !'} />
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

    {searchInput && (
      <div className='flex flex-col col-span-3 mx-auto mt-10'>
        <DateRangePicker ranges={[selectionRange]}
        minDate={new Date()}
        rangeColors={["#FD5B61"]}
        onChange={handleSelect}
      />
      <div className='flex items-center border-b mb-4'>
       <h2 className='text-2xl flex-grow font-semibold'> Number Of Visitors </h2>
       <UsersIcon className='h-5' />
       <input 
       value={noofvisitors}
       onChange={e => setnoofvisitors(e.target.value)}
       type="number" 
       className='w-12 pl-2 text-lg outline-none text-red-400' />
      </div>
      <div className='flex'>
        <button onClick={resetInput} className='flex-grow text-gray-500'>
          Cancel
        </button>
        <button onClick={search} className='flex-grow text-red-500'>
          Search
        </button>

      </div>
      </div>
    )}

        
        
    </header>
    
  );
}

export default Header;