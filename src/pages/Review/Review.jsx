import Slider from "react-slick";
import ReviewCarousel from "../../components/common/ReviewCarousel/ReviewCarousel";
import ReviewLeftArrow from "../../components/common/CarouselBtn/ReviewLeftArrow";
import ReviewRightArrow from "../../components/common/CarouselBtn/ReviewRightArrow";

const Review = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 8000,
        nextArrow: <ReviewRightArrow />,
        prevArrow: <ReviewLeftArrow />
    };
    return (
        <div className="container py-10 p-3">
            <div>
                

                <div className="slider-container">
                    <Slider {...settings}>
                        <div>
                            <ReviewCarousel />
                        </div>
                        <div>
                            <ReviewCarousel />
                        </div>
                        <div>
                            <ReviewCarousel />
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Review;