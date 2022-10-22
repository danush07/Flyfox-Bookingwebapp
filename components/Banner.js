import React from 'react'
import Image from 'next/image'
import me2 from 'public/me2.jpg'

function  Banner() {
  return (
    <div className='relative flex h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]'>
        <Image 
        src="/me5.jpg" 
        layout='fill'
        objectFit='cover'
        />
        <div className='absolute top-1/2 w-full text-center text-xl font-serif'>
            <p >Not sure where to go? Perfect </p>
            <button className='text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-100 transition duration-200'>
            Hit me up!

            </button>

        </div>

    </div>
  )
}

export default Banner