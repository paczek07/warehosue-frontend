import React from 'react'
import OrderLi from '../components/OrderLi'

const Home = () => {
    return (
        <div className=''>
            <div className='flex justify-between py-4 mx-5'>
                <h1 className='text-lg text-dark_purple font-medium tracking-wide'>Welcome, username</h1>
                <button className='text-sm text-light_font tracking-wide font-light '>Logout</button>
            </div>
            <div className=''>
                {/* Order cubes */}
                <div className='flex justify-between mx-5 mb-4 py-3'>
                    <div className='flex flex-col w-2/5 h-40 p-2 items-center justify-around rounded-lg bg-grey_accent'>
                        <h1 className='h-1/3 text-xl text-center text-light_font'>Unprocessed Orders</h1>
                        <h2 className='text-6xl text-lighter_font'>40</h2>
                    </div>
                    <div className='flex flex-col w-2/5 h-40 p-2 items-center justify-around rounded-lg bg-grey_accent'>
                        <h1 className='h-1/3 text-xl text-center text-light_font'>Shipped Orders</h1>
                        <h2 className='text-6xl text-lighter_font'>40</h2>
                    </div>
                </div>
                {/* Orders POSSIBLE FAILURE ON MX-5 for biegger screens L-24*/}
                <div className='flex flex-col rounded-lg max-h-96 mx-5 mb-8 px-4 py-6 bg-grey_accent overflow-hidden'>
                    <h1 className='text-3xl font-light text-light_font px-1'>Orders</h1>
                    <div className='flex justify-around self-end text-sm text-light_font w-44 mb-2'>
                        <button>all</button>
                        <button>Unprocessed</button>
                        <button>Shipped</button>
                    </div>
                    <div className='px-1 overflow-auto overflow-x-hidden'>
                        <ul className='grid grid-cols-1 gap-2'>
                            <OrderLi />
                            <OrderLi />
                            <OrderLi />
                            <OrderLi />
                        </ul>
                    </div>
                </div>
                {/* Search  POSSIBLE FAILURE ON MX-5 for biegger screens L-41*/}
                <div className='bg-grey_accent px-5 py-6 mx-5 rounded-lg'>
                    <h1 className='text-lighter_font text-3xl font-light tracking-wide mb-5'>Search</h1>
                    <h1 className='text-lighter_font mb-1'>Result</h1>
                    <p className='text-light_font mb-5'>
                        Order id: asdasdiuhew213d<br/>
                        Customer: Durlock S.A<br/>
                        Delivery Address: Av. Corrientes 327, 3rd Floor,Buenos Aires - C1043AAD,ARGENTINA<br/>
                        Invoice Address: Av. Corrientes 327, 3rd Floor,Buenos Aires - C1043AAD,ARGENTINA<br/>
                        Sales Representative: Kim Berner<br/>
                        Comment: Ship ASAP<br/>
                        Total price: 371.82<br/>
                    </p>
                    <div className=''>
                        <form action="" className='flex flex-col items-center p-3 '>
                            <input type="text" name="scriteria" id="scriteria" placeholder="id, customer" className='text-center font-normal text-sm tracking-widest py-1 mb-3 bg-white_bg rounded-sm' />
                            <button className="rounded-sm w-40 py-1 tracking-widest font-light bg-main_purple text-grey_accent" type="submit">
                                SEARCH
                            </button>
                        </form>
                    </div>


                </div>

            </div>
        </div>
    )
}
export default Home