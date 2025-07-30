import React from 'react';
import { GoArrowRight } from 'react-icons/go';

const CarouselRightArrow = ({onClick}) => {
    return (
        <button 
        className= "h-10 w-10 rounded-full flex absolute -right-5 z-10 cursor-pointer top-[50%] -translate-y-1/2  justify-center items-center bg-[#B0DD1D]"
        onClick={onClick}
        >
            <GoArrowRight />
        </button>
    );
};

export default CarouselRightArrow;