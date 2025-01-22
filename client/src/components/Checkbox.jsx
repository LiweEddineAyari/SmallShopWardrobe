import React, { useEffect, useState } from 'react'
import { appUrl } from '../vite.config';
import './checkbox.css'
import StoreContext from '../functions/storeContext';
import { useContext } from 'react';
import qs from 'qs'
import { apiUrl } from '../vite.config';

function Checkbox({category}) {

  const {setFilter,selectedCategories,setSelectedCategories} = useContext(StoreContext)
 
  const handleFilterCategory=(e)=>{
  
    const selectedID=e.target.dataset.category
    const isChecked=e.target.checked 
  
      setSelectedCategories(selectedCategories =>{
        if(isChecked)  return [...selectedCategories,selectedID]
        return selectedCategories.filter(id=> id !== selectedID)
      })
  }
 
  useEffect(()=>{
    const query=qs.stringify({
      filters:{
       categories:{
           id:{
             $in:selectedCategories
           }
       }
      }
   })

    setFilter(apiUrl+"/products?populate=*&"+query)
  },[selectedCategories])


  return (
      <div className='flex'>
        <label className="toggler-wrapper style-1">
          <input data-category={category.id} type="checkbox" onChange={handleFilterCategory}/>
          <div className="toggler-slider">
            <div className="toggler-knob"></div>
          </div>
        </label>
        <div className="badge">{category.attributes.title}</div>
      </div>
  )
}

export default Checkbox

/*        
<h2>{category.attributes.title}</h2>
        <div>{category.attributes.description}</div>
        <img src={appUrl+category.attributes.image.data.attributes.url} alt="" srcset="" /> */