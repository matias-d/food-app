
import { useFood } from '../hooks/useFood'
import { data } from '../data/data'
import { FoodElement } from './FoodElement'
export const Food = () => {

  const {food, filterFood,filterPrice, setFood} =  useFood()

  return (
    <div className='max-w-[1640px] mx-auto px-4 py-12 '>
        <h1 className='text-orange-600 font-bold text-4xl text-center mb-8' >Foods</h1>
        {/*Filter Row */}
        <div className='flex flex-col lg:flex-row justify-between gap-3 lg:gap-0'>
            {/*Filter Type */}
           <div >
                <p className='font-bold text-gray-700'>Filter Type</p>
                <div className='flex flex justify-between lg:gap-2 flex-wrap mt-2'>
                    <button className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white transition-colors' onClick={() => setFood(data)}>All</button>
                    <button className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white transition-colors' onClick={() => filterFood('burger')}>Burgers</button>
                    <button className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white transition-colors' onClick={() => filterFood('pizza')}>Pizza</button>
                    <button className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white transition-colors' onClick={() => filterFood('salad')}>Salads</button>
                    <button className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white transition-colors' onClick={() => filterFood('chicken')}>Chicken</button>
                </div>
           </div>
           {/*Filter Price */}
           <div>
            <p className='font-bold text-gray-700'>Filter Price</p>
            <div className='flex flex justify-between flex-wrap lg:gap-2 mt-2'>
                <button className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white transition-colors' onClick={() => filterPrice('$')}>$</button>
                <button className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white transition-colors' onClick={() => filterPrice('$$')}>$$</button>
                <button className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white transition-colors' onClick={() => filterPrice('$$$')}>$$$</button>
                <button className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white transition-colors' onClick={() => filterPrice('$$$$')}>$$$$$</button>
            </div>
           </div>
        </div>

        {/*Display foods */}
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-6'>
            {
                food.map((elem) => (
                    <FoodElement  key={elem.id} elem={elem}/>
                ))
            }
        </div>
    </div>
  )
}
