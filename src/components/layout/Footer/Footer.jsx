import { useState } from 'react';
import ellipes from '../../../assets/image/Ellipse 23.png'
import { Link } from 'react-scroll';
import logo from '../../../assets/image/logo.png'
import MyButton from '../../common/MyButton/MyButton';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
const Footer = () => {
    const [subCheck, setSubCheck] = useState(false)
    return (
        <div className="md:px-10 px-2">
            <div className="bg-[#002B55] text-white rounded-3xl py-16 relative overflow-hidden">
                <img className='absolute z-0 bottom-0 left-0 w-4xl translate-y-1/2' src={ellipes} alt="" />
                <div className="container relative z-10 ">
                    <div className='py-10 px-3 flex flex-col gap-3 md:flex-row'>
                        <div className='w-full md:w-1/2'>
                            <p className='md:text-3xl text-2xl'>Join Our JF Products</p>
                            <p>We'll tell you about store updates and discounts</p>

                            <form className='py-10'>
                                <input type="text" className='px-7 py-4 rounded-3xl w-full max-w-xl bg-[#ffffff2a]' placeholder='Enter your email'/>

                                <div className='text-slate-400 py-5'>
                                    <input
                                        onClick={()=>setSubCheck(!subCheck)}
                                        type="checkbox"
                                        id="subscribe"
                                        className={`w-4 h-4 border border-slate-400 rounded-sm cursor-pointer ${subCheck ? "": "appearance-none"}`}
                                    />
                                    <label htmlFor="subscribe" className="cursor-pointer ml-2">
                                        Yes, subscribe me to your newsletter.
                                    </label>
                                </div>

                                <button className='px-7 py-4 text-black text-[16px] rounded-3xl w-full max-w-xl bg-slate-100'>Join Now</button>
                            </form>
                        </div>

                        <div className='w-full md:w-1/2 flex p-2'>
                            <div className='w-1/2'>
                                <p className='text-2xl md:text-3xl pb-6'>Information</p>
                                <ul>
                                    <li className='py-2'>
                                        <Link 
                                            to="hero" 
                                            smooth={true} 
                                            duration={500}
                                            spy={true}
                                            offset={0}>Home
                                        </Link>
                                    </li>
                                    <li className='py-2'>
                                        <Link 
                                            to="shop" 
                                            smooth={true} 
                                            duration={500}
                                            spy={true}
                                            offset={0}>Shop
                                        </Link>
                                    </li>
                                    <li className='py-2'>
                                        <Link 
                                            to="story" 
                                            smooth={true} 
                                            duration={500}
                                            spy={true}
                                            offset={0}>Our Story
                                        </Link>
                                    </li>
                                    <li className='py-2'>
                                        <Link 
                                            to="blog" 
                                            smooth={true} 
                                            duration={500}
                                            spy={true}
                                            offset={0}>Blogs
                                        </Link>
                                    </li>
                                    <li className='py-2'>
                                        <Link 
                                            to="contact" 
                                            smooth={true} 
                                            duration={500}
                                            spy={true}
                                            offset={0}>Contact
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className='w-1/2'>
                                <p className='text-2xl md:text-3xl pb-6'>Helpful</p>
                                <ul>
                                    <li className='py-2'>
                                        <Link>
                                            FAQs
                                        </Link>
                                    </li>
                                    <li className='py-2'>
                                        <Link>
                                            Terms & Conditions
                                        </Link>
                                    </li>
                                    <li className='py-2'>
                                        <Link>
                                            Privacy Policy
                                        </Link>
                                    </li>
                                    <li className='py-2'>
                                        <Link>
                                            Shipping Policy
                                        </Link>
                                    </li>
                                    <li className='py-2'>
                                        <Link>
                                            My Account
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <div className='flex flex-col md:flex-row md:items-center gap-3 p-2 justify-between'>
                        <div className='flex items-center gap-5'>
                            <div className='bg-white p-3 rounded-full'>
                                <img src={logo} alt="logo" />
                            </div>
                            <div>
                                <p className='font-semibold text-xl'>Our Branches</p>
                                <p className='text-xl'>Coimbatore, Chennai, Hyderabad, Goa, Kochi</p>
                            </div>
                        </div>
                        <div className='text-black'>
                            <MyButton btnText={"Contact Us"}></MyButton>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container p-3 flex gap-3 flex-col md:flex-row-reverse justify-between md:items-center '>
                <ul className='flex gap-3'>
                    <li>
                        <Link className='h-8 w-8 rounded-full bg-[#0000001a] flex justify-center items-center' to='/'> <FaFacebookF /></Link>
                    </li>
                    <li>
                        <Link className='h-8 w-8 rounded-full bg-[#0000001a] flex justify-center items-center' to='/'> <FaInstagram /></Link>
                    </li>
                    <li>
                        <Link className='h-8 w-8 rounded-full bg-[#0000001a] flex justify-center items-center' to='/'> <FaYoutube /></Link>
                    </li>
                </ul>
                <p>Copyright © 2025 JF Products. All rights reserved</p>
                
            </div>
        </div>
    );
};

export default Footer;