


import React, { useState, useEffect } from 'react';
import { useUserAuth } from '../../Context/UserAuthContext';
import axios from 'axios';
import { Outlet } from 'react-router-dom';
import Spinner from '../../components/Spinner/Spinner';

export default function AdminRoute() {
  const [success, setSuccess] = useState(false);
  const {auth} = useUserAuth();

  useEffect(() => {
    const authCheck = async () => {
      try {
        const res = await axios.get("https://learnhub-eservices.onrender.com/api/user/admin-auth",{
          headers:{
            "Authorization":auth?.token
          }
      });

        if (res.data.Sucess) {
          setSuccess(true);
        } else {
          setSuccess(false);
        }
      } catch (error) {
        console.error("Error while checking authentication:", error);
        setSuccess(false);
      }
    };

    if (auth?.token) {
      authCheck();
    }
  }, [auth?.token]);

  // Conditionally render Outlet if authentication is successful, otherwise render Spinner
  return success ? <Outlet /> : <Spinner path='/' />;
}