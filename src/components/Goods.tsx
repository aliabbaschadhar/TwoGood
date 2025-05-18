import React from 'react'
import { dexter, Alemais, slider, course, butter, alemais, bag, bagEnvelope, handWash } from "../assets/images/"
import { GoodCard } from './';

function Goods() {
    const goodsData = [
        {
            name: 'Dexter Kim',
            image: dexter,
            shopTitle: "Pantry",
            description: 'The Course',
            goodsCardsData: {
                goodsImage1: course,
                goodsdesc1: "Beyond the rocky road mega block",
                goodsImage2: butter,
                goodsdesc2: "Change the course cookbook",
            },
            color: "bg-[#DCC0B4]",
            color2: "bg-[#f3e9e5]"
        },
        {
            name: 'Alemais',
            image: Alemais,
            shopTitle: 'Alemais',
            description: 'Basil',
            goodsCardsData: {
                goodsImage1: bag,
                goodsdesc1: "Almais cook in colour appron",
                goodsImage2: bagEnvelope,
                goodsdesc2: "Almais food is love lunch set"
            },
            color: "bg-[#8aaad6]",
            color2: "bg-[#edf3fb]"
        },
        {
            name: 'Slider',
            image: slider,
            shopTitle: "Soaps for hope",
            description: 'Shampoo',
            goodsCardsData: {
                goodsImage1: handWash,
                goodsdesc1: "Cleanse and nourish hand wash",
                goodsImage2: handWash,
                goodsdesc2: "Cleanse and nourish body wash"
            },
            color: "bg-white",
            color2: "bg-zinc-200"
        },
    ]

    return (
        <section className='w-full px-4 sm:px-8 '>
            <div className='flex items-center justify-between uppercase font-helvetica'>
                <span>Buy Good </span>
                <span>Do Good</span>
            </div>
            <div className='w-full border-t-2 border-black '>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  mt-4'>
                    {goodsData.map((good, index) => (
                        <GoodCard key={index} {...good} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Goods