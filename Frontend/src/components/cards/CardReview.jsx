import React from 'react'

function CardReview() {
    return (
        <div className='w-2/12 p-2'>
            <div className='flex items-center gap-4'>
                <div className='bg-red-500 w-8 h-8 rounded-full'>img</div>
                <div className="">
                    <h5 className="font-bold">Name Name</h5>
                    <span className="text-xs font-bold">our Technologie</span>
                </div>
            </div>
            <div>
                <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, consequuntur.</p>
            </div>
            <div>stars</div>
        </div>
    )
}

export default CardReview