import React from 'react'

export const HeadlineCards = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 grid md:grid-cols-3 gap-6'>
         {/* Card */}
        <div className=' relative '>
            {/*Overlay */}
          <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
            <p className='font-bold text-2xl px-2 pt-4'>Sun's Out, BOGO's Out</p>
            <p className='px-2'>Through 8/26</p>
            <button className='border-white bg-white text-black mx-2 absolute bottom-4 hover:tracking-widest transition-all'>Order Now</button>
          </div>
          <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl ' src='https://images.pexels.com/photos/1410236/pexels-photo-1410236.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
        </div>
        
        <div className=' relative'>
            {/*Overlay */}
          <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
            <p className='font-bold text-2xl px-2 pt-4'>New Restaurants</p>
            <p className='px-2'>Added Daily</p>
            <button className='border-white bg-white text-black mx-2 absolute bottom-4 hover:tracking-widest transition-all'>Order Now</button>
          </div>
          <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src='https://images.pexels.com/photos/604969/pexels-photo-604969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
        </div>
        <div className=' relative'>
            {/*Overlay */}
          <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
            <p className='font-bold text-2xl px-2 pt-4'>We Deliver Desserts Too</p>
            <p className='px-2'>Tasty Treats</p>
            <button className='border-white bg-white text-black mx-2 absolute bottom-4 hover:tracking-widest transition-all'>Order Now</button>
          </div>
          <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src='https://images.pexels.com/photos/2641886/pexels-photo-2641886.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
        </div>
    </div>
  )
}
