import React from 'react'

function CardPhoto({ text, price, icon, img }) {
    return (

        <div className="relative">
            <div className="border border-gray-400 border-spacing-2 bg-red-500 rounded-full w-20 h-20 flex justify-center items-center absolute -top-4 -left-12 ">
                
                <img src={img} alt='photo' className='w-full  rounded-full  ' />
            </div>
            <div className='flex relative  max-w-fit rounded-md rounded-l-3xl  shadow-shadow shadow-top-lg shadow-bottom-lg shadow-2xl overflow-hidden'>

                <div className='px-12 gap-2 py-3' >
                    <h5 className='font-semibold'>{text}</h5>
                    <p className='text-primary text-l font-semibold'>{price}</p>
                </div>
                <div className='self-end flex items-center justify-center bg-primary rounded-full h-10 w-10 relative -bottom-2 -right-2 '>
                    <span className='text-white'>{icon}</span>
                </div>
            </div>
        </div>
    )
}

export default CardPhoto