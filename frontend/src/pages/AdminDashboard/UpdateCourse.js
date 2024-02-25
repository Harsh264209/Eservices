

import React, { useState ,useEffect} from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useUserAuth } from '../../Context/UserAuthContext';
import axios from 'axios';
import {  toast } from 'react-toastify'; // Import ToastContainer and toast
import 'react-toastify/dist/ReactToastify.css';

function UpdateCourseModal({ open, handleClose, course, fetchCourses }) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    category: '',
    ratings: '',
    img: null, // Add img state
  });
  const {auth} = useUserAuth();
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/category/', {
          headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization':auth?.token
          }
        });
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  // Check if the course object is not null or undefined
  if (!course) {
    return null; // Return null if course is null or undefined
  }

  const handleChange = (e) => {
    if (e.target.name === 'img') {
      setFormData({ ...formData, img: e.target.files[0] }); // Set img state with file
    } else if (e.target.name === 'category') {
      // Handle category field differently to ensure it's an ObjectId
      const selectedCategoryId = categories.find(category => category.name === e.target.value)?._id;
      setFormData({ ...formData, category: selectedCategoryId });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToUpdate = new FormData();
      formDataToUpdate.append('title', formData.title);
      formDataToUpdate.append('description', formData.description);
      formDataToUpdate.append('price', formData.price);
      formDataToUpdate.append('ratings', formData.ratings);
      formDataToUpdate.append('category', formData.category);
      formDataToUpdate.append('img', formData.img); // Append img file to FormData

      await axios.put(`http://localhost:5000/api/course/${course._id}`, formDataToUpdate, {
        headers: {
          'Content-Type': 'multipart/form-data', // Use multipart/form-data for file upload
          'Authorization': auth?.token
        },
      });
      fetchCourses();
       toast.success("Course Updated Sucessfully") // Update course list
      handleClose();
    } catch (error) {
      console.error('Error updating course:', error);
      toast.error("Course Not updated")
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
          Update Course
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Price"
            name="price"
            type="number"
            value={formData.price}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Ratings"
            name="ratings"
            type="number"
            value={formData.ratings}
            onChange={handleChange}
            margin="normal"
          />
          <Select
            fullWidth
            label="Category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            margin="normal"
          >
            {categories.map((category) => (
              <MenuItem key={category._id} value={category.name}>
                {category.name}
              </MenuItem>
            ))}
          </Select>
          {/* Input field for image */}
          <input
            type="file"
            accept="image/*"
            name="img"
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

export default UpdateCourseModal;
