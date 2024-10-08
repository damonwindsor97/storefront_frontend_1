import React from 'react'

import { Link } from 'react-router-dom'

function Footer() {
  return (
  <div className='p-6 bg-lightBG md:h-80 mt-24 rounded-t-xl'>

    <div className='flex justify-between'>
      <div className='text-start'>
        <img src="https://2015.pycon-au.org/img/logos/default-logo.png" className="h-8 mb-6" alt="Logo"/>
        <p className='font-bold text-lg'>Get Notified</p>
        <p className='text-xs md:text-base text-secondaryText'>Stay updated with all our latest products, discounts or restocks</p>

        <div className='flex mt-4'>
          <input type="email" className="w-32 md:w-56 md:h-10 border-none focus:border-solid focus:border-white bg-neutral-800 rounded-l-lg px-2" placeholder="your@email.com" /> 
          <button className="text-xs md:text-base ml-2 md:h-10 bg-neutral-300 hover:bg-neutral-500 text-black rounded-r-lg px-4">Subscribe</button>
        </div>
      </div>

      <div className='flex text-start'>
        <ul className="flex flex-col mr-8">
          <li className=" md:text-xl mb-2 text-secondaryText">Index</li>
          <Link to="/products"><li className='text-xs md:text-lg hover:text-secondaryText cursor-pointer'>Products</li></Link>
          <Link to="/services"><li className='text-xs md:text-lg hover:text-secondaryText cursor-pointer'>Services</li></Link>
          <Link to=""><li className=' text-xs md:text-lg hover:text-secondaryText cursor-pointer'>Guides</li></Link>
          <Link to="https://discord.gg"><li className='text-xs  md:text-lg hover:text-secondaryText cursor-pointer'>Discord</li></Link>
        </ul>

        <ul className="flex flex-col">
          <li className=" md:text-xl mb-2 text-secondaryText">Legal</li>
          <Link><li className='text-xs md:text-lg hover:text-secondaryText cursor-pointer'>Terms of Service</li></Link>
          <Link><li className='text-xs  md:text-lg hover:text-secondaryText cursor-pointer'>Privacy Policy</li></Link>
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