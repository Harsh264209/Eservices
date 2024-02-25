
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import style from './style.css'
import { useUserAuth } from '../../../Context/UserAuthContext';
import { ToastContainer, toast } from 'react-toastify'; // Import ToastContainer and toast
import 'react-toastify/dist/ReactToastify.css';
// import { getAllCourses, createCourse, updateCourse, deleteCourse } from '../../components/api/courseApi'; // Import API functions

function CourseComponent() {
 
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    ratings: '',
    category: '',
    img: null,
  });
  const {auth} = useUserAuth();

  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/category/',{
          headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization':auth?.token
          }});
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);



  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, img: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      data.append('title', formData.title);
      data.append('description', formData.description);
      data.append('price', formData.price);
      data.append('ratings', formData.ratings);
      data.append('category', formData.category);
      data.append('img', formData.img);

      const response = await axios.post('https://learnhub-eservices.onrender.com/api/course/add', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization':auth?.token
        },
      });
        
      console.log(response.data);
       // Assuming backend sends back a success message
      // Reset form after successful submission
      setFormData({
        title: '',
        description: '',
        price: '',
        ratings: '',
        category: '',
        img: null,
      });
      toast.success("Course Added Successfuly")
    } catch (error) {
      console.error('Error adding course:', error);
      toast.error("Failed To add Course")
      // Handle error
    }
  };
  

  return (
    <div>
      <h2>Add Course</h2>
      <form onSubmit={handleSubmit}>
        <div className="add-course-container">
        <div className='img-input'>
        <label htmlFor="imageInput" className="upload-btn" style={{margin:'0px auto',marginLeft:'26px'}}>+ Upload Image</label>
<input id="imageInput" name='img' className='img-input mb' type="file" style={{ display: 'none' }} accept="image/*" onChange={handleImageChange} required />

          {/* <label>Image:</label>
          <input className='img-inpu mb' type="file" hidden='true' accept="image/*" onChange={handleImageChange} required />
         */}
        </div>
        <div  style={{display:'flex',marginBottom:'4px'}}>
          <input className='input ' type="text" placeholder='Enter title' name="title" value={formData.title} onChange={handleChange} required />
        </div>
        <div className="div">
        <input className='input mb' type="number"  placeholder='Enter price' name="price" value={formData.price} onChange={handleChange} required />

        </div>
        <div>
          <textarea className='input' placeholder='Enter Description' name="description" value={formData.description} onChange={handleChange} required />
        </div>
        <div className="div">
        <input className='input mr mb' type="number" placeholder='Enter ratings' name="ratings" value={formData.ratings} onChange={handleChange} required />

        </div>
  
        <div style={{display:'flex'}}>

          <select className='input ' name="category" value={formData.category} onChange={handleChange} required>
            <option value="">Select Category</option>
            {categories.map((category) => (
              <option key={category._id} value={category._id}>{category.name}</option>
            ))}
          </select>
        </div>
      
        <button className='btn' type="submit">Create Product</button>
        </div>
      </form>
    </div>
  );



}

export default CourseComponent;
