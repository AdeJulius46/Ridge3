import React from 'react'
import Image from 'next/image'
import Hand from '../public/Images/hand.png'
const connect = () => {
  return (
    <div>
        <div className=' flex  flex-col   md:flex-row   md:ml-24   justify-between'>
            <div className=' p-8  md:w-[457px] -2  text-[17.894px]  md:text-[26px]font-[400] mt-8'>
                <p>
                Ready to elevate your craft or 
                transform your home with Ridge
                Energies? Reach out to our team 
                of passionate experts today.
                We're eager to explore how our 
                premium ethanol solutions can 
                elevate your game
                </p>
                <button  className=' text-black w-full md:w-[280px] h-[51px] text-[23px]  sha  mt-16  font-bold text-[#001A00] bg-[#FFC655] '>LET’S CONNECT</button>
            </div>
            <div className='basis-1/2 '>
                <Image src={Hand} />
            </div>

        </div>
    </div>
  )
}

export default connect