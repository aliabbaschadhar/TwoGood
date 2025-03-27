import React from 'react';
import { TwoGoodSvg } from './';

function NavLogo({ isMobile }) {
    return (
        <div className='cursor-pointer transform hover:scale-105 transition-all duration-75 ease-in-out z-10'>
            <TwoGoodSvg
                width={isMobile ? "80" : (window.innerWidth < 1280 ? "120" : "140")}
                height={isMobile ? "40" : (window.innerWidth < 1280 ? "60" : "70")}
                className="transition-transform duration-300 ease-in-out"
            />
        </div>
    );
}

export default NavLogo;
