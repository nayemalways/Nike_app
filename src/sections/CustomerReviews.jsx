import React from 'react';
import { reviews } from '../constants';
import ReviewCard from '../Components/ReviewCard';

const CustomerReviews = () => {
    return (
        <div className='max-container'>
            <h3 className='font-palanquin font-bold text-4xl text-center'>
                What Our <span className='text-coral-red'>Customers</span> Say?
            </h3>
            <p className='text-info mt-4 max-w-lg m-auto text-center '> Hear genuine stories from our satisfied customers about their exceptional with us.</p>

            <div className="mt-24 flex flex-1 justify-evenly items-center 
            max-lg:flex-col gap-14">
                {
                    reviews.map((review, i) => {
                        return <ReviewCard key={i} {...review} />
                    })
                }
            </div>
        </div>
    );
};

export default CustomerReviews;