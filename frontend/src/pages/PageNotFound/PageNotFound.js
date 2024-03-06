
import React from 'react'
import Navbar from './Navbar'

const PageNotFound = () => {
  return (
    <div className="div">
        <Navbar/>
   <div style={{width:'500px',margin:'0px auto'}}>
       
       <h1 style={{fontWeight:'bold',marginLeft:'100px',marginTop:'40px'}}>Page not found !!</h1>
               <img style={{width:'100%'}} src="https://img.freepik.com/free-vector/404-error-lost-space-concept-illustration_114360-7891.jpg?t=st=1709566220~exp=1709569820~hmac=c993a19815d21c7dfff455cb6bc177b3243ce01731ba73057269b980e02c956e&w=740" alt="" />
           </div>
    </div>
 
  )
}

export default PageNotFound