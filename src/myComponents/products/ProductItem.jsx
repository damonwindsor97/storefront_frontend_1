import React from 'react'

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from '@/components/ui/button'



function ProductItem({title, cloudflare_image_id, price, productId}) {

  // Sellix API provides base URL for Cloudflare images
  const sellixBaseUrl = 'https://imagedelivery.net/95QNzrEeP7RU5l5WdbyrKw/';
  const variantName = 'productImageCart'; 


  const imageUrl = `${sellixBaseUrl}${cloudflare_image_id}/${variantName}`;

  return (
    <Card className=" bg-cardBG hover:bg-zinc-900 border-accent text-white cursor-pointer transition-colors duration-500 ease-in-out">
        <CardHeader>
            <p>{title}</p>
        </CardHeader>
        <CardContent>
        <img src={imageUrl} className='rounded md:h-48 md:w-full' alt={title} />
        </CardContent>
        <CardFooter className="">
            <p className='font-bold text-white m-auto text-lg'>{price} <span className='text-sm font-light'>per month</span></p>
            <Button
            data-sellix-product={productId} 
            type="submit"
            alt="Buy Now with sellix.io"
            className='ml-1 md:h-10 bg-cyan-300 hover:bg-cyan-500 text-black'
            >
            Purchase
            </Button>
        </CardFooter>
    </Card>
  )
}

export default ProductItem