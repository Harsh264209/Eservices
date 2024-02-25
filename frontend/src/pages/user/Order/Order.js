
// import React from 'react'
// import React, { useEffect, useState } from 'react';
// import {useUserAuth} from '../../Context/UserAuthContext'

// const Order = () => {
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const{auth}=useUserAuth()

//   useEffect(() => {
//     const fetchOrders = async () => {
//       try {
//         const response = await fetch('http://localhost:5000/api/user/orders', {
//           method: 'GET',
//           headers: {
//             'Content-Type': 'application/json',
//             'Authorization':auth?.token
//           },
//         });

//         if (!response.ok) {
//           throw new Error('Failed to fetch orders');
//         }

//         const data = await response.json();
//         console.log(data.orders)
//         setOrders(data.orders);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching orders:', error);
//         setLoading(false);
//       }
//     };

//     fetchOrders();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }
//   return (
//     <div>
//     <h2>Orders</h2>
//     {orders.map(order => (
//       <div key={order._id}>
//         <h3>Order ID: {order._id}</h3>
//         <p>Buyer: {order.buyer.name}</p>
//         <h4>Products:</h4>
//         <ul>
//           {order.products.map(product => (
//             <li key={product._id}>
//               {product.title} - Price: {product.price}
//             </li>
//           ))}
//         </ul>
//       </div>
//     ))}
//   </div>
// );
  
// }

// export default Order

import React, { useEffect, useState } from 'react';
import {useUserAuth} from '../../../Context/UserAuthContext'
import style from './style.css'

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const{auth}=useUserAuth()

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch('https://learnhub-eservices.onrender.com/api/user/orders', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': auth.token
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch orders');
        }

        const data = await response.json();
        setOrders(data);
        console.log(data)
        setLoading(false);
      } catch (error) {
        console.error('Error fetching orders:', error);
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  return (
    <div>
   {/* <h2 style={{margin:"0px auto"}}>Orders</h2> */}
      <div className="order-main-container">
      
      {orders.length > 0 ? (
        orders.map(order => (
          <div key={order._id} >
            <p>Order ID: {order._id}</p>
            {/* <p>Buyer: {order.buyer._id}</p> */}
            <h5>Products:</h5>
            <ul>
            <div className="products-name-container" >
              {order.products.map(product => (
                
                  <li key={product._id}>
                  {product.title} 
                </li>
              
              ))}
                <div className="div">
                <p style={{marginLeft:'0px',fontWeight:'bold'}}>Order Total:{order.payment.amount/100}</p>
              </div>
                </div>
            
            </ul>
            <hr/>
          </div>
        ))
      ) : (
        <div>No orders found.</div>
      )}
      </div>
    </div>
  );
};

export default Orders;
