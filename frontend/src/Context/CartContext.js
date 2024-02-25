

// import React, { createContext, useContext, useEffect, useReducer } from 'react';
// import { useUserAuth } from '../Context/UserAuthContext';

// const CartContext = createContext();

// const cartReducer = (state, action) => {
//   switch (action.type) {
//     case 'ADD_TO_CART':
//       const { card, price, id, cardId, title, imageUrl, description } = action.payload;

//       const cartProduct = {
//         title: card.title,
//         price: card.price,
//         id: card.cardId,
//         desc: card.description,
//         img: card.imageUrl,
//         added: true,
//       };

//       return {
//         ...state,
//         cart: [...state.cart, cartProduct],
//         total_items: state.total_items + 1,
//       };

//     case 'REMOVE_FROM_CART':
//       const updatedCart = state.cart.filter((item) => item.id !== action.payload);
//       return {
//         ...state,
//         cart: updatedCart,
//         total_items: state.total_items - 1,
//       };

//     case 'SET_CART':
//       return {
//         ...state,
//         cart: action.payload,
//         total_items: action.payload.length,
//       };

//     default:
//       return state;
//   }
// };


// const calculateTotalPrice = (cart) => {
//     return cart.reduce((total, item) => total + item.price, 0);
//   };
  
 
// const CartProvider = ({ children }) => {


//   const getLocalCartData = () => {
//     const storedData = localStorage.getItem('MyCart');
//     return storedData ? JSON.parse(storedData) : [];
//   };

//   const [state, dispatch] = useReducer(cartReducer, {
//     cart: getLocalCartData(),
//     total_items: 0,
//     paymentId: null,
//     orderId: null,
//   });

//   const updateLocalCartData = (cartData) => {
//     localStorage.setItem('MyCart', JSON.stringify(cartData));
//   };

//   useEffect(() => {
   
//       dispatch({ type: 'SET_CART', payload: getLocalCartData() });
    
//   }, []);

//   useEffect(() => {
//     updateLocalCartData(state.cart);
//   }, [state.cart]);

  

//   const addToCart = (card, id, description, price, title, cardId, imageUrl) => {
//     const existingItem = state.cart.find(
//       (item) => item.id === card.id && item.added 
//     );

//     if (existingItem) {
//       // Replace the existing item with the new one
//       const updatedCart = state.cart.map((item) =>
//         item.id === card.id && item.added 
//           ? { ...item, quantity: 1 } // Reset the quantity
//           : item
//       );

//       dispatch({
//         type: 'SET_CART',
//         payload: updatedCart,
//       });
//     } else {
//       // Add the new item to the cart
//       dispatch({
//         type: 'ADD_TO_CART',
//         payload: { description, card, price, cardId, id, title, imageUrl },
//       });
//     }
//   };

//   const removeFromCart = (id) => {
//     dispatch({ type: 'REMOVE_FROM_CART', payload: id });
//   };

//   const total_amount = calculateTotalPrice(state.cart);

//   return (
//     <CartContext.Provider value={{ ...state, addToCart, removeFromCart, total_amount }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// const useCartContext = () => {
//   return useContext(CartContext);
// };


// export { CartProvider, useCartContext };






import {useState,useContext,createContext,useEffect} from 'react'


const CartContext=createContext()

const CartProvider=({children})=>{
    const[cart,setCart]=useState([])

    useEffect(()=>{

      let existingCartItem=localStorage.getItem('cart')
      if(existingCartItem){
        setCart(JSON.parse(existingCartItem))
      }
    },[])


    return(
     <CartContext.Provider value={[cart,setCart]}>
        {children}
     </CartContext.Provider>
    )

}

const useCart=()=>useContext(CartContext)

export{useCart,CartProvider}