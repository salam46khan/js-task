import f1 from '../../assets/image/frm-1.png'
import f2 from '../../assets/image/frm-2.png'
import f3 from '../../assets/image/frm-3.png'
import ell from '../../assets/image/Ellipse 23.png'
const TrustBanner = () => {
    return (
        <div className="container p-3 py-10">
            <div className="bg-[#002B55] rounded-3xl overflow-hidden relative p-8 md:p-12 text-white">
               
                <img className=' absolute left-1/2 z-0 -translate-x-1/2 -bottom-1/2 translate-y-1/3 w-1/2' src={ell} alt="" />
                
                <h4 className="text-center text-4xl md:text-[42px] font-medium">Trusted by over 6K+ customers</h4>
                <div className="flex relative z-10 flex-col mt-8 md:flex-row gap-5 md:items-center justify-center">
                    <div className='flex items-center md:justify-center gap-3 w-full md:w-1/3'>
                        <div className='h-20 bg-white w-20 rounded-full flex justify-center items-center'>
                            <img src={f1} alt="" />
                        </div>
                        <div>
                            <h4 className='text-2xl'>Premium</h4>
                            <p>Products</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-3 md:justify-center w-full md:w-1/3'>
                        <div className='h-20 bg-white w-20 rounded-full flex justify-center items-center'>
                            <img src={f2} alt="" />
                        </div>
                        <div>
                            <h4 className='text-2xl'>4000+</h4>
                            <p>Google Review</p>
                        </div>
                    </div>
                    <div className='flex items-center md:justify-center gap-3 w-full md:w-1/3'>
                        <div className='h-20 bg-white w-20 rounded-full flex justify-center items-center'>
                            <img src={f3} alt="" />
                        </div>
                        <div>
                            <h4 className='text-2xl'>Delivery</h4>
                            <p>Across India</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrustBanner;