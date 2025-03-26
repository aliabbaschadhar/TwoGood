import React from 'react'

function Button({ text, styles }) {
    return (
        <button
            className={`bg-black text-white px-24 py-8 rounded-full border-2 border-white hover:bg-white hover:text-black uppercase font-helvetica font-bold text-lg mb-12 ${styles}`}
        >
            {text}
        </button >
    )
}

export default Button;