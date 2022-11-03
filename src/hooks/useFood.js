import React, { useState } from 'react'
import { data } from '../data/data'

export const useFood  = () => {
    
    const [food, setFood] = useState(data);

    const filterFood = (category) =>{
     setFood(
         data.filter((food) =>{
             return food.category === category
         })
     )
    }
 
    const filterPrice = (price) =>{
     setFood(
         data.filter((food) =>{
             return food.price === price
         })
     )
    }

    return { filterFood, filterPrice, food, setFood }

}