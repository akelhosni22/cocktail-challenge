import React,{useState} from 'react'

const Search = ({setFinalSearch}) => {
    const [search, setSearch] = useState('')
    
const handleSubmit=(e)=>{
    e.preventDefault()
    setFinalSearch(search)
    setSearch('')
}


    return (
        <div>
           <form onSubmit={handleSubmit}>
               
               <input type='text' placeholder='search' value={search} onChange={(e)=>setSearch(e.target.value)}></input>
               <button>Search</button>
               
               </form> 
        </div>
    )
}

export default Search
