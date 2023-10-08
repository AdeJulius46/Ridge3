import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar2'
import React from 'react'
import Home from './home'
import Rew from './rew'
import Energy from './energy'
import Craft from './craft'
import Connect from './connect'
const index = () => {
  return (
<div>
  <div>

    <Navbar/>
    <div  className='mt-16'>
      <div className='mt-16'>

<Home/>
      </div>
      <div className=' yh'>

<Rew/>
      </div>
      <div className='  yh'>

<Energy />
      </div>
      <div className=' yh'>

<Craft />
      </div>
      <div className=' yh'>

<Connect />
      </div>
    </div>
    <Footer/>
  </div>
 </div>
  )
}

export default index