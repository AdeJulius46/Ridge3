import React from 'react'
import Image from 'next/image'
import Group from '../public/Images/Group 22.png'
const home = () => {
  return (
    <div className=''>

    <div className='hidden md:flex  ml-24 mr-16'>

    <div  className=' ml-[12%] mb-12 '>
      <Image src={Group} />

    </div>
  </div>
</div>
  )
}

export default home