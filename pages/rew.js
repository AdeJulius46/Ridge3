import React from 'react'
import Image from 'next/image'
import Ric from '../public/Images/ric.png'
const rew = () => {
  return (
    <div  className='flex gap-4 justify-between  ml-24 mr-16'>
<div className='basis-1/2'>
    <div className='text-[21px]'>
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

<button  className=' text-black  w-[280px] h-[51px] text-[23px]  sha  mt-3  font-bold text-[#001A00] bg-[#FFC655] '>JOIN US</button>
</div>
<div className='basis-1/2 relative ml-16'>
<div  className='ml-16 ' >
<Image src={Ric}  width={350} />
</div>
<div className='absolute top-[-10px] right-[120px] font-bold bg-[#FFC655]'>
julu9hh
</div>
<div className='absolute bottom-[-10px] left-[0px]  font-bold bg-[#FFC655]'>
owoikmoecowekmoiwj
</div>
</div>


    </div>
  )
}

export default rew