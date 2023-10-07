import Image from "next/image"
import Cas from '../public/Images/fera.png'
const craft = () => {
  return (
<div>
 
<div className="w-[378px] relative">
   <div className="">
    <Image src={Cas} />
    </div> 
    <div className="absolute w-[378px] h-[150px]  juliut" >
    </div>
    <div>
  <p>
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




 </div>
  )
}

export default craft