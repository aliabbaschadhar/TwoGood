import React from 'react';
import { motion } from 'framer-motion';
import { NavMenuItemLink, NavFooterSection } from './';

function NavMenuOverlay({ isOpen, links, socialLinks, nittyGrittyLinks, legalLinks, hoveredLink, setHoveredLink, onClose }) {
    if (!isOpen) return null;

    return (
        <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className='fixed top-[70px] sm:top-[80px] lg:top-[15vh] left-0 right-0 bottom-0 bg-black text-white z-10 flex flex-col overflow-y-auto'
        >
            <div className='pt-24 px-6 flex-grow flex flex-col lg:flex-row-reverse lg:items-end lg:justify-between'>
                <div className='flex flex-col uppercase items-end'>
                    {links.map((link, index) => (
                        <NavMenuItemLink
                            key={index}
                            link={link}
                            index={index}
                            isHovered={hoveredLink === index}
                            onHoverStart={setHoveredLink}
                            onHoverEnd={() => setHoveredLink(null)}
                            onClick={onClose}
                        />
                    ))}
                </div>
                <div className="lg:hidden h-[1px] w-full bg-zinc-400 my-10"></div>
                <NavFooterSection
                    socialLinks={socialLinks}
                    nittyGrittyLinks={nittyGrittyLinks}
                    legalLinks={legalLinks}
                />
            </div>
        </motion.div>
    );
}

export default NavMenuOverlay;
