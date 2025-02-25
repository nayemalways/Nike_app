import React from 'react';
import Button from '../Components/Button';
import { arrowRight } from '../../public/assets/icons';
import { statistics } from '../constants';
import { bigShoe1 } from '../../public/assets/images';

const Hero = () => {
    return (
        <section 
            id='home' 
            className='w-full flex xl:flex-row flex-col gap-10 max-container min-h-screen'>
              <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full    padding-x pt-28 ">
                    <p className='sm:text-xl text-lg font-montserrat text-coral-red'>Our Summer Collection</p>
                    <h1 className='mt-10 font-palanquin hero-text-fluid
                     font-bold'>
                        <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>The New Arrival</span>
                        <br />
                        <span className='text-coral-red inline-block'>Nike</span> Shoes
                    </h1>
                    <p className='font-montserrat text-slate-gray text-lg leading-8 mt-8 mb-6 sm:max-w-sm'>Discover stylish Nike arrivals, quality comport and innovation for your active life.</p>

                    <Button label="Shop now" iconURL={arrowRight} />

                    <div className='flex   justify-start items-start flex-wrap w-full mt-20 gap-16'>
                        {
                            statistics.map((item) => {
                                return (
                                    <div key={item.label}>
                                        <p className='font-palanquin text-4xl font-bold'> {item.value} </p>
                                        <p className='leading-7 font-montserrat text-slate-gray'> {item.label} </p>
                                    </div>
                                )
                            })
                        }
                    </div>
              </div>

              <div className='relativ flex-1 flex-center xl:min-h-screen 
              max-xl:py-40 bg-primary bg-hero bg-cover'>
                <img 
                    src={bigShoe1} 
                    alt="Shoe Collection" 
                    width={610} height={500}
                    className='object-contain relative z-10' />
              </div>
        </section>
    );
};

export default Hero;