
import ell from '../../../assets/image/Ellipse 23.png'
const WhyCard = ({why}) => {
    // console.log(props);
    
    return (
        <div className="p-8 md:p-10 relative overflow-hidden transition-all duration-300 hover:text-white hover:-translate-y-5 bg-[#F2F4F6] hover:bg-[#002B55] rounded-3xl w-full lg:w-1/3 md:max-w-[400px]">
            <img className='w-full absolute top-0 right-0 z-0 -translate-y-1/3 translate-x-1/3' src={ell} alt="" />
            <div className='relative z-10'>
                <img className='h-12 ' src={why.image} alt="" />
                <p className='py-5 font-medium text-2xl md:text-[28px]'>
                    {why.title}
                </p>
                <p>
                    {why.text}
                </p>
            </div>
        </div>
    );
};

export default WhyCard;