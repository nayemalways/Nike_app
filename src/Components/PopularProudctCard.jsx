import React from 'react';
import { star } from '../../public/assets/icons';

const PopularProudctCard = ({imgURL, name, price}) => {
    return (
        <div className='flex-center flex-1 flex-col w-full
         max-sm:w-full '>
            <img className='w-[280px] h-[280px] ' src={imgURL} alt={name} />
            <div className='mt-8 flex justify-start gap-2.5'>
                <img width={24} height={24} src={star} alt="Star" />
                <p className='font-montserrat text-xl
                leading-normal text-slate-gray '>(4.5)</p>
            </div>

            <h3 className='mt-2 text-2xl font-palanquin font-semibold 
            leading-normal'> {name} </h3>
            <p className='mt-2 font-semibold text-coral-red text-2xl leading-normal'> {price} </p>

        </div>
    );
};

export default PopularProudctCard;