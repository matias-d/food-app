import React from 'react'
import { categories } from '../data/data'

export const Category = () => {
  return (
    <div className='max-w-[1640px]  px-4 py-12'> 
        <h1 className='text-orange-600 font-bold text-4xl text-center '>Top Rated Menu Items</h1>
        {/*Categories */}
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4 py-6'>
            {
                categories.map((item) =>(
                <div key={item.id} className='bg-gray-200 rounded-lg p-4 flex justify-between items-center flex-col '>
                    <h2 className='font-bold sm:text-xl text-gray-700 '>{item.name}</h2>
                    <img className='w-20' src={item.image} alt={item.name}/>
                </div>
            ))
            }
        </div>
    </div>
  )
}
