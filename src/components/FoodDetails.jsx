import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { data } from '../data/data'
import { BsFillCartPlusFill } from 'react-icons/bs'
import { BsHeart, BsHeartFill} from 'react-icons/bs'

export const FoodDetails = () => {

  const { id } = useParams()

  const [food, setFood] = useState([]);
  const [favorite, setFavorite] = useState(true);

  useEffect(() => {
    
    if(id){
      setFood(
        data.filter((elem) => elem.id === id)
      )
    }

  }, [id, setFood]);

  return (
    <div className='max-w-[1024px] mx-auto  p-4 '>
    <div className='flex justify-center pt-8'>
        {
          food.map((elem) =>(
            <div className='grid grid-cols-2 relative'>
              <img className='w-80 rounded-tl-xl rounded-br-xl' src={elem.image} alt={elem.name}/>
              {
                favorite 
                ?  
                <BsHeart className='cursor-pointer absolute top-4 left-2 text-red-700 text-xl' onClick={() => setFavorite(!favorite)}/>
                :
                <BsHeartFill className='cursor-pointer absolute top-4 left-2 text-red-700 text-xl' onClick={() => setFavorite(!favorite)}/>
              }
             
              <div className=' flex flex-col justify-between bg-gray-200 rounded-tr-xl rounded-br-xl p-2'>
                <h2 className='text-2xl font-semibold underline '>{elem.name}</h2>
                <p className='font-semibold '>Category: <span className='bg-orange-600 p-1 rounded-xl text-white '>{elem.category}</span></p>
                <p className='font-semibold '>Price: <span className='bg-orange-600 p-1 rounded-xl text-white '>{elem.price}</span></p>
                <button className='bg-black text-white flex items-center gap-2 justify-center hover:bg-gray-900 transition-colors'><BsFillCartPlusFill/> Add Card</button>
              </div>
            </div>
          ))
        }
    </div>
    </div>
  )
}
