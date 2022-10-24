import React from 'react'
import Image from 'next/image'
import { HeartIcon, StarIcon } from '@heroicons/react/solid'

function InfoCard( { img, location, title, description, star, price, total}){
  return (
    <div className='flex py-7 px-2 border-b cursor-pointer hover:opacity-80 hover:shadow-lg transition duration-200 ease-out first:border-t'>
        <div className='relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0 '>
            <Image className ='rounded-2xl' src={img} layout='fill' objectFit='cover' />
        </div>
        <div className='flex flex-col flex-grow pl-5'>
            <div className='flex justify-between'>
                <p>
                    {location}
                </p>
                <HeartIcon className='h-7 cursor-pointer'/>
            </div>
            <h4 className='text-xl text-black'>{title}</h4>
            <div className='border-b w-10 pt-2'>

            </div>
            <div className='pt-2 text-sm text-blue-300 flex-grow'>
                {description}
            </div>
            <div className='flex justify-between items-end pt-5'>
                <div className='text-lg font-semibold'>
                    <p>{price}</p>
                    <p>{total}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default InfoCard