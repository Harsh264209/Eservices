
// import * as React from 'react';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
// import axios from 'axios';
// import { useState } from 'react';
// import { useNavigate, } from "react-router-dom";
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { useUserAuth } from '../../Context/UserAuthContext';


// function Copyright(props) {
//     return (
//       <Typography variant="body2" color="text.secondary" align="center" {...props}>
//         {'Copyright © '}
//         <Link color="inherit" href="https://mui.com/">
//           WayWonder
//         </Link>{' '}
//         {new Date().getFullYear()}
//         {'.'}
//       </Typography>
//     );
//   }
//   const defaultTheme = createTheme();

// const Profile = () => {
//   const { auth } = useUserAuth();
//   const [formData, setFormData] = useState({
//     username: '',
//     email: '',
//     password: '',
//   });

//   React.useEffect(() => {
//     if (auth && auth.user) {
//       const { username, email, password } = auth.user;
//       setFormData({ username, email, password });
//     }
//   }, [auth]);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Call updateUser function from UserAuthContext with formData
//   };

//   return (
//     <div>
//       <h2>Update Profile</h2>
//       <form onSubmit={handleSubmit}>
//         <Grid container spacing={2}>
//           <Grid item xs={12}>
//             <TextField
//               autoComplete="given-name"
//               name="username"
//               required
//               fullWidth
//               value={formData.username}
//               onChange={handleChange}
//               label="User Name"
//               autoFocus
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               required
//               fullWidth
//               disabled
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               label="Email Address"
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               required
//               fullWidth
//               name="password"
//               type="password"
//               value={formData.password}
//               onChange={handleChange}
//               label="Password"
//             />
//           </Grid>
//         </Grid>
//         <Button type="submit" variant="contained" color="primary">
//           Update
//         </Button>
//       </form>
//     </div>
//   );
// };

// export default Profile;


// import * as React from 'react';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
// import axios from 'axios';
// import { useState } from 'react';
// import { useNavigate, } from "react-router-dom";
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { useUserAuth } from '../../../Context/UserAuthContext';
// // import Avatar from '@mui/material/Avatar';
// import Stack from '@mui/material/Stack';
// import style from './style.css'


// function Copyright(props) {
//     return (
//       <Typography variant="body2" color="text.secondary" align="center" {...props}>
//         {'Copyright © '}
//         <Link color="inherit" href="https://mui.com/">
//           WayWonder
//         </Link>{' '}
//         {new Date().getFullYear()}
//         {'.'}
//       </Typography>
//     );
//   }
  
//   // TODO remove, this demo shouldn't need to reset the theme.
  
//   const defaultTheme = createTheme();


// const Profile = () => {

//     const {auth,updateUser} = useUserAuth();
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//         username: '',
//         email: '',
//         password: '',
//       });
    
//       React.useEffect(() => {
//         if (auth && auth.user) {
//           const { username, email, password } = auth.user;
//           setFormData({ username, email, password });
//         }
//       }, [auth]);

    
//       const handleChange = (e) => {
//         setFormData({
//           ...formData,
//           [e.target.name]: e.target.value,
//         });
//       };

//       const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//           await updateUser(formData);
//           console.log("User updated successfully");
//           // Optionally, you can navigate to another page or display a success message here
//         } catch (error) {
//           console.error("Failed to update user:", error);
//           // Handle error: display an error message to the user or log it
//         }
//       };
//   return (
//     <div>
//       <div className="profile-container">
//         <div className="avatar">
//         <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
//         </div>
//         <div className="profile-details">
//          <span style={{fontWeight:'bold',display:'flex'}}>UserName:<p style={{fontWeight:'initial',marginLeft:'10px'}}>{auth.user.username}</p></span>
//          <span style={{fontWeight:'bold',display:'flex'}}>Email:<p style={{fontWeight:'initial',marginLeft:'10px'}}>{auth.user.email}</p></span>
//         <button className="edit-btn">Edit Profile</button>
    
//         </div>

//       </div>
     
//     <ThemeProvider theme={defaultTheme}>
//         <Container component="main" maxWidth="xs">
//       <CssBaseline />
//       <Box
//         sx={{
//           marginTop: 8,
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center',
//         }}
//       >
//         <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
//           <LockOutlinedIcon />
//         </Avatar>
//         <Typography component="h1" variant="h5">
//           Update Profile
//         </Typography>
//         <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
//           <Grid container spacing={2}>
//             <Grid item xs={12} >
//               <TextField
//                 autoComplete="given-name"
//                 name="username"
//                 fullWidth
//                 id="firstName"
//                 value={formData.username}
//                 onChange={handleChange}
//                 label="User Name"
//                 autoFocus
//               />
//             </Grid>
        
