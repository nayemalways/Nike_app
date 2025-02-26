import React from 'react';

const Button = ({label, iconURL, fullWidht, py}) => {
    return (
       <button className={`flex-center gap-2 cursor-pointer hover:bg-amber-900 px-7 leading-none font-montserrat text-lg text-white bg-coral-red rounded-full border border-coral-red
        ${fullWidht && 'w-full'}
        ${py ? py : 'py-4'}
       `}>

        {label} 
        { iconURL &&  <img src={iconURL} alt="Arrow" className='ml-2 rounded-full w-5 h-5' /> }
       </button>
    );
};

export default Button;