import React from 'react';
import Slider from 'react-slick';
import CarouselRight from '../../components/common/CarouselBtn/CarouselRight';
import CarouselLeft from '../../components/common/CarouselBtn/CarouselLeft';
import Productcard from '../../components/common/ProductCard/Productcard';

const Landscape = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <CarouselRight />,
        prevArrow: <CarouselLeft />,
        responsive: [
        {
            breakpoint: 1024,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: false
            }
        },
        {
            breakpoint: 600,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true
            }
        }
        ]
    };

    const landscape = [
        {
            id: 1,
            title: 'Antiqo Fence',
            price: '₹10,024.00-₹14,984.82',
            image: '/src/assets/image/lan-1.png'
        },
        {
            id:2,
            title: 'JF Australian Trellis',
            price: "₹6,962.00",
            image: '/src/assets/image/lan-2.png'
        },
        {
            id:3,
            title: 'JF Polyhex Mesh',
            price: "₹4,050.00-₹10,770.00",
            image: "/src/assets/image/lan-3.png"
        },
        {
            id:4,
            title: 'JF Privezy Grass Wall',
            price: '₹1,646.10-₹18,284.10',
            image: '/src/assets/image/lan-4.png'
        }
    ]
    return (
        <div className='container p-3 py-10'>
            <div>
                <p className='text-4xl md:text-[42px] font-medium'>Landscape Products</p>
                <div className='relative py-5'>
                    
                    <div className="slider-container ">
                        <Slider className='flex' {...settings}>
                            {
                                landscape.map(product => <Productcard key={product.id} product={product}/>)
                            }
                        </Slider>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Landscape;