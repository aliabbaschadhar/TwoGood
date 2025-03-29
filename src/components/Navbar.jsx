import React, { useEffect, useState } from 'react';
import { motion, useMotionValueEvent, useScroll } from 'motion/react';
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
    const { scrollY } = useScroll();

    // Array of navigation links
    const navLinks = ['Shop', 'Wholesale', 'Catering', 'Donate'];
    const overLayLinks = ['Shop', 'Wholesale', 'Catering', 'impact', 'About', 'Contact', 'donate', 'sign in', 'Manage Account'];
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

    // Disable scrolling when overlays are open
    useEffect(() => {
        if (isMenuOpen || isCartOpen) {
            // Get the scroll container used by Locomotive Scroll
            const scrollContainer = document.querySelector('[data-scroll-container]');
            if (scrollContainer) {
                // Add a class that we can use to control scrolling
                scrollContainer.classList.add('no-scroll');
                document.body.style.overflow = 'hidden';

                // Find any active instance of Locomotive Scroll
                const locomotiveInstance = window.locomotiveScroll;
                if (locomotiveInstance) {
                    locomotiveInstance.stop();
                }
            }
        } else {
            // Re-enable scrolling when overlays are closed
            const scrollContainer = document.querySelector('[data-scroll-container]');
            if (scrollContainer) {
                scrollContainer.classList.remove('no-scroll');
                document.body.style.overflow = '';

                // Restart Locomotive Scroll if it exists
                const locomotiveInstance = window.locomotiveScroll;
                if (locomotiveInstance) {
                    locomotiveInstance.start();
                }
            }
        }

        return () => {
            document.body.style.overflow = '';
            const scrollContainer = document.querySelector('[data-scroll-container]');
            if (scrollContainer) {
                scrollContainer.classList.remove('no-scroll');
            }
        };
    }, [isMenuOpen, isCartOpen]);

    // Swap logo
    useMotionValueEvent(scrollY, 'change', () => {
        //TODO:
    });

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
        <nav className={`w-full p-2 sm:p-4 lg:p-6 h-auto min-h-[70px] lg:h-[15vh] flex items-center justify-between relative ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'} z-40`}>
            {/* Left Section - Logo */}
            <NavLogo isMobile={isMobile} />

            {/* Center Section - Nav Links (Desktop) */}
            <NavDesktopLinks
                navLinks={navLinks}
                isDarkMode={isDarkMode}
            />

            {/* Right Section - Icons (invisible placeholder) */}
            <div className="invisible">
                <NavControls
                    isMobile={isMobile}
                    isMenuOpen={isMenuOpen}
                    isCartOpen={isCartOpen}
                    toggleMenu={toggleMenu}
                    toggleCart={toggleCart}
                />
            </div>

            {/* Fixed Controls */}
            <div className="fixed top-4 right-4 z-50">
                <NavControls
                    isMobile={isMobile}
                    isMenuOpen={isMenuOpen}
                    isCartOpen={isCartOpen}
                    toggleMenu={toggleMenu}
                    toggleCart={toggleCart}
                />
            </div>

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

