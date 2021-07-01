import React,{useEffect,useState} from 'react'
import axios from 'axios'

import Cocktail from './Cocktail';


const CocktaiList = ({finalSearch}) => {
    const [cocktails, setCocktails] = useState([]);

useEffect(() => {
    axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${finalSearch}`)
    .then((res)=>setCocktails(res.data.drinks))
    .catch((err)=>console.log(err))
}, [finalSearch])

console.log(cocktails)

    return (
        <div style={{display:'flex', flexWrap:'wrap', justifyContent:'space-around'} }>
            {
                cocktails.map((el)=><Cocktail key={el.idDrink} cocktail={el}/>)
            }
        </div>
    )
}

export default CocktaiList
