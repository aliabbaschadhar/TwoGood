import React from 'react'

function GoodCard({ name, description, image }) {
    return (
        <section className='w-full'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4'></div>
            <div className={`relative rounded-lg p-4 `}>
                <img src={image} alt={name} className='w-full h-auto rounded-lg object-cover' />
                <div className='bg-blue-500 w-44 h-10'>Hello</div>
            </div>
        </section >
    )
}

export default GoodCard