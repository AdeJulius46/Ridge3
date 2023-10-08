import React from 'react'
import Image from 'next/image'
import Ric from '../public/Images/Framer.png'
import {AiFillStar} from 'react-icons/ai'
const rew = () => {
  return (
  <div>
    <div  className=' flex flex-col flex-col-reverse   md:flex-row gap-4 justify-between  md:ml-24 md:mr-16'>
      <div className='basis-3/4 md:basis-1/2'>
        <div className=' text-[17.894px]  md:text-[23px] px-4 md:px-0  md:mt-32'>
          At Ridge Energies, we don't just provide
          ethanol; we fuel innovation, craftsmanship,
          and eco-conscious living. Our passion
          drives us to craft and deliver the finest
          Edible Grade Ethanol, Technical Grade 
          Ethanol, and Fuel-Grade Ethanol,
          tailored to meet the diverse needs
          of both industry giants and everyday
          households.
        </div> 
          <div className='p-8 md:p-0'>
        <button  className=' text-black    w-full md:w-[280px] h-[51px]  text-[23px]  sha  mt-3  font-bold text-[#001A00] bg-[#FFC655] '>JOIN US</button>
          </div>
    </div>
    <div className='basis-1/2 relative mr-16'>
      <div  className='' >
        <Image src={Ric}   />
      </div>
      </div>
    </div>
  </div>
  )
}

export default rew