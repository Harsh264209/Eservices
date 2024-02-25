

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useUserAuth } from '../../Context/UserAuthContext';
import {  toast } from 'react-toastify'; // Import ToastContainer and toast
import 'react-toastify/dist/ReactToastify.css';

function UpdateCategoryModal({ open, handleClose, category, fetchCategories }) {
  const [name, setName] = useState('');
  const { auth } = useUserAuth();

  useEffect(() => {
    if (category) {
      setName(category.name);
    }
  }, [category]);

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/category/${category._id}`, { name }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': auth?.token
        },
      });
      fetchCategories(); // Update category list
      handleClose();
      toast.success("category updated sucessfully")
    } catch (error) {
      console.error('Error updating category:', error);
      toast.error("falied to update category ")
    }
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Update Category
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Category Name"
            name="name"
            value={name}
            onChange={handleChange}
            margin="normal"
          />
          <Button type="submit" variant="contained" color="primary">
            Update
          </Button>
        </form>
      </Box>
    </Modal>
  );
}

export default UpdateCategoryModal;
