import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar2'
import React from 'react'
import Home from './home'
import Rew from './rew'
import Energy from './energy'
import Craft from './craft'
const index = () => {
  return (
<div>
  <div>

    <Navbar/>
    <div  className='ml-16 mr-16'>
<Home/>
<Rew/>
<Energy />4
<Craft />
    </div>
    <Footer/>
  </div>
 </div>
  )
}

export default index