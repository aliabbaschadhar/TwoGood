import React, { useEffect, useState } from 'react';
import { TwoGoodSvg, CartSvg } from './';
function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // Array of navigation links
    const navLinks = ['Shop', 'Wholesale', 'Catering', 'Donate'];

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
        <nav className='w-full p-4 sm:p-6 lg:p-10 h-auto min-h-[70px] lg:h-[15vh] flex items-center justify-between relative'>
            <div className='cursor-pointer transform hover:scale-105 transition-all duration-300 ease-in-out z-10'>
                <TwoGoodSvg />
            </div>

            {/* Mobile Menu Button */}
            <div className='flex items-center gap-4 lg:hidden z-10'>
                <button
                    className='p-2 rounded-md transition-all duration-300 ease-in-out hover:bg-gray-100'
                    onClick={() => setIsCartOpen(!isCartOpen)}
                >
                    {isCartOpen ? (
                        <div className='relative w-6 h-6 transition-all duration-300'>
                            <span className='block w-6 h-0.5 bg-black transform rotate-45 absolute top-3'></span>
                            <span className='block w-6 h-0.5 bg-black transform -rotate-45 absolute top-3'></span>
                        </div>
                    ) : (
                        <div className="transform transition-transform duration-300 ease-in-out hover:scale-110">
                            <CartSvg height='24' width='28' />
                        </div>
                    )}
                </button>

                <button
                    className='group relative flex flex-col items-center justify-center p-2 sm:p-2.5 rounded-md transition-all duration-300 ease-in-out hover:bg-gray-100 active:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-opacity-50'
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                >
                    <div className="relative w-5 h-5 sm:w-6 sm:h-6 flex flex-col justify-center items-center">
                        {isMenuOpen ? (
                            // Cross icon when menu is open
                            <>
                                <span className='absolute w-full h-0.5 bg-black transform rotate-45 transition-transform duration-300 ease-out'></span>
                                <span className='absolute w-full h-0.5 bg-black transform -rotate-45 transition-transform duration-300 ease-out'></span>
                            </>
                        ) : (
                            // Hamburger icon when menu is closed
                            <>
                                <span className='absolute top-0 w-full h-0.5 bg-black rounded-sm transition-all duration-300 ease-in-out transform group-hover:translate-y-0.5 group-hover:bg-gray-800'></span>
                                <span className='absolute w-full h-0.5 bg-black rounded-sm transition-all duration-300 ease-in-out group-hover:w-3/4 group-hover:bg-gray-800'></span>
                                <span className='absolute bottom-0 w-full h-0.5 bg-black rounded-sm transition-all duration-300 ease-in-out transform group-hover:-translate-y-0.5 group-hover:bg-gray-800'></span>
                            </>
                        )}
                    </div>
                </button>
            </div>

            {/* Desktop Menu */}
            <div className='hidden lg:flex items-center justify-between gap-8 uppercase text-xs font-social-mono font-semibold'>
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
                <button
                    className='group relative flex flex-col items-center justify-center p-2 sm:p-2.5 rounded-md transition-all duration-300 ease-in-out hover:bg-gray-100 active:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-opacity-50'
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                >
                    <div className="relative w-5 h-5 sm:w-6 sm:h-6 flex flex-col justify-center items-center">
                        {isMenuOpen ? (
                            // Cross icon when menu is open
                            <>
                                <span className='absolute w-full h-0.5 bg-black transform rotate-45 transition-transform duration-300 ease-out'></span>
                                <span className='absolute w-full h-0.5 bg-black transform -rotate-45 transition-transform duration-300 ease-out'></span>
                            </>
                        ) : (
                            // Hamburger icon when menu is closed
                            <>
                                <span className='absolute top-0 w-full h-0.5 bg-black rounded-sm transition-all duration-300 ease-in-out transform group-hover:translate-y-0.5 group-hover:bg-gray-800'></span>
                                <span className='absolute w-full h-0.5 bg-black rounded-sm transition-all duration-300 ease-in-out group-hover:w-3/4 group-hover:bg-gray-800'></span>
                                <span className='absolute bottom-0 w-full h-0.5 bg-black rounded-sm transition-all duration-300 ease-in-out transform group-hover:-translate-y-0.5 group-hover:bg-gray-800'></span>
                            </>
                        )}
                    </div>
                </button>
                <button
                    className='p-2 transition-all duration-300 ease-in-out hover:bg-gray-100 rounded-full'
                    onClick={() => setIsCartOpen(!isCartOpen)}
                >
                    {isCartOpen ? (
                        <div className='relative w-6 h-6 transition-all duration-300'>
                            <span className='block w-6 h-0.5 bg-black transform rotate-45 absolute top-3'></span>
                            <span className='block w-6 h-0.5 bg-black transform -rotate-45 absolute top-3'></span>
                        </div>
                    ) : (
                        <div className="transform transition-transform duration-300 ease-in-out hover:scale-110">
                            <CartSvg height='24' width='28' />
                        </div>
                    )}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className='fixed inset-0 bg-white z-20 pt-24 px-6 flex flex-col lg:hidden'>
                    <div className='flex flex-col space-y-8 uppercase text-xl font-social-mono font-semibold'>
                        {navLinks.map((link, index) => (
                            <a
                                key={index}
                                href="#"
                                className="py-2 border-b border-gray-200"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar

