import { useUserAuth } from '../../Context/UserAuthContext';
// Define base URL for your backend server
const BASE_URL = 'http://localhost:5000/api';


// Function to handle API requests for categories
export const getAllCategories = async () => {
 
  const response = await fetch(`${BASE_URL}/category/`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      // 'Authorization':auth?.token
    },
    // body: JSON.stringify(categoryData),
  });
  const data = await response.json();
  return data;
};

export const createCategory = async (categoryData) => {
  const response = await fetch(`${BASE_URL}/category/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      // 'Authorization':auth?.token
    },
    body: JSON.stringify(categoryData),
  });
  const data = await response.json();
  return data;
};

export const updateCategory = async (categoryId, categoryData) => {
  const response = await fetch(`${BASE_URL}/category/${categoryId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      // 'Authorization':auth?.token,
   body: JSON.stringify(categoryData),
}});
  const data = await response.json();
  return data;
};

export const deleteCategory = async (categoryId) => {
  const response = await fetch(`${BASE_URL}/category/${categoryId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      // 'Authorization':auth?.token,
}});
  const data = await response.json();
  return data;
};

// Function to handle API requests for courses
// Similarly, you can implement functions for courses CRUD operations
