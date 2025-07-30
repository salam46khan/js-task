import React from 'react';
import Productcard from '../../components/common/ProductCard/Productcard';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarouselLeft from '../../components/common/CarouselBtn/CarouselLeft';
import CarouselRight from '../../components/common/CarouselBtn/CarouselRight';


const Agricultural = () => {
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


    const agricultural = [
        {
            id: 1,
            title: 'JF Barbed Wire- 270 GSM',
            price: '₹4995.00',
            image: '/src/assets/image/agri-1.png'
        },
        {
            id:2,
            title: 'FGC RustFree Fencing Poles',
            price: "₹4,99.00-₹1,589.00",
            image: '/src/assets/image/agri-2.png'
        },
        {
            id:3,
            title: 'GI Poultry Mesh',
            price: "₹1,260.00-₹10,750.00",
            image: "/src/assets/image/agri-3.png"
        },
        {
            id:4,
            title: 'JF Bluelink Mesh',
            price: '₹3,067.50-₹6,362.50',
            image: '/src/assets/image/agri-4.png'
        }
    ]
    return (
        <div className='container p-3'>
            <div>
                <p className='text-4xl md:text-[42px] font-medium'>Agricultural Products</p>
                <div className='relative py-5'>
                    
                    <div className="slider-container ">
                        <Slider className='flex' {...settings}>
                            {
                                agricultural.map(product => <Productcard key={product.id} product={product}/>)
                            }
                        </Slider>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Agricultural;