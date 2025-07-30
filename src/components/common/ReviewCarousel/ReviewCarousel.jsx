import { FaQuoteLeft } from 'react-icons/fa';
import p1 from '../../../assets/image/p-1.png'
const ReviewCarousel = () => {
    return (
        <div className="flex flex-col md:flex-row-reverse gap-5 m-3">
            <div className="w-full md:w-1/4 rounded-3xl p-5 bg-[#F2F4F6]">
                <img className='w-full' src={p1} alt="" />
            </div>
            <div className="w-full md:w-3/4 rounded-3xl p-5 flex flex-col bg-[#F2F4F6]">
                <div className='flex-1 p-5 md:p-10'>
                    <FaQuoteLeft className='text-[#B0DD1D] text-5xl mb-10'/>
                    <p className='text-2xl'>
                        I had initial issue with stock availability and delivery. Once the product arrived on site the work has completed very fast(400ft.) Value for money and easy to install. Happy with the product
                    </p>
                </div>
                <div className='p-6 bg-white rounded-3xl'>
                    <p className='font-bold text-3xl'>- Samuel Varughese</p>
                    <div className='p-5 md:hidden block'></div>
                </div>
            </div>
        </div>
    );
};

export default ReviewCarousel;