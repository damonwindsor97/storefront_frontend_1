import React from 'react'

import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button'

function Footer() {
  return (
  <div className='p-6 bg-lightBG md:h-80 mt-24 rounded-t-xl'>

    <div className='flex justify-between'>
      <div className='text-start'>
        <img src="https://2015.pycon-au.org/img/logos/default-logo.png" className="h-8 mb-6" alt="Logo"/>
        <p className='font-bold text-lg'>Get Notified</p>
        <p className='text-secondaryText'>Stay updated with all our latest products, discounts or restocks</p>

        <div className='flex mt-4'>
          <input type="email" className="md:w-56 md:h-10 border-none focus:border-solid focus:border-white bg-neutral-800 rounded-l-lg px-2" placeholder="your@email.com" /> 
          <button className="ml-2 md:h-10 bg-neutral-300 hover:bg-neutral-500 text-black rounded-r-lg px-4">Subscribe</button>
        </div>
      </div>

      <div className='flex text-start'>
        <ul className="flex flex-col mr-8">
          <li className=" text-xl mb-2 text-secondaryText">Index</li>
          <li className=' text-lg hover:text-secondaryText cursor-pointer'>Products</li>
          <li className=' text-lg hover:text-secondaryText cursor-pointer'>Services</li>
          <li className=' text-lg hover:text-secondaryText cursor-pointer'>Guides</li>
          <li className=' text-lg hover:text-secondaryText cursor-pointer'>Discord</li>
        </ul>

        <ul className="flex flex-col">
          <li className=" text-xl mb-2 text-secondaryText">Legal</li>
          <li className='text-lg hover:text-secondaryText cursor-pointer'>Terms of Service</li>
          <li className=' text-lg hover:text-secondaryText cursor-pointer'>Privacy Policy</li>
        </ul>
      </div>
    </div>

    <div className='border-t-2 border-secondaryText mt-14'>
      <div className='flex justify-between'>
        <div className='text-start mt-6'>
          <p className=' text-secondaryText'>A product by <span className='font-bold'>Damon Windsor</span></p>
        </div>

        <div className='flex text-end mt-6'>
          <p className='text-secondaryText text-lg'><span>&#169;</span> 2024 - "Your Business Name"</p>
        </div>
      </div>
    </div>

  </div>
  )
}

export default Footer