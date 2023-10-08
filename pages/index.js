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
      <div className='mt-24 yh'>

<Rew/>
      </div>
      <div className='mt-24 yh'>

<Energy />
      </div>
      <div className='mt-24 yh'>

<Craft />
      </div>
      <div className='mt-40 yh'>

<Connect />
      </div>
    </div>
    <Footer/>
  </div>
 </div>
  )
}

export default index