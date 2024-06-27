import React from 'react'

import Showcase from '../myComponents/Showcase'
import ProductsPreview from '@/myComponents/products/ProductsPreview'
import ServicesPreview from '@/myComponents/services/ServicesPreview'
import Banner from '@/myComponents/Banner'

function Home() {
  return (
    <div className=''>
      <div className=' animate animate-fadeIn'>
        <Showcase
          motto="highlighted text Lorem ipsum dolor sit amet." 
          title="Main heading Lorem, ipsum. ipsum"
          description="Perfect Website to Link to Sellix! Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi consequatur quae nemo eum vero ratione placeat earum at excepturi cumque." 
          subscribe={true}
        />
      </div>

      <div className=' animate animate-fadeDown'>
        <ProductsPreview/>
      </div>

      <div className='mt-20 mb-20  animate animate-fadeDown'>
        <ServicesPreview/>
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