//             <Grid item xs={12}>
//               <TextField
//                 fullWidth
//                 id="email"
//                 label="Email Address"
//                 disabled={true}
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 autoComplete="email"
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 fullWidth
//                 name="password"
//                 value={formData.password}
//           onChange={handleChange}
//                 label="Password"
//                 type="password"
//                 id="password"
//                 autoComplete="new-password"
//               />
          
//             </Grid>
//             <Grid item xs={12}>
//               <FormControlLabel
//                 control={<Checkbox value="allowExtraEmails" color="primary" />}
//                 label="I want to receive inspiration, marketing promotions and updates via email."
//               />
//             </Grid>
//           </Grid>
//           <Button
//             type="submit"
//             fullWidth
//             variant="contained"
//             sx={{ mt: 3, mb: 2 }}
//           >
//             Update 
//           </Button>
        
//         </Box>
//       </Box>
//       <Copyright sx={{ mt: 5 }} />
//     </Container>
//   </ThemeProvider>
//   </div>
//   )
// }

// export default Profile    




// import React, { useState, useRef, useEffect } from 'react';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
// import axios from 'axios';
// import { useNavigate } from "react-router-dom";
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { useUserAuth } from '../../../Context/UserAuthContext';
// import Stack from '@mui/material/Stack';
// import './style.css';

// function Copyright(props) {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center" {...props}>
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         WayWonder
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

// const defaultTheme = createTheme();

// const Profile = () => {
//   const { auth, updateUser } = useUserAuth();
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     username: '',
//     email: '',
//     password: '',
//   });
//   const [isEditing, setIsEditing] = useState(false); // State to control modal visibility
//   const modalRef = useRef(null); // Reference to the modal DOM element

//   React.useEffect(() => {
//     if (auth && auth.user) {
//       const { username, email, password } = auth.user;
//       setFormData({ username, email, password });
//     }
//   }, [auth]);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await updateUser(formData);
//       console.log("User updated successfully");
//       setIsEditing(false); // Close the modal after successful update
//     } catch (error) {
//       console.error("Failed to update user:", error);
//       // Handle error: display an error message to the user or log it
//     }
//   };

//   const openModal = () => {
//     setIsEditing(true);
//   };

//   const closeModal = () => {
//     setIsEditing(false);
//   };

//   const handleClickOutside = (e) => {
//     if (modalRef.current && !modalRef.current.contains(e.target)) {
//       setIsEditing(false); // Close the modal if click occurs outside of it
//     }
//   };

