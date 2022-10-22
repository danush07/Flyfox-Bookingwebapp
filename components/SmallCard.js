import Image from 'next/image'
import React from 'react'

function SmallCard({img, location, distance}) {
  return (
    <div className='flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer font-bold hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out'>
        <div className='relative h-16 w-20'>
            <Image src={img} layout="fill" className='rounded-lg' />
        </div>
        <div>
            <h2 className='text-blue-300'>{location}</h2>
            <h3 className='text-gray-400'>{distance}</h3>
        </div>
    </div>
  )
}

export default SmallCard