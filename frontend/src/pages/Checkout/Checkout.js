

import React, { useEffect, useState } from 'react';
import { useCart } from '../../Context/CartContext';
import CheckoutNavbar from '../../components/Navbar/CheckoutNavbar';
import { useNavigate } from 'react-router-dom';
import ReactAudioPlayer from 'react-audio-player';
import style from './style.css'
import {useUserAuth} from '../../Context/UserAuthContext'

const Checkout = () => {
    const [cart,setCart] = useCart();
    const{auth}=useUserAuth()
    const [orderId, setOrderId] = useState(null);
    const Navigate = useNavigate();

    const totalPrice = () => {
        let total = 0;
        cart.forEach((item) => {
            total += item.price;
        });
        return total;
    };


    const handlePaymentSuccess = (paymentId) => {
        console.log('Payment successful. Payment ID:', paymentId);
        Navigate('/order-success');
              setCart([]);
              localStorage.removeItem('cart');
    };

    const handlePaymentError = (error) => {
        console.error('Payment failed:', error);
    }

    const openRazorpayCheckout = async () => {
        try {
            const reducedCart = cart.map(({ _id, title, price }) => ({ _id, title, price }));

            if (!auth?.token) {
                Navigate('/login');
                return;
            }
            
            const response = await fetch('https://learnhub-eservices.onrender.com/api/course/razorpay/payment', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': auth?.token
                },
                body: JSON.stringify({
                    amount: totalPrice() * 100,
                    currency: 'INR',
                    cart:reducedCart,
                }),
            });
    
            if (!response.ok) {
                throw new Error('Failed to generate order');
            }
    
            const data = await response.json();
            console.log(data)
            setOrderId(data.orderDetails.payment.id);
    
            const options = {
                key: 'rzp_test_Esl49gVwiFX6Sj',
                amount: totalPrice() * 100,
                currency: 'INR',
                name: 'LearnHub',
                description: 'Courses',
                order_id: data.orderDetails.payment.id,
                handler: (response) => {
                    handlePaymentSuccess(response.razorpay_payment_id);
                },
                prefill: {
                    name:auth.user.username,
                    email:auth.user.email,
                    contact: '1234567890',
                },
                theme: {
                    color: '#F37254',
                },
                modal: {
                    ondismiss: () => {
                        handlePaymentError('User closed the Razorpay modal');
                    },
                },
            };
    
            const rzp = new window.Razorpay(options);
            rzp.open();
        } catch (error) {
            console.error('Error generating order:', error);
        }
    };
    

    return (
        <>
            <CheckoutNavbar />
            <div className='checkout-main-container'>
                <div className="checkout-card">
                    <h2 className='checkout-heading'>Checkout</h2>
                    <div>
                        <h2 className=''>Order details</h2>
                        <div>
                            {cart.map((item) => (
                                <div key={item.id} className='order-card'>
                                    <div className="div" style={{ display: "flex" }}>
                                        <img src={`https://learnhub-eservices.onrender.com/api/course/product-photo/${item._id}`} className='checkout-img' alt="" />
                                        <p style={{ marginLeft: "10px" }}>{item.title}</p>
                                    </div>
                                    <p style={{ marginRight: "120px" }}>₹{item.price}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="summary-container">
                    <div className="summary-card">
                        <h2>Summary</h2>
                        <div className="price-container">
                            <p>Original price:</p>
                            <p>₹{totalPrice()}</p>
                        </div>
                        <hr />
                        <div className="price-container">
                            <h4 >Total:</h4>
                            <p>₹{totalPrice()}</p>
                        </div>
                        <button className='payment-btn' onClick={openRazorpayCheckout}>Proceed to Pay</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Checkout;




// import React, { useEffect, useState } from 'react';
// import { useCart } from '../../Context/CartContext';
// import CheckoutNavbar from '../../components/Navbar/CheckoutNavbar';
// import { useNavigate } from 'react-router-dom';
// import ReactAudioPlayer from 'react-audio-player';
// import style from './style.css'
// import { useUserAuth } from '../../Context/UserAuthContext';

// const Checkout = () => {
//     const [cart, setCart] = useCart();
//     const { auth } = useUserAuth();
//     const [orderId, setOrderId] = useState(null);
//     const Navigate = useNavigate();

//     const totalPrice = () => {
//         let total = 0;
//         cart.forEach((item) => {
//             total += item.price;
//         });
//         return total;
//     };

//     useEffect(() => {
//         const generateOrder = async () => {
//             try {
//                 const reducedCart = cart.map(({ _id, title, price }) => ({ _id, title, price }));

//                 const response = await fetch('https://learnhub-eservices.onrender.com/api/course/razorpay/payment', {
//                     method: 'POST',
//                     headers: {
//                         'Content-Type': 'application/json',
//                         'Authorization': auth?.token
//                     },
//                     body: JSON.stringify({
//                         amount: totalPrice() * 100,
//                         currency: 'INR',
//                         cart: reducedCart,
//                     }),
//                 });

//                 if (!response.ok) {
//                     throw new Error('Failed to generate order');
//                 }

//                 const data = await response.json();
//                 setOrderId(data.order.id);

//                 console.log('Order generated successfully:', data);
//             } catch (error) {
//                 console.error('Error generating order:', error);
//             }
//         };

//         generateOrder();
//     }, [cart, auth]);

//     const handlePaymentSuccess = (paymentId) => {
//         console.log('Payment successful. Payment ID:', paymentId);
//         Navigate('/order-success');
//     };

//     const handlePaymentError = (error) => {
//         console.error('Payment failed:', error);
//     };

//     const openRazorpayCheckout = () => {
//         const options = {
//             key: 'rzp_test_Esl49gVwiFX6Sj',
//             amount: totalPrice() * 100,
//             currency: 'INR',
//             name: 'Your Company Name',
//             description: 'Purchase Description',
//             order_id:data.orderDetails.payment.id,
//             handler: (response) => {
//                 handlePaymentSuccess(response.razorpay_payment_id);
//             },
//             prefill: {
//                 name: 'Customer Name',
//                 email: 'customer@example.com',
//                 contact: '1234567890',
//             },
//             theme: {
//                 color: '#F37254',
//             },
//             modal: {
//                 ondismiss: () => {
//                     handlePaymentError('User closed the Razorpay modal');
//                 },
//             },
//         };

//         const rzp = new window.Razorpay(options);
//         rzp.open();
//     };

//     return (
//         <>
//             <CheckoutNavbar />
//             <div className='checkout-main-container'>
              


//                 <div className="checkout-card">
//                     <h2 className='checkout-heading'>Checkout</h2>
//                     <div>
//                          <h2 className=''>Order details</h2>
//                          <div>
//                            {cart.map((item) => (
//                                 <div key={item.id} className='order-card'>
//                                     <div className="div" style={{ display: "flex" }}>
//                                         <img src={`http://localhost:5000/api/course/product-photo/${item._id}`} className='checkout-img' alt="" />
//                                         <p style={{ marginLeft: "10px" }}>{item.title}</p>
//                                     </div>
//                                     <p style={{ marginRight: "120px" }}>₹{item.price}</p>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//                 <div className="summary-container">
//                     <div className="summary-card">
//                         <h2>Summary</h2>
//                         <div className="price-container">
//                             <p>Original price:</p>
//                             <p>₹{totalPrice()}</p>
//                         </div>
//                         <hr />
//                         <div className="price-container">
//                             <h4 >Total:</h4>
//                             <p>₹{totalPrice()}</p>
//                         </div>
//                         <button className='payment-btn' onClick={openRazorpayCheckout}>Proceed to Pay</button>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Checkout;
