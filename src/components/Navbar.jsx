import React, { useEffect, useState } from 'react';
import {
    NavLogo,
    NavDesktopLinks,
    NavControls,
    NavMenuOverlay,
    NavCartOverlay
} from './';

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
    const marqueeTextFirst = Array(20).fill('cart');
    const marqueeTextSecond = Array(20).fill('empty');

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

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        setIsCartOpen(false);
    };

    const toggleCart = () => {
        setIsCartOpen(!isCartOpen);
        setIsMenuOpen(false);
    };

    const isDarkMode = isMenuOpen || isCartOpen;

    return (
        <nav className={`w-full p-4 sm:p-6 lg:p-10 h-auto min-h-[70px] lg:h-[15vh] flex items-center justify-between relative z-999 ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
            {/* Left Section - Logo */}
            <NavLogo isMobile={isMobile} />

            {/* Center Section - Nav Links (Desktop) */}
            <NavDesktopLinks
                navLinks={navLinks}
                isDarkMode={isDarkMode}
            />

            {/* Right Section - Icons */}
            <NavControls
                isMobile={isMobile}
                isMenuOpen={isMenuOpen}
                isCartOpen={isCartOpen}
                toggleMenu={toggleMenu}
                toggleCart={toggleCart}
            />

            {/* Menu Overlay */}
            <NavMenuOverlay
                isOpen={isMenuOpen}
                links={overLayLinks}
                socialLinks={socialLinks}
                nittyGrittyLinks={nittyGrittyLinks}
                legalLinks={legalLinks}
                hoveredLink={hoveredLink}
                setHoveredLink={setHoveredLink}
                onClose={() => setIsMenuOpen(false)}
            />

            {/* Cart Overlay */}
            <NavCartOverlay
                isOpen={isCartOpen}
                marqueeTextFirst={marqueeTextFirst}
                marqueeTextSecond={marqueeTextSecond}
            />
        </nav>
    );
}

export default Navbar;

