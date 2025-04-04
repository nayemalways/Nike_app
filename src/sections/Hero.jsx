import React, { useState } from 'react';
import Button from '../Components/Button';
import { arrowRight } from '../../public/assets/icons';
import { shoes, statistics } from '../constants';
import { bigShoe1 } from '../../public/assets/images';
import ShoeCard from '../Components/ShoeCard';

const Hero = () => {
    const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);


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

              <div className='flex-1 flex-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover relative'>
                
                    <img 
                        src={bigShoeImg} 
                        alt="Shoe Collection" 
                        width={610} height={500}
                        className='object-contain relative z-10'
                    />

                    <div className='flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6'>
                        {
                            shoes.map((shoe, i) => {
                                return (
                                    <div key={i}>
                                        <ShoeCard 
                                            imgURL={shoe}
                                            ChangeBigShoeImg={(shoe) => setBigShoeImg(shoe)}
                                            bigShoeImg ={bigShoeImg}

                                        />
                                    </div>
                                )
                            })
                        }
                    </div>

              </div>

             
        </section>
    );
};

export default Hero;