import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './';
import Marquee from "react-fast-marquee";

function NavCartOverlay({ isOpen, marqueeTextFirst, marqueeTextSecond }) {
    if (!isOpen) return null;

    return (
        <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className='fixed top-[70px] sm:top-[83px] lg:top-[15vh] left-0 right-0 bg-black text-white z-40 shadow-2xl overflow-y-auto flex flex-col items-center pt-20 lg:pt-20'
            onClick={(e) => e.stopPropagation()}
        >
            <h5 className='text-2xl mb-4 font-helvetica'>
                Your cart is empty.
            </h5>
            <Button
                text="See all good things"
                styles=""
            />
            <div className="w-full mt-8">
                <Marquee
                    speed={100}
                    style={{ paddingTop: '8px', borderTop: '2px solid white' }}
                >
                    {marqueeTextFirst.map((text, index) => (
                        <span key={index} className='text-7xl md:text-8xl font-futura font-extrabold uppercase mr-16'>{text}</span>
                    ))}
                </Marquee>
                <Marquee
                    speed={100}
                    style={{ paddingTop: '8px', borderTop: '2px solid white' }}
                    direction='right'
                >
                    {marqueeTextSecond.map((text, index) => (
                        <span key={index} className='text-7xl md:text-8xl font-futura font-extrabold uppercase mr-16'>{text}</span>
                    ))}
                </Marquee>
            </div>
        </motion.div>
    );
}

export default NavCartOverlay;
