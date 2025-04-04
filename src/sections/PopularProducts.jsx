import React from 'react';
import { products } from '../constants';
import PopularProudctCard from '../Components/PopularProudctCard';



const PopularProducts = () => {
    return (
        <section id='products' className='max-container max-sm:mt-12'>
             <div className='flex flex-col justify-start gap-5'>
                <h2 className='text-4xl font-palanquin font-bold'>Our <span className='text-coral-red'>Popular</span> Products</h2>
                <p className='lg:max-w-lg mt-2 font-montserrat text-slate-gray'>Experience top-notch quality and style with our sougth-after selections. Discover a world of comport, design and value.</p>
             </div>


             <div className="mt-16 grid lg:grid-cols-4
             md:grid-cols-3 sm:grid-cols-2 grid-cols-1 
             gap-14 sm:gap-4 place-items-center">
                 
                 {
                    products.map((product) => {
                        return <PopularProudctCard key={product.name} {...product} />
                    })
                }

                

             </div>
        </section>
    );
};

export default PopularProducts;PopularProducts