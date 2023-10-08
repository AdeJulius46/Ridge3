import React from 'react'
import logo1 from "@/public/Images/Feeddark.png"
import Link from "next/link"
import Image from "next/image"
import List from '../public/Icons/list.svg'
import { useState } from "react"

const Navbar2 = () => {


  

  const [toggle,Settoggle]=useState(false)

  const togglebtn =()=>{

    Settoggle(prev => !prev)
  }
  return (
    <div className='' > 
    {/* for laergescreen */}
<header className=" hidden  mb-16 md:block flex border-b-1  cursor-pointer bg-none bg-opacity-30 ">
      <nav className=" mb-5 mt-2  text-[22.291px] border-hr flex   px-5 items-center">
        <div className="ml-16">

        <Link href="/" className="">  <Image src={logo1} 
        width={130}
        alt="Ridge Logo" /></Link>
        </div>
        <div className="   mt-4 px-8 ml-24 ">
          <ul className="flex justify-between px-8 uppercase ">
            <Link href="/" className="px-4 cursor-pointer">
              Home
            </Link>
            <Link href="/ " className="px-2 ml-1" >About</Link>
            <Link href="/" className="px-2 ml-1">Solutions</Link>
            <Link href="/" className="px-2 ml-1">Investors Relations</Link>
            <Link href="/" className="px-2 ml-2">FAQ</Link>
            <Link
              href="/"
              className="bg-[#FFC655]   ml-4  sha co  px-1 py-1  text-[black]  rounded text-center cursor-pointer"
            >
              Contact us
            </Link>
          </ul>
        </div> 
        {/* <div className="w-48">
          <ul className="flex justify-between items-center">
            <Link href="/about">About us</Link>
            <Link
              href="/loginPage"
              className="bg-primary text-white px-2 py-2 rounded cursor-pointer"
            >
              Sign in
            </Link>
          </ul>
        </div> */}
      </nav>
    </header>

            {/* for small screen */}
   
            <header className="md:hidden" >
          <nav className="flex justify-between px-2 ">
          <div className="">
            <Link href="/" className="">  <Image src={logo1} 
                width={130}
                  alt="Ridge   Logo" />
            </Link>
          </div>
          <div className=""  >
            <button className="ml-16 mt-2 border border-black  " onClick={togglebtn} >  
                <Image  src={List}  width={40}  />
            </button>
            {
              toggle &&(
                <div className="absolute  bg-white text-black  text-[27px] w-full left-[2px] top-[1px] h-[60vh] right-[40px] p-3  " onClick={togglebtn}>
                  <ul className="flex flex-col justify-between  uppercase  ">
                    
                <button className="self-end  mt-2 border border-black ">  
                <Image  src={List}  width={40}  />
              </button>
            <Link href="/" className="px-2 cursor-pointer">
              Home
            </Link>
            <Link href="/ " className="cursor-pointer mt-4" >About</Link>
            <Link href="/" className="cursor-pointer mt-4">Solutions</Link>
            <Link href="/" className="cursor-pointer mt-4">Investors Relations</Link>
            <Link href="/" className="cursor-pointer mt-4">FAQ</Link>
            <Link
              href="/Contactus"
              className="bg-[#FFC655]  w-[190px] sha px-2 py-2 rounded text-center  mt-4 text-[black] rounded cursor-pointer"
            >
              Contact us 

            </Link>
            
          </ul>

                </div>
              )
            }
            
            </div>
          </nav>


    </header>


    </div>
  )
}

export default Navbar2