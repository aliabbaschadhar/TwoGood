import React, { useEffect, useState } from 'react';
import { TwoGoodSvg, CartSvg } from './';
import { motion } from 'framer-motion';
import { headerAnimation } from '../assets/images/';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [hoveredLink, setHoveredLink] = useState(null);

    // Array of navigation links
    const navLinks = ['Shop', 'Wholesale', 'Catering', 'Donate'];
    const overLayLinks = ['Shop', 'Wholesale', 'Catering', 'impact', 'About', 'Contact', 'donate', 'sign in'];
    const socialLinks = ['Facebook', 'Instagram', 'Twitter', 'LinkedIn', 'YouTube'];
    const nittyGrittyLinks = ['Good Things FAQs', 'Good Food FAQs', 'Good Places'];
    const legalLinks = ['Pathways', 'Careers', 'Privacy Policy', 'Terms of Service'];

    // Handle responsive resize
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1024);
            if (window.innerWidth >= 1024) {
                setIsMenuOpen(false);
            }
        };

        handleResize(); // Set initial state
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <nav className='w-full p-4 sm:p-6 lg:p-10 h-auto min-h-[70px] lg:h-[15vh] flex items-center justify-between relative z-50'>
            {/* Left Section - Logo */}
            <div className='cursor-pointer transform hover:scale-105 transition-all duration-300 ease-in-out z-10'>
                <TwoGoodSvg
                    width={isMobile ? "80" : (window.innerWidth < 1280 ? "120" : "140")}
                    height={isMobile ? "40" : (window.innerWidth < 1280 ? "60" : "70")}
                    className="transition-transform duration-300 ease-in-out"
                />
            </div>

            {/* Center Section - Nav Links (Desktop) */}
            <div className={`hidden ${!isMenuOpen ? 'lg:flex' : ''} items-center justify-center gap-8 uppercase text-xs font-social-mono font-semibold absolute left-1/2 transform -translate-x-1/2`}>
                {navLinks.map((link, index) => (
                    <a
                        key={index}
                        href="#"
                        className="relative group py-1 transition-all duration-300 ease-in-out"
                    >
                        <span className="transition-all duration-300 ease-in-out group-hover:text-gray-500">{link}</span>
                        <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-black transition-all duration-300 ease-in-out group-hover:w-full"></span>
                    </a>
                ))}
            </div>

            {/* Right Section - Icons */}
            <div className='flex items-center gap-4 z-10 ml-auto'>
                {/* Cart icon */}
                <button
                    className='p-2 transition-all duration-300 ease-in-out'
                    onClick={() => setIsCartOpen(!isCartOpen)}
                    aria-label={isCartOpen ? "Close cart" : "Open cart"}
                >
                    {isCartOpen ? (
                        <div className='relative w-6 h-6 transition-all duration-300'>
                            <span className='block w-6 h-0.5 bg-black transform rotate-45 absolute top-3'></span>
                            <span className='block w-6 h-0.5 bg-black transform -rotate-45 absolute top-3'></span>
                        </div>
                    ) : (
                        <div className="transform transition-transform duration-300 ease-in-out hover:scale-110">
                            <CartSvg height={isMobile ? "20" : "24"} width={isMobile ? "22" : "28"} className="transition-transform duration-300 ease-in-out" />
                        </div>
                    )}
                </button>

                {/* Hamburger icon */}
                <button
                    className='group relative flex flex-col items-center justify-center p-2 sm:p-2.5 rounded-md transition-all duration-300 ease-in-out active:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-opacity-50'
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                >
                    <div className="relative w-5 h-5 sm:w-6 sm:h-6 flex flex-col justify-center items-center">
                        {isMenuOpen ? (
                            <>
                                <span className='absolute w-full h-0.5 bg-black transform rotate-45 transition-transform duration-300 ease-out'></span>
                                <span className='absolute w-full h-0.5 bg-black transform -rotate-45 transition-transform duration-300 ease-out'></span>
                            </>
                        ) : (
                            <>
                                <span className='absolute top-0 w-full h-0.5 bg-black rounded-sm transition-all duration-300 ease-in-out transform group-hover:translate-y-0.5 group-hover:bg-gray-800'></span>
                                <span className='absolute w-full h-0.5 bg-black rounded-sm transition-all duration-300 ease-in-out group-hover:w-3/4 group-hover:bg-gray-800'></span>
                                <span className='absolute bottom-0 w-full h-0.5 bg-black rounded-sm transition-all duration-300 ease-in-out transform group-hover:-translate-y-0.5 group-hover:bg-gray-800'></span>
                            </>
                        )}
                    </div>
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className='fixed inset-0 bg-black text-white z-20 flex flex-col overflow-y-auto '>
                    <div className='pt-24 px-6 flex-grow flex flex-col lg:flex-row-reverse lg:items-end lg:justify-between'>
                        <div className='flex flex-col uppercase items-end'>
                            {overLayLinks.map((link, index) => (
                                <motion.div
                                    key={index}
                                    className="relative"
                                    onHoverStart={() => setHoveredLink(index)}
                                    onHoverEnd={() => setHoveredLink(null)}
                                >
                                    <motion.a
                                        href="#"
                                        className="font-futura text-[53px] md:text-[58px] lg:text-[65px] font-extrabold transition-all duration-300 ease-in-out flex items-center -mb-8 tracking-tight relative z-10"
                                        whileHover={{ scale: 1.05, x: 10 }}
                                        transition={{ duration: 0.01 }}
                                    >
                                        <span className="mr-auto">{link}</span>
                                    </motion.a>

                                    {hoveredLink === index && (
                                        <motion.div
                                            className="absolute inset-0 pointer-events-none"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                        >
                                            <motion.img
                                                src={headerAnimation}
                                                alt="animation"
                                                className="w-full h-5 object-cover absolute -bottom-1/2 transform -translate-y-1/2"
                                                initial={{ x: -100, opacity: 0 }}
                                                animate={{
                                                    x: 0,
                                                    opacity: 1,
                                                    transition: {
                                                        duration: 0.15,
                                                        ease: "easeOut",
                                                    }
                                                }}
                                            />
                                        </motion.div>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                        <div className="lg:hidden h-[1px] w-full bg-zinc-400 my-10"></div>
                        {/* NavFooter overlay */}
                        <div className='flex items-start justify-between md:gap-40 gap-4 text-nowrap'>
                            <div className='flex flex-col gap-4'>
                                <h4 className='uppercase text-zinc-600'>Connect with us</h4>
                                <div>
                                    {socialLinks.map((link, index) => (
                                        <a
                                            key={index}
                                            href="#"
                                            className="font-helvetica transition-all duration-300 ease-in-out hover:text-zinc-400 flex items-center"
                                        >
                                            <span className="mr-auto">{link}</span>
                                        </a>
                                    ))}
                                </div>
                            </div>
                            <div className='flex flex-col gap-4 '>
                                <h4 className='uppercase text-zinc-600'>Nitty Gritty</h4>
                                <div>
                                    {nittyGrittyLinks.map((link, index) => (
                                        <a
                                            key={index}
                                            href="#"
                                            className="font-helvetica transition-all duration-300 ease-in-out hover:text-zinc-400 flex items-center"
                                        >
                                            <span className="mr-auto">{link}</span>
                                        </a>
                                    ))}
                                </div>
                            </div>
                            <div className='flex flex-col gap-4'>
                                <h4 className='uppercase text-zinc-600'>Legal</h4>
                                <div>
                                    {legalLinks.map((link, index) => (
                                        <a
                                            key={index}
                                            href="#"
                                            className="font-helvetica transition-all duration-300 ease-in-out hover:text-zinc-400 flex items-center"
                                        >
                                            <span className="mr-auto">{link}</span>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar

