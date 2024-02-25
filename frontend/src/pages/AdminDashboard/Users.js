import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {useUserAuth} from '../../Context/UserAuthContext'

const AllUsersComponent = () => {
  const [users, setUsers] = useState([]);
  const{auth}=useUserAuth()

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/user/users',{
          headers:{
            'Content-Type':'appliaction/json',
            'Authorization':auth?.token
          }
        }); // Assuming your API endpoint for fetching users is '/api/users'
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    // <div>
    //   <h2>All Users</h2>
    //   <ul>
    //     {users.map(user => (
    //       <li key={user._id}>
    //         {/* Render user details here */}
    //         <p>User ID: {user._id}</p>
    //         <p>Name: {user.username}</p>
    //         <p>Email:{user.email}</p>
    //         {/* Add more details as needed */}
    //       </li>
    //     ))}
    //   </ul>
    // </div>
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell sx={{fontWeight:'bold'}}>User ID</TableCell>
          <TableCell sx={{fontWeight:'bold'}} align="right">Username</TableCell>
          <TableCell sx={{fontWeight:'bold'}} align="right">Email</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {users.map((user) => (
          <TableRow key={user._id}>
            <TableCell component="th" scope="row">
              {user._id}
            </TableCell>
            <TableCell align="right">{user.username}</TableCell>
            <TableCell align="right">{user.email}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  );
};

export default AllUsersComponent;
