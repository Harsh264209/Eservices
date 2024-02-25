
import React, { useState } from 'react';
import axios from 'axios'; // Assuming you're using axios for HTTP requestsimport { useUserAuth } from '../../Context/UserAuthContext';
import { useUserAuth } from '../../Context/UserAuthContext';
import {  toast } from 'react-toastify'; // Import ToastContainer and toast
import 'react-toastify/dist/ReactToastify.css';

const CreateCategory = () => {
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const{auth}=useUserAuth()

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://learnhub-eservices.onrender.com/api/category/', { name },{
        headers:{
          'Content-Type':'application/json',
          'Authorization':auth?.token
        }

      });
      toast.success("Category Created Sucessfully")
      console.log('Category created:', response.data);
      // Optionally, you can redirect the user or show a success message here
    } catch (error) {
      setError(error.response.data.error);
      toast.error("Failed to  Create Category")
    }
  };

  return (
    <div>
      <h2>Create Category</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div style={{backgroundColor:'grey',display:'flex',flexDirection:'column',width:'360px',padding:'30px'}}>
          <label htmlFor="name">Category Name:</label>
          <input
            type="text"
            placeholder='Enter category name'
            id="name"
            style={{marginBottom:'10px',padding:'4px 8px'}}
            value={name}
            onChange={handleChange}
            required
          />
                  <button style={{backgroundColor:'black',color:"white",padding:"4px 8px",border:'none',marginRight:'10px',borderRadius:'4px',width:'180px'}} type="submit">Create Category</button>

        </div>
      </form>
    </div>
  );
};

export default CreateCategory;
