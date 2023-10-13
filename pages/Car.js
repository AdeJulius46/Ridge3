import React from 'react'
import Carousel from './carousel'
const Car = () => {
  return (
    <div className='bg-[#FFC655]'>

        <div className='mt-8'>
            <p className='text-center  mt-8 md:text-[31px] font-[700]'>
            OUR STELLAR PRODUCTS

            </p>
        </div>
        <div>
            <Carousel  />
        </div>
    </div>
  )
}

export default Car