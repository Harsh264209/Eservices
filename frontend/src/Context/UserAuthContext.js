


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
      toast.success("User Registered Sucessfully",{
        autoClose:1000
      })
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
        toast.success(`Welcome ${response.data.user.username}`,{
          autoClose:1000
        });
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


  // useEffect(() => {
  //   // Load Google Sign-In SDK
  //   const script = document.createElement("script");
  //   script.src = "https://apis.google.com/js/platform.js";
  //   // script.src="https://accounts.google.com/gsi/client";
  //   script.async = true;
  //   script.onload = () => {
  //     window.gapi.load('auth2', () => {
  //       window.gapi.auth2.init({
  //         client_id: '199649523184-212lu3mr6u4goto9n833vugusf430ac7.apps.googleusercontent.com', // Replace with your Google Client ID
  //       });
  //     });
  //   };
  //   document.body.appendChild(script);
  //   return () => {
  //     document.body.removeChild(script);
  //   };
  // }, []);

  // // const navigate=useNavigate()
  // const handleGoogleLogin = async (navigate) => {
  
  //   const googleAuth = window.gapi.auth2.getAuthInstance();
  //   googleAuth.signIn().then((googleUser) => {
  //     const profile = googleUser.getBasicProfile();
  //     const email = profile.getEmail(); // Get user's email
  //     login({ email }); // Login with email obtained from Google
  //     toast.success("Login Sucessful");
  //     navigate('/')
  //   }).catch((error) => {
  //     console.error('Error signing in with Google:', error);
  //   });
  // };

  // const handleGoogleLogout = () => {
  //   const googleAuth = window.gapi.auth2.getAuthInstance();
  //   googleAuth.signOut().then(() => {
  //     logout();
  //     toast.success('Logged out successfully');
  //   }).catch((error) => {
  //     console.error('Error signing out from Google:', error);
  //   });
  // };









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
     toast.success("Password updated sucessfully",{
      autoClose:1000
     });
    } catch (error) {
      console.log(error)
    }
  };

  const logout = () => {
    setAuth({ user: null, token: '' });
    localStorage.removeItem('auth');
    // toast.success("user Logout");
  

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
