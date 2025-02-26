import React from 'react';
import Button from '../Components/Button';

const Subscribe = () => {
    return (
        <section id='contact-us' className='max-container flex-center max-lg:flex-col gap-10'>
            <h1 className='text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold'>Sign Up from <span className='text-coral-red'>Updates</span> & Newsletter
            </h1>

            <div className='lg:max-[40%] w-full flex-1 flex items-center max-sm:flex-col gap-5 p-2 sm:border sm:border-slate-300  rounded-full' >
                <input type="text" id='subscribe' className='input' placeholder='subscribe@nike.com'/>
                <div className='flex max-sm:justify-end items-center max-sm:w-full'>
                    <Button label="Sign Up" fullWidht py='py-2.5' />
                </div>
            </div>
        </section>
    );
};

export default Subscribe;