import React from 'react'
import { useSelector } from 'react-redux'

const OrdersCounter = () => {

    const quantity = useSelector((state) => state.cart)

    return (
        <div className='flex flex-col w-2/5 h-40 p-2 items-center justify-around rounded-lg bg-grey_accent'>
            <h1 className='h-1/3 text-xl text-center text-light_font'>Unprocessed Orders</h1>
            <h2 className='text-6xl text-lighter_font'>40</h2>
        </div>
    )
}
export default OrdersCounter
