import React from 'react';
import { offer } from '../../public/assets/images';
import Button from '../Components/Button';
import { arrowRight } from '../../public/assets/icons';

const SpecialOffer = () => {
    return (
        <section className='flex justify-wrap items-center 
        max-xl:flex-col-reverse gap-10 max-container'>
             <div className="flex-1">
                <img src={offer} alt=""
                width={773} height={687} className="w-full object-contain" />
            </div>

            <div className="flex flex-1 flex-col">
                     <h2 className='font-palanquin capitalize text-4xl font-bold lg:max-w-lg'>
                        <span className='text-coral-red'>Special</span> Offers
                    </h2>
                    <p className='text-info mt-4 lg:max-w-lg'>Embark on a shopping journey that readefines your experience with unbeatable deals. From premier selections to incredible savings, we offer unparalleled value that sets us apart.</p>

                    <p className='text-info mt-6 lg:max-w-lg'>Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the loftiest expections. Your journey with us is nothing short of expectional. </p>

                    <div className='mt-11 flex flex-wrap gap-4'>
                        <Button label="Shop now" iconURL={arrowRight} />
                    </div>
             </div>

        </section>
    );
};

export default SpecialOffer;SpecialOffer