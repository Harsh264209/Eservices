import React from 'react';
import style from './style.css'
import { useCart} from '../../Context/CartContext';
import CartNavbar from '../../components/Navbar/CartNavbar'
import { useEffect } from 'react';
import { useNavigate ,Link} from 'react-router-dom';
import paymentSuccessAudio from '../../Images/Phone_pay_audio.mp3';

const Cart = () => {
  const [cart, setCart ] = useCart();
  const filteredCart = cart.filter(item => item !== null);

console.log(cart)
  const totalPrice=()=>{
    try {
      let total=0
      cart?.map((item)=>{
        total=total+item.price
      })
      return total
    } catch (error) {
      
    }
  }


  const removeFromCart = (pid) => {
    try {
      let updatedCart = [...cart];
      // Filter out null items and remove the item by its _id
      updatedCart = updatedCart.filter(item => item !== null && item._id !== pid);
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    } catch (error) {
      console.log(error);
    }
  };
  
  useEffect(() => {
    document.title = "LearnHub-Cart"; // Set title for about page
  }, []);

  const Navigate=useNavigate()

  return (
    <>
    <CartNavbar/>
     <div className='cart-main-container' style={{display:"flex"}}>
      <div className="cart-container">
      <h2 style={{fontSize:"36px",marginTop:'12px',marginBottom:'20px'}}>Shopping Cart</h2>
      <h4>{cart.length} Courses in Cart</h4>
      <hr style={{marginRight:"120px"}}/>
      {cart.length === 0 ? (
        <h4>Your cart is empty.</h4>
      ) : (
        <>
          <div>
            {filteredCart.map((item) => (

item !== null &&(     <div key={item._id} className='cart-card'>
<div style={{display:"flex"}}>
  <img className='cart-img' src={`https://learnhub-eservices.onrender.com/api/course/product-photo/${item._id}`} style={{width:"120px"}} alt="" />
  <div className="div" style={{marginLeft:"10px"}}>
  <p >{item.title}</p>
  <p>4.3⭐⭐⭐⭐</p>
  </div>

</div>
<div className="cart-flex-container" style={{display:"flex", marginRight:"70px",alignItems:"center",marginLeft:"40px"}}>
  
<h4 className='cart-item-price'>₹{item.price}</h4>
<div className="remove-btn-div" >
  <button className='remove-btn' onClick={() => removeFromCart(item._id)}>
  Remove
</button>
  </div>
</div>
</div>)
         
   ))}
             
          </div>
          <hr style={{marginRight:"120px"}} />
        </>
      )}
      </div>

      <div className="cart-total-container">
        <div className="cart-total-card">
        <p>Total:</p>
        <h1 className='total-cart-price'>₹{totalPrice()}</h1> 
        </div>
        <Link to='/checkout'>
        <button className='checkout-btn' >Checkout</button>
        </Link>
      </div>
     
    </div>
    
    </>
   
  );
};

export default Cart;




