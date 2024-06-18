import React from 'react'

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

  


const products = [
    {
      title: 'Product 1',
      description: 'Description of product 1',
      price: '$69',
      image: "https://curie.pnnl.gov/sites/default/files/default_images/default-image_0.jpeg"
    },
    {
      title: 'Product 2',
      description: 'Description of product 2',
      price: '$69',
        image: "https://curie.pnnl.gov/sites/default/files/default_images/default-image_0.jpeg"
    },
    {
      title: 'Product 3',
      description: 'Description of product 3',
      price: '$69',
      image: "https://curie.pnnl.gov/sites/default/files/default_images/default-image_0.jpeg"
    },
    {
      title: 'Product 4',
      description: 'Description of product 4',
      price: '$69',
      image: "https://curie.pnnl.gov/sites/default/files/default_images/default-image_0.jpeg"
    },
];


function ProductsMenu() {
  return (
    <div>
        <p className='text-start text-2xl font-semibold text-white'>Products</p>
        <p className='text-start text-lg text-secondaryText'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, ab.</p>

        <div className='pt-5 w-full grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            {products.map(product =>
            <Card className=" bg-cardBG hover:bg-zinc-900 border-accent text-white cursor-pointer transition-colors duration-500 ease-in-out">
                <CardHeader>
                    <p>{product.title}</p>
                </CardHeader>
                <CardContent>
                    <img src={product.image} className='rounded md:h-48 md:w-full'/>
                </CardContent>
                <CardFooter className="">
                    <p className='font-bold text-white m-auto text-lg'>{product.price} <span className='text-sm font-light'>per month</span></p>
                </CardFooter>
            </Card>
            )}
        </div>
    </div>
  )
}

export default ProductsMenu