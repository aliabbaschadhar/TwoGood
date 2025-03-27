import React from 'react';

function NavFooterSection({ socialLinks, nittyGrittyLinks, legalLinks }) {
    return (
        <div className='flex items-start justify-between md:gap-40 gap-4 text-nowrap'>
            <div className='flex flex-col gap-4'>
                <h4 className='uppercase text-zinc-600'>Connect with us</h4>
                <div>
                    {socialLinks.map((link, index) => (
                        <a
                            key={index}
                            href="#"
                            className="font-helvetica transition-all duration-300 ease-in-out hover:text-zinc-400 flex items-center"
                        >
                            <span className="mr-auto">{link}</span>
                        </a>
                    ))}
                </div>
            </div>
            <div className='flex flex-col gap-4 '>
                <h4 className='uppercase text-zinc-600'>Nitty Gritty</h4>
                <div>
                    {nittyGrittyLinks.map((link, index) => (
                        <a
                            key={index}
                            href="#"
                            className="font-helvetica transition-all duration-300 ease-in-out hover:text-zinc-400 flex items-center"
                        >
                            <span className="mr-auto">{link}</span>
                        </a>
                    ))}
                </div>
            </div>
            <div className='flex flex-col gap-4'>
                <h4 className='uppercase text-zinc-600'>Legal</h4>
                <div>
                    {legalLinks.map((link, index) => (
                        <a
                            key={index}
                            href="#"
                            className="font-helvetica transition-all duration-300 ease-in-out hover:text-zinc-400 flex items-center"
                        >
                            <span className="mr-auto">{link}</span>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default NavFooterSection;
