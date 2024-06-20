import React from 'react'

import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button'
import { useToast } from "@/components/ui/use-toast"


function Showcase({motto, title, description, subscribe}) {
  const { toast } = useToast();

  return (
    <div className='flex items-center justify-center font-inter' style={{height: '540px'}}>
          <div id="particles-js"></div>

        <div className=''>
            <p className=' text-cyan-300 md:font-medium p-1'>{motto}</p>
            <p className='md:text-4xl p-2 pb-4 font-bold text-white'>{title}</p>
            <p className='text-lg w-96 m-auto md:w-[600px] opacity-75'>{description}</p>

              {subscribe && (
                <div className='inline-flex p-3'>
                  <Input className="md:w-56 md:h-10 border-none focus:border-solid focus:border-cyan-300 bg-gray-800" placeholder="your@email.com" /> 
                  <Button className="ml-2 md:h-10 bg-cyan-300 hover:bg-cyan-500 text-black"      
                    onClick={() => {
                      toast({
                        variant: "success",
                        title: "Added to Email List",
                        description: "You will be notified of future updates & additions to the store.",
                      })
                    }}>Get Updates</Button>
                </div>
              )}
        </div>
    </div>
  )
}

export default Showcase