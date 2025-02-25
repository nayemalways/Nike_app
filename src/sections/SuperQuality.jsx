import React from 'react';
import Button from '../Components/Button';
import { shoe8 } from '../../public/assets/images';


const SuperQuality = () => {
    return (
        <section id='about-us' 
        className='flex justify-between items-center max-lg:flex-col 
        gap-10 w-full max-container ' >
             <div className="flex flex-1  flex-col">
                     <h2 className='font-palanquin capitalize text-4xl font-bold lg:max-w-lg'>
                        We Provide you <span className='text-coral-red'>Super</span> <span className='text-coral-red '>Quality</span> Shoes
                    </h2>
                    <p className='text-info mt-4 lg:max-w-lg'>Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance</p>

                    <p className='text-info mt-6 lg:max-w-lg'>Our dedication to detail and excellence ensures your satisfaction</p>

                    <div className='mt-8'>
                        <Button label="View Details" />
                    </div>
             </div>

             <div className='flex-center flex-1' >
                <img className='object-contain' src={shoe8} alt="Shoe"  width={570} height={522}/>
             </div>
        </section>
    );
};

export default SuperQuality;