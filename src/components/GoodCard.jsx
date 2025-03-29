import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
export default function GoodCard({ name, image, shopTitle, goodsCardsData, color, color2 }) {
    const { goodsImage1, goodsdesc1, goodsImage2, goodsdesc2 } = goodsCardsData;
    const [isHovered, setIsHovered] = React.useState(false);

    return (
        <section data-scroll-section className='w-full'>
            <div className="relative rounded-lg p-4 overflow-hidden">
                <img src={image} alt={name} className='w-full h-auto rounded-lg object-cover' />

                {/* Combined Shop Button and Dropdown Menu container */}
                <div
                    data-scroll
                    data-scroll-speed='0.3'
                    className="absolute left-0 right-0 top-1/3 mx-auto"
                    style={{ width: '70%' }}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <div className="relative">
                        <ShopButton
                            color={color}
                            shopTitle={shopTitle}
                            isHovered={isHovered}
                        />

                        <DropdownMenu
                            isHovered={isHovered}
                            goodsImage1={goodsImage1}
                            goodsdesc1={goodsdesc1}
                            goodsImage2={goodsImage2}
                            goodsdesc2={goodsdesc2}
                            color2={color2}
                        />
                    </div>
                </div>
            </div>
        </section>
    );

    function ShopButton({ color, shopTitle, isHovered }) {
        return (
            <div
                className={`${color || 'bg-blue-500'} w-full flex items-center justify-between h-12 px-3 cursor-pointer z-10 rounded-full`}
                style={{
                    transform: "translateY(-50%)",
                    transition: "transform 0.3s ease"
                }}
            >
                <span
                    className={`dot w-2 h-2 rounded-full bg-black ${isHovered ? 'animate-pulse' : ''}`}
                ></span>
                <span className='uppercase font-helvetica text-xs'>Shop</span>
                <h4 className='uppercase font-helvetica text-sm font-semibold'>{shopTitle}</h4>
                <span className={`transition-transform duration-500 ${isHovered ? 'translate-x-1' : ''}`}>
                    <FaArrowRight />
                </span>
            </div>
        );
    }
}
function DropdownMenu({ isHovered, goodsImage1, goodsdesc1, goodsImage2, goodsdesc2, color2 }) {
    const bgColor = color2 || 'bg-blue-400';

    return (
        <div
            className={`w-full ${bgColor} rounded-b-xl rounded-t-xl z-0 flex items-center justify-between pt-8 px-4 uppercase shadow-lg transition-all duration-300 ${isHovered ? 'h-[45%] opacity-100' : 'h-0 opacity-0 overflow-hidden'}`}
            style={{
                marginTop: "-40px",
                position: "relative",
                zIndex: -1
            }}
        >
            {isHovered && (
                <>
                    <ProductItem image={goodsImage1} description={goodsdesc1} index={0} />
                    <ProductItem image={goodsImage2} description={goodsdesc2} index={1} />
                </>
            )}
        </div>
    );
}

function ProductItem({ image, description, index }) {
    return (
        <div className={`flex flex-col items-center ${index === 0 ? 'mr-4' : 'ml-4'}`}>
            <img src={image} alt={description} className="w-24 h-24 object-cover rounded-lg mb-2" />
            <p className="text-xs font-helvetica text-center">{description}</p>
        </div>
    );
}
