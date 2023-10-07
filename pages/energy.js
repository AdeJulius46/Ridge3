import React from 'react'
import Image from 'next/image'
import Ric from '../public/Images/Group 5.png'
import Mid from '../public/Images/Group2.png'
import Mid2 from '../public/Images/Group3.png'
import Mid3 from '../public/Images/Group4.png'
const energy = () => {
  return (
    <div className='mt-8 energy '>
      <div className='ml-24 mr-16 p-2'>

        <p className='uppercase font-bold  ml-[35%] text-[31.196px] font-[700]' >

        Why Ridge stands out  
        </p>


        <div className='grid grid-cols-2 gap-6  relative mt-4'>
            <div>
                <div>
                <Image src={Ric}    />
                </div>
            </div>
            <div className='ml-16'> 
              <div>
                <p className=' text-[#001A00] text-[31.196px] font-[700] '>PINNACLE OF QUALITY</p>
                <p className='w-[397px]  h-[234px] text-[21.894px]'>We take quality to soaring heights. Our 
                  Edible Grade Ethanol is the preferred
                  choice of craft brewers and distillers, 
                  guaranteeing impeccable purity for the
                  finest alcoholic beverages. Our Technical
                  Grade Ethanol unlocks precision and
                  excellence in manufacturing,
                  trusted by industry leaders for its 
                  unrivaled purity and reliability
                  </p>
              </div>
            </div>
            <div className=' mt-24'> 
              <div>
                <p className=' text-[#001A00] text-[31.196px] font-[700] '>SAFETY OUR NORTH STAR</p>
                <p className='w-[397px]  h-[234px] text-[21.894px]'>
                  Safety is our guiding star. Ridge Energies 
                  ensures strict compliance with safety
                  regulations, allowing you to use our
                  products with complete confidence,
                  whether you're a manufacturer or
                  a home chef
                  </p>
              </div>
            </div>

            <div className='mt-24 ml-16'>
                <div>
                <Image src={Mid3}    />
                </div>
            </div>




            <div className='mt-24 mr-8'>
                <div>
                <Image src={Mid2}    />
                </div>
            </div>
          
            <div className='ml-16 mt-24'> 
              <div>
                <p className=' text-[#001A00] text-[31.196px] font-[700]  '>ECO CHAMPIONS</p>
                <p className='w-[397px]  h-[234px] text-[21.894px] mb-8'>
                        We take quality to soaring heights. Our 
                      Edible Grade Ethanol is the preferred
                      choice of craft brewers and distillers, 
                      guaranteeing impeccable purity for the
                      finest alcoholic beverages. Our Technical
                      Grade Ethanol unlocks precision and
                      excellence in manufacturing,
                      trusted by industry leaders for its 
                      unrivaled purity and reliability.
              
                  </p>
                    <button  className=' text-black  w-[280px] h-[51px] text-[23px]  sha  mt-16  font-bold text-[#001A00] bg-[#FFC655] '>JOIN US</button>
              </div>
            </div>
           
            <div className='absolute top-[10%] left-[42%]'>


              <Image  src={Mid}  />
            </div>

        </div>
      </div>
    </div>
  )
}

export default energy