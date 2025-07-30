import React from 'react';
import MyButton from '../MyButton/MyButton';
import carouselBg from '../../../assets/image/carousel-bg.png'

const HeroCarousel = ({title, img, subTitle}) => {
    return (
        <div className='w-full flex items-center flex-col md:flex-row'>
            <div className='w-full md:w-1/2'>
                <div className=' rounded-3xl relative'>
                    <img className='w-full' src={carouselBg} alt="" />
                    <img className='absolute top-0 left-0 h-full w-full p-10' src={img} alt="hero curousel photo" />
                </div>
            </div>
            <div className='w-full md:w-1/2 p-6 md:p-10'>
                <h1 className='text-4xl md:text-6xl font-medium'>{title}</h1>
                <p className='text-xl py-4 md:py-5'>{subTitle}</p>
                <MyButton btnText={"Shop Now"} />
            </div>
        </div>
    );
};

export default HeroCarousel;