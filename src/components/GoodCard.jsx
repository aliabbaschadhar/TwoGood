import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion"

function GoodCard({ name, description, image, shopTitle, goodsCardsData, color, color2 }) {
    const { goodsImage1, goodsdesc1, goodsImage2, goodsdesc2 } = goodsCardsData;
    const [isHovered, setIsHovered] = React.useState(false);

    return (
        <section className='w-full'>
            <div className="relative rounded-lg p-4 overflow-hidden">
                <img src={image} alt={name} className='w-full h-auto rounded-lg object-cover' />

                {/* Shop Button */}
                <ShopButton
                    color={color}
                    shopTitle={shopTitle}
                    isHovered={isHovered}
                    setIsHovered={setIsHovered}
                />

                {/* Dropdown Menu */}
                <DropdownMenu
                    isHovered={isHovered}
                    setIsHovered={setIsHovered}
                    goodsImage1={goodsImage1}
                    goodsdesc1={goodsdesc1}
                    goodsImage2={goodsImage2}
                    goodsdesc2={goodsdesc2}
                    color2={color2}
                />
            </div>
        </section>
    );

    function ShopButton({ color, shopTitle, isHovered, setIsHovered }) {
        return (
            <motion.div
                className={`${color || 'bg-blue-500'} w-[70%] flex items-center justify-between h-12 absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2  px-3 cursor-pointer z-10 rounded-full`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                initial={{ x: "-50%", y: "-50%" }}
                animate={{ x: "-50%", y: "-50%" }}
                whileHover={{ scale: 1.03, x: "-50%", y: "-50%" }}
                style={{ transform: "translate(-50%, -50%)" }}
                transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 17
                }}
            >
                <motion.span
                    className='dot w-2 h-2 rounded-full bg-black'
                    animate={isHovered ? { scale: [1, 1.5, 1] } : {}}
                    transition={{ duration: 0.5, repeat: isHovered ? Infinity : 0, repeatDelay: 0.5 }}
                ></motion.span>
                <span className='uppercase font-helvetica text-xs'>Shop</span>
                <h4 className='uppercase font-helvetica text-sm font-semibold'>{shopTitle}</h4>
                <motion.span
                    animate={isHovered ? { x: [0, 5, 0] } : {}}
                    transition={{ duration: 0.5, repeat: isHovered ? Infinity : 0, repeatDelay: 0.5 }}
                >
                    <FaArrowRight />
                </motion.span>
            </motion.div>
        );
    }

    function DropdownMenu({ isHovered, setIsHovered, goodsImage1, goodsdesc1, goodsImage2, goodsdesc2, color2 }) {
        // Fix for color replacement - handle the case when color is undefined
        const bgColor = color2 || 'bg-blue-400';

        return (
            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        className={`w-[70%] h-[39%] ${bgColor} absolute left-1/2 top-[33.33%] mt-2 rounded-b-xl z-0 flex items-center justify-between pt-8 px-4 uppercase shadow-lg`}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        initial={{ opacity: 0, y: 0, x: "-50%" }}
                        animate={{ opacity: 1, y: 0, x: "-50%" }}
                        exit={{ opacity: 0, y: -10, x: "-50%" }}
                        transition={{
                            duration: 0.3,
                            ease: [0.19, 1.0, 0.22, 1.0],
                        }}
                        style={{ transform: "translateX(-50%)" }}
                    >
                        <ProductItem image={goodsImage1} description={goodsdesc1} index={0} />
                        <ProductItem image={goodsImage2} description={goodsdesc2} index={1} />
                    </motion.div>
                )}
            </AnimatePresence>
        );
    }

    function ProductItem({ image, description, index }) {
        return (
            <motion.div
                className='flex flex-col items-center cursor-pointer'
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    delay: index * 0.1,
                    duration: 0.3,
                    ease: "easeOut"
                }}
                whileHover={{ scale: 1.05 }}
            >
                <motion.img
                    src={image}
                    alt={description}
                    className='w-fit h-fit object-contain'
                    whileHover={{ scale: 1.08 }}
                    transition={{ type: "spring", stiffness: 300 }}
                />
                <motion.h4
                    className='text-xs text-center mt-2 font-medium'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 + (index * 0.1) }}
                >
                    {description}
                </motion.h4>
            </motion.div>
        );
    }
}

export default GoodCard