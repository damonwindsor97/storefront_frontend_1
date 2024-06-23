import React from 'react'

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

function ProductItem({title, image, price}) {
  return (
    <Card className=" bg-cardBG hover:bg-zinc-900 border-accent text-white cursor-pointer transition-colors duration-500 ease-in-out">
        <CardHeader>
            <p>{title}</p>
        </CardHeader>
        <CardContent>
            <img src={image} className='rounded md:h-48 md:w-full'/>
        </CardContent>
        <CardFooter className="">
            <p className='font-bold text-white m-auto text-lg'>{price} <span className='text-sm font-light'>per month</span></p>
        </CardFooter>
    </Card>
  )
}

export default ProductItem