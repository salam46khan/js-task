import ell from '../../../assets/image/Ellipse 23.png'

const FormContent = () => {
    return (
        <form className='p-10 bg-[#002B55] h-full rounded-3xl relative overflow-hidden text-white'>

            <img className='w-full absolute bottom-0 right-0 z-0 translate-y-1/3 translate-x-1/3' src={ell} alt="" />

            <p className='text-4xl py-5'>Contact Us</p>
            <div className='z-10 relative flex flex-col'>
                <div className='py-3'>
                    <input className='bg-[#ffffff10] text-white placeholder:text-gray-300 rounded-3xl py-4 px-5 w-full' type="text" placeholder='Your Name' />
                </div>
                <div className='py-3'>
                    <input className='bg-[#ffffff10] text-white placeholder:text-gray-300 rounded-3xl py-4 px-5 w-full' type="email" placeholder='Email' />
                </div>
                <div className='py-3'>
                    <input className='bg-[#ffffff10] text-white placeholder:text-gray-300 rounded-3xl py-4 px-5 w-full' type="text" placeholder='Phone *' required />
                </div>
                <div className='py-3'>
                    <textarea rows="4" className='bg-[#ffffff10] resize-none text-white placeholder:text-gray-300 rounded-3xl py-4 px-5 w-full' type="text" placeholder='Write message' />
                </div>

                <div className='py-5 flex-1'>
                    <input className='bg-[#B0DD1D] rounded-full py-2.5 px-8 text-black' type="button" value="Submit" />
                </div>
            </div>
        </form>
    );
};

export default FormContent;