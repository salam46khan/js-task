import React from 'react';
import { GoArrowLeft } from 'react-icons/go';

const CarouselLeft = ({onClick}) => {
    return (
        <button 
                className= "h-10 w-10 rounded-full flex cursor-pointer absolute border z-20 -left-5 bg-white top-[50%] -translate-y-1/2  justify-center items-center "
                onClick={onClick}
                >
                    <GoArrowLeft />
        </button>
    );
};

export default CarouselLeft;