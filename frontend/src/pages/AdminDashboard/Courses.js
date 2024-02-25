

// import React, { useState, useEffect } from 'react';
// import { useUserAuth } from '../../Context/UserAuthContext';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import UpdateCourseModal from './UpdateCourse';

// function GetAllCourses() {
//   const [courses, setCourses] = useState([]);
//   const [selectedCourse, setSelectedCourse] = useState(null);
//   const [showModal, setShowModal] = useState(false);

//   const {auth} = useUserAuth();

//   const fetchCourses = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/api/course/all', {
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': auth?.token
//         },
//       });
//       setCourses(response.data.courses);
//     } catch (error) {
//       console.error('Error fetching courses:', error);
//     }
//   };

//   useEffect(() => {
//     fetchCourses();
//   }, []);

  

//   const handleUpdateModal = (course) => {
//     setSelectedCourse(course);
//     setShowModal(true);
//   };

//   const handleCloseModal = () => {
//     setShowModal(false);
//   };

//   const handleDelete = async (id) => {
//     try {
//             if (!id) {
//               console.error('Course ID is undefined');
//               return;
//             }
//             await axios.delete(`http://localhost:5000/api/course/${id}`, {
//               headers: {
//                 'Content-Type': 'application/json',
//                 'Authorization': auth?.token
//               },
//             });
//             // After successful deletion, fetch courses again to update the list
//             fetchCourses();
//           } catch (error) {
//             console.error('Error deleting course:', error);
//           }
//   };

//   return (
//     <div>
//       <h2>All Courses</h2>
//       <ul>
//         {courses.map((course) => (
//           <li key={course._id}>
//             {course.title}
//             <img src={course.img} alt="" />
//             {/* <Link to={`/courses/update/${course._id}`}>Update</Link> */}
//             <button onClick={() => handleUpdateModal(course)}>Update</button>
//             <button onClick={() => handleDelete(course._id)}>Delete</button>
//           </li>
//         ))}
//       </ul>

//       <UpdateCourseModal
//         open={showModal}
//         handleClose={handleCloseModal}
//         course={selectedCourse}
//         fetchCourses={fetchCourses}
//       />
//     </div>
//   );
// }

// export default GetAllCourses;


import React, { useState, useEffect } from 'react';
import { useUserAuth } from '../../Context/UserAuthContext';
import axios from 'axios';
import { Link } from 'react-router-dom';
import UpdateCourseModal from './UpdateCourse';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function GetAllCourses() {
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const { auth } = useUserAuth();

  const fetchCourses = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/course/all', {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': auth?.token
        },
      });
      setCourses(response.data.courses);
    } catch (error) {
      console.error('Error fetching courses:', error);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  const handleUpdateModal = (course) => {
    setSelectedCourse(course);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleDelete = async (id) => {
    try {
      if (!id) {
        console.error('Course ID is undefined');
        return;
      }
      await axios.delete(`http://localhost:5000/api/course/${id}`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': auth?.token
        },
      });
      // After successful deletion, fetch courses again to update the list
      fetchCourses();
    } catch (error) {
      console.error('Error deleting course:', error);
    }
  };

  return (
    <div>
      <h2>All Courses</h2>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="courses table">
          <TableHead>
            <TableRow>
              <TableCell sx={{fontWeight:'bold'}}>Title</TableCell>
              {/* <TableCell align="right">Image</TableCell> */}
              <TableCell sx={{fontWeight:'bold'}} align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {courses.map((course) => (
              <TableRow key={course._id}>
                <TableCell component="th" scope="row">
                  {course.title}
                </TableCell>
                {/* <TableCell align="right">
                  <img src={course.img} alt="" />
                </TableCell> */}
                <TableCell align="right">
                  <button style={{backgroundColor:'black',color:"white",padding:"4px 8px",border:'none',marginRight:'10px'}} onClick={() => handleUpdateModal(course)}>Update</button>
                  <button style={{backgroundColor:'red',color:"white",padding:"4px 8px",border:'none',marginRight:'10px'}} className='' onClick={() => handleDelete(course._id)}>Delete</button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <UpdateCourseModal
        open={showModal}
        handleClose={handleCloseModal}
        course={selectedCourse}
        fetchCourses={fetchCourses}
      />
    </div>
  );
}

export default GetAllCourses;
