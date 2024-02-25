
import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { useState,useEffect } from 'react';
import { useNavigate,useLocation } from 'react-router-dom'

export default function CircularIndeterminate({path='login'}) {

const [count,setCount]=useState(5)
// const navigate=useNavigate()
// const location=useLocation()

// useEffect(()=>{

//     const interval=setInterval(()=>{
//         setCount((prevValue)=> --prevValue)
//     },1000)

//     count===0 && navigate(`${path}`, {state:location.pathname})
//     return ()=>clearInterval(interval)

// },[count,navigate,location])

  return (
    <Box sx={{ display: 'flex' }}>
      <h3>Redirecting in {count} seconds</h3><CircularProgress />
    </Box>
  );
}