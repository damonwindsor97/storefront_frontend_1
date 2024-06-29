import React from 'react'

import ProductItem from './ProductItem';
import Showcase from '../Showcase';


const products = [
    {
      productId: '667fbc4c339ee',
      title: 'Product 1',
      description: 'Description of product 1',
      price: '$69',
      image: "https://curie.pnnl.gov/sites/default/files/default_images/default-image_0.jpeg",
    },
    {
      productId: '667fbc4c339ee',
      title: 'Product 2',
      description: 'Description of product 2',
      price: '$69',
      image: "https://curie.pnnl.gov/sites/default/files/default_images/default-image_0.jpeg"
    },
    {
      productId: '667fbc4c339ee',
      title: 'Product 3',
      description: 'Description of product 3',
      price: '$69',
      image: "https://curie.pnnl.gov/sites/default/files/default_images/default-image_0.jpeg"
    },
    {
      productId: '667fbc4c339ee',
      title: 'Product 4',
      description: 'Description of product 4',
      price: '$69',
      image: "https://curie.pnnl.gov/sites/default/files/default_images/default-image_0.jpeg"
    },
    {
      productId: '667fbc4c339ee',
      title: 'Product 5',
      description: 'Description of product 1',
      price: '$69',
      image: "https://curie.pnnl.gov/sites/default/files/default_images/default-image_0.jpeg"
    },
    {
      productId: '667fbc4c339ee',
      title: 'Product 6',
      description: 'Description of product 2',
      price: '$69',
        image: "https://curie.pnnl.gov/sites/default/files/default_images/default-image_0.jpeg"
    },
    {
      productId: '667fbc4c339ee',
      title: 'Product 7',
      description: 'Description of product 3',
      price: '$69',
      image: "https://curie.pnnl.gov/sites/default/files/default_images/default-image_0.jpeg"
    },
    {
      productId: '667fbc4c339ee',
      title: 'Product 8',
      description: 'Description of product 4',
      price: '$69',
      image: "https://curie.pnnl.gov/sites/default/files/default_images/default-image_0.jpeg"
    },
];

function ProductsMenu() {
  return (
    <div>
        <Showcase
            motto=""
            title="Products"
            description=""
            subscribe={false}
        />
        <div className=' animate animate-fadeDown '>
            <div className='flex justify-between'>
                <div className=''>
                <p className='text-start text-2xl font-semibold text-white'>Products</p>
                <p className='text-start text-lg text-secondaryText'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, ab.</p>
                </div>
            </div>

            <div className='pt-5 w-full grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                {products.map(product =>
                <ProductItem
                    key={product.productId}
                    productId={product.productId}
                    title={product.title}
                    price={product.price}
                    image={product.image}
                />
                )}
            </div>
        </div>
    </div>
  )
}

export default ProductsMenu