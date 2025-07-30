import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css'
import logo from '../../../assets/image/logo.png'
import { AiOutlineUser } from 'react-icons/ai';
import { FiSearch } from 'react-icons/fi';
import { TbShoppingBag } from 'react-icons/tb';

const Navbar = () => {
     const [navOpen, setNavOpen] = useState(false)
     const [cartOpen, setCartOpen] = useState(false)
    return (
        <div className='bg-white fixed z-50 top-0 left-0 w-full h-20 flex items-center'>
            <div className="container px-3 flex h-10 items-center-safe" >

            
                {/* <button onClick={()=>setNavOpen(!navOpen)} className="btn btn-circle bg-primaryColor bg-opacity-30 border-none text-primaryColor block md:hidden">
                {
                    navOpen ?
                        <svg
                            className="swap-on fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 0 512 512">
                            <polygon
                                points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
                        </svg>
                        :
                        <svg
                            className="swap-off fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 0 512 512">
                            <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                        </svg>

                }
                </button> */}




                <nav className="w-1/3">

                    <button onClick={()=>setNavOpen(!navOpen)} className="btn btn-circle bg-[#B0DD1D] border-none flex justify-center items-center md:hidden">
                    {
                    navOpen ?
                        <svg
                            className="swap-on fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 512 512">
                            <polygon
                                points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
                        </svg>
                        :
                        <svg
                            className="swap-off fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 512 512">
                            <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                        </svg>

                    }
                    </button>
                    <div className={`absolute top-full left-0 w-1/2 md:static md:w-auto transition-all duration-300 bg-white ease-in-out z-10 ${navOpen ? 'block p-3' : 'hidden'} md:block`}>
                        <ul className='flex md:flex-row flex-col gap-5'>
                            <li>
                                <Link 
                                to="hero" 
                                smooth={true} 
                                duration={500}
                                spy={true}
                                offset={0}
                                >Home</Link>
                            </li>
                            
                            <li>
                                <Link 
                                activeClass="active"
                                to="shop"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}
                                >Shop</Link>
                            </li>
                            <li>
                                <Link 
                                activeClass="active"
                                to="blogs" 
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}
                                >Blogs</Link>
                            </li>
                            <li>
                                <Link 
                                activeClass="active"
                                to="contact" 
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}
                                >Contact</Link>
                            </li>
                        </ul>
                    </div>
                </nav>

                <div className="logo w-1/3 flex justify-center ">
                    <div className='bg-white z-50 relative md:-translate-y-3 p-2 rounded-full'>
                        <img className='w-16 md:w-20' src={logo} alt="" />
                    </div>
                </div>

                <div className="cart w-1/3 flex justify-end">

                    <button onClick={()=>setCartOpen(!cartOpen)} className="btn btn-circle bg-[#B0DD1D] flex justify-center items-center border-none md:hidden">
                        <AiOutlineUser className='text-2xl'/>
                    </button>

                    <div className={`absolute top-full right-0 w-1/2 md:static md:w-auto transition-all duration-300 bg-white ease-in-out ${cartOpen ? 'block p-3' : 'hidden'} md:block`}>
                        <ul className='flex flex-col md:flex-row justify-baseline md:items-center gap-7'>
                            <li className='flex md:flex-row-reverse gap-2 items-center'> 
                                <span><AiOutlineUser className='text-xl'/></span>
                                <span>Login</span>
                            </li>
                            <li className='flex items-center gap-2'>
                                <FiSearch className='text-xl'/>
                                <span className='md:hidden'>Search</span>
                            </li>
                            <li className='flex items-center relative gap-2'>
                                
                                    <TbShoppingBag className='text-xl'/>
                                    <span className='absolute bg-black right-0 -translate-y-1/2 translate-x-1/2 top-0 text-white h-5 w-5 rounded-full flex justify-center items-center text-[14px]'>0</span>
                                
                                <span className='md:hidden'>Cart</span>
                            </li>
                        </ul>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Navbar;