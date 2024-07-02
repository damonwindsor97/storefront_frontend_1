import React from 'react'

import axios from 'axios'
import { useEffect, useState } from 'react';

import ProductItem from './ProductItem';
import Showcase from '../Showcase';
import { ClipLoader } from 'react-spinners';


function ProductsMenu() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const options = {method: 'GET', headers: {Authorization: 'e7N2CtH9cJAoiLZQBHID0bN6VSfha47LieMtlV4Hm7WXSifsGLPFVtn9snItdpqs'}};

  async function getProducts() {
    try {
      setLoading(true)
      setError(false)
      const response = await axios.get('https://dev.sellix.io/v1/groups/668024d11a942', options);
      const data = response.data;

      const productsData = data.data.group.products_bound

      setProducts(productsData)
      setLoading(false)
    } catch (error) {
      console.log('Error fetching products', error)
      setError(true)
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

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

            {loading && (
              <div className='pt-5 flex justify-center'>
                <ClipLoader color='white' />
              </div>
            )}

            {!loading && (
              <div className='pt-5 w-full grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                {products.map(product =>
                  <ProductItem
                    key={product.uniqid}
                    productId={product.uniqid}
                    title={product.title}
                    price={product.price}
                    cloudflare_image_id={product.cloudflare_image_id}
                  />
                )}
              </div>
            )}
        </div>
    </div>
  )
}

export default ProductsMenu