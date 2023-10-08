import React from 'react'
import Image from 'next/image'
import Group from '../public/Images/Group 22.png'
const home = () => {
  return (
    <div className='md:ml-24 md:mr-16'>

    <div className='hidden md:flex  '>

    <div  className=' ml-[12%] mb-12 '>
      <Image src={Group} />

    </div>
  </div>
    <div className='md:hidden    '>

    <div  className='mb-12 flex flex-row justify-center content-center p-8'>
      <Image src={Group} />
    </div>
    <div className='p-8 md:-0'>
    <button  className=' text-black    w-full md:w-[280px] h-[51px]  text-[23px]  sha  mt-3  font-bold text-[#001A00] bg-[#FFC655] '>CONTACT US</button>
    </div>
  </div>
</div>
  )
}

export default home