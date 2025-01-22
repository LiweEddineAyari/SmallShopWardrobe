import React, { useState } from 'react';
import './card.css';
import { AiOutlineShoppingCart } from 'react-icons/ai'; // Use 'react-icons/ai' for Ant Design icons
import { useDispatch, useSelector } from 'react-redux';
import { appUrl } from '../vite.config';
import { FaRedoAlt, FaTrash } from "react-icons/fa";
import { removeFromCart,resetCart } from '../redux/cartReducer';


function Card() {

    const [cartlist,setCartlist]=useState(false)
  

    const showCartList = ()=>{
        if(products.length>0)
       cartlist ? setCartlist(false) : setCartlist(true)
    }



    const products=  useSelector(state=>state.cart.products)
    const dispatch=useDispatch()


  return (
    <div className='card'>
             <div className="cart-icon" onClick={showCartList}>
                <AiOutlineShoppingCart />
             </div>
              <div className="cart-badge">{products.length}</div>
              {cartlist
              ?(
                <ul className="cart-list">
                   {
                     products.map(product=>(
                          <li className="cart-item" key={product.id}>
                               <img src={appUrl+product.image} alt="" className="cart-item-image" />
                               <span className="cart-item-title">{product.title}</span>
                               <span className="cart-item-price">{product.price} TND</span>
                                <span className='item-remove'onClick={()=>{dispatch(removeFromCart({
                                    id: product.id,
                                    }))}}><FaTrash/>
                                </span>
                          </li>
                     ))
                   }
                  {
                   cartlist?(<span onClick={()=>dispatch(resetCart())}className='cart-reset'><FaRedoAlt/></span>):""
                  }
               </ul>
              )
               :("")
              }          
    </div>
  );
}

export default Card;
