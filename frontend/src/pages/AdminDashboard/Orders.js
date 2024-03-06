
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {useUserAuth} from '../../Context/UserAuthContext'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { toast } from 'react-toastify'; // Import ToastContainer and toast
import 'react-toastify/dist/ReactToastify.css'; 

const AllOrdersComponent = () => {
  const [orders, setOrders] = useState([]);
  const{auth}=useUserAuth()

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get('https://learnhub-eservices.onrender.com/api/user/orders',{
            headers:{
              'Content-Type':'appliaction/json',
              'Authorization':auth?.token
            }}); // Assuming your API endpoint for fetching orders is '/api/orders'
        setOrders(response.data);
        toast.success('User Logged in Successfully', {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 3000,
        });
        console.log(response.data)
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="order table">
        <TableHead>
          <TableRow>
            <TableCell sx={{fontWeight:'bold'}}>Order ID</TableCell>
            <TableCell sx={{fontWeight:'bold'}} align="right">Buyer</TableCell>
            <TableCell sx={{fontWeight:'bold'}} align="right">Total Price</TableCell>
            {/* Add more headers as needed */}
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((order) => (
            <TableRow key={order._id}>
              <TableCell component="th" scope="row">
                {order._id}
              </TableCell>
              <TableCell align="right">{order.buyer._id}</TableCell>
              <TableCell align="right">{order.payment.amount}</TableCell>
              {/* Add more cells for additional order details */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

  )
};

export default AllOrdersComponent;
