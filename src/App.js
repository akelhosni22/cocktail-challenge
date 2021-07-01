import logo from './logo.svg';
import React,{useState}from 'react'
import { Switch,Route } from 'react-router-dom';
import Cocktaildetails from'./Components/Cocktaildetails'

import './App.css';
import Search from './Components/Search';
import CocktaiList from './Components/CocktaiList';
function App() {
  const [finalSearch, setFinalSearch] = useState('')
  return (
    <div className="App">
       <Search setFinalSearch={setFinalSearch}/>
       <Switch>
        
         <Route
      exact path='/'
     render={(props) => (
      <CocktaiList {...props} finalSearch={finalSearch} />
  )}
/>
    <Route path='/cocktail/:id' component={Cocktaildetails}/>

       </Switch>
      
    
    </div>
  );
}

export default App;
