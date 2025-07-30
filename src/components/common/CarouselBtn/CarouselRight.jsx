import React from 'react';
import { GoArrowRight } from 'react-icons/go';

const CarouselRight = ({onClick}) => {
    return (
        <button 
        className= "h-10 w-10 rounded-full flex absolute cursor-pointer border z-20 -right-5 bg-white top-[50%] -translate-y-1/2  justify-center items-center "
        onClick={onClick}
        >
            <GoArrowRight />
        </button>
    );
};

export default CarouselRight;