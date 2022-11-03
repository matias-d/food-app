import React from 'react'
import { Link } from 'react-router-dom'

export const FoodElement = ({elem}) => {
  return (
    <div className='border shadow-lg hover:scale-105 transition-transform pb-4'>
        <Link to={`/food/${elem.id}`}>
            <img src={elem.image} alt={elem.name} className='w-full h-[200px] object-cover rounded-t-lg'/>
            <div className='flex justify-between px-2 py-4'>
                <p className='font-bold text-gray-700'>{elem.name}</p>
                <p>
                    <span className='bg-orange-500 text-white p-1 rounded-full'>{elem.price}</span>
                </p>
            </div>
        </Link>
    </div>
  )
}
