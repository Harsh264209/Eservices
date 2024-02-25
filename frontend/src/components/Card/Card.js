
import React from 'react';
import { useState,useEffect } from 'react';
import { useCart } from '../../Context/CartContext';
import { useNavigate } from 'react-router-dom';
import style from './style.css';
import { ToastContainer, toast } from 'react-toastify'; // Import ToastContainer and toast
import 'react-toastify/dist/ReactToastify.css';

const Card = ({title,description,price,imageUrl,card,rating}) => {
  const [ cart,setCart ] = useCart();
  const navigate = useNavigate();

  

  return (
    <div>
      <div className="card">
        <img src={imageUrl} className="card-img" alt={title} />

        <div className="card-text-container">
        <h3 className="card-title">{title}</h3>
        <p className='card-rating'>{rating}⭐</p>
        <p className="card-desc">{description}</p>
        <div className="flex-container">
          <h4 className="card-price">Rs.{price}</h4>
          <button className='cart-btn' onClick={()=>{setCart([...cart,card])
            localStorage.setItem('cart',JSON.stringify([...cart,card]))
            toast.success("Item Added To cart")
          }} >
            Add To Cart
          </button>
        </div>
        </div>
      
      </div>
    </div>
  );
};

export default Card;



