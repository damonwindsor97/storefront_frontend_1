import React from 'react'

import axios from 'axios'
import { useState, useEffect } from 'react'

import ProductItem from '../products/ProductItem'
import Showcase from '../Showcase'
import { ClipLoader } from 'react-spinners'

function ServicesMenu() {
  const [services, setServices] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)


  const options = {method: 'GET', headers: {Authorization: 'e7N2CtH9cJAoiLZQBHID0bN6VSfha47LieMtlV4Hm7WXSifsGLPFVtn9snItdpqs'}};

  async function getServices() {
    try {
      setLoading(true);
      setError(false);

      const response = await axios.get('https://dev.sellix.io/v1/groups/668024dad9415', options);
      const data = response.data;

      const servicesData = data.data.group.products_bound

      setServices(servicesData);
      setLoading(false)
    } catch (error) {
      setError(true)
      console.log('Error fetching services', error)
    }
  }

  useEffect(() => {
    getServices();
  }, []);
  return (
    <div>
        <Showcase
            motto=""
            title="Services"
            description=""
            subscribe={false}
        />
        <div className=' animate animate-fadeDown '>
            <div className='flex justify-between'>
                <div className=''>
                <p className='text-start text-2xl font-semibold text-white'>Services</p>
                <p className='text-start text-lg text-secondaryText'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, ab.</p>
                </div>
            </div>

            {loading && (
              <div className='pt-5 flex justify-center'>
                <ClipLoader color='white' />
              </div>
            )}

            {!loading && (
              <div className='pt-5 w-full grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                {services.map(service =>
                  <ProductItem
                    key={service.uniqid}
                    productId={service.uniqid}
                    title={service.title}
                    price={service.price}
                    cloudflare_image_id={service.cloudflare_image_id}
                  />
                )}
              </div>
            )}
        </div>
    </div>
  )
}

export default ServicesMenu