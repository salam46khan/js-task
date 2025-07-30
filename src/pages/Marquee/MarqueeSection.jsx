import React from 'react';
import MarqueeItem from '../../components/common/MarqueeItem/MarqueeItem';
import Marquee from 'react-fast-marquee';

const MarqueeSection = () => {
    return (
        <div className='py-10 my-10'>
            <div className='bg-[#D9ECFF] border-y border-[#002b55] text-[#002B55] p-3 -rotate-3'>
                <Marquee 
                    autoFill= {true}
                >
                    <MarqueeItem text={'quality product'}/>
                    <MarqueeItem text={'shipping across India'}/>
                </Marquee>
            </div>
        </div>
    );
};

export default MarqueeSection;