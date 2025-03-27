import React from 'react';
import { OriginalLogo, TwoGoodSvg } from './';

function NavLogo({ isMobile }) {
    const [scrolled, setScrolled] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 0;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [scrolled]);

    return (
        <div className='cursor-pointer transform hover:scale-105 transition-all duration-75 ease-in-out z-10'>
            {!scrolled ? (
                <TwoGoodSvg
                    width={isMobile ? "80" : (window.innerWidth < 1280 ? "120" : "140")}
                    height={isMobile ? "40" : (window.innerWidth < 1280 ? "60" : "70")}
                    className="transition-transform duration-300 ease-in-out"
                />
            ) : (
                <OriginalLogo />
            )}
        </div>
    );
}

export default NavLogo;
