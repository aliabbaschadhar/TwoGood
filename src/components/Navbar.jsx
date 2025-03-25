import React, { useState } from 'react'
import { CartSvg, TwoGoodSvg } from './'

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);
    // Array of navigation links
    const navLinks = ['Shop', 'Wholesale', 'Catering', 'Donate'];

    return (
        <nav className='w-full lg:p-10 h-[15vh] flex items-center justify-between'>
            <div className='cursor-pointer hover:opacity-80 transition-opacity duration-300'>
                <TwoGoodSvg />
            </div>
            <div className='flex items-center justify-between gap-8 uppercase text-xs font-social-mono font-semibold'>
                {navLinks.map((link, index) => (
                    <a
                        key={index}
                        href="#"
                        className={`hover:scale-110 hover:font-bold transition-colors duration-300`}
                    >
                        {link}
                    </a>
                ))}
                <button className='relative flex flex-col items-center cursor-pointer p-2 rounded-md hover:scale-110 hover:font-bold transition-colors duration-300'
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? (
                        // Cross icon when menu is open
                        <>
                            <span className='block w-6 h-0.5 bg-black transform rotate-45 absolute'></span>
                            <span className='block w-6 h-0.5 bg-black transform -rotate-45 absolute'></span>
                        </>
                    ) : (
                        // Hamburger icon when menu is closed
                        <>
                            <span className='block w-6 h-0.5 bg-black mb-1'></span>
                            <span className='block w-6 h-0.5 bg-black'></span>
                            <span className='block w-6 h-0.5 bg-black mt-1'></span>
                        </>
                    )}
                </button>
                <button
                    onClick={() => setIsCartOpen(!isCartOpen)}
                    className="p-2 hover:scale-110 hover:font-semibold transition-colors duration-300"
                >
                    {isCartOpen ? (
                        // Cross icon for cart when open
                        <div className='relative w-6 h-6'>
                            <span className='block w-6 h-0.5 bg-black transform rotate-45 absolute top-3'></span>
                            <span className='block w-6 h-0.5 bg-black transform -rotate-45 absolute top-3'></span>
                        </div>
                    ) : (
                        // Cart SVG when cart is closed
                        <CartSvg
                            height='24'
                            width='28'
                        />
                    )}
                </button>
            </div>
        </nav>
    )
}

export default Navbar