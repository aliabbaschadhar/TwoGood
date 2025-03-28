import React from 'react'
import { HeroImg } from '../assets/images';


function LandingPage() {
    return (
        <section
            data-scroll-section
            className='flex flex-col mt-16 md:mt-20 px-4 md:px-6'
        >
            <div
                className='flex flex-col pb-6 md:pb-10 relative z-20'>
                {['change', 'the course'].map((text, index) => (
                    <h1 key={index} className='text-[14.5vw] lg:text-[15.5vw] font-futura font-extrabold uppercase leading-none tracking-tight -mb-2 md:-mb-6 lg:-mb-8 text-nowrap overflow-hidden'>{text}</h1>
                ))}
            </div>

            <div
                data-scroll
                data-scroll-speed='0.2'
                className='relative z-10 mb-20 md:mb-28'>
                <img
                    className='w-full'
                    src={HeroImg} alt="founder of company named Alexis" />
            </div>

            <div
                className='w-full text-center mt-10 md:mt-20 flex flex-col gap-3 md:gap-4 pb-12 md:pb-20 z-20'>
                <h4 className='font-futura text-4xl md:text-5xl lg:text-7xl uppercase mb-2 md:mb-4'>Take the Pledge.</h4>
                <p className='font-helvetica text-base md:text-xl text-zinc-700 px-2 md:px-0'>
                    Support and empower women experiencing domestic violence, every day of the year.
                </p>
                <div className='mt-2'>
                    <a
                        href="#"
                        className="font-social-mono uppercase text-xs md:text-sm text-zinc-700 relative inline-block group transition-all duration-300 pb-3 md:pb-4"
                    >
                        <span className="relative z-10 font-semibold">Learn more today.</span>
                        <span className="absolute bottom-0 left-0 w-full h-[1px] bg-black transform origin-right scale-x-100 group-hover:scale-x-0 transition-transform duration-300 ease-in"></span>
                        <span className="absolute bottom-0 left-0 w-full h-[1px] bg-black transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-300 ease-out"></span>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default LandingPage;