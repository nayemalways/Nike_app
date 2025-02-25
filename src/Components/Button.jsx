import React from 'react';

const Button = ({label, iconURL}) => {
    return (
       <button className='flex-center gap-2 px-7 py-4 leading-none font-montserrat text-lg text-white bg-coral-red rounded-full border border-coral-red'>
        {label} 
        <img src={iconURL} alt="Arrow" className='ml-2 rounded-full w-5 h-5' />
       </button>
    );
};

export default Button;