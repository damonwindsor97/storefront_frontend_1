import React from 'react'
import ProductItem from '../products/ProductItem';

import { Button } from '@/components/ui/button';

import { Link } from 'react-router-dom';


const services = [
    {
      productId: '667fc4e59daa4',
      title: 'Service 1',
      description: 'Service of product 1',
      price: '$20',
      image: "https://apollobattery.com.au/wp-content/uploads/2022/08/default-product-image.png"
    },
    {
      productId: '667fc4e59daa4',
      title: 'Service 2',
      description: 'Service of product 2',
      price: '$25',
        image: "https://apollobattery.com.au/wp-content/uploads/2022/08/default-product-image.png"
    },
    {
      productId: '667fc4e59daa4',
      title: 'Service 3',
      description: 'Service of product 3',
      price: '$59',
      image: "https://apollobattery.com.au/wp-content/uploads/2022/08/default-product-image.png"
    },
];

function ServicesPreview() {
  return (
    <div className=''>
      <div className='flex justify-between'>
        <div className=''>
          <p className='text-start text-2xl font-semibold text-mainText'>Services</p>
          <p className='text-start text-lg text-secondaryText'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, ab.</p>
        </div>
        <Link to="/services">
          <Button className="flex md:h-10 bg-gray-300 hover:bg-gray-500 text-black">Explore All</Button>
        </Link>
      </div>

        <div className='pt-5 w-full grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            {services.map(service =>
              <ProductItem
                key={service.productId}
                productId={service.productId}
                title={service.title}
                price={service.price}
                image={service.image}
              />
            )}
        </div>
    </div>
  )
}

export default ServicesPreview