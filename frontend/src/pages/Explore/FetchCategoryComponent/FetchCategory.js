
// import React, { useState, useEffect } from 'react';
// import { useUserAuth } from '../../../Context/UserAuthContext';
// import axios from 'axios'

// function CategoryList() {
//   const [categories, setCategories] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const [courses, setCourses] = useState([]);
//   const {auth} = useUserAuth();

//   // Fetch all categories
// useEffect(() => {
//   const fetchCategories = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/api/category/',{
//         headers: {
//           'Content-Type': 'multipart/form-data',
//           'Authorization':auth?.token
//         }});
//       setCategories(response.data);
//     } catch (error) {
//       console.error('Error fetching categories:', error);
//     }
//   };

//   fetchCategories();
// }, []);
//   // Fetch courses when a category is selected
//   useEffect(() => {
//     const fetchCoursesByCategory = async () => {
//       if (selectedCategory) {
//         try {
//           const response = await axios.get(`http://localhost:5000/api/course/category/${selectedCategory}`,{
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Authorization':auth?.token
//               }
//           });
//         //   const data = await response.json();
//           setCourses(response.data.courses);
//           console.log(response.data.courses)
//         } catch (error) {
//           console.error('Error fetching courses by category:', error);
//         }
//       }
//     };

//     fetchCoursesByCategory();
//   }, [selectedCategory]);

//   const handleCategoryClick = (category) => {
//     setSelectedCategory(category);
//   };

//   return (
//     <div>
//       <h1>Categories</h1>
//       <ul>
//         {categories.map((category) => (
//           <li key={category._id} onClick={() => handleCategoryClick(category.name)}>
//             {category.name}
//           </li>
//         ))}
//       </ul>
//       {selectedCategory && (
//         <div>
//           <h2>Courses in {selectedCategory}</h2>
//           <ul>
//             {courses.map((course) => (
//               <li key={course._id}>{course.name}</li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// }

// export default CategoryList;


import { useUserAuth } from '../../../Context/UserAuthContext';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import style from './style.css'
// Import the useUserAuth hook from the appropriate location

function CategoryList({ onCategoryChange }) {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [loading, setLoading] = useState(false); // Initialize loading state as false
  const { auth } = useUserAuth();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        // setLoading(true); // Start loading when fetching categories
        const response = await axios.get('https://learnhub-eservices.onrender.com/api/category/', {
          headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': auth?.token
          }
        });
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      } finally {
        // setLoading(false); // Stop loading when categories are fetched
      }
    };

    fetchCategories();
  }, [auth]); // Update only when the auth token changes

  useEffect(() => {
    const fetchCoursesByCategory = async () => {
      if (selectedCategory) {
        try {
          // setLoading(true); // Start loading when fetching courses for the selected category
          const response = await axios.get(`https://learnhub-eservices.onrender.com/api/course/category/${selectedCategory}`, {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': auth?.token
            }
          });
          onCategoryChange(response.data.courses);
         // Update courses in Explore.js
        } catch (error) {
          console.error('Error fetching courses by category:', error);
        } finally {
          // setLoading(false); // Stop loading when courses for the selected category are fetched
        }
      }
    };

    if (selectedCategory) {
      fetchCoursesByCategory();
    }
  }, [selectedCategory, auth, onCategoryChange]); // Update only when the selected category or auth token changes

  const handleCategoryClick = (category) => {
    setLoading(true); 
    // console.log(category)// Start loading when a category is clicked
    setSelectedCategory(category === selectedCategory ? null : category); // Toggle selected category
  };

  return (
    <div>
      {/* <h1>Categories</h1> */}

      <div className="categories-container">
      {categories.map((category) => (
            <div className='category-text' key={category._id} onClick={() => handleCategoryClick(category.name)} >
              {/* <h1>{category.name}courses</h1> */}
             {category.name}
            </div>
          ))}

  
      </div>
     
    </div>
  );
}

export default CategoryList;



// className={category === selectedCategory ? 'selected' : ''}






