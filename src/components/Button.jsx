import React from 'react'

function Button({ text, styles }) {
    return (
        <button
            className={`bg-black text-white px-20 py-7 sm:px-20 sm:py-6 md:px-14 md:py-5 lg:px-20 lg:py-6 rounded-full border-2 border-white hover:bg-white hover:text-black uppercase font-helvetica font-bold text-sm sm:text-sm md:text-base mb-2 sm:mb-4 md:mb-6 lg:mb-8 transition-colors duration-300 ${styles}`}
        >
            {text}
        </button>
    )
}

export default Button;