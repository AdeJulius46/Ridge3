import React from 'react'
import Image from 'next/image'
import Logo1 from '../public/Images/FeedAll.png'
import face from '../public/Icons/uil_facebook.png'
import Link from '../public/Icons/uil_linkedin.svg'
import What from '../public/Icons/mdi_whatsapp.svg'
const Footer = () => {
  return (
    <div className='  w-full md:w-full  bg-[#001A00] '>
      <div className='  border border-black bg-[#001A00] text-white '>
         <div className='flex flex-col md:flex-row mt-16 ml-2 md:ml-8'>
          <div className=' basis-2/5 flex flex-row content-center ml-8 mb-8'> 
            <div><Image  src={Logo1}  alt='logo' /></div>
            <div className='mt-3 ml-4 '>example@gmail.com</div>
           </div>
           <div className='basis-1/2 flex flex-col'>
              <div className=' basis-1/2 flex flex-row  justify-center gap-8 md:gap-16 '>
                <div className=' flex  flex-col   gap-8 content-between  '>
                  <div >juhuygg</div>
                  <div>juhuygg</div>
                  <div>juhuygg</div>
                  <div>juhuygg</div>
                  <div>juhuygg</div>
                </div>
                <div className='flex  flex-col   gap-8 content-between '>
                  <div>juhuygg</div>
                  <div>juhuygg</div>
                  <div>juhuygg</div>
                  <div>juhuygg</div>
                  <div>juhuygg</div>
                </div>
                <div className='flex  flex-col   gap-8 content-between '>
                  <div>juhuygg</div>
                  <div>juhuygg</div>
                  <div>juhuygg</div>
                  <div>juhuygg</div>
                  <div>juhuygg</div>
                </div>
                <div className='flex  flex-col  gap-8 content-between '>
                  <div>juhuygg</div>
                  <div>juhuygg</div>
                  <div>juhuygg</div>
                  <div>juhuygg</div>
                  <div>juhuygg</div>
                </div>
             </div>
             <div className='basis-1/2 flex flex-row mt-8 '>
              <div className='  ml-[2px] md:ml-[100px] '> <input  className=' p-1 rounded border border-white w-64  h-[50px] bg-[#001A00]' /> </div>
              <div> <button  className='bg-white  w-full  h-[50px] px-3 py-3  text-black ml-2 rounded '>Send</button></div>
            
             </div>
            </div>
        </div>
        <div className='flex   flex-col justify-between m-20 md:flex-row'>
          <div className='flex flex-row '>
            <Image src={face} className='ml-2'/>
            <Image src={Link} className='ml-2'/>
            <Image src={What} className='ml-2'/>

          </div>
          <div>Privacy Policy</div>
          <div>Terms and Condition</div>
        </div>
      </div>
    </div>
  )
}

export default Footer