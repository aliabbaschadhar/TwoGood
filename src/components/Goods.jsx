import React from 'react'
import { dexter, alemais, slider } from "../assets/images/"
import { useState } from 'react';

function Goods() {
    const [isHovered, setIsHovered] = useState(false);
    const goodsData = [
        { name: 'Dexter Kim', description: 'The Course', image: dexter },
        { name: 'Alemais', description: 'Basil', image: alemais },
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
                        <div key={index} className='relative'>
                            <img src={good.image} alt={good.name} className='w-full h-full object-cover' />
                            
                            <div className='absolute left-[20%] top-1/2 bottom-1/2 bg-blue-400 w-[20vw] h-12 rounded-full '></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Goods