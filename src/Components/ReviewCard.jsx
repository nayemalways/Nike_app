import React from 'react';
import { star } from '../../public/assets/icons';

const ReviewCard = ({imgURL, customerName, rating, feedback}) => {
    return (
        <div className='flex-center flex-col'>
             <img className='rounded-full w-[120px] h-[120px] object-cover ' src={imgURL} alt="Customer"  />
            <div className=''>
                <p className='max-w-sm text-info mt-6 text-center  '> {feedback} </p>
                <div className='flex-center mt-3'>
                    <img className='object-contain' src={star} alt="Star" width={24} height={24} />
                    <p className='pl-1 text-xl font-montserrat text-slate-gray'>({rating})</p>
                </div>
                <h3 className='text-center font-palanquin text-2xl font-bold mt-1'> {customerName} </h3>
            </div>
        </div>
    );
};

export default ReviewCard;