//   useEffect(() => {
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   return (
//     <div>
//       <div className="profile-container">
//         <div className="avatar">
//           <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
//         </div>
//         <div className="profile-details">
//           <span style={{fontWeight:'bold',display:'flex'}}>UserName:<p style={{fontWeight:'initial',marginLeft:'10px'}}>{auth.user.username}</p></span>
//           <span style={{fontWeight:'bold',display:'flex'}}>Email:<p style={{fontWeight:'initial',marginLeft:'10px'}}>{auth.user.email}</p></span>
//           <button className="edit-btn" onClick={openModal}>Edit Profile</button>
//         </div>
//       </div>
//       {isEditing && (
//         <ThemeProvider theme={defaultTheme}>
//           <Container component="main" maxWidth="xs">
//             <CssBaseline />
//             <Box
//               ref={modalRef}
//               sx={{
//                 marginTop: 8,
//                 display: 'flex',
//                 flexDirection: 'column',
//                 alignItems: 'center',
//               }}
//             >
//               <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
//                 <LockOutlinedIcon />
//               </Avatar>
//               <Typography component="h1" variant="h5">
//                 Update Profile
//               </Typography>
//               <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
//                 <Grid container spacing={2}>
//                   <Grid item xs={12} >
//                     <TextField
//                       autoComplete="given-name"
//                       name="username"
//                       fullWidth
//                       id="firstName"
//                       value={formData.username}
//                       onChange={handleChange}
//                       label="User Name"
//                       autoFocus
//                     />
//                   </Grid>
//                   <Grid item xs={12}>
//                     <TextField
//                       fullWidth
//                       id="email"
//                       label="Email Address"
//                       disabled={true}
//                       name="email"
//                       value={formData.email}
//                       onChange={handleChange}
//                       autoComplete="email"
//                     />
//                   </Grid>
//                   <Grid item xs={12}>
//                     <TextField
//                       fullWidth
//                       name="password"
//                       value={formData.password}
//                       onChange={handleChange}
//                       label="Password"
//                       type="password"
//                       id="password"
//                       autoComplete="new-password"
//                     />
//                   </Grid>
//                   <Grid item xs={12}>
//                     <FormControlLabel
//                       control={<Checkbox value="allowExtraEmails" color="primary" />}
//                       label="I want to receive inspiration, marketing promotions and updates via email."
//                     />
//                   </Grid>
//                 </Grid>
//                 <Button
//                   type="submit"
//                   fullWidth
//                   variant="contained"
//                   sx={{ mt: 3, mb: 2 }}
//                 >
//                   Update
//                 </Button>
//               </Box>
//               <Button onClick={closeModal}>Close</Button>
//             </Box>
//           </Container>
//         </ThemeProvider>
//       )}
//     </div>
//   );
// };

// export default Profile;


import React, { useState, useRef, useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useUserAuth } from '../../../Context/UserAuthContext';
import Stack from '@mui/material/Stack';
import {  toast } from 'react-toastify'; // Import ToastContainer and toast
import 'react-toastify/dist/ReactToastify.css';
import './style.css';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        WayWonder
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const defaultTheme = createTheme();

const Profile = () => {
  const { auth, updateUser } = useUserAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [isEditing, setIsEditing] = useState(false); // State to control modal visibility
  const modalRef = useRef(null); // Reference to the modal DOM element

  React.useEffect(() => {
    if (auth && auth.user) {
      const { username, email, password } = auth.user;
      setFormData({ username, email, password });
    }
  }, [auth]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateUser(formData);
      console.log("User updated successfully");
      toast.success("Profile Updated Sucessfully")
      setIsEditing(false); // Close the modal after successful update
    } catch (error) {
      console.error("Failed to update user:", error);
      toast.error("Failed to update profile")
      // Handle error: display an error message to the user or log it
    }
  };

  const openModal = () => {
    setIsEditing(true);
  };

  const closeModal = () => {
    setIsEditing(false);
  };

  const handleClickOutside = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setIsEditing(false); // Close the modal if click occurs outside of it
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <div className="profile-container">
        <div className="avatar">
          <img className='avatar-img' src="https://img.freepik.com/free-vector/portrait-boy-with-brown-hair-brown-eyes_1308-146018.jpg?t=st=1708801549~exp=1708805149~hmac=6b23ba0fe8d16df70640d8dd21461ff4ac91b0c008672c7a62a1224443451801&w=360" alt="" />
          {/* <Avatar sx={{width:'100%'}} alt={auth.user.username[0]} src="https://img.freepik.com/free-vector/portrait-boy-with-brown-hair-brown-eyes_1308-146018.jpg?t=st=1708801549~exp=1708805149~hmac=6b23ba0fe8d16df70640d8dd21461ff4ac91b0c008672c7a62a1224443451801&w=360" /> */}
        </div>
        <div className="profile-details">
          <span style={{fontWeight:'bold',display:'flex'}}>UserName:<p style={{fontWeight:'initial',marginLeft:'40px'}}>{auth.user.username}</p></span>
          <span style={{fontWeight:'bold',display:'flex'}}>Email:<p style={{fontWeight:'initial',marginLeft:'40px'}}>{auth.user.email}</p></span>
          <button className="edit-btn" onClick={openModal}>Edit Profile</button>
        </div>
    
       
      </div>
      {isEditing && (
        <ThemeProvider theme={defaultTheme}>
          <div className="modal-overlay">
            <div ref={modalRef} className="modal-content">
              <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Update Profile
              </Typography>
              <form noValidate onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12} >
                    <TextField
                      autoComplete="given-name"
                      name="username"
                      fullWidth
                      id="firstName"
                      value={formData.username}
                      onChange={handleChange}
                      label="User Name"
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      id="email"
                      label="Email Address"
                      disabled={true}
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      autoComplete="email"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="new-password"
                    />
                  </Grid>
                
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Update
                </Button>
                <Button onClick={closeModal}>Close</Button>
              </form>
            </div>
          </div>
        </ThemeProvider>
      )}
    </div>
  );
};

export default Profile;




