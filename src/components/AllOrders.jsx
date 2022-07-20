import React from 'react'

const AllOrders = () => {
    return (
        <div className='flex flex-col rounded-lg h-full mx-5 px-4 py-6 bg-grey_accent overflow-hidden'>
            <h1 className='text-3xl font-light text-light_font px-1'>Orders</h1>
            <div className='flex justify-around text-sm self-end  text-light_font w-44 mb-4'>
                <button>all</button>
                <button>Unprocessed</button>
                <button>Shipped</button>
            </div>
            <div className=' overflow-auto overflow-x-hidden'>
                <ul className='grid grid-cols-1 gap-2'>
                    <OrderLi />
                    <OrderLi />
                    <OrderLi />
                    <OrderLi />
                </ul>
            </div>
        </div>
    )
}

export default AllOrders