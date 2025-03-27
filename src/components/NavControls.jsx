import React from 'react';
import { CartSvg } from './';

function NavControls({ isMobile, isMenuOpen, isCartOpen, toggleMenu, toggleCart }) {
    return (
        <div className={`flex items-center gap-4 z-10 ml-auto rounded-full px-4 py-2 ${isMenuOpen || isCartOpen ? "bg-zinc-800" : "bg-white"}`}>
            {/* Cart icon */}
            <button
                className='p-2 transition-all duration-300 ease-in-out'
                onClick={toggleCart}
                aria-label={isCartOpen ? "Close cart" : "Open cart"}
            >
                {isCartOpen ? (
                    <div className='relative w-6 h-6 transition-all duration-75'>
                        <span className={`block w-6 h-0.5 transform rotate-45 absolute top-3 ${isCartOpen ? "bg-white" : "bg-black"}`}></span>
                        <span className={`block w-6 h-0.5 transform -rotate-45 absolute top-3 ${isCartOpen ? "bg-white" : "bg-black"}`}></span>
                    </div>
                ) : (
                    <div className="transform transition-transform duration-300 ease-in-out hover:scale-110">
                        <CartSvg height={isMobile ? "20" : "24"} width={isMobile ? "22" : "28"} className="transition-transform duration-300 ease-in-out" />
                    </div>
                )}
            </button>

            {/* Hamburger icon */}
            <button
                className='group relative flex flex-col items-center justify-center p-2 sm:p-2.5 rounded-md transition-all duration-300 ease-in-out'
                onClick={toggleMenu}
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
                <div className="relative w-5 h-5 sm:w-6 sm:h-6 flex flex-col justify-center items-center">
                    <div className={`w-5 sm:w-6 h-[2px] bg-${isMenuOpen || isCartOpen ? 'white' : 'black'} transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-[6px] sm:translate-y-[7px]' : 'transform group-hover:translate-y-0.5 group-hover:bg-gray-800'}`}></div>
                    <div className={`w-5 sm:w-6 h-[2px] bg-${isMenuOpen || isCartOpen ? 'white' : 'black'} my-[5px] sm:my-[6px] transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'group-hover:w-3/4 group-hover:bg-gray-800'}`}></div>
                    <div className={`w-5 sm:w-6 h-[2px] bg-${isMenuOpen || isCartOpen ? 'white' : 'black'} transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-[6px] sm:-translate-y-[7px]' : 'transform group-hover:-translate-y-0.5 group-hover:bg-gray-800'}`}></div>
                </div>
            </button>
        </div>
    );
}

export default NavControls;
