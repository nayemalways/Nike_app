import React from 'react';

const ShoeCard = ({bigShoeImg, ChangeBigShoeImg, imgURL}) => {

    const handleClick = () => {
        if(bigShoeImg !== imgURL.Shoe) ChangeBigShoeImg(imgURL.bigShoe)
    }
    
    
    return (
        <div className={`border-2
            rounded-xl
                ${imgURL.bigShoe === bigShoeImg
                    ? 'border-coral-red'
                    : 'border-transparent'
                } cursor-pointer max-sm:flex-1
        `}
        onClick={handleClick}
        >
            

                <div className='flex-center bg-cover bg-indigo-100 bg-center bg-card
                    sm:w-40 sm:h-40 rounded-xl max-sm:p-4
                '>
                    <img src={imgURL.thumbnail} alt="Shoe collection"
                        width={127}
                        height={103}
                    />
                </div>

        </div>
    );
};

export default ShoeCard;