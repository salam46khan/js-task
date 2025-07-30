import marqImg from '../../../assets/image/marque.png'
const MarqueeItem = ({text}) => {
    return (
        <div className='flex items-center gap-6 px-3'>
            <img className='rotate-3 w-16' src={marqImg} alt="" />
            <p className='text-3xl'>{text}</p>
        </div>
    );
};

export default MarqueeItem;