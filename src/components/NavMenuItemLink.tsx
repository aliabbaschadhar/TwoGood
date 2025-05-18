import React from 'react';
import { motion } from 'framer-motion';
import { headerAnimation } from '../assets/images/';

function NavMenuItemLink({ link, index, isHovered, onHoverStart, onHoverEnd, onClick }) {
    return (
        <motion.div
            className="relative"
            onClick={onClick}
            onHoverStart={() => onHoverStart(index)}
            onHoverEnd={onHoverEnd}
        >
            <motion.a
                href="#"
                className="font-futura text-[53px] md:text-[58px] lg:text-[65px] font-extrabold transition-all duration-300 ease-in-out flex items-center -mb-8 tracking-tight relative z-10"
                whileHover={{ scale: 1.05, x: 10 }}
                transition={{ duration: 0.01 }}
            >
                <span className="mr-auto">{link}</span>
            </motion.a>

            {isHovered && (
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
    );
}

export default NavMenuItemLink;
