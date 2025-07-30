import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Hero.css'
import HeroCarousel from '../../components/common/HeroCarousel/HeroCarousel';
import CarouselLeftArrow from '../../components/common/CarouselBtn/CarouselLeftArrow';
import CarouselRightArrow from '../../components/common/CarouselBtn/CarouselRightArrow';
import carousel1 from '../../assets/image/hero-carousel-1.png'
import carousel2 from '../../assets/image/hero-carousel-2.png'
import carousel3 from '../../assets/image/hero-carousek-3.png'

const Hero = () => {
    let settings = {
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 8000,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <CarouselRightArrow />,
        prevArrow: <CarouselLeftArrow />
    };

    return (
        <div className='h-screen' id='hero'>
            <div className='pt-20 container'>
                

                <div className="slider-container relative">
                    <Slider {...settings}>
                        <div className='hero-carousel'>
                            <HeroCarousel 
                            img={carousel1} 
                            subTitle={'The perfact Blend of Greenery'} 
                            title={'JF Privezy Grass Wall'}/>
                        </div>
                        <div className='hero-carousel'>
                            <HeroCarousel 
                            img={carousel2} 
                            subTitle={'Where aesthetics meet durability'} 
                            title={'JF Australian Trellis'}/>
                        </div>
                        <div className='hero-carousel'>
                            <HeroCarousel 
                            img={carousel3} 
                            subTitle={'Where aesthetics meet durability'} 
                            title={'JF Australian Trellis'}/>
                        </div>
                        
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Hero;