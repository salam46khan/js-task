import React from 'react';
import { GoArrowLeft } from 'react-icons/go';

const ReviewLeftArrow = ({onClick}) => {
    return (
        <button className= "h-10 w-10 rounded-full flex cursor-pointer absolute border z-20 bottom-8 left-2/3 bg-white -translate-y-1/2 -translate-x-12 justify-center items-center"
        onClick={onClick}>
            <GoArrowLeft />
        </button>
    );
};

export default ReviewLeftArrow;