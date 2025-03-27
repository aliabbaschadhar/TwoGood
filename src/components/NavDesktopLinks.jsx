import React from 'react';

function NavDesktopLinks({ navLinks, isDarkMode }) {
    return (
        <div className="hidden lg:flex items-center justify-center gap-8 uppercase text-xs font-social-mono font-semibold absolute left-1/2 transform -translate-x-1/2">
            {navLinks.map((link, index) => (
                <a
                    key={index}
                    href="#"
                    className="relative group py-1 transition-all duration-75 ease-in-out"
                >
                    <span className="transition-all duration-300 ease-in-out group-hover:text-gray-500">{link}</span>
                    <span className={`absolute bottom-0 left-0 w-0 h-[1.5px] ${isDarkMode ? "bg-zinc-200" : "bg-black"} transition-all duration-300 ease-in-out group-hover:w-full`}></span>
                </a>
            ))}
        </div>
    );
}

export default NavDesktopLinks;
