import React from 'react'

import Showcase from '../myComponents/Showcase'
import ProductsMenu from '@/myComponents/ProductsMenu'
import ServicesMenu from '@/myComponents/ServicesMenu'
import Banner from '@/myComponents/Banner'



function Home() {
  return (
    <div>
      <Showcase/>
      <ProductsMenu/>
      <div className='mt-20 mb-20'>
        <ServicesMenu/>
      </div>
      <Banner
        title="Banner"
        content="lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
        background="https://media.istockphoto.com/id/1291886933/vector/software-development-for-different-devices-process-of-optimization-debugging-program-or-code.jpg?s=612x612&w=0&k=20&c=fd8kebQt8GTx_h0hLpaEeymEuBBbdR76aOWYQ-mAZkE="
      />

    </div>
  )
}

export default Home