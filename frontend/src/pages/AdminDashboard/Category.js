

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from './UpdateCategoryModal'; // Import the modal component
import { useUserAuth } from '../../Context/UserAuthContext';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function GetAllCategories() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const { auth } = useUserAuth();

  const fetchCategories = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/category/', {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': auth?.token
        },
      });
      setCategories(response.data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleUpdateModal = (category) => {
    setSelectedCategory(category);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  
  const handleDelete = async (categoryId) => {
    try {
      await axios.delete(`http://localhost:5000/api/category/${categoryId}`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': auth?.token
        },
      });
      // After successful deletion, fetch categories again to update the list
      fetchCategories();
    } catch (error) {
      console.error('Error deleting category:', error);
    }
  };

  return (
    <div>
      <h2>All Categories</h2>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="categories table">
          <TableHead>
            <TableRow>
              <TableCell sx={{fontWeight:'bold'}}>Category Name</TableCell>
              <TableCell sx={{fontWeight:'bold'}} align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {categories.map((category) => (
              <TableRow key={category._id}>
                <TableCell component="th" scope="row">
                  {category.name}
                </TableCell>
                <TableCell align="right">
                  <button style={{backgroundColor:'black',color:"white",padding:"4px 8px",border:'none',marginRight:'10px'}} onClick={() => handleUpdateModal(category)}>Update</button>
                  <button style={{backgroundColor:'red',color:"white",padding:"4px 8px",border:'none',marginRight:'10px'}} onClick={() => handleDelete(category._id)}>Delete</button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Modal
        open={showModal}
        handleClose={handleCloseModal}
        category={selectedCategory}
        fetchCategories={fetchCategories}
      />
    </div>
  );
}

export default GetAllCategories;
