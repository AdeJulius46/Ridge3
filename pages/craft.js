import Image from "next/image"
import Cas from '../public/Images/Frame1.png'
import Cas1 from '../public/Images/Frame4.png'
const craft = () => {
  return (
<div className="ml-8  md:ml-24 md:mr-16  mb-16">

  <div className=" hidden md:flex justify-between">
<div className="w-[378px] relative">
   <div className="">
    <Image src={Cas} />
    </div> 
    <div className="absolute w-[378px] h-[150px]  juliut" >
    </div>
    <div className="p-2  w-[341px]  text-[21.894px] join">
  <p className=" p-3 "> 
      Raise the bar with Ridge
      Energies as your Edible and 
      Technical Grade Ethanol 
      supplier. We provide the best 
      for your craft, ensuring the 
      highest standards of quality 
      and reliability.
        </p>
    </div>
</div>


<div  className="bg-black w-[184px] h-[184px] justify-center  mr-8 who content-center relative">
  <p className="text-white text-[31px] px-5 py-10 font-[600]">
WHO ARE WE FOR
  </p>
    <div className="absolute top-[50%] right-[-54%]"><svg xmlns="http://www.w3.org/2000/svg" width="384" height="6" viewBox="0 0 694 6" fill="none">
<path d="M0 3L694 3" stroke="#001A00" stroke-width="5" stroke-dasharray="10 10"/>
</svg></div>
</div>
<div className="w-[378px] relative">
   <div className="">
    <Image src={Cas1} />
    </div> 
    <div className="absolute w-[378px] h-[150px]    juliut" >
    </div>
    <div className="p-3 w-[341px]  text-[18.894px]  md:text-[21.894px]  join">
  <p className=" p-3 "> 
        Join the movement towards a
      more sustainable lifestyle. 
      Ridge Energies' Fuel-Grade 
      Ethanol powers homes and 
      kitchens with clean energy, 
      transforming your everyday.
        </p>
    </div>
</div>


{/* small screen */}

  </div>
    <div className=" md:hidden">
      <p className="text-[23px]">WHO ARE WE FOR</p>
  <div className="flex flex-col  justify-between gap-16 ">
  <div className="w-[360px]">
   <div className="w-full">
    <Image src={Cas} width={400} />
    </div> 
    <div className="p-2  text-[17.894px]  md:text-[21px] join">
  <p className=" p-2 "> 
      Raise the bar with Ridge
      Energies as your Edible and 
      Technical Grade Ethanol 
      supplier. We provide the best 
      for your craft, ensuring the 
      highest standards of quality 
      and reliability.
        </p>
    </div>
</div>



<div className="w-[360px] relative">
   <div className="w-full">
    <Image src={Cas1}  width={400}/>
    </div> 
    <div className="p-2   text-[17.894px]  md:text-[21px]  join">
  <p className=" p-2 "> 
        Join the movement towards a
      more sustainable lifestyle. 
      Ridge Energies' Fuel-Grade 
      Ethanol powers homes and 
      kitchens with clean energy, 
      transforming your everyday.
        </p>
        </div>
      </div>
    </div>

  </div>
 </div>
  )
}

export default craft