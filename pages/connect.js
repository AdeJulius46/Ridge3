import React from 'react'
import Image from 'next/image'
import Hand from '../public/Images/hand.png'
const connect = () => {
  return (
    <div>
        <div className='flex ml-24 mr-16  justify-between'>
            <div className='w-[457px] text-[31px]'>
                <p>
                Ready to elevate your craft or 
                transform your home with Ridge
                Energies? Reach out to our team 
                of passionate experts today.
                We're eager to explore how our 
                premium ethanol solutions can 
                elevate your game
                </p>
                <button  className=' text-black  w-[280px] h-[51px] text-[23px]  sha  mt-16  font-bold text-[#001A00] bg-[#FFC655] '>LET’S CONNECT</button>
            </div>
            <div className='basis-1/2'>
                <Image src={Hand} />
            </div>

        </div>
    </div>
  )
}

export default connect