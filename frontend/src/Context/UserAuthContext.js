

// UserAuthProvider.js
// import { createContext, useContext, useState, useEffect } from 'react';
// import axios from 'axios';
// import { useCartContext } from '../Context/CartContext';

// const UserAuthContext = createContext();

// export const UserAuthProvider = ({ children }) => {


// // Retrieving stored user from localStorage
// // const storedUser = localStorage.getItem('user');
// // // Parsing the stored user if it exists, otherwise setting it to null
// // const initialUserState = storedUser ? JSON.parse(storedUser) : null;

// // Using useState hook with initial state
// const [auth, setAuth] = useState({
//   user:null,
//   token:""
// })

// axios.defaults.headers.common["Authorization"]=auth?.token

//   useEffect(() => {
  
//       const data=localStorage.getItem('auth');

//       if(data){
//         const parseData=JSON.parse(data)
//           setAuth({...auth,
//           user:parseData.user,
//           token:parseData.token
//         })
//       }
//     //eslint-disable-next-line
//   }, []);

//   const register = async (formData, navigate) => {
//     try {
//       const response = await axios.post('http://localhost:5000/api/user/register', formData);
//       setAuth(response.data.user);
//       navigate('/login');
//     } catch (error) {
//       console.error('Registration failed', error.response.data);
//     }
//   };

  

//   const login = async (formData, navigate) => {
//     try {
//       const response = await axios.post('http://localhost:5000/api/user/login', formData);
  
//       if (response && response.data && response.data.user) {
//         setAuth({ user: response.data.user, token: response.data.token });
//         localStorage.setItem("auth", JSON.stringify(response.data));
//         // if (response.data.user.role === 'user') {
//         //   navigate('/');
//         // } else {
//         //   navigate('/admin-dashboard');
//         // }
//       } else {
//         console.error('Login failed. Invalid response:', response);
//       }
//     } catch (error) {
//       if (error.response && error.response.data) {
//         console.error('Login failed', error.response.data);
//       } else {
//         console.error('Login failed', error.message);
//       }
//     }
//   };

//   const forgotPassword=async(formData)=>{

//       try {
//         const response = await axios.post('http://localhost:5000/api/user/forgot-password', formData);
//       } catch (error) {
        
//         if (error.response && error.response.data) {
//           console.error('Password Reset failed', error.response.data);
//         } else {
//           console.error('Password Reset failed', error.message);
//         }
//       }

//   }
  

//   const logout = () => {
//     setAuth({ user: null, token: "" });
//     localStorage.removeItem('auth');
//   };

//   return (
//     <UserAuthContext.Provider value={{ auth, login, register, logout,forgotPassword }}>
//       {children}
//     </UserAuthContext.Provider>
//   );
// };

// export const useUserAuth = () => {
//   return useContext(UserAuthContext);
// };


import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify'; // Import ToastContainer and toast
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate,useLocation } from "react-router-dom";
// import { lock } from '../../../Backend/Routes/UserRoutes';

const UserAuthContext = createContext();

export const UserAuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    user: null,
    token: ''
  });
  // const location=useLocation()
  // const navigate=useNavigate()

  // Update Axios default headers whenever auth changes
  useEffect(() => {
    axios.defaults.headers.common['Authorization'] = auth.token;
  }, [auth]);



  const register = async (formData, navigate) => {
    try {
      const response = await axios.post('https://learnhub-eservices.onrender.com/api/user/register', formData);
      setAuth(response.data);
      toast.success("User Registered Sucessfully")
      navigate('/login');
    } catch (error) {
      console.error('Registration failed', error.response.data);
      toast.error(error.response.data.message);
    }
  };

  const login = async (formData, navigate) => {
    try {
      const response = await axios.post('https://learnhub-eservices.onrender.com/api/user/login', formData);
    
      if (response && response.data && response.data.user) {
        setAuth({ user: response.data.user, token: response.data.token });
        localStorage.setItem("auth", JSON.stringify(response.data));
        toast.success(`Welcome ${response.data.user.username}`);
        navigate('/')
  
      } else {
        console.error('Login failed. Invalid response:', response);
        
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        console.error('Login failed. Invalid credentials');
      } else if (error.response && error.response.data) {
        console.error('Login failed', error.response.data);
      } else {
        console.error('Login failed', error.message);
      }
      toast.error(error.response.data.message);
    }
  };

  const updateUser=async(formData)=>{

    try {
      const {data} = await axios.put('https://learnhub-eservices.onrender.com/api/user/update', formData);
      
      setAuth({...auth,user:data?.updatedUser})
      let ls=localStorage.getItem('auth')
      ls=JSON.parse(ls)
      ls.user=data.updatedUser
      localStorage.setItem('auth',JSON.stringify(ls))
      console.log("success")
      
    } catch (error) {
      console.log(error)
    }
  }


  const forgotPassword = async (formData) => {
    try {
     const {data}= await axios.post('https://learnhub-eservices.onrender.com/api/user/forgot-password', formData);
    } catch (error) {
      console.log(error)
    }
  };

  const logout = () => {
    setAuth({ user: null, token: '' });
    localStorage.removeItem('auth');
    toast.success("user Logout");
  

  };

  useEffect(() => {
    const data = localStorage.getItem('auth');
    if (data) {
      const parseData = JSON.parse(data);
      setAuth({
        user: parseData.user,
        token: parseData.token
      });
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  

  return (
    <UserAuthContext.Provider value={{ auth, login, register, logout, forgotPassword,updateUser}}>
      {children}
    </UserAuthContext.Provider>
  );
};

export const useUserAuth = () => {
  return useContext(UserAuthContext);
};
