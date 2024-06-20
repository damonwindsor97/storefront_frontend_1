import React from 'react'

import Showcase from '../myComponents/Showcase'
import ProductsMenu from '@/myComponents//products/ProductsMenu'
import ServicesMenu from '@/myComponents/ServicesMenu'
import Banner from '@/myComponents/Banner'

function Home() {
  return (
    <div className=''>
      <div className=' animate animate-fadeIn'>
        <Showcase/>
      </div>

      <div className=' animate animate-fadeDown'>
        <ProductsMenu/>
      </div>

      <div className='mt-20 mb-20  animate animate-fadeDown'>
        <ServicesMenu/>
      </div>

      <div>
        <Banner
          title="Banner"
          content="lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
          background="https://media.istockphoto.com/id/1291886933/vector/software-development-for-different-devices-process-of-optimization-debugging-program-or-code.jpg?s=612x612&w=0&k=20&c=fd8kebQt8GTx_h0hLpaEeymEuBBbdR76aOWYQ-mAZkE="
        />
      </div>
    </div>
  )
}

export default Home