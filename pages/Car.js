import React from 'react'
import Carousel from './carousel'
import Image from 'next/image'
import Dash from "../public/Images/Group 27.png"
const Car = () => {
  return (
    <div className='bg-[#FFC655]'>

        <div className='mt-8 relative'>
            <p className='text-center  mt-8 md:text-[31px] font-[700]'>
            OUR STELLAR PRODUCTS
            </p>
            <div className='ml-[22%]   md:ml-[35%]'>
              <Image  src={Dash}
                  alt='img'  
                  width={390}
                  className='hidden md:flex'
              />
              <Image  src={Dash}
                  alt='img'  
                  width={200}
                  className='md:hidden '
              />
            </div>
        </div>
        <div>
            <Carousel  />
        </div>
    </div>
  )
}

export default Car