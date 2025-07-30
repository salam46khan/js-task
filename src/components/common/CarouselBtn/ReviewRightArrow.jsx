import React from 'react';
import { GoArrowRight } from 'react-icons/go';

const ReviewRightArrow = ({onClick}) => {
    return (
        <button className= "h-10 w-10 rounded-full flex cursor-pointer absolute bottom-8 left-2/3 border z-20 bg-white justify-center items-center -translate-y-1/2"
        onClick={onClick}>
            <GoArrowRight />
        </button>
    );
};

export default ReviewRightArrow;