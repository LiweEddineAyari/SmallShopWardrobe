import { useEffect, useState } from 'react';
import './App.css';
import { useFetch } from './functions/useFetch';
import Products from './components/products';
import Categories from './components/Categories';
import StoreContext from './functions/storeContext';
import Card from './components/card';

function App() {
  const [filter,setFilter]=useState("/products?populate=*");
  const [selectedCategories,setSelectedCategories]=useState([])
  return (
    <>
     <Card/>
      <div style={{height:400}}></div>
     <StoreContext.Provider value={{filter,setFilter,selectedCategories,setSelectedCategories}}>
        <Categories/>
        <Products/>
     </StoreContext.Provider>
    </>
  );
}

export default App;
