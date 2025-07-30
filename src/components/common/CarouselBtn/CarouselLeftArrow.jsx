import React from 'react';
import { GoArrowLeft } from 'react-icons/go';

const CarouselLeftArrow = ({onClick}) => {
    return (
        <button 
        className= "h-10 w-10 rounded-full flex absolute cursor-pointer -left-5 z-10 top-[50%] -translate-y-1/2  justify-center items-center bg-[#B0DD1D]"
        onClick={onClick}
        >
            <GoArrowLeft />
        </button>
    );
};

export default CarouselLeftArrow;