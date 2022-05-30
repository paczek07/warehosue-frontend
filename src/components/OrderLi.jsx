import React from 'react'
import { Link } from 'react-router-dom'

const OrderLi = () => {
  return (
    <li>
      <Link to='/pickup'>
        <div className='flex justify-between p-4 bg-white_bg text-sm font-light tracking-wide text-light_font hover:bg-dark_purple hover:text-white_bg'>
          <h1 className='overflow-hidden'>id: 324yyas87y213ugy</h1>
          <h1> items: 11</h1>
          <h1>Date: 22/05/2022</h1>
        </div>
      </Link>

    </li>
  )
}

export default OrderLi