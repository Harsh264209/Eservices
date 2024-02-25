
import style from './style.css'
import React from 'react';
// import { useCartContext } from '../../Context/CartContext';
import CheckoutNavbar from '../../components/Navbar/CheckoutNavbar';
// import style from './style.css';
import {useNavigate} from 'react-router-dom'

const OrderSuccess = () => {
  // const { cart, total_amount, paymentId, orderId } = useCartContext();

  const Navigate=useNavigate()

  return (
    <div className='ordersuccess-main-container' style={{backgroundColor:"" , width:"100vw", height:"100vh"}}>
      <CheckoutNavbar />
      <div className="ordersuccess-container" >
        <div className="ordersuccess-card">
          {/* <h1>✅</h1> */}
          <img style={{width:"300px"}} src="https://img.freepik.com/free-vector/messenger-concept-illustration_114360-6564.jpg?size=626&ext=jpg&ga=GA1.1.537376815.1669047175&semt=ais" alt="" />
   
        <div className="ordersuccess-details">
        <h2 className="ordersuccess-heading">Thank you for your purchase!</h2>
          <p>
             Your order has been placed successfully.
            
            
          </p> 
          </div>
          <div className="order-btn-div">
            <button onClick={()=>Navigate('/dashboard/user')} className='order-btn'>VIEW ORDER</button>
            <button onClick={()=>Navigate('/explore')} className='courses-btn'>EXPLORE OTHER COURSES</button>
          </div>
         
         
      
        </div>
       
      </div>
    </div>
  );
};

export default OrderSuccess;
