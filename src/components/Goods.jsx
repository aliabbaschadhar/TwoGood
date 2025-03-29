import React from 'react'
import { dexter, Alemais, slider } from "../assets/images/"
import { useState } from 'react';
import { GoodCard } from './';

function Goods() {
    const [isHovered, setIsHovered] = useState(false);
    const goodsData = [
        { name: 'Dexter Kim', description: 'The Course', image: dexter },
        { name: 'Alemais', description: 'Basil', image: Alemais },
        {
            name: 'Slider', description: 'Shampoo', image: slider
        },
    ]
    return (
        <section className='w-full px-4 sm:px-8 '>
            <div className='flex items-center justify-between uppercase font-helvetica'>
                <span>Buy Good </span>
                <span>Do Good</span>
            </div>
            <div className='w-full border-t-2 border-black '>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4'>
                    {goodsData.map((good, index) => (
                        <GoodCard key={index} {...good} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Goods