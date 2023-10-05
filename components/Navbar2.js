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
<header className=" hidden  md:block flex border-b-1  cursor-pointer bg-none bg-opacity-30 ">
      <nav className=" mb-5 mt-2  border-hr flex justify-between px-5 items-center">
        <div className="ml-16">

        <Link href="/" className="">  <Image src={logo1} 
        width={130}
        alt="Ridge Logo" /></Link>
        </div>
        <div className="   mt-4 mr-8 w-3/6">
          <ul className="flex justify-between ">
            <Link href="/" className="px-2 cursor-pointer">
              Home
            </Link>
            <Link href="/ " className="" >About</Link>
            <Link href="/" className="">Solutions</Link>
            <Link href="/" className="">Investors Relations</Link>
            <Link href="/" className="">FAQ</Link>
            <Link
              href="/Contactus"
              className="bg-black w-[134px] co h-[50px] px-3 py-3  text-white  rounded text-center cursor-pointer"
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
   
            <header className="   md:hidden" >
          <nav className="flex justify-between px-2 ml-8 w-[125vw]">
          <div className="">
            <Link href="/" className="">  <Image src={logo1} 
                width={130}
                  alt="Ridge Logo" />
            </Link>
          </div>
          <div className="ml-16"  >
            <button className="ml-16 mt-2 border border-black  " onClick={togglebtn} >  
                <Image  src={List}  width={40}  />
            </button>
            {
              toggle &&(
                <div className="absolute  bg-white text-black  text-[27px] w-[136vw] left-[2px] top-[1px] h-[60vh] right-[40px] p-3  " onClick={togglebtn}>
                  <ul className="flex flex-col justify-between  ">
                    
                <button className=" ml-[88%]  mt-2 border border-black ">  
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
              className="bg-black w-[170px] px-2 py-2 rounded text-center  mt-4 text-white rounded cursor-pointer"
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